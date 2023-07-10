import { NextResponse } from "next/server";

interface ReposInfoProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
  screenshot: string;
}

async function takeScreenshot(url: string) {
  const response = await fetch("http://localhost:3000/api/take-screenshot", {
    method: "POST",
    body: JSON.stringify({
      url,
    }),
    cache: "no-cache",
  });
  const data = await response.text();
  return data;
}

export const GET = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/matheusgomessouza/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN_ACCESS}`,
        },
      }
    );

    const data = await response.json();
    const repos = await Promise.all(
      data.map(async (item: ReposInfoProps) => {
        const screenshot = await takeScreenshot(item.html_url);

        return {
          id: item.id,
          name: item.name,
          description: item.description,
          screenshot,
        };
      })
    );

    return NextResponse.json(repos);
  } catch (err: any) {
    console.error(err.message);
  }
};
