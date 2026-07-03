import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";
// Brand-ish color per tech for the hover glow
const COLORS: Record<string, string> = {
  React: "#61dafb",
  TypeScript: "#3178c6",
  Tailwind: "#38bdf8",
  "Framer Motion": "#e94991",
  "Next.js": "#ffffff",
  Vite: "#a78bfa",
  "Node.js": "#8cc84b",
  Postgres: "#336791",
  Supabase: "#3ecf8e",
  Prisma: "#5a67d8",
  Redis: "#dc382d",
  GraphQL: "#e10098",
  Figma: "#f24e1e",
  Git: "#f05033",
  Docker: "#2496ed",
  AWS: "#ff9900",
  Vercel: "#ffffff",
  Linear: "#5e6ad2",
};
export function Skills() {
  const { t } = usePortfolio();
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle sub={t.skills.subtitle}>{t.skills.title}</SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.skills.groups.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((it, i) => {
                  const c = COLORS[it] || "#a78bfa";
                  return (
                    <motion.div
                      key={it}
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur transition"
                      style={{
                        boxShadow: `0 0 0 rgba(0,0,0,0)`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${c}55, inset 0 0 12px ${c}22`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${c}88`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                        (e.currentTarget as HTMLElement).style.borderColor = "";
                      }}
                    >
                      <span className="h-2 w-2 rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
                      {it}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
