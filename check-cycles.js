const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const visited = new Set();
const stack = new Set();
const dependencies = new Map();

function getImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imports = [];
  const regex = /from\s+['"](@\/[^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  return imports;
}

function resolvePath(importPath, currentDir) {
  if (importPath.startsWith('@/')) {
    const relative = importPath.slice(2);
    const full = path.join(projectRoot, relative);
    if (fs.existsSync(full + '.tsx')) return full + '.tsx';
    if (fs.existsSync(full + '.ts')) return full + '.ts';
    if (fs.existsSync(path.join(full, 'index.tsx'))) return path.join(full, 'index.tsx');
    if (fs.existsSync(path.join(full, 'index.ts'))) return path.join(full, 'index.ts');
  }
  return null;
}

function findCycles(filePath, currentStack = []) {
  if (stack.has(filePath)) {
    console.log('Cycle detected:', [...currentStack, filePath].map(p => path.relative(projectRoot, p)).join(' -> '));
    return;
  }
  if (visited.has(filePath)) return;

  visited.add(filePath);
  stack.add(filePath);
  currentStack.push(filePath);

  const imports = getImports(filePath);
  for (const imp of imports) {
    const resolved = resolvePath(imp, path.dirname(filePath));
    if (resolved) {
      findCycles(resolved, currentStack);
    }
  }

  stack.delete(filePath);
  currentStack.pop();
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        scanDir(fullPath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      findCycles(fullPath);
    }
  }
}

scanDir(path.join(projectRoot, 'app'));
scanDir(path.join(projectRoot, 'components'));
console.log('Scan complete.');
