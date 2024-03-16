const BASEURL = "https://api.github.com";

export async function fetchRepos(username) {
  const response = await fetch(`${BASEURL}/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
