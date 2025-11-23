import sectionsData from "./odrSections.json";

export interface Section {
  number: number;
  title: string;
  content: string;
}

export interface SectionWithSlug extends Section {
  slug: string;
}

export interface SectionGroup {
  main: SectionWithSlug;
  subSections: SectionWithSlug[];
}

const slugify = (title: string, number: number) => {
  const normalized = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const safeTitle = normalized.length > 0 ? normalized : `section-${number}`;
  return `${number}-${safeTitle}`;
};

const sections = (sectionsData as Section[]).map((section) => ({
  ...section,
  slug: slugify(section.title, section.number),
}));

const sectionMap = new Map<number, SectionWithSlug>(sections.map((section) => [section.number, section]));

const createRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const navDefinitions: Array<{ main: number; subs: number[] }> = [
  { main: 1, subs: createRange(2, 11) },
  { main: 12, subs: createRange(13, 22) },
  { main: 23, subs: createRange(24, 33) },
  { main: 34, subs: createRange(35, 44) },
  { main: 45, subs: createRange(46, 55) },
  { main: 56, subs: createRange(57, 66) },
  { main: 67, subs: createRange(68, 77) },
  { main: 78, subs: createRange(79, 88) },
  { main: 89, subs: createRange(90, 109) },
];

const sectionGroups = navDefinitions
  .map((definition) => {
    const main = sectionMap.get(definition.main);

    if (!main) {
      return null;
    }

    const subSections = definition.subs
      .map((number) => sectionMap.get(number))
      .filter((section): section is SectionWithSlug => Boolean(section));

    return {
      main,
      subSections,
    };
  })
  .filter((group): group is SectionGroup => Boolean(group));

export const sectionsWithSlugs = sections;
export const groupedSections = sectionGroups;
export const getSectionByNumber = (number: number) => sectionMap.get(number);
