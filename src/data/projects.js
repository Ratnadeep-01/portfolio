/**
 * projects.js - Centralized Project Data for Ratnadeep Kumar's Portfolio
 * 
 * Ranked based on:
 * 1. Technical Complexity
 * 2. Real-World Usefulness
 * 3. Code Quality & Architecture
 * 4. Tech Stack Relevance to Top Recruiters
 * 5. Completeness (README, Live Demo, Visuals)
 * 6. Recent Activity
 */

export const featuredProjects = [
  {
    id: "reviewflow",
    title: "ReviewFlow",
    subtitle: "Google Maps Review Funnel & Stand Studio",
    rank: 1,
    tagline: "High-conversion QR stands, AI review drafting & grievance deflection",
    description: "Enterprise-ready Next.js application engineered to eliminate customer friction when leaving Google Maps reviews. Generates print-ready 4\"×6\" QR table stands, employs an anti-robotic AI drafting engine for authentic customer sentiment, provides a sandboxed 1-tap clipboard handoff, and routes low-rating feedback to private grievance resolution to safeguard business ratings.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "AI Prompting", "QR Code Engine", "Lucide React"],
    github: "https://github.com/Ratnadeep-01/scanMe",
    demo: "https://scan-me-lime.vercel.app",
    repoName: "scanMe",
    category: "Full Stack SaaS",
    highlights: [
      "Print-ready 4\"x6\" physical QR stand generator (level='H')",
      "Anti-robotic AI review generator based on venue category",
      "Sandboxed 1-tap clipboard handoff overcoming Google iframe sandbox",
      "Private grievance deflection channel for 1-3 star reviews"
    ],
    accentColor: "from-cyan-500 to-blue-600",
    badge: "Production SaaS"
  },
  {
    id: "mytube",
    title: "myTube",
    subtitle: "High-Performance Video Sharing Platform",
    rank: 2,
    tagline: "Enterprise-grade MERN video ecosystem with Hybrid SSR/CSR routing",
    description: "Production-grade video sharing application inspired by YouTube's scalable architecture. Built with React 19 and Express 5, it features a hybrid routing architecture combining server-side rendering for rich Open Graph/SEO previews with client-side SPA navigation, Cloudinary media CDN streaming, dual JWT authentication with HttpOnly cookies, and nested discussion threads.",
    tech: ["React 19", "Node.js", "Express.js 5", "MongoDB", "Cloudinary CDN", "Dual JWT", "Tailwind CSS"],
    github: "https://github.com/Ratnadeep-01/myTube",
    demo: "https://my-tube-rosy-pi.vercel.app",
    repoName: "myTube",
    category: "Media & Streaming",
    highlights: [
      "Hybrid SSR & CSR routing for instant playback & social crawlers",
      "Dual JWT security scheme with secure HttpOnly refresh cookies",
      "Cloudinary video pipeline with automatic thumbnail generation",
      "Real-time subscriptions, video likes, nested comments & watch history"
    ],
    accentColor: "from-rose-500 to-purple-600",
    badge: "Live Web App"
  },
  {
    id: "votex",
    title: "VOTEX Platform",
    subtitle: "Secure Digital Democracy & Auditing Ecosystem",
    rank: 3,
    tagline: "Tamper-resistant digital voting with instant tallying & audit dashboards",
    description: "Full-stack electronic voting platform engineered to guarantee election integrity, auditability, and voter transparency. Includes voter authentication, single-vote cryptographic verification, real-time vote tallying as ballots are submitted, and an interactive administrative command center featuring live telemetry charts.",
    tech: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Ratnadeep-01/voting-application",
    demo: "https://voting-application-tau-hazel.vercel.app",
    repoName: "voting-application",
    category: "Web Security & Governance",
    highlights: [
      "Role-based voter authorization preventing multi-vote anomalies",
      "Instant real-time election tallying and audit log verification",
      "Admin command center for candidate and poll lifecycle management",
      "Fluid, responsive interface powered by Framer Motion"
    ],
    accentColor: "from-emerald-500 to-teal-600",
    badge: "Live Web App"
  },
  {
    id: "ekart",
    title: "EKART Marketplace",
    subtitle: "Enterprise Full-Stack MERN E-Commerce",
    rank: 4,
    tagline: "Amazon/Flipkart-inspired marketplace with deterministic order state machines",
    description: "End-to-end full-stack e-commerce marketplace built strictly on MongoDB Atlas, Express.js 4.21, React 18, and Node.js 22. Features catalog search and category filtering, dynamic shopping cart synchronization, persistent user sessions, and an order state machine orchestrating the full fulfillment lifecycle.",
    tech: ["MongoDB Atlas", "Express.js 4.21", "React 18.3", "Node.js 22", "Tailwind CSS 3.4", "Mongoose 8"],
    github: "https://github.com/Ratnadeep-01/ekart",
    demo: null,
    repoName: "ekart",
    category: "E-Commerce & Systems",
    highlights: [
      "Strict MERN separation of concerns with RESTful API architecture",
      "State-machine driven order fulfillment pipeline",
      "Inventory-bounded cart calculations with real-time stock limits",
      "Comprehensive API documentation and entity-relationship models"
    ],
    accentColor: "from-amber-500 to-orange-600",
    badge: "MERN Architecture"
  },
  {
    id: "tubestream",
    title: "TubeStream HD",
    subtitle: "4K Video Downloader & Multiplexing Engine",
    rank: 5,
    tagline: "Containerized Python media utility with dynamic FFmpeg stream merging",
    description: "Full-stack YouTube media extraction engine capable of downloading up to 4K 60fps Ultra HD video and 320kbps studio-grade audio. Since YouTube isolates high-res video and audio tracks, TubeStream dynamically detects all stream variants and leverages FFmpeg to merge them into universal MP4 files, complete with live download telemetry and automated server disk cleanup.",
    tech: ["Python", "Flask", "yt-dlp", "FFmpeg", "Docker", "Docker Compose", "Vanilla JS"],
    github: "https://github.com/Ratnadeep-01/videodownloader",
    demo: null,
    repoName: "videodownloader",
    category: "Systems & Media Pipelines",
    highlights: [
      "Supports 4K 2160p (60fps), 2K 1440p, 1080p60 down to 240p & MP3",
      "FFmpeg audio-video muxing pipeline with automatic containerization",
      "Live real-time download and conversion progress feedback",
      "Automated background file cleanup daemon preventing storage exhaustion"
    ],
    accentColor: "from-violet-500 to-indigo-600",
    badge: "Systems & Python"
  },
  {
    id: "mausam",
    title: "Mausam 2.0",
    subtitle: "Personalized Weather Intelligence Engine",
    rank: 6,
    tagline: "Smart India Hackathon 2026 solution for MoES/IMD on budget devices",
    description: "Smart India Hackathon 2026 project (Problem Statement 26076) created with Team BugNotFound. Transforms raw IMD meteorological data into personalized, actionable decisions tailored to user health, agriculture, and daily transit. Engineered with WatermelonDB for offline-first speed on ₹7,000 budget smartphones.",
    tech: ["React Native", "TypeScript", "FastAPI", "Python", "WatermelonDB", "Docker"],
    github: "https://github.com/Ratnadeep-01/MausamSIH2026",
    demo: null,
    repoName: "MausamSIH2026",
    category: "Mobile & Hackathons",
    highlights: [
      "Smart India Hackathon 2026 — MoES/IMD Problem Statement 26076",
      "Offline-first architecture with WatermelonDB & MMKV caching",
      "Context-aware impact scoring based on persona and location",
      "FastAPI microservices delivering compressed brotli/gzip payloads"
    ],
    accentColor: "from-sky-500 to-cyan-600",
    badge: "SIH 2026 Project"
  }
];

