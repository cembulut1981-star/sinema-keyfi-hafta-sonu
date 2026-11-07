import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogClose, DialogTitle } from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export function YouTubeTrailer({ videoId, title }: { videoId: string; title: string }) {
  return (
    <Dialog>
      <div className="my-8 flex justify-center">
        <DialogTrigger asChild>
          <Button variant="ghost" className="h-auto gap-4 rounded-none p-0 text-foreground hover:bg-transparent" aria-label={`${title} fragmanını oynat`}>
            <span className="flex aspect-video w-28 items-center justify-center bg-editorial-ink text-primary-foreground">
              <Play className="size-7 fill-current" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold">Fragman</span>
          </Button>
        </DialogTrigger>
      </div>
      <DialogPortal>
        <DialogOverlay className="bg-editorial-ink/60" />
        <DialogPrimitive.Content aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[640px] -translate-x-1/2 -translate-y-1/2">
          <DialogTitle className="sr-only">{title} fragmanı</DialogTitle>
          <DialogClose asChild>
            <Button size="icon" variant="ghost" aria-label="Fragmanı kapat" className="absolute -right-2 -top-5 z-10 rounded-full bg-editorial-ink text-primary-foreground hover:bg-editorial-ink hover:text-primary-foreground">
              <X aria-hidden="true" />
            </Button>
          </DialogClose>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={`${title} resmî fragmanı`}
            className="aspect-video w-full rounded-md border-0 bg-editorial-ink"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}