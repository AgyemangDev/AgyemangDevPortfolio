"use client";

import { motion } from "framer-motion";

const RotatingTechCube = ({ tech }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="perspective-500 cursor-pointer"
  >
    <motion.div
      whileHover={{
        rotateY: 360,
        rotateX: 10,
        z: 20,
        boxShadow: "0 10px 30px rgba(0, 255, 0, 0.2)",
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="bg-gray-900 border border-green-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover:border-green-500 transition-colors duration-300 preserve-3d"
    >
      <div className="w-16 h-16 mb-3 flex items-center justify-center">
        <img
          src={tech.imageSrc}
          alt={tech.name}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium">{tech.name}</span>
    </motion.div>
  </motion.div>
);

export default RotatingTechCube;
