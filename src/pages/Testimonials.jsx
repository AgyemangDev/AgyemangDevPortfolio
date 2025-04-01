"use client"

import { motion } from "framer-motion"
import TestimonialCard from "../components/TestimonialCard"

const Testimonials = () => {
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
    {
      id: 3,
      name: "Emily Johnson",
      role: "CTO at InnovateTech",
      content:
        "I was impressed by the developer's ability to quickly understand our complex requirements and deliver a solution that perfectly met our needs. Their code quality and documentation were outstanding.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Founder at DesignStudio",
      content:
        "The developer's attention to design details and user experience was exceptional. They not only implemented our designs perfectly but also suggested improvements that enhanced the overall product.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Sarah Wilson",
      role: "Project Manager at WebSolutions",
      content:
        "We've worked with many developers over the years, but this one stands out for their professionalism, technical skills, and ability to deliver under tight deadlines. Would definitely work with them again.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "David Lee",
      role: "Marketing Director at GrowthCo",
      content:
        "The developer created a website that not only looks great but also performs exceptionally well. Our conversion rates have increased significantly since the launch. Highly recommended!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What clients and colleagues have to say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Testimonials

