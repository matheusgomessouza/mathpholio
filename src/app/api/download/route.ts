import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "cv.pdf");
  try {
    const fileBuffer = await fs.readFile(filePath);
    return new NextResponse(fileBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="matheus-souza-software-engineer.pdf"',
      },
    });
  } catch (err) {
    return new NextResponse("File not found", { status: 404 });
  }
}
