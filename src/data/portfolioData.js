// === portfolioData.js ===

export const profile = {
  fullName: "Siriharini Samala",
  roleLabel: "Computer Science Engineering Student",
  initials: "SS",
  email: "24215a0533@bvrit.ac.in",
  phone: "+91 9515781017",
  location: "Hyderabad, India",
  heroBio: [
    "Computer Science Engineering student with a strong foundation in programming and core computer science concepts.",
    "Hands-on experience through industry internship and academic projects involving Python development, data processing, machine learning, and applied AI systems.",
  ],
  aboutBio: [
    "I am a Computer Science Engineering student with a strong foundation in programming and core computer science concepts, with practical exposure through an industry internship and academic projects.",
    "My work spans Python development, data processing, machine learning, and applied AI systems, where I focus on building reliable pipelines and thoughtful model evaluation.",
    "I am comfortable with version control, structured problem-solving, and collaborative development environments, and I enjoy turning requirements into clear, maintainable code.",
    "I am seeking opportunities to grow as a software engineer and contribute to real-world, impact-driven projects.",
  ],
  typewriterTitles: [
    "Computer Science Engineering Student",
    "Python & ML Developer",
    "Backend & Data Enthusiast",
    "AI & Applied ML Learner",
  ],
  logoGradientFrom: "from-brand-purple",
  logoGradientTo: "to-brand-blue",
}

export const ui = {
  documentTitle: "Siriharini Samala | Portfolio",
  navBrandAria: "Navigate to home",
  menuToggleOpenAria: "Open navigation menu",
  menuToggleCloseAria: "Close navigation menu",
  skipToContent: "Skip to main content",
  sections: {
    about: { id: "about", label: "About" },
    skills: { id: "skills", label: "Skills" },
    projects: { id: "projects", label: "Projects" },
    experience: { id: "experience", label: "Experience" },
    achievements: { id: "achievements", label: "Achievements" },
    contact: { id: "contact", label: "Contact" },
  },
  nav: {
    home: { id: "home", label: "Home" },
    links: [
      { sectionId: "about", label: "About" },
      { sectionId: "skills", label: "Skills" },
      { sectionId: "projects", label: "Projects" },
      { sectionId: "experience", label: "Experience" },
      { sectionId: "achievements", label: "Achievements" },
      { sectionId: "contact", label: "Contact" },
    ],
  },
  hero: {
    greeting: "Hi, I'm",
    downloadResumeLabel: "⬇ Download Resume",
    viewProjectsLabel: "🚀 View Projects",
    contactMeLabel: "✉ Contact Me",
    githubActionLabel: "GitHub ↗",
    linkedinActionLabel: "LinkedIn ↗",
    resumeFilePath: "/resume.pdf",
    particlesLabel: "Hero background particles",
    cursorBlinkMs: 530,
    typewriterIntervalMs: 2500,
  },
  about: {
    title: "About Me",
    subtitle: "Background, education, and how I like to build.",
    avatarAria: "Profile initials avatar",
    educationSectionTitle: "Education",
  },
  skills: {
    title: "Tech Stack",
    subtitle: "Tools and technologies I use across the stack.",
    groups: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools",
      cloudDevOps: "Cloud & DevOps",
    },
  },
  projects: {
    title: "Projects",
    subtitle: "Selected work from coursework, research-style builds, and experiments.",
    featuredBadge: "Featured",
    githubButton: "GitHub",
    liveDemoButton: "Live Demo",
  },
  timeline: {
    title: "Experience & Education",
    subtitle: "Internship roles, studies, and milestones along the way.",
    workLabel: "Work",
    educationLabel: "Education",
  },
  achievements: {
    title: "Achievements & Certifications",
    subtitle: "Credentials, programs, and highlights beyond the classroom.",
  },
  social: {
    sectionId: "social",
    title: "Connect",
    subtitle: "Find me on these platforms.",
    visitProfile: "Visit Profile",
    arrow: "→",
  },
  contact: {
    title: "Let’s Talk",
    subtitle: "Reach out for collaborations, internships, or project ideas.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    sendButton: "Send Message",
    sendArrow: "→",
    emailCardTitle: "Email",
    phoneCardTitle: "Phone",
    locationCardTitle: "Location",
    linkedinCardTitle: "LinkedIn",
    githubCardTitle: "GitHub",
    formAria: "Contact form",
  },
  footer: {
    copyrightTemplate: "© {year} {name}. Built with React + Tailwind CSS",
    creditTemplate: "Designed & Developed by {name}",
    linkedinAria: "LinkedIn profile",
    githubAria: "GitHub profile",
    year: "2025",
  },
}

