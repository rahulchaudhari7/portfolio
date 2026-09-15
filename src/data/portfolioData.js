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
    id: "agent-cart",
    title: "AgentCart — AI Shopping Assistant",
    description:
      "An AI-powered shopping assistant that helps users discover and compare products based on natural-language requirements, budget and preferences.",
    tech: ["React", "Node.js", "Gemini AI", "SerpAPI", "MongoDB", "JavaScript", "Vercel"],
    features: [
      "AI-powered product recommendations",
      "Natural-language shopping queries",
      "Product comparison",
      "Budget-based product discovery",
      "Modern e-commerce interface",
      "Real-world shopping workflow",
    ],
    demo: "https://agent-cart-weld.vercel.app/",
    github: "https://github.com/rahulchaudhari10/agent-cart",
    category: "AI/ML",
    status: "completed",
    featured: true,
    isLive: true,
  },
  {
    id: "nexshop-online",
    title: "NexShop — Nepal E-commerce Platform",
    description:
      "A full-featured Nepal-focused e-commerce platform designed for online product discovery, shopping and order management.",
    tech: ["React / JavaScript", "Node.js", "MongoDB", "REST API", "Vercel"],
    features: [
      "Product browsing",
      "Categories and search",
      "Shopping cart",
      "Wishlist/account features",
      "Nepal-focused e-commerce experience",
      "Responsive shopping interface",
    ],
    demo: "https://www.nexshoponline.com.np/",
    github: "https://github.com/rahulchaudhari10/nexshop",
    category: "Web Development",
    status: "completed",
    featured: true,
    isLive: true,
  },
  {
    id: "exam-mind-ai",
    title: "Exam Mind AI",
    description:
      "An AI-powered learning and exam preparation platform designed to help students prepare smarter with personalized study assistance.",
    tech: ["React", "JavaScript", "AI/LLM integration", "Node.js"],
    features: [
      "AI-assisted learning",
      "Exam preparation",
      "Smart study assistance",
      "Student-focused interface",
      "Interactive learning experience",
    ],
    demo: "https://exam-mind-ai-six.vercel.app/",
    github: "https://github.com/rahulchaudhari10/exam-mind-ai",
    category: "AI/ML",
    status: "completed",
    featured: true,
    isLive: true,
  },
  {
    id: "ielts-platform",
    title: "IELTS Platform",
    description:
      "An interactive IELTS preparation platform providing structured practice and tools for students preparing for the IELTS examination.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "IELTS preparation",
      "Mock-test experience",
      "Practice modules",
      "Student-focused dashboard",
      "Interactive learning interface",
    ],
    demo: "https://ielts-platform-ll2r1ihly-rahultharu.vercel.app/",
    github: "https://github.com/rahulchaudhari10/ielts-platform",
    category: "AI/ML",
    status: "completed",
    featured: true,
    isLive: true,
  },
  {
    id: "auth-system",
    title: "Full Stack Authentication System",
    description:
      "A secure full-stack login and registration system built with React, Node.js, MongoDB, and JWT — featuring password hashing, protected routes, and profile management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "JWT token authentication",
      "Password hashing and salting",
      "Protected user routes",
      "Session management",
    ],
    github: "https://github.com/rahulchaudhari10/auth-system",
    demo: "https://agent-cart-weld.vercel.app/",
    category: "Web Development",
    status: "completed",
    featured: false,
    isLive: false,
  },
  {
    id: "medical-ai-robotics-research",
    title: "AI Medical Robotics Research",
    description:
      "Research work focused on AI-powered robotics applications in the medical field — exploring diagnostics, patient monitoring, and automated medical assistance.",
    tech: ["Python", "AI/ML", "Robotics", "Research"],
    features: [
      "Medical diagnostic ML models",
      "Automated sensor telemetry",
      "Computer vision integration",
      "Clinical workflow optimization",
    ],
    github: "https://github.com/rahulchaudhari10",
    demo: "",
    category: "Research",
    status: "research",
    featured: false,
    isResearch: true,
    isLive: false,
  },
]

export const projectCategories = ["All", "Live Projects", "AI/ML", "Web Development", "Research"]

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
    id: "cert-1",
    title: "KultureHire — Problem Solving with AI and Documentation",
    issuer: "KultureHire",
    date: "September 5, 2026",
    credentialId: "KH-C-9BF670",
    verificationUrl: "https://kulturehire.com/certificate/KH-C-9BF670",
    skills: ["AI", "Problem Solving", "Documentation"],
    category: "AI & Engineering",
  },
  {
    id: "cert-2",
    title: "KultureHire — Generative AI for Beginners: Zero to AI-Ready Professional",
    issuer: "KultureHire Edtech",
    instructor: "Kadhiravan Jayachandiran",
    duration: "3 hours",
    date: "September 8, 2026",
    credentialId: "UC-9bbc1731-f5bb-4247-a06b-1691adad0833",
    verificationUrl: "https://ude.my/UC-9bbc1731-f5bb-4247-a06b-1691adad0833",
    skills: ["Generative AI", "Prompt Engineering", "AI Fundamentals"],
    category: "Generative AI",
  },
  {
    id: "cert-3",
    title: "JPMorgan Chase & Co. — Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    provider: "Forage",
    date: "May 28, 2026",
    credentialId: "",
    verificationUrl: "",
    tasks: [
      "Project Setup",
      "Kafka Integration",
      "H2 Integration",
      "REST API Integration",
      "REST API Controller",
    ],
    skills: ["Software Engineering", "REST APIs", "Kafka", "H2", "Backend Development"],
    category: "Software Engineering",
  },
  {
    id: "cert-4",
    title: "Chandigarh University / IBM Developer Skills Network — RDBMS",
    issuer: "Chandigarh University",
    provider: "IBM Developer Skills Network",
    date: "April 24, 2026",
    credentialId: "",
    verificationUrl: "",
    skills: ["RDBMS", "SQL", "Database Management", "IBM"],
    category: "Database Systems",
  },
  {
    id: "cert-5",
    title: "Nestlé E-learning 2026 — Resilience",
    issuer: "Nestlé",
    date: "2026",
    credentialType: "E-learning / Completion Certificate",
    credentialId: "",
    verificationUrl: "",
    skills: ["Resilience", "Professional Development", "Learning"],
    category: "Professional Development",
  },
  {
    id: "cert-6",
    title: "Chandigarh University AI Fest 2026 — Certificate of Participation",
    issuer: "Department of Computer Science & Engineering, Chandigarh University",
    event: "Code Relay 2.0 (InnovFest 2026 / AI Fest 2026)",
    date: "19th–21st February 2026",
    credentialId: "",
    verificationUrl: "",
    skills: ["Coding", "Problem Solving", "AI Fest", "Technical Event"],
    category: "Technical Fest",
  },
  {
    id: "cert-7",
    title: "Chandigarh University — Certificate of Participation",
    issuer: "Department of Computer Science & Engineering",
    event: "Code Relay 2.0",
    date: "19th–21st February 2026",
    credentialId: "",
    verificationUrl: "",
    skills: ["Competitive Programming", "Coding", "Problem Solving"],
    category: "Competitive Coding",
  },
  {
    id: "cert-8",
    title: "Chandigarh University — Certificate of Participation",
    issuer: "CSE / C-Square Club",
    event: "CodeMote — Engineering's Day 2025",
    date: "Engineering's Day 2025",
    credentialId: "",
    verificationUrl: "",
    skills: ["Coding", "Engineering", "Technical Event", "Teamwork"],
    category: "Technical Event",
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
