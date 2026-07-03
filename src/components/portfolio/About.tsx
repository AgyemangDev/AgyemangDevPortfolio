import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import AgyemangDev from "../../assets/images/AgyemangDev.jpg";
export function About() {
  const { t } = usePortfolio();
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{t.about.title}</SectionTitle>
        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass overflow-hidden rounded-3xl p-2"
          >
            <img
              src={AgyemangDev}
              alt="Portrait"
              className="h-full w-full rounded-2xl object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <p className="text-lg leading-relaxed text-foreground/85">{t.about.bio}</p>
            <p className="mt-4 text-foreground/70">{t.about.bio2}</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.about.stats.map((s) => (
                <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-2xl font-bold text-foreground sm:text-3xl">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">{label}</div>
    </div>
  );
}
export function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="bg-gradient-to-r from-white to-foreground/60 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
      {sub && <p className="mt-3 text-foreground/60">{sub}</p>}
    </motion.div>
  );
}
