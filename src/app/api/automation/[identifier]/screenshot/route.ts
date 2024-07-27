import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";
import * as path from "node:path";
import * as fs from "node:fs";
import { NextResponse } from "next/server";
import https from "https";

// export async function POST(request: Request) {
//   try {
//     const res: { homepage: string; html_url: string } = await request.json();
//     // Get the request.body with the html_url or homepage
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(res.homepage ? res.homepage : res.html_url);
//     await page.setViewport({ width: 1920, height: 1080 });
//     await page.screenshot({
//       path: path.resolve(
//         __dirname,
//         `../../../../../`,
//         `/public/screenshots/${uuidv4}.jpg`
//       ),
//     });
//     await browser.close();
//     return NextResponse.json({
//       message: "Automation operation performed successfully",
//     });
//   } catch (error) {
//     return NextResponse.json({
//       message: "Unable to perform automation operation",
//     });
//   }
// }

export async function GET(request: Request) {
  const matchURL = request.url.match(`\/automation\/([^/]+)\/screenshot`);
  console.log(matchURL?.[0]);
  try {
  } catch (error) {}
}
