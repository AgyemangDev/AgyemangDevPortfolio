"use client"

import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import TechStack from "../components/techstack/TechStack"
import ProjectsPreview from "../components/ProjectsPreview"
import TestimonialsPreview from "../components/TestimonialsPreview"
import ContactCTA from "../components/ContactCTA"
import CodingStats from "../components/CodingStats"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 space-y-16"
    >
      <HeroSection />
      <CodingStats />
      <TechStack />
      <ProjectsPreview />
      <TestimonialsPreview />
      <ContactCTA />
    </motion.div>
  )
}

export default Home
