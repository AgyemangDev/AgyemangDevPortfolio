"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechCategory from "./TechCategory";
import { languages, frameworks, backend, tools } from "../../assets/data/techData";

const CATEGORIES = [
  { label: "All", key: "all" },
  { label: "Languages", key: "languages", items: languages },
  { label: "Frameworks", key: "frameworks", items: frameworks },
  { label: "Backend & DB", key: "backend", items: backend },
  { label: "Tools", key: "tools", items: tools },
];

const TechStack = () => {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const cats = active === "all" ? CATEGORIES.slice(1) : CATEGORIES.filter(c => c.key === active);
    return cats.map(cat => ({
      ...cat,
      items: cat.items.filter(t =>
        !query || t.name.toLowerCase().includes(query.toLowerCase())
      ),
    })).filter(cat => cat.items.length > 0);
  }, [active, query]);

  return (
    <section className="py-20 px-4 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Tech Stack & Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Categorized overview of my core technologies.</p>
        </motion.div>

        {/* Search + filter tabs */}
        <div className="mb-8 flex flex-col gap-4">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search technologies…"
            className="w-full sm:w-72 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
          />
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button key={cat.key} onClick={() => setActive(cat.key)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                  active === cat.key
                    ? "bg-green-500 border-green-500 text-black font-medium"
                    : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category grids */}
        <div className="flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map(cat => (
              <motion.div key={cat.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}>
                <TechCategory title={cat.label} items={cat.items} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No results for "{query}"</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default TechStack;