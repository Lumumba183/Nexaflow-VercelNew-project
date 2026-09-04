const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const REPO = 'Lumumba183/Nexaflow-VercelNew-project';
const BRANCH = 'main';
const API_BASE = `https://api.github.com/repos/${REPO}`;

async function githubFetch(path: string, opts?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...opts,
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...opts?.headers,
    },
  });
  return res;
}

export async function readJsonFile(path: string): Promise<any> {
  try {
    const res = await githubFetch(`/contents/data/${path}`);
    if (!res.ok) {
      if (res.status === 404) return [];
      throw new Error(`GitHub API error: ${res.status}`);
    }
    const data = await res.json();
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    return JSON.parse(content);
  } catch (e) {
    console.error('readJsonFile error:', e);
    return [];
  }
}

export async function writeJsonFile(path: string, content: any): Promise<void> {
  const jsonStr = JSON.stringify(content, null, 2);
  const encoded = Buffer.from(jsonStr).toString('base64');

  // Try to get existing SHA
  let sha: string | undefined;
  try {
    const getRes = await githubFetch(`/contents/data/${path}`);
    if (getRes.ok) {
      const existing = await getRes.json();
      sha = existing.sha;
    }
  } catch { /* file doesn't exist yet */ }

  const body: any = {
    message: `Update ${path} - ${new Date().toISOString()}`,
    content: encoded,
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await githubFetch(`/contents/data/${path}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub write failed: ${res.status} - ${err}`);
  }
}

export async function appendToJsonFile(path: string, item: any): Promise<void> {
  const existing = await readJsonFile(path);
  const arr = Array.isArray(existing) ? existing : [];
  arr.push({ ...item, _id: crypto.randomUUID(), _createdAt: new Date().toISOString() });
  await writeJsonFile(path, arr);
}
