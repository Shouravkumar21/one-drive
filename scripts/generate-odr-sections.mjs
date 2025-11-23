import fs from "fs";
import path from "path";
import { load } from "cheerio";

const textSourcePath = path.resolve("src/data/odr-contents.txt");
const htmlSourcePath = path.resolve("src/data/odr-contents.html");
const outputPath = path.resolve("src/data/odrSections.json");
const maxSectionNumber = 109;

if (!fs.existsSync(textSourcePath)) {
  throw new Error(`Missing ${textSourcePath}. Convert the DOCX file to text before running this script.`);
}

if (!fs.existsSync(htmlSourcePath)) {
  throw new Error(
    `Missing ${htmlSourcePath}. Run 'textutil -convert html "public/3. Contents 4 ODR Boutique Firm (1).docx" -output src/data/odr-contents.html' first.`,
  );
}

const rawTextSource = fs.readFileSync(textSourcePath, "utf-8").replace(/\r\n/g, "\n");
const htmlSource = fs.readFileSync(htmlSourcePath, "utf-8");
const $ = load(htmlSource);

const sectionsFromContents = extractContents(rawTextSource).filter(({ number }) => number <= maxSectionNumber);
if (!sectionsFromContents.length) {
  throw new Error("No entries were parsed from the Contents block of the text source.");
}

const normalizedSections = sectionsFromContents.map((entry) => ({
  ...entry,
  normalizedTitle: normalizeForMatch(entry.title),
}));

const bodyNodes = $("body").children().toArray();
const firstHeadingIndex = bodyNodes.findIndex((node) => {
  const tag = node.tagName ?? node.name;
  if (tag !== "ul") {
    return false;
  }
  const normalized = normalizeForMatch($(node).text());
  return isHeadingMatch(normalized, normalizedSections[0].normalizedTitle);
});

if (firstHeadingIndex === -1) {
  throw new Error("Unable to locate the first section heading in the HTML document.");
}

const extractedSections = [];
let currentSectionIndex = -1;
let currentSection = null;

const flushCurrent = () => {
  if (!currentSection) return;
  const content = currentSection.contentBlocks.join("\n\n").trim();
  extractedSections.push({
    number: currentSection.number,
    title: currentSection.title,
    content,
  });
  currentSection = null;
};

for (let i = firstHeadingIndex; i < bodyNodes.length; i++) {
  const node = bodyNodes[i];
  if (node.type === "text") {
    continue;
  }

  const rawBlockText = collapseWhitespace($(node).text());
  if (!rawBlockText) {
    continue;
  }

  const normalizedBlockText = normalizeForMatch(rawBlockText);
  const nextSection = normalizedSections[currentSectionIndex + 1];

  const tag = node.tagName ?? node.name;
  const isHeadingNode = tag === "ul";

  if (isHeadingNode && nextSection && isHeadingMatch(normalizedBlockText, nextSection.normalizedTitle)) {
    flushCurrent();
    currentSection = {
      number: nextSection.number,
      title: nextSection.title,
      normalizedTitle: nextSection.normalizedTitle,
      contentBlocks: [],
    };
    currentSectionIndex++;
    continue;
  }

  if (!currentSection) {
    continue;
  }

  if (normalizedBlockText === currentSection.normalizedTitle) {
    // Skip duplicate heading text blocks (some sections restate the title immediately after the bullet).
    continue;
  }

  const rendered = renderNodeText($, node);
  if (rendered) {
    currentSection.contentBlocks.push(rendered);
  }
}

flushCurrent();

if (extractedSections.length !== normalizedSections.length) {
  const missingNumbers = normalizedSections.slice(extractedSections.length).map((section) => section.number);
  console.warn(
    `Expected ${normalizedSections.length} sections but extracted ${extractedSections.length}. Missing section numbers: ${missingNumbers.join(", ")}`,
  );
}

fs.writeFileSync(outputPath, JSON.stringify(extractedSections, null, 2), "utf-8");
console.log(`Generated ${extractedSections.length} sections to ${outputPath}`);

function extractContents(textSource) {
  const lines = textSource.split(/\r?\n/);
  const entries = [];
  let capturing = false;

  for (const line of lines) {
    if (!capturing) {
      if (line.trim() === "Contents") {
        capturing = true;
      }
      continue;
    }

    const trimmed = line.trim();
    if (trimmed === "" && entries.length > 0) {
      break;
    }

    const match = line.match(/^\s*(\d+)\)\s+(.+?)(?:\s+\d+)?\s*$/);
    if (!match) {
      continue;
    }

    const number = Number(match[1]);
    const title = match[2].replace(/\s+/g, " ").trim();
    entries.push({ number, title });
  }

  return entries;
}

function normalizeForMatch(text = "") {
  return text
    .toLowerCase()
    .replace(/&amp;/g, " and ")
    .replace(/&/g, " and ")
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collapseWhitespace(text = "") {
  return text.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function renderNodeText($instance, node) {
  const tag = node.tagName ?? node.name;
  if (tag === "ul" || tag === "ol") {
    const items = $instance(node)
      .find("> li")
      .map((_, li) => collapseWhitespace($instance(li).text()))
      .get()
      .filter(Boolean);

    if (!items.length) {
      return "";
    }

    return items
      .map((item, idx) => (tag === "ol" ? `${idx + 1}. ${item}` : `• ${item}`))
      .join("\n");
  }

  return collapseWhitespace($instance(node).text());
}

function isHeadingMatch(candidate, target) {
  if (!candidate || !target) {
    return false;
  }

  if (candidate === target) {
    return true;
  }

  if (candidate.startsWith(target) || target.startsWith(candidate)) {
    return true;
  }

  const candidateWords = candidate.split(" ");
  const targetWords = target.split(" ");
  const allWordsPresent = targetWords.every((word) => {
    const normalizedWord = word.replace(/s$/, "");
    return candidateWords.some((candidateWord) => {
      const normalizedCandidate = candidateWord.replace(/s$/, "");
      return candidateWord === word || normalizedCandidate === normalizedWord;
    });
  });
  if (allWordsPresent) {
    return true;
  }

  const distance = levenshtein(candidate, target);
  const threshold = Math.max(1, Math.ceil(Math.max(candidate.length, target.length) * 0.25));
  return distance <= threshold;
}

function levenshtein(a, b) {
  if (a === b) {
    return 0;
  }

  if (!a.length) {
    return b.length;
  }

  if (!b.length) {
    return a.length;
  }

  const matrix = Array.from({ length: b.length + 1 }, () => Array(a.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= b.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(matrix[j - 1][i] + 1, matrix[j][i - 1] + 1, matrix[j - 1][i - 1] + cost);
    }
  }

  return matrix[b.length][a.length];
}
