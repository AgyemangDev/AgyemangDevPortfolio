"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"
import AgyemangDev from "../assets/images/AgyemangDev.jpg"

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "agyemangdev_cv.pdf"
    link.download = "AgyemangDev_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium"
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Crafting Digital <span className="text-green-500">Experiences</span> That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-400 text-lg max-w-lg"
            >
            I’m a software engineer specializing in building modern, responsive web and mobile applications with a strong focus on user experience, scalability, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md flex items-center gap-2 transition-colors duration-300"
              >
                Download CV <Download size={18} />
              </button>

              <Link
                to="/projects"
                className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500/10 font-medium rounded-md flex items-center gap-2 transition-colors duration-300"
              >
                View Projects <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-[400px] sm:h-[500px] bg-gradient-to-br from-green-500/20 to-transparent rounded-lg flex items-center justify-center">
              <img
                src={AgyemangDev}
                alt="Developer Portrait"
                className="max-h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

