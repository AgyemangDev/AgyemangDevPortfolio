"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const ContactCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-green-500/20 to-black border border-green-500/30 rounded-2xl p-8 sm:p-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help bring your ideas to life. Whether you need a website, mobile app, or custom
          solution, I'm here to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md transition-colors duration-300"
        >
          Get in Touch <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}

export default ContactCTA

