/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_FILE = path.resolve('src/data/projects.ts');

function extractRepoParts(githubUrl = '') {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/i);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/i, '') };
}

function firstParagraph(markdown = '') {
  const blocks = markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .filter((block) => !block.startsWith('#') && !block.startsWith('![') && !block.startsWith('['));
  return blocks[0] || '';
}

function detectTechnologies(markdown = '') {
  const known = [
    'React',
    'TypeScript',
    'JavaScript',
    'Vite',
    'Python',
    'Django',
    'Flask',
    'PostgreSQL',
    'MySQL',
    'SQLite',
    'Docker',
    'Bootstrap',
    'Tailwind',
    'HTML',
    'CSS',
  ];
  const found = known.filter((tech) => new RegExp(`\\b${tech}\\b`, 'i').test(markdown));
  return [...new Set(found)];
}

async function getRepoReadme(owner, repo) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`;
  const res = await fetch(url);
  if (!res.ok) return '';
  return res.text();
}

async function main() {
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  const projectsBlock = raw.match(/const rawProjects: Project\[] = \[([\s\S]*?)\];/);
  if (!projectsBlock) {
    console.error('Nao foi possivel localizar rawProjects em src/data/projects.ts');
    process.exit(1);
  }

  const repoUrls = Array.from(raw.matchAll(/github:\s*'([^']+)'/g)).map((m) => m[1]);
  const unique = [...new Set(repoUrls)];
  const results = [];

  for (const url of unique) {
    const parsed = extractRepoParts(url);
    if (!parsed) continue;
    try {
      const readme = await getRepoReadme(parsed.owner, parsed.repo);
      results.push({
        url,
        resumo: firstParagraph(readme).slice(0, 220),
        tecnologias: detectTechnologies(readme),
      });
      console.log(`OK ${parsed.owner}/${parsed.repo}`);
    } catch {
      console.log(`Falha ao ler ${parsed.owner}/${parsed.repo}`);
    }
  }

  const outPath = path.resolve('src/data/projects.enrichment.json');
  await fs.writeFile(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Arquivo gerado: ${outPath}`);
}

main();

