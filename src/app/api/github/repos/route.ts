import * as interfaces from "@/types/interfaces";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<{ data: interfaces.GithubReposProps[] }> | undefined
> {
  try {
    const response = await fetch(
      `https://api.github.com/users/matheusgomessouza/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN_ACCESS}`,
        },
        method: "GET",
      }
    );
    const data = await response.json();
    const payload = payloadManipulation(data);

    return NextResponse.json({ data: payload });
  } catch (error) {
    console.error("Unable to retrieve data form Github API /repos", error);
  }
}

export function payloadManipulation(
  value: Array<interfaces.GithubReposResponseProps>
): Array<interfaces.GithubReposProps> {
  const convertedObjectInArray = Object.entries(value);
  const filteredReposObjects: interfaces.GithubReposResponseProps[] =
    convertedObjectInArray.map((arr) => arr[1]);

  const extractedReposProps = filteredReposObjects.map((arr) => {
    let arrayWithRepoProps = [];

    const {
      id,
      name,
      html_url,
      description,
      created_at,
      updated_at,
      homepage,
      license,
      topics,
      language,
    } = arr;

    arrayWithRepoProps.push({
      id,
      name,
      html_url,
      description,
      created_at,
      updated_at,
      homepage,
      license,
      topics,
      language,
    });

    return arrayWithRepoProps;
  });

  return extractedReposProps.flat();
}
