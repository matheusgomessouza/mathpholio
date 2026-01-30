import { NextResponse, NextRequest } from "next/server";
import puppeteer, { Browser, HTTPRequest } from "puppeteer";

const DEFAULT_VIEWPORT = { width: 1280, height: 720 };
const MAX_VIEWPORT = { width: 1920, height: 1080 };

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export async function GET(
  request: NextRequest
): Promise<
  NextResponse<
    | { payload: string | null; message: string }
    | { message: string; messageError: unknown }
  >
> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("url");
  const widthParam = Number(searchParams.get("width"));
  const heightParam = Number(searchParams.get("height"));

  const width = Number.isFinite(widthParam)
    ? clamp(widthParam, 320, MAX_VIEWPORT.width)
    : DEFAULT_VIEWPORT.width;
  const height = Number.isFinite(heightParam)
    ? clamp(heightParam, 240, MAX_VIEWPORT.height)
    : DEFAULT_VIEWPORT.height;

  let browser: Browser | null = null;

  try {
    if (!query) {
      return NextResponse.json(
        { payload: null, message: "Missing url param" },
        { status: 400 }
      );
    }

    const url = new URL(query);
    if (!/^https?:$/.test(url.protocol)) {
      return NextResponse.json(
        { payload: null, message: "Invalid url protocol" },
        { status: 400 }
      );
    }

    if (url.hostname.includes("github.com")) {
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts.length >= 2) {
        const owner = parts[0];
        const repo = parts[1];
        const ogUrl = `https://opengraph.githubassets.com/1/${owner}/${repo}`;
        return NextResponse.json({
          payload: ogUrl,
          message: "Using GitHub OpenGraph preview",
        });
      }
    }

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({
      width,
      height,
      deviceScaleFactor: 2,
    });

    await page.setRequestInterception(true);
    page.on("request", (request: HTTPRequest) => {
      const resourceType = request.resourceType();
      if (resourceType === "media" || resourceType === "font") {
        request.abort();
        return;
      }
      request.continue();
    });

    await page.goto(url.toString(), {
      waitUntil: "networkidle2",
      timeout: 15000,
    });

    const buffer = await page.screenshot({
      type: "jpeg",
      quality: 80,
      fullPage: false,
    });

    await page.close();
    await browser.close();
    browser = null;

    const dataUrl = `data:image/jpeg;base64,${Buffer.from(buffer).toString(
      "base64"
    )}`;

    return NextResponse.json(
      {
        payload: dataUrl,
        message: "Screenshot captured successfully",
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=86400, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    if (browser) {
      await browser.close();
    }

    try {
      if (query) {
        const response = await fetch(query, {
          headers: { "User-Agent": "Mozilla/5.0" },
        });
        const html = await response.text();
        const match = html.match(
          /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
        );
        const ogImage = match?.[1] ?? null;

        if (ogImage) {
          try {
            const head = await fetch(ogImage, { method: "HEAD" });
            const contentType = head.headers.get("content-type") ?? "";
            if (!contentType.startsWith("image/")) {
              return NextResponse.json({
                payload: null,
                message: "og:image is not an image",
                messageError: error,
              });
            }
          } catch {
            return NextResponse.json({
              payload: null,
              message: "og:image is unreachable",
              messageError: error,
            });
          }
        }

        return NextResponse.json({
          payload: ogImage,
          message: ogImage
            ? "Using og:image fallback"
            : "Unable to capture screenshot",
          messageError: error,
        });
      }
    } catch (fallbackError) {
      return NextResponse.json({
        payload: null,
        message: "Unable to capture screenshot",
        messageError: fallbackError,
      });
    }

    return NextResponse.json({
      payload: null,
      message: "Unable to capture screenshot",
      messageError: error,
    });
  }
}
