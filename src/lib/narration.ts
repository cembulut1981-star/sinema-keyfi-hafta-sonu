import { chunkText } from "@/lib/chunk-text";
import { NEWS, type NewsItem } from "@/data/news";

/** Tek bir seslendirme isteğine sığacak en fazla karakter sayısı. */
export const NARRATION_CHUNK_BUDGET = 1200;

/**
 * Markdown'ı seslendirilecek sade metne çevirir:
 * fotoğraflar atılır, bağlantıların yazısı kalır, kalın/italik ve başlık işaretleri temizlenir.
 */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/[*_`]/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n\n")
    .trim();
}

/** Seslendirilecek tam metin: başlık, özet ve gövde. */
export function narrationText(item: NewsItem): string {
  return [item.title, item.excerpt, stripMarkdown(item.body)].filter(Boolean).join("\n\n");
}

/** Bu yazı sesli okumaya açık mı? */
export function isNarrated(slug: string): boolean {
  return NEWS.some((item) => item.slug === slug && item.narrated === true);
}

/**
 * Yazıyı sırayla okunacak parçalara böler.
 * Seslendirmeye açık olmayan ya da bulunamayan yazı için null döner.
 */
export function narrationChunks(slug: string): string[] | null {
  const item = NEWS.find((entry) => entry.slug === slug && entry.narrated === true);
  if (!item) return null;
  const chunks = chunkText(narrationText(item), NARRATION_CHUNK_BUDGET);
  return chunks.length ? chunks : null;
}
