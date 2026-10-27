import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";

type ProjectItem = {
  title: string;
  description: string;
  long: string;
  tech: readonly string[];
  image: string;
  type: "web" | "mobile" | "other";
  liveUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
};
type Filter = "all" | ProjectItem["type"];

const FILTER_LABELS = {
  en: { all: "All", web: "Web", mobile: "Mobile", other: "Other", view: "View details", featured: "Featured" },
  fr: { all: "Tous", web: "Web", mobile: "Mobile", other: "Autre", view: "Voir le détail", featured: "À la une" },
} as const;

const TYPE_STYLE: Record<ProjectItem["type"], string> = {
  mobile: "from-fuchsia-400 to-pink-400",
  web: "from-cyan-300 to-sky-400",
  other: "from-amber-300 to-orange-400",
};

// Links in the content data sometimes omit the protocol.
const abs = (url: string) => (/^https?:\/\//.test(url) ? url : `https://${url}`);

export function Projects() {
  const { t, lang } = usePortfolio();
  const L = FILTER_LABELS[lang];
  const items = t.projects.items as unknown as ProjectItem[];
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<ProjectItem | null>(null);

  const filters = useMemo(
    () => (["all", "web", "mobile", "other"] as Filter[]).filter((f) => f === "all" || items.some((p) => p.type === f)),
    [items],
  );
  const shown = items.filter((p) => filter === "all" || p.type === filter);

  // Lock page scroll and allow Esc while the detail sheet is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle sub={t.projects.subtitle}>{t.projects.title}</SectionTitle>

        <div
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="tablist"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black"
                  : "border-white/15 bg-white/5 text-foreground/75 hover:bg-white/10"
              }`}
            >
              {L[f]}
              <span className="ml-2 font-mono text-xs opacity-60">
                {f === "all" ? items.length : items.filter((p) => p.type === f).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={items.indexOf(p)}
                featured={filter === "all" && i === 0}
                labels={L}
                onOpen={() => setActive(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ y: 60, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="glass relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-3xl bg-[#0b0b1c]/95 p-2 sm:max-h-[85vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.image}
                alt={active.title}
                decoding="async"
                className="aspect-[16/10] w-full rounded-2xl object-cover object-top sm:h-72 sm:aspect-auto"
              />
              <div className="p-5 sm:p-6">
                <span className={`eyebrow bg-gradient-to-r ${TYPE_STYLE[active.type]} bg-clip-text text-[0.65rem] text-transparent`}>
                  {FILTER_LABELS[lang][active.type]}
                </span>
                <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{active.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/80">{active.long}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tech.map((x) => (
                    <span key={x} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                      {x}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ProjectActions project={active} t={t} />
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2.5 text-white backdrop-blur"
                aria-label={t.projects.close}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const primaryBtn =
  "rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white";
const ghostBtn = "rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold";

function ProjectActions({ project, t }: { project: ProjectItem; t: any }) {
  const links: { href: string; label: string; primary: boolean }[] = [];
  if (project.iosUrl) links.push({ href: project.iosUrl, label: t.projects.downloadIos, primary: true });
  if (project.androidUrl) links.push({ href: project.androidUrl, label: t.projects.downloadAndroid, primary: !project.iosUrl });
  if (project.liveUrl) links.push({ href: abs(project.liveUrl), label: t.projects.viewLive, primary: links.length === 0 });
  return (
    <>
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={l.primary ? primaryBtn : ghostBtn}>
          {l.label}
        </a>
      ))}
    </>
  );
}

function ProjectCard({
  project,
  index,
  featured,
  labels,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  featured: boolean;
  labels: (typeof FILTER_LABELS)["en" | "fr"];
  onOpen: () => void;
}) {
  // Cursor-following spotlight (mouse only; touch devices skip it).
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className={featured ? "sm:col-span-2" : ""}
    >
      <button
        onClick={onOpen}
        onPointerMove={onMove}
        aria-label={`${labels.view}: ${project.title}`}
        className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:outline-2 focus-visible:outline-fuchsia-400 active:scale-[0.99] ${
          featured ? "lg:flex-row" : ""
        }`}
      >
        {/* spotlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(217,70,239,0.16), transparent 60%)" }}
        />

        <div className={`relative overflow-hidden ${featured ? "aspect-[16/10] lg:aspect-auto lg:w-3/5" : "aspect-[16/10]"}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider backdrop-blur">
            <span className={`bg-gradient-to-r ${TYPE_STYLE[project.type]} bg-clip-text text-transparent`}>{labels[project.type]}</span>
          </span>
          {featured && (
            <span className="absolute right-3 top-3 rounded-full bg-fuchsia-500/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
              ★ {labels.featured}
            </span>
          )}
        </div>

        <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? "lg:w-2/5 lg:justify-center" : ""}`}>
          <span className="font-mono text-xs text-foreground/40">{String(index + 1).padStart(2, "0")}</span>
          <h3 className={`mt-1 font-bold ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed text-foreground/65 ${featured ? "line-clamp-5" : "line-clamp-3"}`}>
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, featured ? 5 : 4).map((x) => (
              <span key={x} className="rounded-md bg-white/[0.07] px-2 py-1 font-mono text-[0.65rem] text-foreground/75">
                {x}
              </span>
            ))}
            {project.tech.length > (featured ? 5 : 4) && (
              <span className="px-1 py-1 font-mono text-[0.65rem] text-foreground/40">+{project.tech.length - (featured ? 5 : 4)}</span>
            )}
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-300 transition group-hover:gap-3">
            {labels.view}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </button>
    </motion.article>
  );
}
