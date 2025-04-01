"use client"

import { motion } from "framer-motion"
import { Download, Award, BookOpen, Code, Coffee } from "lucide-react"

const About = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your CV file in the public folder
    link.download = "YourName_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Stats data
  const stats = [
    { icon: <Code size={24} />, value: "50+", label: "Projects Completed" },
    { icon: <Coffee size={24} />, value: "1000+", label: "Cups of Coffee" },
    { icon: <Award size={24} />, value: "10+", label: "Awards Received" },
    { icon: <BookOpen size={24} />, value: "5+", label: "Years Experience" },
  ]

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <div className="w-full h-[500px] bg-gradient-to-br from-green-500/20 to-transparent rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black border border-green-500 rounded-lg p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="flex justify-center text-green-500 mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                About Me
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl font-bold"
              >
                I'm <span className="text-green-500">AgyemangDev</span>, a Full Stack Developer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-gray-400"
              >
                With over 3 years of experience in web and mobile development, I specialize in creating responsive,
                user-friendly applications that solve real-world problems. My passion lies in crafting clean, efficient
                code and delivering exceptional user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-gray-400"
              >
                I've worked with a diverse range of clients, from startups to established enterprises, helping them
                achieve their digital goals through innovative solutions and strategic thinking.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md flex items-center gap-2 transition-colors duration-300"
                >
                  Download CV <Download size={18} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The path that led me to where I am today</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Timeline item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-green-500 bg-black"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <div className="text-green-500 font-bold">2018 - 2020</div>
                    <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                    <p className="text-gray-400">
                      Started my career as a Frontend Developer at TechCorp, working on responsive web applications and
                      e-commerce platforms.
                    </p>
                  </div>
                  <div className="md:pl-12"></div>
                </div>
              </motion.div>

              {/* Timeline item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-green-500 bg-black"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2"></div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <div className="text-green-500 font-bold">2020 - 2022</div>
                    <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
                    <p className="text-gray-400">
                      Expanded my skills to become a Full Stack Developer at InnovateTech, working on complex web
                      applications and APIs.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Timeline item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-green-500 bg-black"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <div className="text-green-500 font-bold">2022 - Present</div>
                    <h3 className="text-xl font-bold mb-2">Senior Developer</h3>
                    <p className="text-gray-400">
                      Currently working as a Senior Developer at FutureSoft, leading teams and architecting solutions
                      for enterprise clients.
                    </p>
                  </div>
                  <div className="md:pl-12"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About

