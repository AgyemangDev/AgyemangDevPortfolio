import Ghafra_Web from "../assets/images/ghafra_web.png";
import Ghafra_Mobile from "../assets/images/ghafra_mobile.png";
import KCE_Web from "../assets/images/kce_website.png";
import quantumMechanics from "../assets/images/quantum_mechanics.png";
import Hostelhubb_Mobile from "../assets/images/hostelhubb_mobile.png";
import Knust_attendance from "../assets/images/knust_attendance.png";
import nextgenTransport from "../assets/images/nextgentransport.png";
import hostelhubb_web from "../assets/images/hostelhubbweb.png";
export const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      timeline: "Journey",
      projects: "Projects",
      testimonials: "Reviews",
      resume: "Resume",
      contact: "Contact",
    },

    hero: {
      greeting: "Hello, I'm",
      name: "Gyamfi Nana Agyemang",
      roles: [
        "Full-Stack Software Engineer",
        "AI Engineer",
        "Mobile Developer",
        "DevOps Engineer",
        "Software Engineer",
      ],
      tagline:
    "I don't hand off and disappear — from idea to launch, I stay in the room, building scalable web, mobile, and AI-powered systems from first line of code to production, across education, healthcare, and digital communities.",
      ctaPrimary: "View my work",
      ctaSecondary: "Contact me",
    },

    about: {
      title: "About me",
bio:
        "My path spans three countries: a Computer Science degree in Ghana, a Software Engineering degree in France, and an internship in Belgium — experiences that taught me to build for real users across language and cultural gaps. Today I lead engineering for Ghafra, connecting Ghanaian and French communities, and co-founded HostelHubb, a student accommodation startup.",
      bio2:
        "Technically, I ship web, mobile, and AI-powered products end to end — React, Next.js, and React Native on the frontend; Node.js, Firebase, PostgreSQL, and Supabase on the backend; OpenAI API and Scikit-learn for AI features — with DevOps and analytics in the mix when needed. Beyond code, I care about the people side: mentoring, translating technical decisions for non-technical stakeholders, and working fluently across English and French in remote, cross-cultural teams.",
      stats: [
        { value: 4, suffix: "+", label: "Years Experience" },
        { value: 10, suffix: "+", label: "Projects Built" },
        { value: 3, suffix: "", label: "Countries" },
        { value: 1, suffix: "", label: "Active Startup (HostelHubb)" },
      ],
    },

    skills: {
      title: "Skills & tools",
      subtitle: "Technologies I use to build modern systems",
      groups: [
        {
          name: "Languages",
          items: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "Kotlin",
            "C++",
            "SQL",
            "HTML5",
            "CSS3",
          ],
        },
        {
          name: "Frontend",
          items: [
            "React",
            "Next.js",
            "Vue",
            "Angular",
            "Tailwind CSS",
            "Bootstrap",
            "Material UI",
            "Framer Motion",
          ],
        },
        {
          name: "Mobile",
          items: ["React Native", "Expo", "Android Studio"],
        },
        {
          name: "Backend",
          items: ["Node.js", "Express.js", "Spring Boot", "Flask", "REST API", "GraphQL"],
        },
        {
          name: "Databases & BaaS",
          items: ["Firebase", "Firestore", "MongoDB", "PostgreSQL", "Supabase", "Appwrite"],
        },
        {
          name: "AI & Machine Learning",
          items: [
            "OpenAI API",
            "Scikit-learn",
            "Pandas",
            "Speech-to-Text",
            "Text-to-Speech",
            "Machine Learning",
            "Prompt Engineering",
          ],
        },
        {
          name: "DevOps & Infrastructure",
          items: [
            "Docker",
            "Docker Compose",
            "Kubernetes",
            "Nginx",
            "Git",
            "GitHub",
            "Vercel",
            "Render",
            "Linux",
            "Bash",
          ],
        },
        {
          name: "Data & Business",
          items: [
            "Google BigQuery",
            "Data Quality",
            "Data Analytics",
            "KPI Reporting",
            "Business Development",
            "Storytelling",
          ],
        },
        {
          name: "Design & Tools",
          items: ["Figma", "VS Code", "Paystack"],
        },
        {
          name: "Soft Skills",
          items: [
            "Cross-Cultural Communication",
            "Bilingual (EN/FR)",
            "Leadership",
            "Mentoring",
            "Community Building",
            "Storytelling",
            "Adaptability",
            "Problem Solving",
          ],
        },
      ],
    },

    timeline: {
      title: "My journey",
      subtitle: "Education, internships & experience",
      items: [
        {
          year: "2026 - Present",
          title: "Lead Full-Stack Engineer",
          org: "Ghafra (France & Ghana Association)",
          description:
            "Leading development of web and mobile platforms connecting communities across France and Ghana.",
        },
        {
          year: "2026",
          title: "Software Engineering Intern",
          org: "Tiinatii.io (Belgium)",
          description:
            "Worked on production mobile and web features in an international engineering team.",
        },
        {
          year: "2025 - 2027",
          title: "MSc Software Engineering",
          org: "Junia ISEN Lille, France",
          description:
            "Advanced studies in software engineering, cloud systems, distributed computing, and AI systems.",
        },
        {
          year: "2025 - 2026",
          title: "Erasmus+ Student",
          org: "France",
          description:
            "International academic exchange focused on software engineering and modern system design.",
        },
        {
          year: "2024 - Present",
          title: "Co-Founder & Lead Engineer",
          org: "HostelHubb",
          description:
            "Built a student accommodation platform with booking, payments, video listings, and service integration.",
        },
        {
          year: "2023 - 2024",
          title: "Mobile Developer",
          org: "MobiCare",
          description:
            "Built a healthcare app connecting pregnant women to doctors and nurses for consultations.",
        },
        {
          year: "2022",
          title: "BSc Computer Science",
          org: "KNUST (Ghana)",
          description:
            "Studied core computer science: algorithms, databases, systems, networking, and AI foundations.",
        },
      ],
    },

 projects: {
      title: "Featured Projects",
      subtitle: "Products and solutions I've built across healthcare, education, AI, and digital platforms.",
      viewLive: "Live Demo",
      downloadIos: "Download on iOS",
      downloadAndroid: "Download on Android",
      close: "Close",
      items: [
        {
          title: "HostelHubb",
          description:
            "A digital accommodation platform helping students discover, reserve hostels with integrated booking, storage, and transport services.",
          long:
            "HostelHubb is a full-stack accommodation platform designed for university students. The platform streamlines hostel discovery through short-form video previews, secure online booking, digital payments, storage reservations, porter services, and property management dashboards. I led the software architecture, backend development, mobile application, and cloud infrastructure using modern web technologies.",
          tech: ["Escrow Payment","Apple & Google Auth","AI Chatbot", "Email Receipts","React Native","Supabase", "Expo","Rest API", "Firebase", "Firestore", "Cloud Storage", "Node.js", "TypeScript", "Paystack", "Push Notifications"],
          image: Hostelhubb_Mobile,
          type: "mobile",
          iosUrl: "https://apps.apple.com/us/app/hostelhubb/id6738483533",
          androidUrl: "https://play.google.com/store/apps/details?id=com.Hostelhubb.Hostelhubb",
        },
        {
          title: "Tiinatii",
          description:
            "Cross-platform mobile application developed during my Software Engineering internship in Belgium.",
          long:
            "Contributed to the development of production-ready mobile features, API integration, authentication, state management, and scalable application architecture while collaborating within an international engineering team.",
          tech: ["React Native", "TypeScript", "REST API", "Expo", "Git"],
          image: "/projects/placeholder.png",
          type: "other",
        },

        //GHAFRA Web Project
        {
          title: "Ghafra Web Platform",
          description: "Digital platform for the Ghana France Association.",
          long:
            "Leading the development of a modern web platform that enables members to manage events, memberships, communications, and community engagement through a centralized digital experience.",
          tech: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
          image: Ghafra_Web,
          type: "web",
          liveUrl: "https://ghafra.com",
        },

        //Ghafra Mobile Project
        {
          title: "Ghafra Mobile",
          description: "AI-powered mobile application for the Ghana France Association community.",
          long: "Built and deployed a live mobile platform used by 100+ Ghanaian members in France, providing community communication, payments, accommodation services, and AI-powered French learning. Led full-stack development using React Native, Node.js, and Supabase, implementing authentication (Google, Apple, email), Stripe payments, and real-time notification systems. Integrated AI-driven French learning features including chat-based tutoring, role-play conversations, grammar correction, speech-to-text, and text-to-speech, alongside i18n support (English/French). Delivered a unified platform that reduced manual communication overhead, improved financial tracking transparency, and provided a free alternative to paid language-learning tools.",
          tech: [
            "AI (Groq)",
            "Speech-to-Text",
            "React Native",
            "Expo",
            "TypeScript",
            "Rest API",
            "Node.js",
            "Supabase",
            "Stripe",
            "Google Auth",
            "Apple Auth",
            "i18n",
            "Text-to-Speech",
            "Push Notifications",
          ],
          image: Ghafra_Mobile,
          type: "mobile",
          iosUrl: "https://apps.apple.com/us/app/ghafra/id6761885599",
          androidUrl: "https://play.google.com/store/apps/details?id=com.ghafra.ghafra",
        },
                //hostelhubb web project
        {
  title: "HostelHubb Web",
  description: "Informational and marketing website for the HostelHubb accommodation platform.",
  long:
    "Designed and developed a responsive informational website for HostelHubb to introduce and promote a student-focused accommodation ecosystem in Ghana. The platform provides clear information about HostelHubb services, including hostel booking, escrow-based payments, student transport coordination, storage solutions, and arrival assistance. Built to improve platform visibility and trust, the website serves as the primary onboarding and awareness channel for users and accommodation providers. Focused on clean UI/UX, SEO optimization, and fast performance to ensure accessibility across devices and improve search discoverability.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SEO Optimization",
    "Responsive Design",
    "Web UI/UX Design",
    "REST API Integration",
  ],
  image: hostelhubb_web,
  type: "web",
 liveUrl: "hostelhubb.com",
},
//KCE Church Website Project
        {
          title: "KCE Church Website",
          description: "Modern church management system with digital administration tools.",
          long:
            "Developed a responsive and SEO-optimized church web platform using Next.js, Tailwind CSS, and Supabase. Built features for sermon sharing, member communication, church information access, and YouTube live streaming integration.Implemented backend services for content management, contact forms (EmailJS), and secure data handling using Supabase.Optimized SEO and performance to improve search visibility and ensure fast, responsive user experience across devices.",
         tech: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Node.js",
  "EmailJS",
  "Cloudinary",
  "YouTube API",
  "SEO Optimization",
  "Framer Motion",
],
          image: KCE_Web,
          type: "web",
          liveUrl: "https://kceonline.org",
        },
        //KNUST Attendance Project
        {
          title: "KNUST Attendance",
          description:
            "Location-based attendance platform for secure classroom verification and attendance management.",
          long:
            "Developed a secure attendance platform that leverages Google Geolocation and device verification to accurately validate student presence within designated lecture zones. Implemented geofencing to prevent proxy attendance by restricting check-ins to authorized classroom locations while binding attendance records to registered devices. Built features for attendance history, course management, real-time notifications, and automated attendance validation, providing lecturers and students with a reliable and paperless attendance solution. The platform streamlined attendance tracking, reduced manual verification, and improved the integrity and efficiency of classroom attendance management.",
          tech: [
            "Google Geolocation API",
          "GPS & Geofencing",
            "React Native",
            "Expo",
            "TypeScript",
            "Node.js",
            "REST API",
            "Google Maps",
            "Push Notifications",
            "Authentication",
            "Device Verification",
          ],
          image: Knust_attendance,
          type: "mobile",
          iosUrl: "https://apps.apple.com/hr/app/knust-attendance/id6741420471",
          androidUrl: "https://play.google.com/store/apps/details?id=com.elinilesolutions.attendance_knust&hl=en",
        },
        //NextGen Transport Project
        {
  title: "NextGen Transport Service",
  description: "Web-based bus transport management system for fleet coordination, bookings, and logistics operations.",
  long:
    "Designed and developed a web-based transport management platform for coordinating bus operations, passenger bookings, and logistics workflows. The system provides structured transport scheduling, route management, and service coordination for users and operators. Focused on building a scalable transport interface that simplifies mobility access, improves operational visibility, and streamlines communication between passengers and transport administrators. The platform is optimized for service reliability, operational efficiency, and structured digital booking workflows in a transport ecosystem.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "REST API",
    "Transport Management System (TMS)",
    "Fleet & Route Management",
    "Booking System Architecture",
    "Web UI/UX Design",
    "Responsive Design",
    "Database Integration"
  ],
  image: nextgenTransport,
  type: "web",
