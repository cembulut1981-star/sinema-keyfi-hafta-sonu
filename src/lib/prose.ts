/**
 * Single source of truth for article body typography.
 * Paragraph spacing (prose-p:my-8) and line-height are defined here only,
 * so every article page renders identical gaps between paragraphs.
 */
export const articleProse = [
  "max-w-none text-[17px] leading-[1.85]",
  // Paragraf arası boşluk: tek kural, tipografi eklentisine bağlı değil
  "[&_p]:my-7 [&_p]:leading-[1.85] [&_p]:text-[17px]",
  "[&>*+*]:mt-7",
  "[&_h2]:font-serif-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-5",
  "[&_h3]:font-serif-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4",
  "[&_strong]:font-bold [&_em]:italic",
  "[&_a]:underline [&_a]:underline-offset-2",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-2",
  "[&_img]:my-8 [&_img]:w-full",
  "[&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-8",
].join(" ");

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
