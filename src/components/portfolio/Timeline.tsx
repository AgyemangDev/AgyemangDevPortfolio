import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";

export function Timeline() {
  const { t } = usePortfolio();
  return (
    <section id="timeline" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle sub={t.timeline.subtitle}>{t.timeline.title}</SectionTitle>
        <div className="relative mt-16">
          {/* center line */}
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400/60 via-cyan-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-10">
            {t.timeline.items.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={item.title + item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* dot */}
                  <span className="absolute left-[10px] top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 shadow-[0_0_16px_rgba(167,139,250,0.9)] md:left-1/2" />
                  <div
                    className={`glass rounded-2xl p-6 ${
                      left
                        ? "md:col-start-1 md:mr-6 md:text-right"
                        : "md:col-start-2 md:ml-6"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                      {item.year}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <div className="text-sm text-foreground/70">{item.org}</div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}