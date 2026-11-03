import { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { lovable } from '@/integrations/lovable';
import { supabase } from '@/integrations/supabase/client';
import { rememberReturnPath } from '@/lib/auth-return';
import { COMMENT_BODY_MAX, COMMENT_PAGE_SIZE, relativeTime, type Comment } from '@/lib/comments';
import { deleteComment, postComment } from '@/lib/comments.functions';

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v8.97h12.9c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.13-10.36 7.13-17.6z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Avatar({ name, url }: { name: string; url: string }) {
  if (url.startsWith('https://')) {
    return (
      <img
        src={url}
        alt=""
        className="h-9 w-9 shrink-0 rounded-full border border-editorial-ink object-cover"
      />
    );
  }
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-editorial-yellow font-display text-sm font-black text-editorial-ink">
      {(name.trim().charAt(0) || '?').toUpperCase()}
    </span>
  );
}

export function CommentSection({ slug }: { slug: string }) {
  const queryClient = useQueryClient();
  // The session lives in browser storage, so nothing here can be rendered on the server.
  const [mounted, setMounted] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [body, setBody] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setMounted(true);
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setUserId(data.session?.user.id ?? null);
    });
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      setUserId(session?.user.id ?? null);
      setBusy(false);
      setError('');
    });
    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments', slug],
    enabled: mounted,
    queryFn: async () => {
      const { data, error: readError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_slug', slug)
        .order('created_at', { ascending: false })
        .limit(COMMENT_PAGE_SIZE);
      if (readError) throw new Error('Yorumlar yüklenemedi');
      return (data ?? []) as Comment[];
    },
  });

  const refresh = useCallback(
    () => queryClient.invalidateQueries({ queryKey: ['comments', slug] }),
    [queryClient, slug],
  );

  const signIn = async () => {
    setError('');
    setBusy(true);
    rememberReturnPath(window.location.pathname + window.location.search);
    const result = await lovable.auth.signInWithOAuth('google', { redirect_uri: window.location.origin });
    if (result.error) {
      setError('Google ile giriş yapılamadı. Lütfen tekrar deneyin.');
      setBusy(false);
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const text = body.trim();
    if (text.length < 2) {
      setError('Yorumun en az iki karakter olmalı.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      await postComment({ data: { slug, body: text } });
      setBody('');
      refresh();
    } catch {
      setError('Yorum gönderilemedi. Lütfen tekrar dene.');
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: number) => {
    setBusy(true);
    setError('');
    try {
      await deleteComment({ data: { id } });
      refresh();
    } catch {
      setError('Yorum silinemedi.');
    } finally {
      setBusy(false);
    }
  };

  if (!mounted) return <section className="mt-14 border-t-2 border-editorial-ink pt-8" aria-hidden="true" />;

  const list = comments ?? [];

  return (
    <section className="mt-14 border-t-2 border-editorial-ink pt-8" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="font-display text-xl font-black uppercase tracking-wider text-editorial-ink">
        Yorumlar
        <span className="ml-2 bg-editorial-yellow px-2 py-0.5 text-sm font-bold text-editorial-ink">{list.length}</span>
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">Google hesabınla giriş yap, bu yazıya yorum bırak.</p>

      {userId ? (
        <form onSubmit={submit} className="mt-6">
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={4}
            maxLength={COMMENT_BODY_MAX}
            placeholder="Yorumunu yaz…"
            className="w-full border-2 border-editorial-ink bg-background p-3 text-[15px] leading-relaxed outline-none focus:border-primary"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={busy}
              className="bg-editorial-ink px-5 py-2 font-display text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-primary disabled:opacity-50"
            >
              Yorumu gönder
            </button>
            <span className="text-xs text-muted-foreground">
              {body.length}/{COMMENT_BODY_MAX}
            </span>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={signIn}
          disabled={busy}
          className="mt-6 inline-flex items-center gap-3 border-2 border-editorial-ink bg-background px-4 py-2 font-display text-sm font-bold uppercase tracking-wider text-editorial-ink transition-colors hover:bg-editorial-yellow disabled:opacity-50"
        >
          <GoogleMark /> Google ile giriş yap
        </button>
      )}

      {error ? <p className="mt-3 text-sm font-bold text-primary">{error}</p> : null}

      <div className="mt-8 space-y-6">
        {isLoading ? <p className="text-sm text-muted-foreground">Yorumlar yükleniyor…</p> : null}
        {!isLoading && list.length === 0 ? (
          <p className="text-sm text-muted-foreground">Henüz yorum yok. İlk yorumu sen yaz.</p>
        ) : null}
        {list.map((comment) => (
          <article key={comment.id} className="flex gap-3">
            <Avatar name={comment.display_name} url={comment.avatar_url} />
            <div className="min-w-0 flex-1 border-l-2 border-editorial-ink pl-3">
              <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-display text-sm font-black uppercase tracking-wider text-editorial-ink">
                  {comment.display_name}
                </span>
                <time className="text-xs text-muted-foreground" dateTime={comment.created_at}>
                  {relativeTime(comment.created_at)}
                </time>
                {comment.user_id === userId ? (
                  <button
                    type="button"
                    onClick={() => remove(comment.id)}
                    disabled={busy}
                    className="ml-auto text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                  >
                    Sil
                  </button>
                ) : null}
              </header>
              <p className="mt-1 whitespace-pre-wrap text-[15px] leading-relaxed text-foreground">{comment.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
