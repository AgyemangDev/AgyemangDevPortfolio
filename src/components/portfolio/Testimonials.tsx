import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";
export function Testimonials() {
  const { t } = usePortfolio();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);
  const q = items[i];
  return (
    <section id="testimonials" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>{t.testimonials.title}</SectionTitle>
        <div className="relative mt-12 h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass absolute inset-0 flex flex-col justify-between rounded-3xl p-8"
            >
              <p className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
                <span className="mr-1 text-4xl text-fuchsia-400/60">"</span>
                {q.quote}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img src={q.avatar} alt={q.name} className="h-12 w-12 rounded-full border border-white/20" />
                <div>
                  <div className="font-semibold">{q.name}</div>
                  <div className="text-sm text-foreground/60">
                    {q.role} · {q.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-foreground" : "w-4 bg-foreground/30"
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}