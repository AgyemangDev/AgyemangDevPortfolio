// LinkedIn recommendations, lightly condensed excerpts (full text is on LinkedIn). Kept in English in both languages.
// To show a real photo, save it as public/avatars/<file> and set `avatar: "/avatars/<file>"`;
// without one, a gradient monogram is rendered.
export interface Review {
  name: string;
  headline: string;
  relation: string;
  date: string;
  quote: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    name: "Jonathan Sossou",
    headline: "UI/UX Designer · Brand Identity",
    relation: "Worked on the same team",
    date: "Oct 2026",
    quote:
      "Working with Nana Agyemang was very enlightening. As a UI/UX Designer, finding a developer who's on the same page, who can faithfully code every screen from the design stage to the live version, and who takes smart initiatives is truly a pleasure. He's a talented developer who works quickly and is an excellent team player, and I'm convinced he'll accomplish great things.",
  },
  {
    name: "Computer Science Society, KNUST",
    headline: "Student society",
    relation: "Was Gyamfi's teacher",
    date: "Oct 2025",
    quote:
      "The Computer Science Society, KNUST, proudly recognizes and recommends one of our most exceptional and influential members, Gyamfi Nana Agyemang, widely known as AgyemangDev. He has been a pillar of innovation, mentorship, and leadership within our community, and served as Vice President of the Science Students' Association (SCISA). He spearheaded several initiatives, including HostelHubb, a platform that lets students find, view, and book hostels in and around KNUST, and is leading development of the SCISA Multipurpose App. His motto: “Coding the Future One Line at a Time.” We wholeheartedly recommend him for any opportunity that celebrates innovation, leadership, and a relentless pursuit of impact.",
  },
  {
    name: "Godfred Mireku Owusu",
    headline: "Software & AI Engineer · Backend & Full-Stack",
    relation: "Was Gyamfi's mentor",
    date: "Oct 2025",
    quote:
      "I began mentoring him shortly after he gained admission to KNUST, and it was evident from the start that he possessed an uncommon level of curiosity, determination, and intellectual agility. His ability to translate ideas into practical, efficient, and innovative solutions reflects not only his technical competence but also his creativity and problem-solving mindset. He is, without question, one of the most promising and talented young individuals I have ever mentored. I wholeheartedly recommend him for any opportunity that seeks a brilliant, dedicated, and forward-thinking software engineer.",
  },
  {
    name: "Umair Atique",
    headline: "UI/UX Designer · Graphic Designer · Branding",
    relation: "Studied together at Junia",
    date: "Oct 2025",
    quote:
      "I've had the pleasure of studying Software Engineering alongside Agyemang at Junia, and he's been nothing short of a great teammate and friend. He has strong teamwork skills, always contributing positively and helping keep projects on track. He is talented in software development, with experience building both mobile applications and web apps, and he's open-minded, tolerant, and always understanding of people from different backgrounds.",
  },
  {
    name: "Kelvin Adjei",
    headline: "Junior Developer at IntegraXP",
    relation: "Studied together",
    date: "Nov 2024",
    quote:
      "Over the years, I've seen him grow into a visionary who uses technology to tackle real-world challenges, and his work on HostelHubb is a perfect example of his ingenuity and determination. The effort he has invested in understanding the needs of both students and hostel managers is remarkable — it's a testament to his ability to think beyond coding and deliver real, impactful solutions. He excels in his own pursuits and uplifts those around him, whether through mentorship or by inspiring others to think big.",
  },
  {
    name: "Obrempong Kwabena Osei-Wusu",
    headline: "Tratech Head, Ghana Engineering Students' Association, KNUST",
    relation: "Studied together",
    date: "Oct 2024",
    quote:
      "A highly skilled and dedicated full-stack developer with remarkable proficiency in React. His attention to detail, problem-solving ability, and deep understanding of modern web development principles have consistently set him apart. He brings a thoughtful approach to UI/UX design, efficiently debugs and improves existing codebases, and is a great team player who communicates effectively with developers, designers, and stakeholders. I highly recommend him for any development project or role.",
  },
  {
    name: "Oheneba Ntim",
    headline: "Robotics · IoT · UI/UX · Mobile & Web Development",
    relation: "Studied together",
    date: "Oct 2024",
    quote:
      "I had the pleasure of studying Computer Science alongside Gyamfi, and I can confidently say he is an exceptional leader and programmer. As the Course Representative for our cohort, he consistently demonstrated strong leadership, guiding our class with professionalism and always being available to support others. His programming skills are outstanding — I've personally seen him excel in both front-end and back-end projects, and in group work he brings out the best in everyone.",
  },
  {
    name: "Bright Kumedzro",
    headline: "Data-Driven Product Designer / Manager",
    relation: "Worked together on different teams",
    date: "Oct 2024",
    quote:
      "I had the pleasure of working with Agyemang during the International Process Optimization Challenge, where we improved logistics and supply chain solutions for a delivery and warehousing company. His development expertise was crucial, especially his proficiency in interface development using React.js. He created an environment that encouraged open communication and innovative problem-solving under pressure, and engaged with people from diverse backgrounds, bringing together perspectives that fueled the success of the project.",
  },
];
