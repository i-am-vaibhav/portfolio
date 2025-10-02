const GITHUB_USERNAME = 'i-am-vaibhav';

export async function fetchRepos() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
  if (!res.ok) throw new Error('Failed to fetch repos');
  const repos = await res.json();
  return repos;
}
