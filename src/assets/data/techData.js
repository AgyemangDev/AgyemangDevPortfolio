// components/techstack/techData.js

// ✅ Icon imports
import Figma from "../../assets/icons/figma.png";
import ReactNative from "../../assets/icons/reactnative.png";
import Appwrite from "../../assets/icons/appwrite.png";
import CSS from "../../assets/icons/css.png";
import Express from "../../assets/icons/express.png";
import Node from "../../assets/icons/nodejs.png";
import Firebase from "../../assets/icons/firebase.png";
import Git from "../../assets/icons/git.png";
import Html from "../../assets/icons/html.png";
import Javascript from "../../assets/icons/javascript.png";
import Mongodb from "../../assets/icons/mongodb.png";
import Tailwind from "../../assets/icons/tailwind.png";
import Materialui from "../../assets/icons/materialui.png";
import Bootstrap from "../../assets/icons/bootstrap.png";
import Paystack from "../../assets/icons/paystack.png";
import Java from "../../assets/icons/java.png";
import Typescript from "../../assets/icons/typescript.png";
import Angular from "../../assets/icons/angular.png";
import SQL from "../../assets/icons/sql.png";
import Reactjs from "../../assets/icons/reactjs.png";
import AndroidStudio from "../../assets/icons/androidstudio.png";
import Kotlin from "../../assets/icons/kotlin.png";
import VsCode from "../../assets/icons/vscode.png";

// ✅ Categories
export const languages = [
  { name: "JavaScript", imageSrc: Javascript },
  { name: "TypeScript", imageSrc: Typescript },
  { name: "Java", imageSrc: Java },
  { name: "HTML5", imageSrc: Html },
  { name: "CSS3", imageSrc: CSS },
  { name: "Kotlin", imageSrc: Kotlin },
];

export const frameworks = [
  { name: "React Native", imageSrc: ReactNative },
  { name: "React.js", imageSrc: Reactjs },
  { name: "Angular", imageSrc: Angular },
  { name: "Express", imageSrc: Express },
  { name: "Tailwind CSS", imageSrc: Tailwind },
  { name: "Material UI", imageSrc: Materialui },
  { name: "Bootstrap", imageSrc: Bootstrap },
];

export const backend = [
  { name: "Node.js", imageSrc: Node },
  { name: "MongoDB", imageSrc: Mongodb },
  { name: "Firebase", imageSrc: Firebase },
  { name: "Appwrite", imageSrc: Appwrite },
  { name: "SQL", imageSrc: SQL },
];

export const tools = [
  { name: "Git", imageSrc: Git },
  { name: "Figma", imageSrc: Figma },
  { name: "Paystack", imageSrc: Paystack },
  { name: "VS Code", imageSrc: VsCode },
  { name: "Android Studio", imageSrc: AndroidStudio },
];

// ✅ Combine everything for bubble animation
export const allTech = [
  ...languages,
  ...frameworks,
  ...backend,
  ...tools,
];
