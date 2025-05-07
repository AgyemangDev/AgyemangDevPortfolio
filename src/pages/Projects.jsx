"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Smartphone } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

import Mallzonix from "../assets/images/mallzonix.png";
import IRCDashboard from "../assets/images/ircdashboard.png";
import Hostelhubb from "../assets/images/hostelhubb.png";
import KNUSTAttendance from "../assets/images/knustattendanceapp.png";
import NextGenTransport from "../assets/images/nextgentransport.png"
import HostelhubbWeb from "../assets/images/hostelhubbwebpage.png"
import HostelhubbAdminApp from "../assets/images/hostelhubbadmin.png"
import GBM from "../assets/images/gbm.png"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  // Sample projects data
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
      id: 7,
      title: "Hostelhubb Website",
      description: "A modern, responsive frontend platform built to promote and streamline hostel discovery and booking for students across Ghana.",
      image: HostelhubbWeb,
      tags: ["React.js", "TailwindCSS","Lucide React", "Vercel", "Tawk.to Chatbot/AI"],
      link: "https://hostelhubb.com",
    },
    {
      id: 2,
      title: "IRC Dashboard",
      description: "A dashboard for International Research Consortium to visualize data by uploading CSV data",
      image: IRCDashboard,
      tags: ["React.js", "Vite", "Material UI", "Tailwind CSS", "Recharts", "Parser(CSV reading)"],
      link: "https://irc-dashboard-eight.vercel.app/",
    },
    {
      id: 6,
      title: "NextGen Transport Services",
      description: "Student bus booking with payment, e-mail notification, E-ticketing",
      image: NextGenTransport,
      tags: ["React.js", "Vite", "Paystack", "Tailwind CSS", "E-mail Tickiting", "CMS"],
      link: "https://nextgentransportsite.vercel.app/",
    },
    {
      id: 6,
      title: "Gyasi Build Mart",
      description: "A dynamic e-commerce platform for the construction industry, offering seamless online shopping and service management.",
      image: GBM,
      tags: [
        "React.js",
        "Vite",
        "Paystack Integration",
        "Tailwind CSS",
        "Email Ticketing",
        "Custom CMS",
        "E-commerce",
        "Responsive Design",
        "Real-time Notifications"
      ],
      link: "https://gyasibuildmart.com",
    }
    
  ];
  
  const mobileProjects = [
    {
      id: 3,
      title: "Hostelhubb",
      description: "A mobile app for hostel booking across Ghana.",
      image: Hostelhubb,
      tags: ["React Native", "Expo", "Firebase","Email-Ticketing", "Context API", "Node.js", "Express", "Node Mailer", "Paystack", "Firestore", "Google Maps","Push Notification"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.Hostelhubb.Hostelhubb",
      appStoreLink: "https://apps.apple.com/us/app/hostelhubb/id6738483533",
    },
    {
      id: 8,
      title: "Hostelhubb Admin",
      description: "A powerful mobile app designed for hostel managers to efficiently manage bookings, facilities, and hostel operations.",
      image: HostelhubbAdminApp,
      tags: ["React Native", "Expo", "Firebase", "Context API", "Node.js", "Express", "Node Mailer", "Paystack", "Firestore", "Google Maps","Backend Services", "Push Notification"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.HostelhubbAdmin.HostelhubbAdmin",
      appStoreLink: "https://apps.apple.com/us/app/hostelhubb-admin/id6738576378",
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

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all" ? [...webProjects, ...mobileProjects] : filter === "web" ? webProjects : mobileProjects

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
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my work across web and mobile platforms</p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-900 rounded-lg p-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === "all" ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("web")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === "web" ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <Globe size={16} className="inline mr-1" /> Web
              </button>
              <button
                onClick={() => setFilter("mobile")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === "mobile" ? "bg-green-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <Smartphone size={16} className="inline mr-1" /> Mobile
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                type={webProjects.includes(project) ? "web" : "mobile"}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects

