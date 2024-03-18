const BASEURL = "https://api.github.com";

export async function fetchRepos(username) {
  const response = await fetch(`${BASEURL}/users/${username}/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  if (!response.ok) {
    console.log(response.statusText)
    throw new Error("Network response was not ok");
  }
    
    return response.json();
}
