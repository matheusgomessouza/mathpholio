import { NextResponse } from "next/server";

export interface ReposInfoProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  owner: {
    avatar_url: string;
  };
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
    console.log(data);
    const repos: ReposInfoProps[] = await Promise.all(
      data.map(async (item: ReposInfoProps) => {
        return {
          id: item.id,
          avatar: item.owner.avatar_url,
          name: item.name,
          description: item.description,
          url: item.html_url,
          techs: item.topics,
        };
      })
    );

    return NextResponse.json(repos);
  } catch (err: any) {
    console.error(err.message);
  }
};
