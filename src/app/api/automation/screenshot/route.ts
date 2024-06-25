import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const res = await request.json();

  // Get the request.body with the html_url or homepage
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // await page.goto(res.html_url ? res.html_url : res.homepage);

  // await page.setViewport({ width: 1920, height: 1080 });

  // await page.screenshot({
  //   path: `${uuidv4()}.webp`,
  // });

  // await browser.close();
}