export const moreProjects = [
  {
    id: "movie-rec",
    title: "TMDB Movie Recommendation Engine",
    rank: 7,
    description: "Content-based machine learning recommender utilizing Scikit-learn's CountVectorizer and Cosine Similarity over 5,000 TMDB movies dataset for cosine distance ranking.",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn", "NLTK"],
    github: "https://github.com/Ratnadeep-01/movie_recomendation",
    demo: null,
    category: "Machine Learning"
  },
  {
    id: "mystery-msg",
    title: "Mystery Messages",
    rank: 8,
    description: "Full-stack anonymous feedback platform built with Next.js App Router, featuring NextAuth user sessions, Zod schema validation, and safe message ingestion.",
    tech: ["Next.js 14", "TypeScript", "NextAuth.js", "MongoDB", "Zod"],
    github: "https://github.com/Ratnadeep-01/mysterymeassagees",
    demo: null,
    category: "Full Stack Web"
  },
  {
    id: "mytube-api",
    title: "myTube Core REST API",
    rank: 9,
    description: "Dedicated Node.js/Express backend service powering myTube's video ingestion, user authentication, Multer media parsing, and Cloudinary streaming pipeline.",
    tech: ["Node.js", "Express.js 5", "MongoDB", "Mongoose", "Cloudinary"],
    github: "https://github.com/Ratnadeep-01/myTube-backend",
    demo: null,
    category: "Backend & APIs"
  },
  {
    id: "cleo-ai",
    title: "CLEO AI — Omnichannel Employee",
    rank: 10,
    description: "Monorepo architecture and specifications for an AI agent platform that connects WhatsApp, Instagram, and web chat to automate 24/7 customer support.",
    tech: ["TypeScript", "Turborepo", "Next.js", "Docker", "AI Agents"],
    github: "https://github.com/Ratnadeep-01/Cleo",
    demo: null,
    category: "AI Architecture"
  },
  {
    id: "kana-dojo",
    title: "Kana Dojo Platform",
    rank: 11,
    description: "Open-source contribution/fork of an aesthetic Japanese learning platform sponsored by the Vercel OSS Program, featuring Supabase and Vitest testing.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vitest", "Tailwind CSS"],
    github: "https://github.com/Ratnadeep-01/kana-dojo",
    demo: "https://kanadojo.com",
    category: "Open Source"
  },
  {
    id: "citscinet",
    title: "CitSciNet Volunteer Network",
    rank: 12,
    description: "Citizen Science Network web portal connecting environmental researchers and citizen scientists for community data collection.",
    tech: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
    github: "https://github.com/Ratnadeep-01/CitSciNet",
    demo: null,
    category: "Open Source"
  }
];

