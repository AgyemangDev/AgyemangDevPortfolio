// components/techstack/techData.js

import Reactjs from "../../assets/icons/reactjs.png";
import ReactNative from "../../assets/icons/reactnative.png";
import Javascript from "../../assets/icons/javascript.png";
import Typescript from "../../assets/icons/typescript.png";
import Node from "../../assets/icons/nodejs.png";
import Tailwind from "../../assets/icons/tailwind.png";
import Git from "../../assets/icons/git.png";
import Mongodb from "../../assets/icons/mongodb.png";
import Firebase from "../../assets/icons/firebase.png";
import Express from "../../assets/icons/express.png";
import Html from "../../assets/icons/html.png";
import CSS from "../../assets/icons/css.png";
import Angular from "../../assets/icons/angular.png";
import Supabase from "../../assets/icons/supabase.png";
import Figma from "../../assets/icons/figma.png";
import Java from "../../assets/icons/java.png";
import Kotlin from "../../assets/icons/kotlin.png";
import SQL from "../../assets/icons/sql.png";
import Materialui from "../../assets/icons/materialui.png";
import Bootstrap from "../../assets/icons/bootstrap.png";
import Appwrite from "../../assets/icons/appwrite.png";
import Paystack from "../../assets/icons/paystack.png";
import VsCode from "../../assets/icons/vscode.png";
import AndroidStudio from "../../assets/icons/androidstudio.png";
import Docker from "../../assets/icons/docker.png";
import Kubernetes from "../../assets/icons/kubernates.png";

// Core web languages first, then platform-specific
export const languages = [
  { name: "JavaScript", imageSrc: Javascript },  // foundation of everything
  { name: "TypeScript", imageSrc: Typescript },  // used across React + Node
  { name: "HTML5",      imageSrc: Html },
  { name: "CSS3",       imageSrc: CSS },
  { name: "Java",       imageSrc: Java },         // Android / backend
  { name: "Kotlin",     imageSrc: Kotlin },       // Android-specific
];

// Most-used framework first, then UI layer, then less core
export const frameworks = [
  { name: "React.js",    imageSrc: Reactjs },     // primary web framework
  { name: "React Native",imageSrc: ReactNative }, // primary mobile framework
  { name: "Express",     imageSrc: Express },     // pairs directly with Node
  { name: "Tailwind CSS",imageSrc: Tailwind },    // primary styling
  { name: "Angular",     imageSrc: Angular },     // secondary web framework
  { name: "Material UI", imageSrc: Materialui },  // component library
  { name: "Bootstrap",   imageSrc: Bootstrap },   // legacy/secondary styling
];

// Primary DB/BaaS first, then secondary, then query language
export const backend = [
  { name: "Node.js",  imageSrc: Node },       // runtime, ties to Express
  { name: "MongoDB",  imageSrc: Mongodb },    // primary DB
  { name: "Firebase", imageSrc: Firebase },   // primary BaaS
  { name: "Supabase", imageSrc: Supabase },   // secondary BaaS
  { name: "SQL",      imageSrc: SQL },        // relational queries
  { name: "Appwrite", imageSrc: Appwrite },   // tertiary BaaS
];

// Daily-use tools first, then specialized/niche
export const tools = [
  { name: "Git",            imageSrc: Git },           // used every day
  { name: "VS Code",        imageSrc: VsCode },        // primary editor
  { name: "Figma",          imageSrc: Figma },         // design handoff
  { name: "Docker",         imageSrc: Docker },        // containerization
  { name: "Kubernetes",     imageSrc: Kubernetes },    // orchestration (pairs with Docker)
  { name: "Android Studio", imageSrc: AndroidStudio }, // mobile-specific
  { name: "Paystack",       imageSrc: Paystack },      // project-specific integration
];

export const allTech = [
  ...languages,
  ...frameworks,
  ...backend,
  ...tools,
];