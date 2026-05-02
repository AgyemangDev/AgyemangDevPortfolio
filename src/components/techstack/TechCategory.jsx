"use client";
import RotatingTechCube from "./RotatingTechCube";

const TechCategory = ({ title, items }) => (
  <div>
    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">{title}</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {items.map((tech, i) => (
        <RotatingTechCube key={tech.name} tech={tech} index={i} />
      ))}
    </div>
  </div>
);
export default TechCategory;