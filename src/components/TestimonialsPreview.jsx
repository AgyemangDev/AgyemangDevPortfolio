"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Quote } from "lucide-react"
import TestimonialCard from "./TestimonialCard"

const TestimonialsPreview = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      role: "Product Manager at TechCorp",
      content:
        "Working with this developer was a fantastic experience. They delivered the project on time and exceeded our expectations with their attention to detail and problem-solving skills.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "John Doe",
      role: "CEO at StartupX",
      content:
        "An exceptional developer who transformed our vision into reality. Their technical expertise and communication skills made the development process smooth and efficient.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Quote size={40} className="text-green-500 rotate-180" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500/10 font-medium rounded-md transition-colors duration-300"
          >
            View All Testimonials <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsPreview

