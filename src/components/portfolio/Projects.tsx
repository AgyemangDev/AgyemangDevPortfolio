import { useState } from "react";
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

export function Projects() {
  const { t } = usePortfolio();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? (t.projects.items[openIdx] as ProjectItem) : null;

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle sub={t.projects.subtitle}>{t.projects.title}</SectionTitle>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <ProjectCard key={p.title} project={p as ProjectItem} onClick={() => setOpenIdx(i)} delay={i * 0.08} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="glass relative max-h-[85vh] w-full max-w-2xl overflow-auto rounded-3xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.image} alt={active.title} className="h-64 w-full rounded-2xl object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{active.title}</h3>
                <p className="mt-3 text-foreground/80">{active.long}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tech.map((x) => (
                    <span key={x} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                      {x}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ProjectActions project={active} t={t} />
                </div>
              </div>
              <button
                onClick={() => setOpenIdx(null)}
                className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white backdrop-blur"
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

function ProjectActions({ project, t }: { project: ProjectItem; t: any }) {
  if (project.type === "mobile") {
    return (
      <>
        {project.iosUrl && (
          <a
            href={project.iosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white"
          >
            {t.projects.downloadIos}
          </a>
        )}
        {project.androidUrl && (
          <a
            href={project.androidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold"
          >
            {t.projects.downloadAndroid}
          </a>
        )}
      </>
    );
  }

  if (project.type === "web" && project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white"
      >
        {t.projects.viewLive}
      </a>
    );
  }

  return null;
}

function ProjectCard({
  project,
  onClick,
  delay,
}: {
  project: ProjectItem;
  onClick: () => void;
  delay: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -14;
    setTilt({ x, y });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 200ms ease-out",
      }}
      className="glass group cursor-pointer overflow-hidden rounded-3xl p-2"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
          {project.type === "mobile" ? "📱 Mobile" : project.type === "web" ? "🌐 Web" : "Other"}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((x) => (
            <span key={x} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide">
              {x}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}