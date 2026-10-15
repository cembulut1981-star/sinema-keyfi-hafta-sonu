import { Link } from "@tanstack/react-router";

import { EDITORIAL_AUTHOR, extractDate, formatDate } from "@/lib/seo";

export function ArticleByline({ source }: { source?: string }) {
  const date = extractDate(source);
  return (
    <div className="mt-5 text-sm text-muted-foreground">
      By{" "}
      <Link to="/about" className="font-semibold text-foreground underline-offset-4 hover:underline">
        {EDITORIAL_AUTHOR}
      </Link>
      {date ? (
        <>
          {" · "}
          <time dateTime={date}>{formatDate(date)}</time>
        </>
      ) : null}
    </div>
  );
}
