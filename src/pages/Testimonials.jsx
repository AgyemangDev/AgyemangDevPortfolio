"use client"

import { motion } from "framer-motion"
import TestimonialCard from "../components/TestimonialCard"

const Testimonials = () => {
 // Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Obrempong Kwabena Osei-Wusu",
    role: "Python Programmer & Data Analyst",
    content:
      "Skilled, detail-oriented developer with strong React skills and great collaboration—highly recommend working with him.",
  },
  {
    id: 3,
    name: "Derrick Kello Jr",
    role: "Co-founder & Junior Developer, Hostelhubb",
    content:
      "Working with Gyamfi was inspiring—his backend planning, speed, and leadership brought Hostelhubb to life in record time. A true visionary and teammate.",
  },
      {
      id: 8,
      name: " Umair Atique",
      role: "UIUX DESIGNER | GRAPHIC DESIGNER | BRANDING | FIGMA",
      content:
        "I had the pleasure of studying Software Engineering with Agyemang at Junia. He’s a great teammate—collaborative, dependable, and always keeps projects on track. Agyemang is skilled in both web and mobile development, and he brings a positive, open-minded attitude to every team. It’s been a pleasure working with him, and I’m confident he’ll excel wherever he goes." },
  {
    id: 4,
    name: "Joseph E.",
    role: "Project Manager from Ethiopia",
    content:
      "Gyamfi was reliable and delivered his part diligently despite project hurdles.",
  },
  {
    id: 5,
    name: "Pastor Kwame Ahenkora",
    role: "Founder, Mizpah International Church – Ohio",
    content:
      "He built our church site professionally—very supportive and easy to work with.",
  },
  {
    id: 6,
    name: "Gyasi B.",
    role: "Founder, Gyasi Build Mart",
    content:
      "Fantastic ecommerce website—great design and functionality. It boosted my business visibility.",
  },
  {
    id: 7,
    name: "CEO, NextGenTransport System",
    role: "Transport & Logistics Entrepreneur",
    content:
      "Exceptional transport system build. Gyamfi’s work helped improve our operations and client reach.",
  }
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

