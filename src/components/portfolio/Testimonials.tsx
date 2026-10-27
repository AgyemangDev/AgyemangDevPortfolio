import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";
import { reviews, type Review } from "../../lib/reviews";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export function Testimonials() {
  const { t, lang } = usePortfolio();
  const scroller = useRef<HTMLDivElement>(null);

  const page = (dir: 1 | -1) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle sub={lang === "fr" ? `${reviews.length} recommandations LinkedIn` : `${reviews.length} recommendations from LinkedIn`}>
            {t.testimonials.title}
          </SectionTitle>
          <div className="hidden gap-2 md:flex">
            <ArrowButton dir={-1} onClick={() => page(-1)} />
            <ArrowButton dir={1} onClick={() => page(1)} />
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 [scrollbar-width:none] md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        aria-label={t.testimonials.title}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={r.name} review={r} index={i} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ review, index, lang }: { review: Review; index: number; lang: string }) {
  const [open, setOpen] = useState(false);
  const long = review.quote.length > 280;
  const hue = (index * 47 + 280) % 360;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06 }}
      className="glass relative flex w-[85vw] max-w-md shrink-0 snap-start flex-col rounded-3xl p-7 sm:w-[24rem]"
    >
      <span aria-hidden className="absolute right-6 top-3 font-display text-7xl leading-none text-fuchsia-400/20">
        “
      </span>
      <div className="flex items-center gap-4">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 shrink-0 rounded-full border border-white/20 object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
            style={{ background: `linear-gradient(135deg, hsl(${hue} 80% 55%), hsl(${(hue + 70) % 360} 80% 55%))` }}
          >
            {initials(review.name)}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-semibold tracking-tight">{review.name}</h3>
          <p className="line-clamp-2 text-xs text-foreground/55">{review.headline}</p>
        </div>
      </div>

      <p className="eyebrow mt-5 text-[0.62rem] text-cyan-300/70">
        {review.relation} · {review.date}
      </p>

      <blockquote
        className={`mt-3 text-[0.95rem] leading-relaxed text-foreground/85 ${!open && long ? "line-clamp-6" : ""}`}
      >
        {review.quote}
      </blockquote>

      {long && (
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 self-start text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-200"
        >
          {open ? (lang === "fr" ? "Réduire" : "Show less") : lang === "fr" ? "Lire la suite" : "Read more"}
        </button>
      )}
    </motion.article>
  );
}

function ArrowButton({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 1 ? "Next reviews" : "Previous reviews"}
      className="rounded-full border border-white/15 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: dir === -1 ? "scaleX(-1)" : undefined }}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
