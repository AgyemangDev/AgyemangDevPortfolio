"use client";

import RotatingTechCube from "./RotatingTechCube";

const TechCategory = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-6 text-green-400">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {items.map((tech) => (
        <RotatingTechCube key={tech.name} tech={tech} />
      ))}
    </div>
  </div>
);

export default TechCategory;
