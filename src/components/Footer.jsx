"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Link } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/AgyemangDev" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/gyamfi-nana-agyemang-a79179294/" },
    { icon: <Link size={20} />, url: "https://linktr.ee/Agyemangdev" },
    { icon: <Mail size={20} />, url: "mailto:your.gyamfiagyemang999@gmail.com" },
  ]

  return (
    <footer className="bg-black border-t border-green-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © {currentYear} AgyemangDev. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

