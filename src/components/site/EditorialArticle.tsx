import ReactMarkdown from 'react-markdown';
import { SiteShell } from './SiteShell';
import { ArticleByline } from './ArticleByline';
import { ShareButtons } from './ShareButtons';
import { articleProse, toParagraphs } from '@/lib/prose';
import type { EditorialPost } from '@/lib/editorial';
export function EditorialArticle({ post }: { post: EditorialPost }) {
  return <SiteShell><main className="mx-auto max-w-[820px] px-4 py-10">
    <article><h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-center leading-tight">{post.title}</h1>
    <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
    <ArticleByline source={post.source_credit} />
    <figure className="my-10 mx-auto max-w-[560px] bg-card-green p-3"><img src={`/api/public/editorial-media/${post.id}`} alt={post.title} className="w-full max-h-[500px] object-contain" /></figure>
    <div className={articleProse}>{toParagraphs(post.body).map((paragraph, i) => <div key={i}><ReactMarkdown>{paragraph}</ReactMarkdown></div>)}</div>
    <ShareButtons title={post.title} path={`/haber/${post.slug}`} /></article>
  </main></SiteShell>;
}