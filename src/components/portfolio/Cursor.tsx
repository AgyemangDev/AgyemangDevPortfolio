import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Custom cursor: dot follows the mouse, ring grows over interactive elements.
export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a,button,[data-cursor='hover'],input,textarea"));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  if (!enabled) return null;
  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] rounded-full bg-white mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
        style={{ width: 8, height: 8 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[100] rounded-full border border-white/70 mix-blend-difference"
        animate={{ x: pos.x - 18, y: pos.y - 18, scale: hover ? 1.8 : 1, opacity: hover ? 0.9 : 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.6 }}
        style={{ width: 36, height: 36 }}
      />
    </>
  );
}
