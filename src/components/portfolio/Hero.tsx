import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { Plane } from "./Plane";
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
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <Plane />
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-foreground/60"
        >
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent dark:from-white dark:via-fuchsia-200 dark:to-cyan-200">
            {t.hero.name}
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 h-10 text-2xl font-semibold text-foreground/80 sm:text-3xl"
        >
          <span>{text}</span>
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-fuchsia-400 align-middle" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 max-w-xl text-base text-foreground/70 sm:text-lg"
        >
          {t.hero.tagline}
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
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/50"
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
