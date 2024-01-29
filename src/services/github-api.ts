export async function getGithubData() {
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
    return res.json();
  } catch (error) {
    console.error("Unable to retrieve Github repos", error);
  } finally {
    console.log("Github API request finished.");
  }
}
