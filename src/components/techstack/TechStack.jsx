"use client";

import { motion } from "framer-motion";
import TechCategory from "./TechCategory";
import FloatingBubblesContainer from "./FloatingBubblesContainer";
import { languages, frameworks, backend, tools, allTech } from "../../assets/data/techData";

const TechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Categorized overview of my core technologies and tools.
          </p>
        </motion.div>

        {/* Floating Visual */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 flex justify-center h-80"
          >
            <FloatingBubblesContainer technologies={allTech} />
          </motion.div>
        </div>

        {/* Categories */}
        <TechCategory title="Languages" items={languages} />
        <TechCategory title="Frameworks & Libraries" items={frameworks} />
        <TechCategory title="Backend & Databases" items={backend} />
        <TechCategory title="Tools & Others" items={tools} />
      </div>

      <style jsx global>{`
        .perspective-500 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