export const skillsData = {
  languages: [
    { name: "C++", level: "Advanced", icon: "Code2", experience: "DSA & Problem Solving", color: "#00599C" },
    { name: "C", level: "Proficient", icon: "Terminal", experience: "Systems & Memory", color: "#A8B9CC" },
    { name: "Java", level: "Proficient", icon: "Coffee", experience: "OOP & Enterprise", color: "#E76F00" },
    { name: "Python", level: "Advanced", icon: "FileCode", experience: "ML, Scripting & Backend", color: "#3776AB" },
    { name: "JavaScript", level: "Advanced", icon: "FileJson", experience: "ES6+, Async, Engines", color: "#F7DF1E" },
    { name: "TypeScript", level: "Intermediate", icon: "ShieldCheck", experience: "Strict Typings & Interfaces", color: "#3178C6" }
  ],
  frontend: [
    { name: "React 19 / 18", level: "Advanced", icon: "Atom", experience: "Hooks, Context, State", color: "#61DAFB" },
    { name: "Next.js (App Router)", level: "Advanced", icon: "Globe", experience: "SSR, SSG, Server Actions", color: "#FFFFFF" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Palette", experience: "Responsive, Dark Mode, UI", color: "#38B2AC" },
    { name: "GSAP & ScrollTrigger", level: "Intermediate", icon: "Sparkles", experience: "Scroll Reveals & Parallax", color: "#88CE02" },
    { name: "Framer Motion", level: "Intermediate", icon: "Layers", experience: "Smooth Layout Transitions", color: "#EC4899" },
    { name: "HTML5 & Modern CSS3", level: "Advanced", icon: "Layout", experience: "Semantic, Flex/Grid, Canvas", color: "#E34F26" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "Server", experience: "Event Loop, Streams, Cluster", color: "#339933" },
    { name: "Express.js", level: "Advanced", icon: "Cpu", experience: "REST APIs, Middleware, JWT", color: "#A78BFA" },
    { name: "MongoDB & Mongoose", level: "Advanced", icon: "Database", experience: "Aggregation, Indexing, Atlas", color: "#47A248" },
    { name: "FastAPI / Flask", level: "Intermediate", icon: "Zap", experience: "Python Microservices", color: "#009688" },
    { name: "RESTful API Design", level: "Advanced", icon: "Network", experience: "CRUD, Pagination, Auth", color: "#06B6D4" },
    { name: "Authentication & JWT", level: "Advanced", icon: "KeyRound", experience: "HttpOnly Cookies, OAuth", color: "#F59E0B" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", experience: "Branching, PRs, Actions", color: "#F05032" },
    { name: "Docker & Compose", level: "Intermediate", icon: "Box", experience: "Containerization & Builds", color: "#2496ED" },
    { name: "Cloudinary CDN", level: "Proficient", icon: "Cloud", experience: "Video/Image Pipelines", color: "#3448C5" },
    { name: "Vercel & Cloud Hosting", level: "Advanced", icon: "UploadCloud", experience: "CI/CD & Serverless Deploy", color: "#FFFFFF" },
    { name: "Postman", level: "Advanced", icon: "Send", experience: "API Testing & Automation", color: "#FF6C37" },
    { name: "VS Code & CLI Tools", level: "Advanced", icon: "Laptop", experience: "Shell, Tooling, Debugging", color: "#007ACC" }
  ]
};

export const experiencesAndAchievements = [
  {
    id: "hackathons",
    type: "achievement",
    title: "5+ Hackathons Finalist & Competitor",
    organization: "National & College Competitions (Including SIH 2026)",
    period: "2024 — Present",
    badge: "5+ Hackathons",
    description: "Competed in 5+ fast-paced hackathons, architecting and shipping full-stack prototypes under tight deadlines. Selected for Smart India Hackathon 2026 (Problem Statement 26076 with Team BugNotFound) developing Mausam 2.0 for MoES/IMD.",
    highlights: [
      "Collaborated in multidisciplinary teams under 24-48 hour hackathon sprints",
      "Engineered offline-first weather intelligence for Smart India Hackathon 2026",
      "Pitched interactive prototypes and live architectures to jury panels"
    ],
    icon: "Trophy",
    accent: "from-amber-400 to-yellow-600"
  },
  {
    id: "sankalp-teaching",
    type: "experience",
    title: "Teacher & Volunteer",
    organization: "Sankalp (NSS, NIT Patna)",
    period: "2024 — Present",
    badge: "Community & Leadership",
    description: "Mentoring underprivileged school children through Sankalp, an educational initiative by the National Service Scheme (NSS) at NIT Patna. Teaching foundational Mathematics, Science, and logical thinking.",
    highlights: [
      "Conducted weekly educational sessions for underprivileged students",
      "Simplified complex mathematical and logical concepts into intuitive lessons",
      "Demonstrated social responsibility and strong communication leadership"
    ],
    icon: "GraduationCap",
    accent: "from-cyan-400 to-blue-600"
  },
  {
    id: "nptel-cert",
    type: "certification",
    title: "NPTEL Certified: 'Joy of Computing using Python'",
    organization: "IIT Madras / NPTEL",
    period: "Certified",
    badge: "IIT Certification",
    description: "Rigorous certification covering algorithmic thinking, data structures, recursion, cryptography, game algorithms, image manipulation, and Python programming fundamentals.",
    highlights: [
      "Mastered core Pythonic design patterns, algorithmic optimization, and computational theory",
      "Completed hands-on weekly coding assessments and proctored examinations",
      "Applied algorithms directly into projects like TubeStream HD and movie recommendation engines"
    ],
    icon: "Award",
    accent: "from-purple-400 to-violet-600"
  },
  {
    id: "nit-patna",
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "National Institute of Technology Patna (NIT Patna)",
    period: "2024 — 2028",
    badge: "Graduation: 2028",
    description: "Pursuing Bachelor of Technology in Computer Science & Engineering at prestigious National Institute of Technology, Patna. Deepening foundations in Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks.",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Discrete Math",
      "Active participant in tech clubs, open-source initiatives, and developer circles",
      "Driven towards scalable systems, cloud computing, and full-stack software development"
    ],
    icon: "BookOpen",
    accent: "from-emerald-400 to-teal-600"
  }
];

export const personalInfo = {
  name: "Ratnadeep Kumar",
  title: "Full-Stack Developer & Software Engineer",
  institution: "NIT Patna (B.Tech CSE '28)",
  roles: [
    "Full-Stack MERN Developer",
    "Scalable Web Architect",
    "5+ Hackathons Competitor",
    "C++ & Python Problem Solver"
  ],
  bio: "I am a Computer Science undergraduate at NIT Patna passionate about building robust, high-performance web systems and intuitive user interfaces. From full-scale video sharing platforms and QR review engines to offline-first hackathon applications, I focus on clean architecture, performance, and real-world impact.",
  email: "ratnadeep4881@gmail.com",
  github: "https://github.com/Ratnadeep-01",
  linkedin: "https://www.linkedin.com/in/ratnadeep-kumar-245b50329",
  instagram: "https://instagram.com/ratnadeep_06",
  location: "Patna, India",
  stats: [
    { label: "Hackathons", value: 5, suffix: "+" },
    { label: "Public Repos", value: 14, suffix: "" },
    { label: "Graduation", value: 2028, suffix: "" },
    { label: "Code Commits", value: 250, suffix: "+" }
  ]
};