liveUrl: "https://nextgentransportsite-git-main-agyemang166s-projects.vercel.app/",
},
        //Quantum Mechanics Visualization
        {
  title: "Quantum Mechanics Toolkit",
  description: "Interactive quantum physics simulation platform for visualizing wavefunctions and Schrödinger dynamics.",
  long:
    "Built a full-stack quantum mechanics simulation platform for visualizing core physics concepts including wavefunction evolution, quantum tunneling, potential barriers, and energy eigenstates. Developed a high-performance Python backend using FastAPI implementing numerical solutions to the time-dependent Schrödinger equation via the Crank–Nicolson method, Gaussian wave packet propagation, and infinite square well eigenstate solvers. Designed configurable quantum systems with multiple potential types (free particle, barrier, step, and infinite wall) and precise boundary condition control to simulate realistic quantum behavior. Built an interactive frontend using Next.js and React with real-time visualization of probability densities, wavefunctions, and energy spectra using Three.js, Recharts, and KaTeX for mathematical rendering. Implemented comprehensive automated testing to validate wavefunction normalization, numerical stability, and eigenvalue correctness, ensuring scientific accuracy of simulations.",
  tech: [
    "Python",
    "FastAPI",
    "NumPy",
    "SciPy",
    "Matplotlib",
    "Pydantic",
    "PyTest",
    "Quantum Simulation",
    "Crank–Nicolson Method",
    "Wavefunction Modeling",
    "REST API",
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "Recharts",
    "KaTeX",
    "Tailwind CSS",
  ],
  image: quantumMechanics, 
  type: "web",
  iosUrl: "",
  androidUrl: "",
},
      ],
    },

    testimonials: {
      title: "Reviews",
      items: [
        {
          quote:
            "Professional recommendations will be added soon as I collect feedback from collaborators and clients.",
          name: "Coming Soon",
          role: "Professional Reference",
          company: "",
          avatar: "/avatars/placeholder.png",
        },
        {
          quote:
            "Feedback from internships, projects, and academic collaborations will appear here.",
          name: "Coming Soon",
          role: "Project Collaborator",
          company: "",
          avatar: "/avatars/placeholder.png",
        },
        {
          quote:
            "Testimonials are currently being gathered from teams I've worked with.",
          name: "Coming Soon",
          role: "Engineering Partner",
          company: "",
          avatar: "/avatars/placeholder.png",
        },
      ],
    },

    resume: {
      title: "Resume",
      subtitle: "Download my CV",
      blurb:
        "Grab a PDF copy of my résumé in English or French — same content, tailored language.",
      updated: "Updated 2026",
      downloadEn: "Download CV (EN)",
      downloadFr: "Download CV (FR)",
    },

    contact: {
      title: "Contact me",
      subtitle: "Let's build something together",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully.",
      contactEmail: "gyamfiagyemang999@gmail.com",
    },
     codingStats: {
      title: "My Coding Activity",
      subtitle: "Live stats from WakaTime",
      description:
        "Every keystroke I write in my editor is tracked automatically — this isn't a resume claim, it's an unfiltered, automatically logged record of time spent building.",
      loggedSince: "logged since",
      activeCodingDays: "active coding days",
      dailyAverage: "Daily Average",
      bestDayEver: "Best Day Ever",
      currentStreak: "Current Streak",
      last30Days: "Last 30 Days",
      day: "day",
      days: "days",
      less: "Less",
      more: "More",
      loading: "Loading coding activity…",
      swipeHint: "Swipe or scroll horizontally to see full history →",
    },

    footer: "Gyamfi Nana Agyemang © 2026 — Full-Stack & AI Engineer",
  },

  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      timeline: "Parcours",
      projects: "Projets",
      testimonials: "Avis",
      resume: "CV",
      contact: "Contact",
    },

    hero: {
      greeting: "Bonjour, je suis",
      name: "Gyamfi Nana Agyemang",
      roles: [
        "Ingénieur Logiciel Full-Stack",
        "Ingénieur IA",
        "Développeur Mobile",
        "Ingénieur DevOps",
        "Ingénieur Logiciel",
      ],
  tagline:
        "Je ne transmets pas le projet pour disparaître ensuite — de l'idée au lancement, je reste impliqué, en construisant des systèmes web, mobiles et propulsés par l'IA, scalables, à travers l'éducation, la santé et les communautés numériques.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Me contacter",
    },

    about: {
      title: "À propos de moi",
bio:
        "Mon parcours s'étend sur trois pays : un diplôme en informatique au Ghana, un diplôme en ingénierie logicielle en France, et un stage en Belgique — des expériences qui m'ont appris à concevoir pour de vrais utilisateurs, au-delà des barrières de langue et de culture. Aujourd'hui, je dirige l'ingénierie chez Ghafra, une plateforme qui connecte les communautés ghanéenne et française, et j'ai cofondé HostelHubb, une startup dédiée au logement étudiant.",
      bio2:
        "Techniquement, je conçois des produits web, mobiles et propulsés par l'IA de bout en bout — React, Next.js et React Native côté frontend ; Node.js, Firebase, PostgreSQL et Supabase côté backend ; OpenAI API et Scikit-learn pour les fonctionnalités d'IA — avec DevOps et analytics en renfort selon les besoins. Au-delà du code, j'accorde une grande importance à l'humain : mentorat, traduction des décisions techniques pour les parties prenantes non techniques, et travail en anglais comme en français au sein d'équipes distantes et multiculturelles.",
      stats: [
        { value: 4, suffix: "+", label: "Années d'expérience" },
        { value: 10, suffix: "+", label: "Projets réalisés" },
        { value: 3, suffix: "", label: "Pays" },
        { value: 1, suffix: "", label: "Startup active (HostelHubb)" },
      ],
    },

    skills: {
      title: "Compétences & outils",
      subtitle: "Les technologies que j'utilise pour construire des systèmes modernes",
      groups: [
        {
          name: "Langages",
          items: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "Kotlin",
            "C++",
            "SQL",
            "HTML5",
            "CSS3",
          ],
        },
        {
          name: "Frontend",
          items: [
            "React",
            "Next.js",
            "Vue",
            "Angular",
            "Tailwind CSS",
            "Bootstrap",
            "Material UI",
            "Framer Motion",
          ],
        },
        {
          name: "Mobile",
          items: ["React Native", "Expo", "Android Studio"],
        },
        {
          name: "Backend",
          items: ["Node.js", "Express.js", "Spring Boot", "Flask", "REST API", "GraphQL"],
        },
        {
          name: "Bases de données & BaaS",
          items: ["Firebase", "Firestore", "MongoDB", "PostgreSQL", "Supabase", "Appwrite"],
        },
        {
          name: "IA & Machine Learning",
          items: [
            "OpenAI API",
            "Scikit-learn",
            "Pandas",
            "Speech-to-Text",
            "Text-to-Speech",
            "Machine Learning",
            "Prompt Engineering",
          ],
        },
        {
          name: "DevOps & Infrastructure",
          items: [
            "Docker",
            "Docker Compose",
            "Kubernetes",
            "Nginx",
            "Git",
            "GitHub",
            "Vercel",
            "Render",
            "Linux",
            "Bash",
          ],
        },
        {
          name: "Données & Business",
          items: [
            "Google BigQuery",
            "Data Quality",
            "Data Analytics",
            "KPI Reporting",
            "Business Development",
            "Storytelling",
          ],
        },
        {
          name: "Design & Outils",
          items: ["Figma", "VS Code", "Paystack"],
        },
        {
          name: "Savoir-être",
          items: [
            "Communication interculturelle",
            "Bilingue (EN/FR)",
            "Leadership",
            "Mentorat",
            "Animation de communauté",
            "Storytelling",
            "Adaptabilité",
            "Résolution de problèmes",
          ],
        },
      ],
    },

    timeline: {
      title: "Mon parcours",
      subtitle: "Études, stages et expérience",
      items: [
        {
          year: "2026 - Présent",
          title: "Lead Ingénieur Full-Stack",
          org: "Ghafra (Association France & Ghana)",
          description:
            "Direction du développement des plateformes web et mobiles reliant les communautés en France et au Ghana.",
        },
        {
          year: "2026",
          title: "Stagiaire Ingénieur Logiciel",
          org: "Tiinatii.io (Belgique)",
          description:
            "Contribution à des fonctionnalités mobiles et web en production au sein d'une équipe internationale.",
        },
        {
          year: "2025 - 2027",
          title: "Master en Ingénierie Logicielle",
          org: "Junia ISEN Lille, France",
          description:
            "Études avancées en ingénierie logicielle, systèmes cloud, informatique distribuée et systèmes d'IA.",
        },
        {
          year: "2025 - 2026",
          title: "Étudiant Erasmus+",
          org: "France",
          description:
            "Échange académique international axé sur l'ingénierie logicielle et la conception de systèmes modernes.",
        },
        {
          year: "2024 - Présent",
          title: "Co-fondateur & Lead Ingénieur",
          org: "HostelHubb",
          description:
            "Création d'une plateforme de logement étudiant avec réservation, paiements, annonces vidéo et services intégrés.",
        },
        {
          year: "2023 - 2024",
          title: "Développeur Mobile",
          org: "MobiCare",
          description:
            "Développement d'une application de santé mettant en relation des femmes enceintes avec des médecins et infirmières.",
        },
        {
          year: "2022",
          title: "Licence en Informatique",
          org: "KNUST (Ghana)",
          description:
            "Formation fondamentale en informatique : algorithmes, bases de données, systèmes, réseaux et bases de l'IA.",
        },
      ],
    },

