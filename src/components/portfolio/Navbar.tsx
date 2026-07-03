import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";

const sections = ["about", "skills", "timeline", "projects", "testimonials", "resume", "contact"] as const;

export function Navbar() {
  const { t, lang, setLang } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/50 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 font-bold">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
            <span className="tracking-tight">AgyemangDEV</span>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-sm text-foreground/80 transition hover:text-foreground"
              >
                {t.nav[s]}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
          <button
            className="md:hidden rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <div className="flex h-5 w-5 flex-col justify-center gap-1">
              <span className={`h-0.5 w-full bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-40 w-72 backdrop-blur-2xl bg-background/70 border-l border-white/10 p-8 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {sections.map((s) => (
                <button key={s} onClick={() => scrollTo(s)} className="text-left text-lg font-medium">
                  {t.nav[s]}
                </button>
              ))}
              <div className="mt-6 flex items-center gap-2">
                <LangToggle lang={lang} setLang={setLang} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LangToggle({ lang, setLang }: { lang: "en" | "fr"; setLang: (l: "en" | "fr") => void }) {
  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs backdrop-blur">
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 uppercase transition ${
            lang === l ? "bg-white/15 text-foreground" : "text-foreground/60"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}