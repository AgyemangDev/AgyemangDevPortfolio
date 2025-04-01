"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Cpu } from "lucide-react"
import FloatingTechBubble from "./FloatingTechBubble"
import Figma from "../assets/icons/figma.png"
import ReactNative from "../assets/icons/reactnative.png"
import Appwrite from "../assets/icons/appwrite.png"
import CSS from "../assets/icons/css.png"
import Express from "../assets/icons/express.png"
import Node from "../assets/icons/nodejs.png"
import Firebase from "../assets/icons/firebase.png"
import Git from "../assets/icons/git.png"
import Html from "../assets/icons/html.png"
import Javascript from "../assets/icons/javascript.png"
import Mongodb from "../assets/icons/mongodb.png"
import Tailwind from "../assets/icons/tailwind.png"
import Materialui from "../assets/icons/materialui.png"
import Bootstrap from "../assets/icons/bootstrap.png"
import Paystack from "../assets/icons/paystack.png"

// Component for a single floating tech bubble with image

// Component for the floating bubbles container
const FloatingBubblesContainer = ({ technologies }) => {
  // Only use a subset of technologies for floating bubbles
  const floatingTechs = technologies.slice(0, 8).map(tech => ({
    ...tech,
    size: Math.random() * 60 + 40,
    initialPosition: {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    },
    speed: {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5
    }
  }))

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
  )
}

// Component for 3D rotating tech cube
const RotatingTechCube = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="perspective-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 360 : 0,
          rotateX: isHovered ? 10 : 0,
          z: isHovered ? 20 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
        className="bg-gray-900 border border-green-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover:border-green-500 transition-colors duration-300 preserve-3d"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: isHovered ? "0 10px 30px rgba(0, 255, 0, 0.2)" : "none"
        }}
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
  )
}

// Main Tech Stack component
const TechStack = () => {
  // List of technologies with image paths
  const technologies = [
    { name: "React", imageSrc: ReactNative },
    { name: "Node.js", imageSrc: Node },
    { name: "JavaScript", imageSrc: Javascript },
    { name: "HTML5", imageSrc: Html},
    { name: "CSS3", imageSrc: CSS },
    { name: "Tailwind CSS", imageSrc: Tailwind },
    { name: "MaterialUI", imageSrc: Materialui },
    { name: "Bootstrap", imageSrc: Bootstrap },
    { name: "MongoDB", imageSrc: Mongodb },
    { name: "Express", imageSrc: Express },
    { name: "Git", imageSrc: Git },
    { name: "Figma", imageSrc: Figma },
    { name: "Firebase", imageSrc: Firebase },
    { name: "Appwrite", imageSrc: Appwrite },
    { name: "Paystack", imageSrc: Paystack },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 flex justify-center h-80"
          >
            <FloatingBubblesContainer technologies={technologies} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {technologies.map((tech, index) => (
              <RotatingTechCube 
                key={tech.name} 
                tech={tech} 
              />
            ))}
          </motion.div>
        </div>
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
  )
}

export default TechStack