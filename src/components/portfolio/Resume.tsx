import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";
export function Resume() {
  const { t } = usePortfolio();
  return (
    <section id="resume" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle sub={t.resume.subtitle}>{t.resume.title}</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass relative mt-12 overflow-hidden rounded-3xl p-10 sm:p-14"
        >
          {/* decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <p className="text-lg leading-relaxed text-foreground/85">{t.resume.blurb}</p>
              <p className="mt-3 text-sm text-foreground/60">{t.resume.updated}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <DownloadButton
                href="/cv-en.pdf"
                label={t.resume.downloadEn}
                flag="EN"
                primary
              />
              <DownloadButton href="/cv-fr.pdf" label={t.resume.downloadFr} flag="FR" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function DownloadButton({
  href,
  label,
  flag,
  primary,
}: {
  href: string;
  label: string;
  flag: string;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      download
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition ${
        primary
          ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black shadow-[0_10px_40px_-10px_rgba(217,70,239,0.6)] hover:shadow-[0_16px_60px_-10px_rgba(34,211,238,0.7)]"
          : "border border-white/15 bg-white/5 text-foreground backdrop-blur hover:bg-white/10"
      }`}
    >
      <span
        className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-widest ${
          primary ? "bg-black/20 text-black" : "bg-white/10 text-foreground/70"
        }`}
      >
        {flag}
      </span>
      <span>{label}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="transition group-hover:translate-y-0.5"
      >
        <path d="M12 3v14M5 12l7 7 7-7M5 21h14" />
      </svg>
    </motion.a>
  );
}
