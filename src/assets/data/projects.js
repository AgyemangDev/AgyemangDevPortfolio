import Mallzonix from "../images/mallzonix.png"
import IRCDashboard from "../images/ircdashboard.png";
import Hostelhubb from "../images/hostelhubb.png";
import KNUSTAttendance from "../images/knustattendanceapp.png";
import Mizpah from "../images/mizpah.png";
import NextGenTransport from "../images/nextgentransport.png";
import HostelhubbWeb from "../images/hostelhubbwebpage.png";
import HostelhubbAdminApp from "../images/hostelhubbadmin.png";
import GBM from "../images/gbm.png";

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
    id: 7,
    title: "Hostelhubb Website",
    description: "A modern, responsive frontend platform built to promote hostel discovery.",
    image: HostelhubbWeb,
    tags: ["React.js", "TailwindCSS", "Lucide React", "Vercel", "Tawk.to Chatbot/AI"],
    link: "https://hostelhubb.com",
  },
  {
    id: 2,
    title: "IRC Dashboard",
    description: "Data visualization dashboard from uploaded CSV files.",
    image: IRCDashboard,
    tags: ["React.js", "Vite", "Material UI", "Tailwind", "Recharts", "CSV Parser"],
    link: "https://irc-dashboard-eight.vercel.app/",
  },
  {
    id: 6,
    title: "NextGen Transport Services",
    description: "Student bus booking with payments, e-ticketing and notifications.",
    image: NextGenTransport,
    tags: ["React.js", "Vite", "Paystack", "Tailwind CSS", "E-mail Tickiting", "CMS"],
    link: "https://nextgentransportsite.vercel.app/",
  },
  {
    id: 10,
    title: "Gyasi Build Mart",
    description: "E-commerce platform for the construction industry.",
    image: GBM,
    tags: ["React.js", "Vite", "Paystack", "Tailwind", "CMS", "Notifications"],
    link: "https://gyasibuildmart.com",
  }
];

export const mobileProjects = [
  {
    id: 3,
    title: "Hostelhubb",
    description: "A mobile app for hostel booking across Ghana.",
    image: Hostelhubb,
    tags: ["React Native", "Expo", "Firebase", "Email-Ticketing", "Node.js", "Paystack"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.Hostelhubb.Hostelhubb",
    appStoreLink: "https://apps.apple.com/us/app/hostelhubb/id6738483533",
  },
    {
    id: 9,
    title: "Mizpah",
    description: "A mobile app for a church in Ohio with prayer sessions, built with Firebase, React Native, and TypeScript in 2 days.",
    image: Mizpah,
    tags: ["React Native", "Firebase", "TypeScript", "Tailwind"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.hostelhubb.mizpahapp&hl=en",
    appStoreLink: null,
  },
  {
    id: 8,
    title: "Hostelhubb Admin",
    description: "Management platform for hostel managers with advanced controls.",
    image: HostelhubbAdminApp,
    tags: ["React Native", "Expo", "Firebase", "Node.js", "Backend Services"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.HostelhubbAdmin.HostelhubbAdmin",
    appStoreLink: "https://apps.apple.com/us/app/hostelhubb-admin/id6738576378",
  },
  {
    id: 4,
    title: "KNUST Attendance App",
    description: "Mobile attendance tracking system.",
    image: KNUSTAttendance,
    tags: ["React Native", "Expo", "AppWrite", "MapBox", "Geo-Location"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.elinilesolutions.attendance_knust",
    appStoreLink: "https://apps.apple.com/us/app/knust-attendance/id6741420471",
  },
];
