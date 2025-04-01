"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 border border-green-500/20 rounded-lg p-6 hover:border-green-500 transition-all duration-300"
    >
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{testimonial.name}</h4>
          <p className="text-green-500 text-sm">{testimonial.role}</p>
        </div>
        <Quote size={24} className="text-green-500 ml-auto" />
      </div>

      <p className="text-gray-400 italic">"{testimonial.content}"</p>
    </motion.div>
  )
}

export default TestimonialCard

