import { motion } from "framer-motion";
// Small SVG spacecraft that flies across the screen on load, then parks in the hero.
export function Plane() {
  return (
    <motion.div
      className="pointer-events-none absolute z-20"
      initial={{ x: "-10vw", y: "20vh", rotate: 15, opacity: 0 }}
      animate={{
        x: ["-10vw", "40vw", "70vw", "78vw"],
        y: ["20vh", "8vh", "18vh", "22vh"],
        rotate: [15, 5, 12, 8],
        opacity: [0, 1, 1, 0.85],
      }}
      transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1], times: [0, 0.35, 0.75, 1] }}
    >
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <defs>
          <linearGradient id="planeGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="trailGrad" x1="1" x2="0">
            <stop offset="0" stopColor="rgba(167,139,250,0.9)" />
            <stop offset="1" stopColor="rgba(167,139,250,0)" />
          </linearGradient>
        </defs>
        <path d="M0 36 L36 34 L36 38 Z" fill="url(#trailGrad)" />
        <path
          d="M28 36 L56 24 L64 30 L46 40 L56 48 L48 52 L38 44 L30 48 L26 44 L32 38 Z"
          fill="url(#planeGrad)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="0.6"
        />
        <circle cx="52" cy="34" r="1.6" fill="#fff" />
      </svg>
    </motion.div>
  );
}
