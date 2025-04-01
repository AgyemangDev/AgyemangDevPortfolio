"use client"

import { motion } from "framer-motion"
import { ExternalLink, Download } from "lucide-react"

const ProjectCard = ({ project, index, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300"
    >
      <div className="relative h-auto overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {type === "web" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black text-sm font-medium rounded-md transition-colors duration-300"
          >
            View Project <ExternalLink size={16} />
          </a>
        ) : (
          <div className="flex gap-3">
            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-black text-sm font-medium rounded-md transition-colors duration-300"
            >
              <Download size={16} /> Play Store
            </a>
            <a
              href={project.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 border border-green-500 text-green-500 hover:bg-green-500/10 text-sm font-medium rounded-md transition-colors duration-300"
            >
              <Download size={16} /> App Store
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
