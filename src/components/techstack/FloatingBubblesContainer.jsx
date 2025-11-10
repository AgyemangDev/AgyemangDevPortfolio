"use client";

import { Cpu } from "lucide-react";
import FloatingTechBubble from "../FloatingTechBubble";

const FloatingBubblesContainer = ({ technologies }) => {
  const floatingTechs = technologies.slice(0, 8).map((tech) => ({
    ...tech,
    size: Math.random() * 60 + 40,
    initialPosition: {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    },
    speed: {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    },
  }));

  return (
    <div className="relative w-full h-full rounded-full bg-black border border-green-500/30 overflow-hidden">
      {floatingTechs.map((tech, index) => (
        <FloatingTechBubble
          key={`${tech.name}-${index}`}
          tech={tech}
          initialPosition={tech.initialPosition}
          speed={tech.speed}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <Cpu size={60} className="text-green-500" />
      </div>
    </div>
  );
};

export default FloatingBubblesContainer;
