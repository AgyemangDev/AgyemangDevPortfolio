import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo, type Variants } from "framer-motion";

// Every image dropped into src/assets/gallery shows up here, sorted by file name.
const modules = import.meta.glob("../../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const SWIPE = 110;
const EXIT: Variants = {
  exit: (dir: number) => ({ x: dir * 420, opacity: 0, rotate: dir * 18, transition: { duration: 0.3 } }),
};

// iMessage / Instagram style deck: drag the top card away to reveal the next one.
export function PhotoStack({ alt }: { alt: string }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i));
  const [exit, setExit] = useState(1);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-14, 14]);

  if (photos.length === 0) return null;

  const rotateDeck = (dir: 1 | -1) => {
    setExit(dir);
    setOrder((o) => (dir === 1 ? [...o.slice(1), o[0]] : [o[o.length - 1], ...o.slice(0, -1)]));
    x.set(0);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > SWIPE || Math.abs(info.velocity.x) > 600) {
      rotateDeck(info.offset.x > 0 ? 1 : -1);
    }
  };

  const visible = order.slice(0, 4);

  return (
    <div
      className="relative mx-auto w-full max-w-sm select-none"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") rotateDeck(1);
        if (e.key === "ArrowLeft") rotateDeck(-1);
      }}
    >
      <div className="relative aspect-[3/4]">
        <AnimatePresence initial={false} custom={exit}>
          {visible
            .map((photoIdx, depth) => ({ photoIdx, depth }))
            .reverse()
            .map(({ photoIdx, depth }) => {
              const top = depth === 0;
              return (
                <motion.div
                  key={photoIdx}
                  custom={exit}
                  drag={top ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.9}
                  onDragEnd={top ? onDragEnd : undefined}
                  style={top ? { x, rotate, zIndex: 10 } : { zIndex: 10 - depth }}
                  initial={{ scale: 0.85, opacity: 0, y: 30 }}
                  animate={{
                    scale: 1 - depth * 0.05,
                    y: depth * 16,
                    rotate: top ? undefined : (depth % 2 ? 1 : -1) * depth * 3,
                    opacity: 1 - depth * 0.12,
                  }}
                  variants={EXIT}
                  exit="exit"
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  whileTap={top ? { cursor: "grabbing" } : undefined}
                  className="glass absolute inset-0 overflow-hidden rounded-3xl p-1.5 shadow-2xl"
                  aria-hidden={!top}
                >
                  <img
                    src={photos[photoIdx]}
                    alt={top ? `${alt} ${photoIdx + 1}/${photos.length}` : ""}
                    draggable={false}
                    loading={depth > 1 ? "lazy" : "eager"}
                    decoding="async"
                    className="pointer-events-none h-full w-full rounded-[1.25rem] object-cover object-center"
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={() => rotateDeck(-1)}
          aria-label="Previous photo"
          className="rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur transition hover:bg-white/10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <div className="flex gap-1.5" aria-hidden>
          {photos.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${i === order[0] ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"}`}
            />
          ))}
        </div>
        <button
          onClick={() => rotateDeck(1)}
          aria-label="Next photo"
          className="rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur transition hover:bg-white/10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
