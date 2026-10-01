export const portfolio = {
  name: "Dipesh Arjun Shinde",
  shortName: "Dipesh",
  role: "Computer Science & Engineering Student",
  headline:
    "Building innovative solutions with code, quantum thinking and a passion for technology. Currently exploring Quantum Computing, AI and Full Stack Development.",
  intro:
    "I'm a 3rd-year Integrated Computer Science & Engineering student at DBATU, Lonere. I'm passionate about Quantum Computing, Machine Learning and building meaningful projects that solve real problems. With hands-on experience in full-stack web development and AI-driven applications, I enjoy turning complex ideas into clean, functional software. I've worked on projects spanning healthcare AI, event management systems, and cloud procurement — each pushing me to think creatively and engineer efficiently. My long-term vision is to bridge the gap between classical computing and quantum systems, contributing to next-generation technology that makes a real difference.",
  location: "Lonere, Maharashtra",
  university: "DBATU (3rd Year)",
  email: "dipesh.shinde@example.com",
  github: "https://github.com/Dipesh-433",
  linkedin: "https://www.linkedin.com/in/dipesh-shinde-a0172b358/",
  twitter: "https://x.com/",
  resume: "/resume.pdf",
  profileImage: "/profile.jpg",

  aboutFeatures: [
    {
      icon: "Brain",
      title: "Problem Solver",
      description:
        "I enjoy breaking down complex problems and finding simple, efficient solutions.",
      accent: "cyan",
    },
    {
      icon: "BookOpen",
      title: "Continuous Learner",
      description:
        "Always exploring new technologies, from quantum computing to full-stack.",
      accent: "purple",
    },
    {
      icon: "Users",
      title: "Team Player",
      description:
        "I believe in collaboration, open communication and growing together.",
      accent: "green",
    },
    {
      icon: "Target",
      title: "Goal Driven",
      description:
        "On a mission to become a Quantum Computing Engineer and make an impact in the field.",
      accent: "amber",
    },
  ],

  stats: [
    { number: "1+", label: "Years Experience" },
    { number: "7+", label: "Projects Delivered" },
    { number: "14+", label: "Technologies Mastered" },
    { number: "2+", label: "Internships Completed" },
  ],

  aboutTabs: {
    personal:
      "I'm a 3rd-year Integrated Computer Science & Engineering student at DBATU, Lonere, having completed my Diploma in Computer Engineering from Viva Institute of Technology & Architecture, Virar. I'm deeply passionate about Quantum Computing, Machine Learning, and Full-Stack Engineering. Driven by curiosity, I love breaking down complex problems and turning innovative ideas into reality.",
    professional:
      "My professional background includes a hands-on Mobile Application Development internship at Elite Forum using Kotlin, as well as a virtual internship in Blockchain where I explored smart contracts and decentralized architectures. I've designed and shipped 7+ comprehensive software systems spanning Healthcare AI (ArogyaFlowAi), Cloud Procurement (CloudBuyer AI), and IoT Leak Prevention (LeakGuard AI).",
    approach:
      "I believe in building software that balances high performance, architectural elegance, and tangible impact. From quantum circuit simulations in Qiskit to responsive React web applications, my approach centers on deep problem analysis, continuous iteration, and writing clean, scalable code that makes a difference.",
  },

  skills: [
    // Core & Languages
    { name: "Python", icon: "python", category: "core", level: 92 },
    { name: "C++", icon: "cpp", category: "core", level: 85 },
    { name: "JavaScript", icon: "javascript", category: "frontend", level: 90 },

    // Frontend
    { name: "React", icon: "react", category: "frontend", level: 88 },
    { name: "Next.js", icon: "nextjs", category: "frontend", level: 82 },
    { name: "Node.js", icon: "nodejs", category: "backend", level: 84 },

    // Backend & Database
    { name: "Flask", icon: "flask", category: "backend", level: 85 },
    { name: "Firebase", icon: "firebase", category: "backend", level: 88 },
    { name: "MySQL", icon: "mysql", category: "backend", level: 82 },

    // Quantum & AI
    { name: "Qiskit", icon: "qiskit", category: "quantum", level: 86 },
    { name: "TensorFlow", icon: "tensorflow", category: "quantum", level: 80 },

    // Tools & Environments
    { name: "Git", icon: "git", category: "tools", level: 90 },
    { name: "Jupyter", icon: "jupyter", category: "tools", level: 92 },
    { name: "VS Code", icon: "vscode", category: "tools", level: 95 },
  ],

  projects: [
    {
      title: "ArogyaFlowAi",
      description:
        "AI-powered healthcare supply chain & stockout prediction system for Primary Health Centers.",
      tags: ["Python", "Flask", "Firebase", "Machine Learning"],
      image: "/projects/arogyaflow.png",
      github: "https://github.com/PRAJAKTA1421/ArogayFlowAi",
      demo: "https://arogayflowai.onrender.com/",
      icon: "Atom",
      accent: "cyan",
      category: "AI & ML",
      status: "Live",
    },
    {
      title: "TechNova",
      description:
        "Modern technology-focused software engineering platform featuring cutting-edge interactive tools and services.",
      tags: ["React", "JavaScript", "Web App"],
      image: "/projects/technova.png",
      github: "https://github.com/Dipesh-433/TechNova_project",
      demo: "https://technova-project-4.onrender.com/",
      icon: "Atom",
      accent: "cyan",
      category: "Full Stack",
      status: "Live",
    },
    {
      title: "CloudBuyer AI",
      description:
        "An AI-powered cloud procurement assistant that helps users make intelligent buying decisions and optimize costs.",
      tags: ["Python", "AI", "Machine Learning", "Cloud"],
      image: "/projects/cloudbuyerai.png",
      github: "https://github.com/PRAJAKTA1421/ClouldBuyerAI",
      demo: "https://clouldbuyerai-1.onrender.com/",
      icon: "Atom",
      accent: "cyan",
      category: "AI & ML",
      status: "Live",
    },
    {
      title: "LeakGuard AI",
      description:
        "AI-driven leak detection and prevention system for infrastructure and pipeline monitoring using IoT sensors and ML.",
      tags: ["Python", "AI", "IoT", "Machine Learning"],
      image: "/projects/leakguardai.png",
      github: "https://github.com/PRAJAKTA1421/Leakgaurd-AI",
      demo: "https://leakguard-ai-xabf.onrender.com/",
      icon: "Atom",
      accent: "green",
      category: "AI & ML",
      status: "Live",
    },
    {
      title: "Quantum Learning Repo",
      description:
        "A comprehensive collection of Jupyter notebooks for Qiskit, quantum algorithms, and gate simulations.",
      tags: ["Python", "Qiskit", "Jupyter", "Quantum Computing"],
      image: "/projects/quantum.png",
      github: "https://github.com/Dipesh-433/qiskit-quantum-learning",
      demo: "#",
      icon: "Atom",
      accent: "purple",
      category: "Quantum",
      status: "Code",
    },
    {
      title: "Evento",
      description:
        "Full-stack event management and ticket booking platform with real-time inventory and Stripe payment integration.",
      tags: ["React", "Firebase", "Stripe", "Web App"],
      image: "/projects/evento.png",
      github: "https://github.com/Dipesh-433/Evento",
      demo: "#",
      icon: "Calendar",
      accent: "purple",
      category: "Full Stack",
      status: "Code",
    },
    {
      title: "The Daily Drill",
      description:
        "A daily productivity and habit-building platform to track practice streaks, set goals, and maintain consistent growth.",
      tags: ["JavaScript", "React", "Productivity"],
      image: "/projects/dailydrill.png",
      github: "https://github.com/Dipesh-433/The_Daily_Drill",
      demo: "#",
      icon: "Calendar",
      accent: "purple",
      category: "Full Stack",
      status: "Code",
    },
  ],

  experience: [
    {
      period: "2025 - Present",
      title: "B.Tech (Integrated) - Computer Science & Engineering",
      org: "DBATU, Lonere",
    },
    {
      period: "2026 (Ongoing)",
      title: "Quantum Technology (MDM Course)",
      org: "DBATU, Lonere",
    },
    {
      period: "June 2025 - Sept 2025",
      title: "Virtual Internship in Blockchain",
      org: "Virtual Internship",
      description:
        "Hands-on learning and practical experience in blockchain architecture, decentralized concepts, and smart contract development.",
    },
    {
      period: "June 2024 - August 2024",
      title: "Mobile Application Development Intern (Kotlin)",
      org: "Elite Forum",
      description:
        "Developed responsive mobile applications using Kotlin, exploring Android architecture, UI design, and backend API integration.",
    },
  ],

  education: [
    {
      period: "2025 - Present",
      title: "DBATU, Lonere",
      subtitle: "B.Tech (Integrated) CSE",
      icon: "Landmark",
      accent: "purple",
    },
    {
      period: "2022 - 2025",
      title: "Diploma in Computer Engineering",
      subtitle: "Viva Institute of Technology & Architecture, Virar",
      icon: "GraduationCap",
      accent: "green",
    },
    {
      period: "2020 - 2021",
      title: "10th (SSC)",
      subtitle: "Expert's International High School, Virar West",
      icon: "GraduationCap",
      accent: "cyan",
    },
  ],

  achievements: [
    {
      id: "ibm-quantum",
      title: "Basics of Quantum Information",
      issuer: "IBM Quantum",
      year: "2025",
      badge: "Verified Certificate",
      category: "Quantum Computing",
      accent: "purple",
      description:
        "Comprehensive certification in quantum fundamentals: qubits, superposition, quantum circuits, Bell states, unitary gates, and Qiskit programming.",
      skills: ["Qiskit", "Quantum Circuits", "Linear Algebra", "Quantum Information"],
      link: "https://www.ibm.com/quantum",
    },
    {
      id: "mdm-quantum",
      title: "Quantum Technology (MDM Specialization)",
      issuer: "DBATU, Lonere",
      year: "2026",
      badge: "Academic Certification",
      category: "Quantum Engineering",
      accent: "cyan",
      description:
        "Multi-Disciplinary Minor (MDM) specialized coursework focusing on physical quantum systems, quantum gates, fault-tolerant architectures, and quantum algorithms.",
      skills: ["Quantum Architecture", "Quantum Algorithms", "Physical Systems"],
      link: "#",
    },
    {
      id: "arogyaflow-recognition",
      title: "ArogyaFlow AI Healthcare Platform",
      issuer: "PHC Healthcare Innovation",
      year: "2024",
      badge: "Project Distinction",
      category: "AI & Machine Learning",
      accent: "green",
      description:
        "Built and recognized for developing an automated healthcare logistics system featuring stockout prediction, anomalous consumption detection, and medicine redistribution for Primary Health Centers.",
      skills: ["Machine Learning", "Python", "Flask", "Firebase"],
      link: "https://github.com/PRAJAKTA1421/ArogayFlowAi",
    },
    {
      id: "evento-fullstack",
      title: "Evento Full-Stack Event Booking System",
      issuer: "Web Engineering Project",
      year: "2024",
      badge: "Full-Stack Implementation",
      category: "Software Engineering",
      accent: "amber",
      description:
        "Engineered end-to-end event platform with secure attendee registration, real-time ticket inventory management, Stripe payment processing, and Firebase backend integration.",
      skills: ["React", "Firebase", "Stripe API", "State Management"],
      link: "https://github.com/Dipesh-433/Evento",
    },
  ],
};
