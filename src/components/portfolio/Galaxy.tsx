import { useEffect, useRef } from "react";
import { usePortfolio } from "./PortfolioContext";
// Animated star field with mouse parallax.
export function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = usePortfolio();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = 0;
    let mouseY = 0;
    let animId = 0;
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 3 + 0.5, // depth: bigger = closer
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.6 + 0.2,
      tw: Math.random() * 0.02 + 0.005,
    }));
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    const isDark = theme === "dark";
    const bgTop = isDark ? "#050510" : "#f8f7f2";
    const bgBot = isDark ? "#0a0a1f" : "#eeece5";
    const starColor = isDark ? "255,255,255" : "60,60,120";
    const render = () => {
      // Gradient background
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, bgTop);
      g.addColorStop(1, bgBot);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
      for (const s of stars) {
        // parallax offset scaled by depth
        const px = s.x + mouseX * s.z * 15;
        const py = s.y + mouseY * s.z * 15;
        // twinkle
        s.o += s.tw;
        if (s.o > 0.9 || s.o < 0.15) s.tw = -s.tw;
        ctx.beginPath();
        ctx.arc(px, py, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor},${s.o})`;
        ctx.fill();
        // slow drift
        s.x -= 0.05 * s.z;
        if (s.x < -5) s.x = width + 5;
      }
      animId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [theme]);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}