export const education = [
  {
    key: "btech",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "BVRIT (B.V. Raju Institute of Technology), Narsapur",
    yearLabel: "Expected Graduation",
    year: "2027",
    scoreLabel: null,
    score: null,
    variant: "education",
  },
  {
    key: "diploma",
    degree: "Diploma in Engineering",
    institution: "Smt. DDGWTTI",
    yearLabel: "Year of Completion",
    year: "2024",
    scoreLabel: "CGPA",
    score: "9.21",
    variant: "education",
  },
]

export const skills = {
  languages: [
    { name: "Python", icon: "SiPython", color: "text-yellow-400" },
    { name: "Java", icon: "SiOpenjdk", color: "text-orange-400" },
  ],
  frontend: [{ name: "HTML", icon: "SiHtml5", color: "text-orange-500" }],
  backend: [
    { name: "Python APIs & Scripts", icon: "SiFastapi", color: "text-emerald-400" },
    { name: "RESTful Concepts", icon: "HiServer", color: "text-sky-400" },
  ],
  databases: [
    { name: "DBMS Fundamentals", icon: "SiMysql", color: "text-blue-400" },
    { name: "SQL Queries", icon: "SiPostgresql", color: "text-indigo-400" },
  ],
  tools: [
    { name: "GitHub", icon: "SiGithub", color: "text-gray-200" },
    { name: "VS Code", icon: "HiCodeBracketSquare", color: "text-blue-500" },
    { name: "Jupyter Notebook", icon: "SiJupyter", color: "text-orange-300" },
    { name: "Google Colab", icon: "SiGooglecolab", color: "text-yellow-300" },
    { name: "Anaconda Navigator", icon: "SiAnaconda", color: "text-green-400" },
  ],
  cloudDevOps: [
    { name: "Git & Version Control", icon: "SiGit", color: "text-red-400" },
    { name: "Collaborative Dev Workflow", icon: "SiGithubactions", color: "text-purple-300" },
  ],
}

export const projects = [
  {
    key: "documind",
    title: "DocuMind Enterprise – RAG Based SOP Assistant",
    description:
      "Designed and implemented a Retrieval-Augmented Generation (RAG) system to answer natural-language queries from internal SOP and policy documents with document ingestion and retrieval pipelines for context-aware responses and source references.",
    tech: ["Python", "RAG", "NLP", "Document AI"],
    featured: true,
    githubUrl: "https://github.com/Siriharini-466",
    liveUrl: "https://github.com/Siriharini-466",
  },
  {
    key: "ddos-rf",
    title: "DDoS Stage Identification using Random Forest",
    description:
      "Developed a machine learning model using Random Forest to classify stages of DDoS attacks from network traffic data, with preprocessing and feature analysis to study attack patterns and support early threat detection.",
    tech: ["Python", "Random Forest", "Scikit-learn", "Network Security"],
    featured: true,
    githubUrl: "https://github.com/Siriharini-466",
    liveUrl: "https://github.com/Siriharini-466",
  },
  {
    key: "ids-ml",
    title: "Intrusion Detection System using Machine Learning",
    description:
      "Developed an ML-based system to classify network traffic as normal or malicious using preprocessing, feature selection, and models trained with Random Forest and Decision Tree algorithms, evaluated with accuracy, confusion matrix, and precision-recall metrics.",
    tech: ["Python", "ML", "Random Forest", "Decision Tree"],
    featured: false,
    githubUrl: "https://github.com/Siriharini-466",
    liveUrl: "https://github.com/Siriharini-466",
  },
]

