const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', 'functionsUnittests');

function getTestFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getTestFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.test.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

function splitSuffix(lines) {
  let index = lines.length - 1;
  while (index >= 0 && lines[index].trim() === '') {
    index -= 1;
  }
  if (index >= 0 && lines[index].trim() === '});') {
    return {
      workingLines: lines.slice(0, index),
      suffixLines: lines.slice(index),
    };
  }
  return { workingLines: lines.slice(), suffixLines: [] };
}

function updateNumbering(lines, newNumber) {
  const numberString = String(newNumber);
  return lines.map((line) => {
    if (line.trim().startsWith('// Test case ')) {
      return line.replace(/(\/\/ Test case )\d+/, `$1${numberString}`);
    }
    return line.replace(/((?:it|test)\(\s*['"`])\d+(\.)/, `$1${numberString}$2`);
  });
}

function processFile(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf8');
  const lines = originalContent.split('\n');
  const { workingLines, suffixLines } = splitSuffix(lines);

  const blocks = [];
  let i = 0;
  while (i < workingLines.length) {
    if (workingLines[i].trim().startsWith('// Test case ')) {
      const start = i;
      let end = i + 1;
      while (end < workingLines.length && !workingLines[end].trim().startsWith('// Test case ')) {
        end += 1;
      }
      const blockLines = workingLines.slice(start, end);
      const hasToThrow = blockLines.some((line) => line.includes('toThrow'));
      blocks.push({ start, end, lines: blockLines, hasToThrow });
      i = end;
    } else {
      i += 1;
    }
  }

  if (blocks.length === 0) {
    return false;
  }

  const prefixLines = workingLines.slice(0, blocks[0].start);
  const betweenSuffixLines = workingLines.slice(blocks[blocks.length - 1].end);
  const nonErrorBlocks = blocks.filter((block) => !block.hasToThrow);
  const errorBlocks = blocks.filter((block) => block.hasToThrow);
  const orderedBlocks = [...nonErrorBlocks, ...errorBlocks];

  const newLines = [...prefixLines];
  orderedBlocks.forEach((block, index) => {
    if (
      index > 0 &&
      newLines.length > 0 &&
      newLines[newLines.length - 1].trim() !== ''
    ) {
      newLines.push('');
    }
    const updated = updateNumbering(block.lines, index + 1);
    newLines.push(...updated);
  });
  newLines.push(...betweenSuffixLines);
  newLines.push(...suffixLines);

  const newContent = newLines.join('\n');
  if (newContent !== originalContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

const files = getTestFiles(rootDir);
let modifiedCount = 0;
files.forEach((filePath) => {
  const changed = processFile(filePath);
  if (changed) {
    modifiedCount += 1;
  }
});

console.log(`Processed ${files.length} test files.`);
console.log(`Modified ${modifiedCount} files.`);
