"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Globe, Smartphone } from "lucide-react"
import ProjectCard from "./ProjectCard"
import {webProjects,mobileProjects} from "../assets/Data"

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work across web and mobile platforms</p>
        </motion.div>

        {/* Web Projects */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center mb-8">
            <Globe size={24} className="text-green-500 mr-2" />
            <h3 className="text-2xl font-bold">Web Applications</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} type="web" />
            ))}
          </div>
        </div>

        {/* Mobile Projects */}
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center mb-8">
            <Smartphone size={24} className="text-green-500 mr-2" />
            <h3 className="text-2xl font-bold">Mobile Applications</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} type="mobile" />
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md transition-colors duration-300">
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsPreview
