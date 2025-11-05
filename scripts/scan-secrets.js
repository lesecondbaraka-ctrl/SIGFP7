#!/usr/bin/env node
// Very small secret scanner. It searches for common secret-like patterns and fails if found.
import fs from 'fs';
import path from 'path';

const repoRoot = process.cwd();
const patterns = [
  /VITE_SUPABASE_ANON_KEY/i,
  /VITE_SUPABASE_URL/i,
  /API_KEY/i,
  /SECRET/i,
  /PRIVATE_KEY/i,
  /ACCESS_TOKEN/i
];

// Fichiers et dossiers à ignorer (ne contiennent que de la documentation/exemples)
const excludedPaths = [
  'node_modules',
  '.git',
  'dist',
  '.env.example',        // Template sans vraies valeurs
  'README.md',
  'DEPLOIEMENT_NETLIFY.md',
  'DEPLOIEMENT_ALTERNATIF.md',
  'DEPANNAGE_NETLIFY_404.md',
  'CONFORMITE_DEPLOIEMENT.md',
  'INSTRUCTIONS_PUSH_NOUVEAU_COMPTE.md',
  'docs',                // Dossier documentation
  'scripts/scan-secrets.js',  // Ce script lui-même
  '.githooks',           // Git hooks
  '.gitignore',          // Gitignore
  'package.json',        // Package.json
  '.github/workflows'    // GitHub Actions
];

function shouldExclude(filePath) {
  const relativePath = path.relative(repoRoot, filePath);
  return excludedPaths.some(excluded => 
    relativePath.includes(excluded) || 
    relativePath.endsWith('.md') ||
    relativePath.endsWith('.example')
  );
}

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    
    // Ignorer les fichiers/dossiers exclus
    if (shouldExclude(full)) continue;
    
    if (e.isDirectory()) {
      scanDir(full);
    } else {
      try {
        const content = fs.readFileSync(full, 'utf8');
        for (const p of patterns) {
          if (p.test(content)) {
            console.error(`Potential secret match in ${full} -> ${p}`);
            process.exitCode = 2;
          }
        }
      } catch (_) {}
    }
  }
}

scanDir(repoRoot);
if (process.exitCode === 2) {
  console.error('Secret scan failed. Please remove secrets before committing/pushing.');
  process.exit(2);
}
console.log('Secret scan OK.');
