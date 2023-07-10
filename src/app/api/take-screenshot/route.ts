import { NextRequest } from "next/server";
import puppeteer from "puppeteer";
import path from "node:path";
import { randomUUID } from "node:crypto";

export const POST = async (request: NextRequest) => {
  try {
    const { url } = await request.json();

    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();

    await page.emulateMediaFeatures([
      {
        name: "prefers-color-scheme",
        value: "dark",
      },
    ]);

    await new Promise((r) => setTimeout(r, 1000));

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    await page.setViewport({ width: 1920, height: 1080 });

    const filePath = path.resolve(
      process.cwd(),
      "public",
      "screens",
      `${randomUUID()}.webp`
    );
    await page.screenshot({
      path: filePath,
    });

    await browser.close();

    return new Response(filePath);
  } catch (err: any) {
    console.error(err.message);
  }
};
