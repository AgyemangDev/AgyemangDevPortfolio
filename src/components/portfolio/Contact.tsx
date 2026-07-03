import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";
const SOCIALS = [
  { name: "GitHub", href: "#", path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" },
  { name: "LinkedIn", href: "#", path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v2h.06c.61-1.15 2.09-2.36 4.3-2.36 4.6 0 5.45 3.03 5.45 6.97V22h-4.56v-6.79c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.61 1.77-2.61 3.59V22H7.72V8z" },
  { name: "Twitter", href: "#", path: "M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3 4.9a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.6a11.7 11.7 0 0 0 6.3 1.9c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" },
  { name: "Email", href: "mailto:hello@example.com", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8l-8 5-8-5zm0-2l8 5 8-5H4z" },
];
export function Contact() {
  const { t } = usePortfolio();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: hook up your form backend here
    setTimeout(() => setStatus("sent"), 1500);
  };
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle sub={t.contact.subtitle}>{t.contact.title}</SectionTitle>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass mt-12 rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder={t.contact.name}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none backdrop-blur transition placeholder:text-foreground/40 focus:border-fuchsia-400/60"
            />
            <input
              required
              type="email"
              placeholder={t.contact.email}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none backdrop-blur transition placeholder:text-foreground/40 focus:border-fuchsia-400/60"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder={t.contact.message}
            className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none backdrop-blur transition placeholder:text-foreground/40 focus:border-fuchsia-400/60"
          />
          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(167,139,250,0.4)] transition hover:shadow-[0_0_45px_rgba(167,139,250,0.7)] disabled:opacity-70"
          >
            {status === "idle" && (
              <>
                {t.contact.send}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </>
            )}
            {status === "sending" && (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                {t.contact.sending}
              </>
            )}
            {status === "sent" && (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {t.contact.success}
              </>
            )}
          </button>
        </motion.form>
        <div className="mt-10 flex justify-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-110 hover:text-fuchsia-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-foreground/50">{t.footer}</p>
      </div>
    </section>
  );
}