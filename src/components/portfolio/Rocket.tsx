import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioContext";
import { flight } from "../../lib/flight";

const SECTION_IDS = ["hero", "about", "skills", "coding-activity", "projects", "timeline", "testimonials", "resume", "contact"] as const;
const SECTION_LABELS = {
  en: { hero: "Launch pad", about: "About", skills: "Skills", "coding-activity": "Coding stats", projects: "Projects", timeline: "Journey", testimonials: "Reviews", resume: "Resume", contact: "Contact" },
  fr: { hero: "Rampe de lancement", about: "À propos", skills: "Compétences", "coding-activity": "Activité", projects: "Projets", timeline: "Parcours", testimonials: "Avis", resume: "CV", contact: "Contact" },
} as const;

const MAX_SPEED = 26; // px/frame at 60fps
const BOOST = 2.2;

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

// A rocket you can pilot down the page: W/S or ↑/↓ to thrust, A/D or ←/→ to steer, Shift to boost.
// Normal wheel/touch scrolling still works; the rocket and starfield react to whatever speed you have.
export function Rocket() {
  const { lang } = usePortfolio();
  const rocketRef = useRef<HTMLDivElement>(null);
  const flameRef = useRef<SVGGElement>(null);
  const speedRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [sector, setSector] = useState<(typeof SECTION_IDS)[number]>("hero");
  const [cruise, setCruise] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const [desktop, setDesktop] = useState(false);
  const cruiseRef = useRef(false);
  cruiseRef.current = cruise;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const keys = new Set<string>();
    let thrust = 0; // -1..1 from keys, eased
    let steerTarget = 0;
    let steer = 0;
    let mouse = 0;
    let lastY = window.scrollY;
    let vel = 0;
    let raf = 0;
    let frame = 0;
    let last = performance.now();

    const down = (e: KeyboardEvent) => {
      if (isTyping(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (["w", "s", "a", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", "shift"].includes(k)) {
        if (k.startsWith("arrow")) e.preventDefault();
        keys.add(k);
        setHintVisible(false);
        if (k === "w" || k === "s" || k === "arrowup" || k === "arrowdown") setCruise(false);
      }
    };
    const up = (e: KeyboardEvent) => keys.delete(e.key.toLowerCase());
    const blur = () => keys.clear();
    const onMouse = (e: MouseEvent) => (mouse = (e.clientX / window.innerWidth - 0.5) * 2);
    const onWheel = () => {
      setCruise(false);
      setHintVisible(false);
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const f = Math.min((now - last) / 16.667, 3); // frame-rate independent
      last = now;
      frame++;

      const fwd = keys.has("w") || keys.has("arrowup") ? 1 : 0;
      const back = keys.has("s") || keys.has("arrowdown") ? 1 : 0;
      let want = fwd - back;
      if (!want && cruiseRef.current) want = 0.55;
      thrust += (want - thrust) * Math.min(1, 0.06 * f);
      if (Math.abs(thrust) < 0.01) thrust = 0;

      if (thrust) {
        const speed = MAX_SPEED * thrust * (keys.has("shift") ? BOOST : 1) * f;
        window.scrollBy({ top: speed, behavior: "instant" as ScrollBehavior });
        const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        if (atEnd && thrust > 0) setCruise(false);
      }

      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      vel += (dy / f - vel) * Math.min(1, 0.2 * f);
      flight.velocity = reduced ? 0 : vel;

      const steerKey = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
      steerTarget = steerKey || mouse * 0.7;
      steer += (steerTarget - steer) * Math.min(1, 0.07 * f);
      flight.steer = reduced ? 0 : steer;

      const rocket = rocketRef.current;
      if (rocket) {
        const sway = Math.sin(now / 900) * 3;
        rocket.style.transform = `translate3d(${steer * 38}vw, ${sway - Math.min(Math.abs(vel), 30) * 0.6}px, 0) rotate(${steer * 16 + (vel < -1 ? -4 : 0)}deg)`;
      }
      const flame = flameRef.current;
      if (flame) {
        const power = Math.min(1, Math.max(0, vel) / 18);
        const flicker = 0.85 + Math.random() * 0.3;
        flame.style.transform = `scaleY(${(0.35 + power * 1.6) * flicker})`;
        flame.style.opacity = String(0.55 + power * 0.45);
      }

      // HUD (cheap DOM writes, throttled)
      if (frame % 6 === 0) {
        if (speedRef.current) speedRef.current.textContent = String(Math.round(Math.abs(vel) * 60 * 0.8));
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      }
      if (frame % 15 === 0) {
        const mid = window.innerHeight * 0.4;
        let current: (typeof SECTION_IDS)[number] = "hero";
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= mid) current = id;
        }
        setSector((s) => (s === current ? s : current));
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("wheel", onWheel);
      flight.velocity = 0;
      flight.steer = 0;
    };
  }, []);

  const labels = SECTION_LABELS[lang];

  return (
    <>
      {/* Rocket */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-30 flex justify-center" aria-hidden>
        <div ref={rocketRef} className="origin-bottom scale-[0.6] will-change-transform md:scale-100">
          <svg width="64" height="120" viewBox="0 0 64 120" fill="none">
            <defs>
              <linearGradient id="rk-body" x1="0" x2="1">
                <stop offset="0" stopColor="#e5e7eb" />
                <stop offset="1" stopColor="#9ca3af" />
              </linearGradient>
              <linearGradient id="rk-flame" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="0.25" stopColor="#67e8f9" />
                <stop offset="0.7" stopColor="#a78bfa" />
                <stop offset="1" stopColor="#a78bfa00" />
              </linearGradient>
            </defs>
            <g ref={flameRef} style={{ transformOrigin: "32px 82px", transition: "opacity .1s" }}>
              <path d="M24 82 Q32 128 40 82 Z" fill="url(#rk-flame)" />
            </g>
            <path d="M32 4 C46 22 48 48 44 82 H20 C16 48 18 22 32 4Z" fill="url(#rk-body)" />
            <path d="M32 4 C40 14 43 24 44 34 H20 C21 24 24 14 32 4Z" fill="#d946ef" />
            <circle cx="32" cy="52" r="8" fill="#0f172a" stroke="#67e8f9" strokeWidth="2.5" />
            <circle cx="30" cy="50" r="2.5" fill="#67e8f9" opacity="0.7" />
            <path d="M20 66 L6 88 L20 82Z M44 66 L58 88 L44 82Z" fill="#a21caf" />
            <rect x="26" y="80" width="12" height="5" rx="1.5" fill="#4b5563" />
          </svg>
        </div>
      </div>

      {/* HUD */}
      <div className="pointer-events-none fixed bottom-5 left-5 z-30 hidden w-52 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl md:block">
        <div className="eyebrow flex items-center justify-between text-[0.6rem] text-foreground/50">
          <span>{lang === "fr" ? "Secteur" : "Sector"}</span>
          <span>
            <span ref={speedRef}>0</span> km/s
          </span>
        </div>
        <div className="mt-1 font-display text-lg font-semibold tracking-tight">{labels[sector]}</div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div ref={barRef} className="h-full origin-left rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>

      {/* Controls hint + autopilot */}
      <div className="fixed bottom-5 right-5 z-30 hidden flex-col items-end gap-2 md:flex">
        {desktop && hintVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="pointer-events-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-foreground/70 backdrop-blur-xl"
          >
            <div className="eyebrow mb-2 text-[0.6rem] text-fuchsia-300">{lang === "fr" ? "Pilotez la fusée" : "Pilot the rocket"}</div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <Keys k={["W", "S"]} /> <span>{lang === "fr" ? "propulser / freiner" : "thrust / brake"}</span>
              <Keys k={["A", "D"]} /> <span>{lang === "fr" ? "diriger" : "steer"}</span>
              <Keys k={["Shift"]} /> <span>{lang === "fr" ? "turbo" : "boost"}</span>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => {
            setCruise((c) => !c);
            setHintVisible(false);
          }}
          aria-pressed={cruise}
          className={`rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-xl transition ${
            cruise ? "border-fuchsia-400/60 bg-fuchsia-500/20 text-white" : "border-white/15 bg-black/40 text-foreground/80 hover:bg-white/10"
          }`}
        >
          {cruise ? (lang === "fr" ? "■ Arrêter le pilote auto" : "■ Stop autopilot") : lang === "fr" ? "▶ Pilote automatique" : "▶ Autopilot"}
        </button>
      </div>
    </>
  );
}

function Keys({ k }: { k: string[] }) {
  return (
    <span className="flex gap-1">
      {k.map((x) => (
        <kbd key={x} className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[0.65rem] text-foreground">
          {x}
        </kbd>
      ))}
    </span>
  );
}
