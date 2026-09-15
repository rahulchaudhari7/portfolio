// ============================================
// PORTFOLIO DATA — Edit this file to update content across the site
// ============================================

export const personalInfo = {
  name: "Rahul Chaudhary",
  roles: [
    "Python Developer",
    "AI/ML Enthusiast",
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver",
  ],
  title: "Computer Science Student | Python Developer | AI/ML Enthusiast",
  email: "chaudharyraul07@gmail.com",
  location: "India",
  bio: `I'm a Computer Science student with a deep interest in Python, Artificial Intelligence, 
  Machine Learning, and Full Stack Web Development. I love turning ideas into working products — 
  from AI-powered learning platforms to full-stack authentication systems. I've led teams in 
  hackathons, collaborated with developers on real-world problems, and I'm constantly exploring 
  new technologies to grow as an engineer.`,
  highlights: [
    "Computer Science Student at Chandigarh University",
    "Currently learning Python, AI & Machine Learning in depth",
    "Strong interest in Full Stack Development (React, Node.js, MongoDB)",
    "Participated in multiple Hackathons as a developer & team lead",
    "Experience leading small dev teams and managing project workflows",
    "Passionate about problem solving, DSA, and building real-world products",
  ],
  resumeUrl: "https://drive.google.com/file/d/1yYjD9UBEH3s2B2NDnQcm9-miPu3KAO_B/view?usp=drive_link",
}

export const socialLinks = {
  github: "https://github.com/rahulchaudhari10",
  linkedin: "https://www.linkedin.com/in/chaudhary-rahul07/",
  email: "mailto:chaudharyraul07@gmail.com",
  leetcode: "https://leetcode.com/u/Rahul_Chaudharii/",
  hackerrank: "https://www.hackerrank.com/profile/24bai71015",
}

// ============================================
// SKILLS
// ============================================
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 82 },
      { name: "React.js", level: 78 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 72 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "NumPy", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "Scikit-Learn", level: 65 },
      { name: "Machine Learning Basics", level: 60 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
    ],
  },
]

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: "ielts-ai-platform",
    title: "AI IELTS Preparation Platform",
    description:
      "An AI-powered IELTS preparation system covering all four modules — Reading, Listening, Writing, and Speaking — with full-length mock tests, automated AI evaluation of writing & speaking responses, and a personalized analytics dashboard to track score improvement over time.",
    image: "/projects/ielts-ai.jpg",
    tech: ["React", "Node.js", "Python", "AI/NLP", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/rahulchaudhari10/ielts-platform",
    demo: "https://ielts-platform-six.vercel.app",
    category: "AI/ML",
    status: "completed",
    featured: true,
  },
  {
    id: "exam-mind-ai",
    title: "ExamMind AI Platform",
    description:
      "An advanced AI-powered exam preparation and intelligent assessment platform offering adaptive mock testing, automated performance analytics, personalized study recommendations, and subject mastery tracking.",
    image: "/projects/exam-mind.jpg",
    tech: ["React", "Python", "AI/ML", "NLP", "Tailwind CSS", "REST API"],
    github: "https://github.com/rahulchaudhari10/exam-mind-ai",
    demo: "https://exam-mind-ai-six.vercel.app",
    category: "AI/ML",
    status: "completed",
    featured: true,
  },
  {
    id: "agent-cart",
    title: "AgentCart — AI Shopping Assistant",
    description:
      "An intelligent autonomous AI agent for e-commerce and smart shopping workflows — enabling conversational product discovery, automated cart operations, comparison engines, and instant checkout assistance.",
    image: "/projects/agent-cart.jpg",
    tech: ["React", "AI Agent", "Tailwind CSS", "Node.js", "Vercel"],
    github: "https://github.com/rahulchaudhari10/agent-cart",
    demo: "https://agent-cart-weld.vercel.app",
    category: "AI/ML",
    status: "completed",
    featured: true,
  },
  {
    id: "nexshop-online",
    title: "NexShop Online E-Commerce",
    description:
      "A production-grade full-stack e-commerce marketplace at nexshoponline.com.np featuring dynamic product catalogs, filtering, cart management, customer accounts, and responsive mobile-first shopping experience.",
    image: "/projects/nexshop.jpg",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/rahulchaudhari10/nexshop",
    demo: "https://www.nexshoponline.com.np",
    category: "Web Development",
    status: "completed",
    featured: true,
  },
  {
    id: "auth-system",
    title: "Full Stack Authentication System",
    description:
      "A secure full-stack login and registration system built with React, Node.js, MongoDB, and JWT — featuring password hashing, protected routes, token refresh, and a clean, responsive UI for sign-up, login, and profile management.",
    image: "/projects/auth-system.jpg",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/rahulchaudhari10/auth-system",
    demo: "https://agent-cart-weld.vercel.app",
    category: "Web Development",
    status: "completed",
    featured: false,
  },
  {
    id: "medical-ai-robotics-research",
    title: "AI Medical Robotics Research",
    description:
      "Research work focused on AI-powered robotics applications in the medical field — exploring how machine learning models and robotic systems can assist in diagnostics, patient monitoring, and automated medical assistance.",
    image: "/projects/medical-ai-robotics.jpg",
    tech: ["Python", "AI/ML", "Robotics", "Research"],
    github: "https://github.com/rahulchaudhari10",
    demo: "",
    category: "Research",
    status: "research",
    featured: false,
    isResearch: true,
  },
  {
    id: "ai-ml-mini-projects",
    title: "AI/ML Mini Projects",
    description:
      "A growing collection of machine learning projects exploring core concepts — including data preprocessing with Pandas & NumPy, classification and regression models with Scikit-Learn, and simple prediction tools applied to real-world datasets.",
    image: "/projects/ai-ml-mini.jpg",
    tech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Jupyter Notebook"],
    github: "https://github.com/rahulchaudhari10",
    demo: "",
    category: "AI/ML",
    status: "in-progress",
    featured: false,
  },
]

