import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  path: string;
};

export function ShareButtons({ title, path }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    setUrl(origin + path);
  }, [path]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const whatsapp = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

  const handleInstagram = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(url);
      alert("Bağlantı kopyalandı. Instagram uygulamasında paylaşabilirsiniz.");
    } catch {
      window.prompt("Bağlantıyı kopyalayın:", url);
    }
  };

  const btn =
    "inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors";

  return (
    <div className="my-8 flex items-center gap-3">
      <span className="font-display uppercase tracking-widest text-[11px] text-muted-foreground mr-2">
        Paylaş
      </span>
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook'ta paylaş"
        className={btn}
      >
        <Facebook size={18} />
      </a>
      <a
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter'da paylaş"
        className={btn}
      >
        <Twitter size={18} />
      </a>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'ta paylaş"
        className={btn}
      >
        {/* WhatsApp icon (lucide has no wa) */}
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44zM12.06 21.5h-.01a9.63 9.63 0 0 1-4.91-1.34l-.35-.21-3.77.99 1-3.67-.23-.38a9.62 9.62 0 0 1-1.47-5.12c0-5.31 4.32-9.63 9.64-9.63 2.57 0 4.99 1 6.81 2.82a9.57 9.57 0 0 1 2.82 6.82c0 5.31-4.32 9.63-9.63 9.63zm5.28-7.21c-.29-.14-1.71-.84-1.97-.94-.26-.1-.46-.14-.65.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01s-.51.07-.78.36c-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.14.19 2.07 3.16 5.02 4.43.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
        </svg>
      </a>
      <a
        href="#"
        onClick={handleInstagram}
        aria-label="Instagram için bağlantıyı kopyala"
        className={btn}
      >
        <Instagram size={18} />
      </a>
    </div>
  );
}