projects: {
      title: "Projets phares",
      subtitle: "Produits et solutions que j'ai conçus dans la santé, l'éducation, l'IA et les plateformes numériques.",
      viewLive: "Démo en ligne",
      downloadIos: "Télécharger sur iOS",
      downloadAndroid: "Télécharger sur Android",
      close: "Fermer",
      items: [
        {
          title: "HostelHubb",
          description:
            "Une plateforme numérique d'hébergement aidant les étudiants à découvrir et réserver des logements avec réservation, stockage et transport intégrés.",
          long:
            "HostelHubb est une plateforme d'hébergement full-stack conçue pour les étudiants. Elle simplifie la découverte de logements via des vidéos courtes, la réservation sécurisée en ligne, les paiements numériques, la réservation de stockage, les services de portage et des tableaux de bord de gestion immobilière. J'ai dirigé l'architecture logicielle, le développement backend, l'application mobile et l'infrastructure cloud avec des technologies web modernes.",
          tech: ["Paiement séquestre", "Authentification Apple & Google", "Chatbot IA", "Reçus par email", "React Native", "Supabase", "Expo", "Rest API", "Firebase", "Firestore", "Cloud Storage", "Node.js", "TypeScript", "Paystack", "Notifications push"],
          image: Hostelhubb_Mobile,
          type: "mobile",
          iosUrl: "https://apps.apple.com/us/app/hostelhubb/id6738483533",
          androidUrl: "https://play.google.com/store/apps/details?id=com.Hostelhubb.Hostelhubb",
        },
        {
          title: "Tiinatii",
          description:
            "Application mobile multiplateforme développée durant mon stage d'ingénierie logicielle en Belgique.",
          long:
            "Contribution au développement de fonctionnalités mobiles prêtes pour la production, intégration d'API, authentification, gestion d'état et architecture évolutive au sein d'une équipe d'ingénierie internationale.",
          tech: ["React Native", "TypeScript", "REST API", "Expo", "Git"],
          image: "/projects/placeholder.png",
          type: "other",
        },

        // Projet Web GHAFRA
        {
          title: "Plateforme Web Ghafra",
          description: "Plateforme numérique pour l'association Ghana France.",
          long:
            "Direction du développement d'une plateforme web moderne permettant aux membres de gérer événements, adhésions, communications et engagement communautaire via une expérience numérique centralisée.",
          tech: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
          image: Ghafra_Web,
          type: "web",
          liveUrl: "https://ghafra.com",
        },

        // Projet Mobile Ghafra
        {
          title: "Ghafra Mobile",
          description: "Application mobile propulsée par l'IA pour la communauté de l'association Ghana France.",
          long: "Conception et déploiement d'une plateforme mobile en production utilisée par plus de 100 membres ghanéens en France, offrant communication communautaire, paiements, services d'hébergement et apprentissage du français assisté par IA. Direction du développement full-stack avec React Native, Node.js et Supabase, incluant l'authentification (Google, Apple, email), les paiements Stripe et un système de notifications en temps réel. Intégration de fonctionnalités d'apprentissage du français par IA incluant le tutorat conversationnel, les mises en situation, la correction grammaticale, la reconnaissance vocale et la synthèse vocale, ainsi que le support i18n (anglais/français). Livraison d'une plateforme unifiée réduisant la charge de communication manuelle, améliorant la transparence du suivi financier et offrant une alternative gratuite aux outils d'apprentissage linguistique payants.",
          tech: [
            "IA (Groq)",
            "Reconnaissance vocale",
            "React Native",
            "Expo",
            "TypeScript",
            "Rest API",
            "Node.js",
            "Supabase",
            "Stripe",
            "Authentification Google",
            "Authentification Apple",
            "i18n",
            "Synthèse vocale",
            "Notifications push",
          ],
          image: Ghafra_Mobile,
          type: "mobile",
          iosUrl: "https://apps.apple.com/us/app/ghafra/id6761885599",
          androidUrl: "https://play.google.com/store/apps/details?id=com.ghafra.ghafra",
        },

        // Projet Web HostelHubb
        {
          title: "HostelHubb Web",
          description: "Site vitrine et marketing pour la plateforme d'hébergement HostelHubb.",
          long:
            "Conception et développement d'un site vitrine responsive pour présenter et promouvoir un écosystème d'hébergement dédié aux étudiants au Ghana. La plateforme informe clairement sur les services HostelHubb, incluant la réservation de logements, les paiements sous séquestre, la coordination du transport étudiant, les solutions de stockage et l'assistance à l'arrivée. Conçu pour renforcer la visibilité et la confiance envers la plateforme, le site sert de principal canal d'accueil et de sensibilisation pour les utilisateurs et les prestataires d'hébergement. Axé sur une UI/UX soignée, l'optimisation SEO et la performance pour garantir l'accessibilité sur tous les appareils et améliorer la visibilité dans les moteurs de recherche.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Optimisation SEO",
            "Design responsive",
            "Design UI/UX Web",
            "Intégration REST API",
          ],
          image: hostelhubb_web,
          type: "web",
          liveUrl: "hostelhubb.com",
        },

        // Projet Site Église KCE
        {
          title: "Site de l'église KCE",
          description: "Système moderne de gestion d'église avec outils d'administration numérique.",
          long:
            "Développement d'une plateforme web d'église responsive et optimisée pour le SEO avec Next.js, Tailwind CSS et Supabase. Construction de fonctionnalités pour le partage de sermons, la communication entre membres, l'accès aux informations de l'église et l'intégration de diffusion en direct YouTube. Mise en place de services backend pour la gestion de contenu, les formulaires de contact (EmailJS) et le traitement sécurisé des données via Supabase. Optimisation du SEO et de la performance pour améliorer la visibilité dans les moteurs de recherche et garantir une expérience utilisateur rapide et responsive sur tous les appareils.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Node.js",
            "EmailJS",
            "Cloudinary",
            "YouTube API",
            "Optimisation SEO",
            "Framer Motion",
          ],
          image: KCE_Web,
          type: "web",
          liveUrl: "https://kceonline.org",
        },

        // Projet KNUST Attendance
        {
          title: "KNUST Attendance",
          description:
            "Plateforme de présence basée sur la géolocalisation pour la vérification sécurisée en salle de classe.",
          long:
            "Développement d'une plateforme de présence sécurisée exploitant la géolocalisation Google et la vérification d'appareil pour valider avec précision la présence des étudiants dans les zones de cours désignées. Mise en place d'un géorepérage pour empêcher la présence par procuration en restreignant les enregistrements aux emplacements de salle de classe autorisés, tout en liant les enregistrements de présence aux appareils enregistrés. Construction de fonctionnalités pour l'historique de présence, la gestion des cours, les notifications en temps réel et la validation automatisée de la présence, offrant aux enseignants et étudiants une solution de présence fiable et sans papier. La plateforme a simplifié le suivi de présence, réduit la vérification manuelle et amélioré l'intégrité et l'efficacité de la gestion de présence en classe.",
          tech: [
            "Google Geolocation API",
            "GPS & Géorepérage",
            "React Native",
            "Expo",
            "TypeScript",
            "Node.js",
            "REST API",
            "Google Maps",
            "Notifications push",
            "Authentification",
            "Vérification d'appareil",
          ],
          image: Knust_attendance,
          type: "mobile",
          iosUrl: "https://apps.apple.com/hr/app/knust-attendance/id6741420471",
          androidUrl: "https://play.google.com/store/apps/details?id=com.elinilesolutions.attendance_knust&hl=en",
        },

        // Projet NextGen Transport
        {
          title: "NextGen Transport Service",
          description: "Système web de gestion de transport en bus pour la coordination de flotte, les réservations et les opérations logistiques.",
          long:
            "Conception et développement d'une plateforme web de gestion de transport pour coordonner les opérations de bus, les réservations des passagers et les flux logistiques. Le système offre une planification de transport structurée, une gestion des itinéraires et une coordination de service pour les utilisateurs et les opérateurs. Axé sur la construction d'une interface de transport évolutive simplifiant l'accès à la mobilité, améliorant la visibilité opérationnelle et fluidifiant la communication entre passagers et administrateurs de transport. La plateforme est optimisée pour la fiabilité du service, l'efficacité opérationnelle et des flux de réservation numérique structurés dans un écosystème de transport.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "REST API",
            "Système de gestion de transport (TMS)",
            "Gestion de flotte et d'itinéraires",
            "Architecture de système de réservation",
            "Design UI/UX Web",
            "Design responsive",
            "Intégration de base de données"
          ],
          image: nextgenTransport,
          type: "web",
          liveUrl: "https://nextgentransportsite-git-main-agyemang166s-projects.vercel.app/",
        },

        // Quantum Mechanics Visualization
        {
          title: "Quantum Mechanics Toolkit",
          description: "Plateforme interactive de simulation de physique quantique pour visualiser les fonctions d'onde et la dynamique de Schrödinger.",
          long:
            "Construction d'une plateforme full-stack de simulation de mécanique quantique pour visualiser des concepts fondamentaux de physique, incluant l'évolution des fonctions d'onde, l'effet tunnel quantique, les barrières de potentiel et les états propres d'énergie. Développement d'un backend Python haute performance avec FastAPI, implémentant des solutions numériques à l'équation de Schrödinger dépendante du temps via la méthode de Crank-Nicolson, la propagation de paquets d'ondes gaussiens et des solveurs d'états propres pour puits infini. Conception de systèmes quantiques configurables avec plusieurs types de potentiels (particule libre, barrière, marche et paroi infinie) et un contrôle précis des conditions aux limites pour simuler un comportement quantique réaliste. Construction d'un frontend interactif avec Next.js et React offrant une visualisation en temps réel des densités de probabilité, des fonctions d'onde et des spectres d'énergie via Three.js, Recharts et KaTeX pour le rendu mathématique. Mise en place de tests automatisés complets pour valider la normalisation des fonctions d'onde, la stabilité numérique et la justesse des valeurs propres, garantissant la précision scientifique des simulations.",
          tech: [
            "Python",
            "FastAPI",
            "NumPy",
            "SciPy",
            "Matplotlib",
            "Pydantic",
            "PyTest",
            "Simulation quantique",
            "Méthode de Crank-Nicolson",
            "Modélisation de fonctions d'onde",
            "REST API",
            "Next.js",
            "React",
            "TypeScript",
            "Three.js",
            "Recharts",
            "KaTeX",
            "Tailwind CSS",
          ],
          image: quantumMechanics,
          type: "web",
          iosUrl: "",
          androidUrl: "",
        },
      ],
    },

    testimonials: {
      title: "Avis",
      items: [
        {
          quote:
            "Des recommandations professionnelles seront bientôt ajoutées, au fur et à mesure des retours de collaborateurs et clients.",
          name: "Bientôt disponible",
          role: "Référence professionnelle",
          company: "",
          avatar: "/avatars/placeholder.png",
        },
        {
          quote:
            "Les retours issus de stages, projets et collaborations académiques apparaîtront ici.",
          name: "Bientôt disponible",
          role: "Collaborateur de projet",
          company: "",
          avatar: "/avatars/placeholder.png",
        },
        {
          quote:
            "Les témoignages sont en cours de collecte auprès des équipes avec lesquelles j'ai travaillé.",
          name: "Bientôt disponible",
          role: "Partenaire d'ingénierie",
          company: "",
          avatar: "/avatars/placeholder.png",
        },
      ],
    },

    resume: {
      title: "CV",
      subtitle: "Téléchargez mon CV",
      blurb:
        "Récupérez une copie PDF de mon CV en anglais ou en français — même contenu, langue adaptée.",
      updated: "Mise à jour : 2026",
      downloadEn: "Télécharger le CV (EN)",
      downloadFr: "Télécharger le CV (FR)",
    },

    contact: {
      title: "Me contacter",
      subtitle: "Construisons quelque chose ensemble",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer",
      sending: "Envoi...",
      success: "Message envoyé avec succès.",
      contactEmail: "gyamfiagyemang999@gmail.com",
    },
codingStats: {
      title: "Mon activité de code",
      subtitle: "Statistiques en direct depuis WakaTime",
      description:
        "Chaque frappe que j'écris dans mon éditeur est suivie automatiquement — ce n'est pas une simple affirmation de CV, c'est un enregistrement brut et automatique du temps passé à coder.",
      loggedSince: "enregistrées depuis",
      activeCodingDays: "jours de code actifs",
      dailyAverage: "Moyenne quotidienne",
      bestDayEver: "Meilleur jour",
      currentStreak: "Série en cours",
      last30Days: "30 derniers jours",
      day: "jour",
      days: "jours",
      less: "Moins",
      more: "Plus",
      loading: "Chargement de l'activité de code…",
      swipeHint: "Faites glisser ou défilez horizontalement pour voir l'historique complet →",
    },
    footer: "Gyamfi Nana Agyemang © 2026 — Ingénieur Full-Stack & IA",
  },
} as const;

export type Lang = keyof typeof content;