import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
export function Hero() {
  const { t } = usePortfolio();
  const roles = t.hero.roles;
  const [text, setText] = useState("");
  const [rIdx, setRIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  // Typing effect that cycles roles
  useEffect(() => {
    const current = roles[rIdx];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, cIdx + 1));
        setCIdx((c) => c + 1);
        if (cIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, cIdx - 1));
        setCIdx((c) => c - 1);
        if (cIdx - 1 === 0) {
          setDeleting(false);
          setRIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [cIdx, deleting, rIdx, roles]);
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-28 pt-28 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.currently}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="eyebrow mb-5 text-foreground/60"
        >
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          <span className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent dark:from-white dark:via-fuchsia-200 dark:to-cyan-200">
            {t.hero.name}
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 h-10 font-display text-2xl font-medium text-foreground/80 sm:text-3xl"
        >
          <span>{text}</span>
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-fuchsia-400 align-middle" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 max-w-2xl"
        >
          <span className="block font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {t.hero.pitch}
          </span>
          <span className="mt-3 block text-base text-foreground/70 sm:text-lg">{t.hero.tagline}</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(167,139,250,0.4)] transition hover:shadow-[0_0_45px_rgba(167,139,250,0.7)]"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </button>
          <button
            onClick={() => scrollTo("resume")}
            className="rounded-full px-4 py-3 text-sm font-semibold text-foreground/70 underline decoration-white/20 underline-offset-4 transition hover:text-foreground"
          >
            {t.hero.ctaCv} ↓
          </button>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-4"
        >
          {t.hero.proof.map((p) => (
            <li key={p.label}>
              <div className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{p.value}</div>
              <div className="mt-1 text-xs leading-snug text-foreground/55">{p.label}</div>
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-foreground/50 lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
