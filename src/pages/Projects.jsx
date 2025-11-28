"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Smartphone } from "lucide-react"
import ProjectCard from "../components/ProjectCard"
import { webProjects, mobileProjects } from "../assets/data/projects"


const Projects = () => {
  const [filter, setFilter] = useState("all")

  // Sample projects data


  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all" ? [...webProjects, ...mobileProjects] : filter === "web" ? webProjects : mobileProjects

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my work across web and mobile platforms</p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-900 rounded-lg p-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === "all" ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("web")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === "web" ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <Globe size={16} className="inline mr-1" /> Web
              </button>
              <button
                onClick={() => setFilter("mobile")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === "mobile" ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <Smartphone size={16} className="inline mr-1" /> Mobile
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                type={webProjects.includes(project) ? "web" : "mobile"}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects

