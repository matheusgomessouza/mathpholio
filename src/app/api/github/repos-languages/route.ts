export async function GET(repoName: string) {
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
