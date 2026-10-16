import { extractDate, formatDate } from "@/lib/seo";

export function ArticleByline({ source }: { source?: string }) {
  const date = extractDate(source);
  if (!date) return null;
  return (
    <div className="mt-5 text-sm text-muted-foreground">
      <time dateTime={date}>{formatDate(date)}</time>
    </div>
  );
}