export const projectCategories = ["All", "AI/ML", "Web Development", "Research"]

// ============================================
// EXPERIENCE
// ============================================
export const experiences = [
  {
    id: 1,
    role: "Hackathon Team Leader",
    organization: "University Hackathon",
    duration: "2024 - Present",
    responsibilities: [
      "Led a team of developers through ideation, planning, and execution of hackathon projects",
      "Managed project workflow, task delegation, and deadlines under time pressure",
      "Presented final project solutions and demos to judges and panels",
      "Collaborated closely with developers, designers, and mentors to deliver working prototypes",
    ],
  },
]

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering — Computer Science Specialization in AI & Machine Learning",
    institution: "Chandigarh University",
    duration: "2024 - 2028",
    cgpa: "CGPA: 7.84 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence & Machine Learning",
      "Web Technologies",
      "Software Engineering",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Your School Name",
    duration: "2022 - 2024",
    cgpa: "Percentage: 77%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
]

// ============================================
// CERTIFICATIONS
// ============================================
export const certifications = [
  {
    id: 1,
    title: "Python (Basic & Advanced)",
    issuer: "HackerRank",
    date: "2024",
    category: "Python",
    image: "/certificates/python-cert.jpg",
    credentialUrl: "https://www.hackerrank.com/profile/24bai71015",
  },
  {
    id: 2,
    title: "Artificial Intelligence Fundamentals",
    issuer: "Chandigarh University / Dept of CSE (AI/ML)",
    date: "2024",
    category: "AI",
    image: "/certificates/ai-cert.jpg",
    credentialUrl: "https://www.linkedin.com/in/chaudhary-rahul07/",
  },
  {
    id: 3,
    title: "Problem Solving & Data Structures",
    issuer: "LeetCode & HackerRank",
    date: "2024 - 2025",
    category: "Algorithms",
    image: "/certificates/ml-cert.jpg",
    credentialUrl: "https://leetcode.com/u/Rahul_Chaudharii/",
  },
  {
    id: 4,
    title: "Full Stack Web & Cloud Deployment",
    issuer: "Vercel & Modern Web Standards",
    date: "2025",
    category: "Web Development",
    image: "/certificates/webdev-cert.jpg",
    credentialUrl: "https://agent-cart-weld.vercel.app",
  },
]

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements = [
  {
    id: 1,
    title: "Hackathon Participation",
    description: "Participated in multiple hackathons, building functional prototypes under tight deadlines.",
    icon: "trophy",
  },
  {
    id: 2,
    title: "Team Leadership",
    description: "Led development teams during hackathons, managing tasks, timelines, and presentations.",
    icon: "users",
  },
  {
    id: 3,
    title: "Technical Events",
    description: "Actively participated in technical fests, workshops, and coding events at university.",
    icon: "calendar",
  },
  {
    id: 4,
    title: "Coding Challenges",
    description: "Regularly solving DSA and coding problems on LeetCode and HackerRank to sharpen problem-solving skills.",
    icon: "code",
  },
]
