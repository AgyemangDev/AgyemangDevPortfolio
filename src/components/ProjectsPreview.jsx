"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Globe, Smartphone } from "lucide-react"
import ProjectCard from "./ProjectCard"

import Mallzonix from "../assets/images/mallzonix.png";
import IRCDashboard from "../assets/images/ircdashboard.png";
import Hostelhubb from "../assets/images/hostelhubb.png";
import KNUSTAttendance from "../assets/images/knustattendanceapp.png";

const webProjects = [
  {
    id: 1,
    title: "MallZonix E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration",
    image: Mallzonix,
    tags: ["React.js", "Firebase", "Firestore", "Paystack", "TailwindCSS", "Vercel", "Tawk.to Chatbot/AI"],
    link: "https://mallzonix.vercel.app/",
  },
  {
    id: 2,
    title: "IRC Dashboard",
    description: "A dashboard for International Research Consortium to visualize data by uploading CSV data",
    image: IRCDashboard,
    tags: ["React.js", "Vite", "Material UI", "Tailwind CSS", "Recharts", "Parser(CSV reading)"],
    link: "https://irc-dashboard-eight.vercel.app/",
  },
];

const mobileProjects = [
  {
    id: 3,
    title: "Hostelhubb",
    description: "A mobile app for hostel booking.",
    image: Hostelhubb,
    tags: ["React Native", "Expo", "Firebase", "Context API", "Node.js", "Express", "Node Mailer", "Paystack", "Firestore", "Google Maps"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.Hostelhubb.Hostelhubb",
    appStoreLink: "https://apps.apple.com/us/app/hostelhubb/id6738483533",
  },
  {
    id: 4,
    title: "KNUST Attendance App",
    description: "A mobile solution for tracking student attendance.",
    image: KNUSTAttendance,
    tags: ["React Native", "Expo", "AppWrite", "Map Box", "Node.js", "Express", "Node Mailer", "Geo-Location", "TypeScript", "Native Tailwind"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.elinilesolutions.attendance_knust",
    appStoreLink: "https://apps.apple.com/us/app/knust-attendance/id6741420471?platform=iphone",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work across web and mobile platforms</p>
        </motion.div>

        {/* Web Projects */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center mb-8">
            <Globe size={24} className="text-green-500 mr-2" />
            <h3 className="text-2xl font-bold">Web Applications</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} type="web" />
            ))}
          </div>
        </div>

        {/* Mobile Projects */}
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center mb-8">
            <Smartphone size={24} className="text-green-500 mr-2" />
            <h3 className="text-2xl font-bold">Mobile Applications</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} type="mobile" />
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md transition-colors duration-300">
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsPreview
