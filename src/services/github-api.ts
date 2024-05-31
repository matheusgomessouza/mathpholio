import * as interfaces from "@/types/interfaces";

export async function getGithubReposData(): Promise<
  interfaces.GithubReposResponseProps[]
> {
  let response;

  try {
    const res = await fetch(
      `https://api.github.com/users/matheusgomessouza/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN_ACCESS}`,
        },
        method: "GET",
      }
    );
    const data = await res.json();

    response = data;
  } catch (error) {
    console.error("Unable to retrieve Github repos", error);
  }

  return response;
}

export async function getRepoLanguages(repoName: string) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/matheusgomessouza/${repoName}/languages`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN_ACCESS}`,
        },
        method: "GET",
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Unable to retrieve Github repo language", error);
  }
}
