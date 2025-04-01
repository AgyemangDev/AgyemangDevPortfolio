import Mallzonix from "../assets/images/mallzonix.png";
import IRCDashboard from "../assets/images/ircdashboard.png";
import Hostelhubb from "../assets/images/hostelhubb.png";
import KNUSTAttendance from "../assets/images/knustattendanceapp.png";

export const webProjects = [
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

export const mobileProjects = [
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
