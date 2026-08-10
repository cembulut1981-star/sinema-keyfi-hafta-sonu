import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PhotoGallery({
  images,
  heading = "Galeri",
}: {
  images: string[];
  heading?: string;
}) {
  if (!images.length) return null;

  return (
    <section className="mt-12">
      <h2 className="font-display text-xl font-black uppercase tracking-tight">{heading}</h2>
      <div className="mt-4 p-3" style={{ background: "#00EAA1" }}>
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {images.map((src, i) => (
              <CarouselItem key={src}>
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={src}
                    alt={`${heading} — görsel ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
}
