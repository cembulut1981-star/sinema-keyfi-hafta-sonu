import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { BoxOfficeChart } from "@/data/box-office";

export function BoxOfficePanel({ chart }: { chart: BoxOfficeChart }) {
  return (
    <aside aria-labelledby={`box-office-${chart.id}`} className="box-office-panel min-w-0 self-start border border-foreground bg-background text-foreground">
      <header className="border-b-4 border-primary bg-editorial-ink px-4 py-4 text-primary-foreground">
        <div className="mb-2 flex items-center justify-between text-[10px] font-bold">
          <span>{chart.market}</span><TrendingUp size={16} aria-hidden />
        </div>
        <h2 id={`box-office-${chart.id}`} className="font-display text-2xl font-black leading-none">{chart.title}</h2>
        <p className="mt-2 text-xs font-semibold">{chart.period}</p>
      </header>
      <ol className="divide-y divide-border px-3">
        {chart.films.map((film) => (
          <li key={film.rank}>
            <a href={film.url} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[20px_52px_minmax(0,1fr)] items-center gap-2 py-3 focus-visible:outline-2 focus-visible:outline-primary" aria-label={`${film.rank}. ${film.title} — film bilgileri`}>
              <span className="self-start pt-1 font-display text-xl font-black text-primary">{film.rank}</span>
              <img src={film.poster} alt={`${film.title} afişi`} width={235} height={336} className="aspect-[235/336] w-[52px] object-cover" loading={chart.id === "tr" ? "eager" : "lazy"} />
              <div className="min-w-0">
                <h3 className="text-[13px] font-bold leading-tight group-hover:underline">{film.title}</h3>
                <p className="mt-1 text-[13px] font-black">{film.gross}</p>
                <p className="mt-0.5 text-[10px] leading-tight">{film.detail}</p>
                <p className="mt-0.5 text-[10px] leading-tight">Toplam: {film.total}</p>
              </div>
            </a>
          </li>
        ))}
      </ol>
      <footer className="border-t border-foreground px-4 py-3">
        <p className="mb-2 text-[10px] leading-relaxed">{chart.note}</p>
        <a href={chart.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold hover:underline">{chart.source}<ArrowUpRight size={13} aria-hidden /></a>
      </footer>
    </aside>
  );
}