export const experience = [
  {
    key: "infotact",
    variant: "work",
    role: "Data Associate L1",
    organization: "Infotact Solutions",
    dateRange: "2025",
    bullets: [
      "Developed Python-based backend logic, automation scripts, and data processing workflows.",
      "Assisted in building and testing scripts and APIs while following clean coding and version control practices.",
      "Gained hands-on experience working in a professional development environment with real-world requirements.",
    ],
  },
  {
    key: "btech-timeline",
    variant: "education",
    role: "Bachelor of Technology in Computer Science and Engineering",
    organization: "BVRIT (B.V. Raju Institute of Technology), Narsapur",
    dateRange: "Expected Graduation: 2027",
    bullets: [
      "Pursuing core computer science coursework with emphasis on programming, data structures, and applied machine learning.",
      "Building academic projects spanning intelligent systems, security analytics, and responsible AI practices.",
    ],
  },
  {
    key: "diploma-timeline",
    variant: "education",
    role: "Diploma in Engineering",
    organization: "Smt. DDGWTTI",
    dateRange: "Completed 2024",
    bullets: ["CGPA: 9.21", "Strong foundation in engineering fundamentals before specializing in computer science."],
  },
]

export const achievements = [
  {
    key: "ibm-ai-ethics",
    icon: "AiOutlineSafetyCertificate",
    title: "AI Ethics",
    issuer: "IBM SkillsBuild",
    date: "Oct 2025",
    description: "Completed coursework on ethical considerations for AI systems and responsible deployment practices.",
  },
  {
    key: "python-industrial",
    icon: "SiPython",
    title: "Python Industrial Training",
    issuer: "RKJ Technologies Pvt. Ltd.",
    date: "Jun–Nov 2023",
    description: "Industry-oriented Python training covering practical programming workflows and project-ready skills.",
  },
  {
    key: "infosys-python",
    icon: "SiPython",
    title: "Learning Python",
    issuer: "Infosys Springboard",
    date: "Jul 2025",
    description: "Structured Python learning path reinforcing fundamentals and problem-solving patterns.",
  },
  {
    key: "corizo-ai",
    icon: "GiArtificialIntelligence",
    title: "AI Training Program",
    issuer: "Corizo (Online)",
    date: "",
    description: "Online AI training focused on concepts and hands-on exposure to applied intelligent systems.",
  },
  {
    key: "cisco-cpp",
    icon: "SiCplusplus",
    title: "Programming Essentials in C++ (CPA)",
    issuer: "Cisco Networking Academy",
    date: "Feb 2025",
    description: "Foundational C++ programming certification emphasizing syntax, logic, and structured coding habits.",
  },
  {
    key: "ilea-workshop",
    icon: "MdGroups",
    title: "ILEA Workshop",
    issuer: "Vedic Center",
    date: "Jul 2025",
    description:
      "Participated in a 3-day immersive program focused on leadership, teamwork, and creative problem-solving.",
  },
  {
    key: "dsvh-marketing",
    icon: "MdCampaign",
    title: "Marketing Team Member",
    issuer: "Data Science Visionary Hub (BVRIT Club)",
    date: "",
    description:
      "Contributed to promotional and engagement activities for technical and community-focused club events.",
  },
]

export const socialLinks = {
  linkedin: {
    url: "https://www.linkedin.com/in/samala-siriharini",
    username: "samala-siriharini",
    displayName: "LinkedIn",
    brandHex: "#0077b5",
    glowClass: "shadow-[0_0_40px_rgba(0,119,181,0.55)]",
    borderHoverClass: "hover:border-[#0077b5]/60",
    icon: "FaLinkedin",
  },
  github: {
    url: "https://github.com/Siriharini-466",
    username: "Siriharini-466",
    displayName: "GitHub",
    brandHex: "#333333",
    glowClass: "shadow-[0_0_40px_rgba(255,255,255,0.18)]",
    borderHoverClass: "hover:border-white/35",
    icon: "FaGithub",
  },
}
