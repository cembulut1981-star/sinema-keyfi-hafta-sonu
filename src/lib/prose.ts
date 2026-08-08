/**
 * Single source of truth for article body typography.
 * Paragraph spacing (prose-p:my-8) and line-height are defined here only,
 * so every article page renders identical gaps between paragraphs.
 */
export const articleProse =
  "prose prose-neutral max-w-none prose-headings:font-serif-display prose-p:leading-[1.85] prose-p:text-[17px] prose-p:my-8 prose-headings:mt-10 prose-headings:mb-4";

/**
 * Normalizes an article body into clean paragraphs:
 * collapses any number of blank lines (\n\n, \n\n\n\n, stray spaces) into
 * single paragraph breaks and drops empty ones, so spacing comes purely
 * from `articleProse` instead of the raw text.
 */
export function toParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}
