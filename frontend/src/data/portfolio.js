export const personalInfo = {
  name: "Kishor Kumar",
  role: "Full Stack Developer",
  tagline: "Building Real-World Solutions with Code & AI",
  description: "I build modern, scalable and user-friendly web applications using React, Node.js and PostgreSQL. I'm passionate about creating real-world solutions with clean code and great UI.",
  status: "Open to Opportunities",
  location: "India",
  email: "kishorhcs@gmail.com",
  github: "https://github.com/Kishor2006",
  linkedin: "https://www.linkedin.com/in/kishor-kumar206",
  resume: "/resume.pdf"
};

export const stats = [
  {
    id: 1,
    value: "4+",
    label: "Projects Completed",
    icon: "code"
  },
  {
    id: 2,
    value: "BTech",
    label: "Computer Science",
    icon: "graduation"
  },
  {
    id: 3,
    value: "Full Stack",
    label: "Web Developer",
    icon: "layers"
  },
  {
    id: 4,
    value: "India",
    label: "Open to Opportunities",
    icon: "map"
  }
];

export const projects = [
  {
    id: 1,
    title: "DriveHub",
    subtitle: "Car Rental Booking System",
    description: "A full-stack car rental and booking application with car listing, availability, booking, rental management, date-based booking logic, price calculation, booking history, cancellation workflows and Razorpay payment integration.",
    longDescription: "DriveHub is a comprehensive car rental management system that streamlines the entire rental process from vehicle browsing to payment processing. The platform features car listing, availability management, date-based booking logic, automated rental price calculation, booking history, cancellation workflows, customer dashboard, admin dashboard, and role-based access control.",
    image: "/images/drivehub.jpg",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Razorpay"],
    category: "Full Stack",
    github: "https://github.com/Kishor2006/Car_Rental_System-DriveHub-",
    demo: "",
    problem: "Traditional car rental services lack digital integration, making booking, payment, and vehicle management cumbersome for both customers and rental companies.",
    solution: "Developed a full-stack web application that digitizes the entire car rental workflow, from vehicle browsing and booking to payment processing and admin fleet management.",
    features: [
      "Car listing and availability management",
      "Date-based booking logic",
      "Automated rental price calculation",
      "Booking history and cancellation workflows",
      "Razorpay payment integration",
      "Customer dashboard",
      "Admin dashboard for fleet management",
      "Role-based access control",
      "Responsive design for all devices"
    ],
    architecture: "React.js frontend with Node.js/Express backend, PostgreSQL database, RESTful API design, JWT authentication, and Razorpay payment integration."
  },
  {
    id: 2,
    title: "Product Life Cycle Management",
    subtitle: "Digital Product Lifecycle Platform",
    description: "LifeCycle helps users manage the complete lifecycle of purchased products from purchase to resale.",
    longDescription: "A comprehensive product lifecycle management system that helps users track their products from the moment of purchase through warranty, repairs, services, and eventual resale. Features product management, invoice and document storage, warranty tracking, AMC tracking, warranty expiry reminders, return deadline tracking, repair and service history, product expense tracking, total ownership cost calculation, product timeline, resale passport/history, and warranty claim documentation.",
    image: "/images/product-lifecycle.jpg",
    technologies: ["React", "Vite", "React Router", "Context API", "Tailwind CSS", "Axios", "Node.js", "Express.js", "REST API", "JWT", "bcrypt", "PostgreSQL", "Multer", "OCR", "Cloudinary", "QR Code", "AI Integration"],
    category: "Full Stack",
    github: "https://github.com/Kishor2006/product-lifecycle-management",
    demo: "",
    problem: "People often lose track of product warranties, service records, and purchase details, leading to missed warranty claims and poor maintenance tracking.",
    solution: "Created an intelligent product management system that digitizes and organizes all product-related information with automated reminders and AI-powered data extraction from invoices.",
    features: [
      "Product management",
      "Invoice and document storage",
      "Warranty tracking and AMC tracking",
      "Warranty expiry reminders",
      "Return deadline tracking",
      "Repair and service history",
      "Product expense tracking",
      "Total ownership cost calculation",
      "Product timeline visualization",
      "Resale passport and history",
      "Warranty claim documentation"
    ],
    architecture: "React SPA with Vite, Node.js/Express backend, PostgreSQL database for data storage, Multer for file uploads, OCR integration for invoice processing, Cloudinary for image storage, QR code generation, and AI integration for smart features."
  },
  {
    id: 3,
    title: "HelpDesk Mini",
    subtitle: "Support Ticket Management System",
    description: "HelpDesk Mini is a support ticket management application designed for handling support requests through a structured ticket workflow.",
    longDescription: "A streamlined support ticket management system that provides an organized approach to handling customer support requests. Features ticket creation, tracking, status management, and a clean interface for both users and support staff.",
    image: "/images/helpdesk-mini.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/Kishor2006/Helpdesk-mini",
    demo: "https://helpdesk-mini-ashy.vercel.app",
    problem: "Managing support requests efficiently requires a structured system to track, prioritize, and resolve tickets systematically.",
    solution: "Built a support ticket management application with organized workflow, status tracking, and an intuitive interface for both customers and support teams.",
    features: [
      "Ticket creation and submission",
      "Ticket status tracking",
      "Support workflow management",
      "User-friendly interface",
      "Ticket history and updates",
      "Search and filter capabilities"
    ],
    architecture: "React frontend with Node.js/Express backend, MongoDB for data persistence, RESTful API design, and responsive UI components."
  },
  {
    id: 4,
    title: "Keylogger Detection",
    subtitle: "AI-Based Cybersecurity Monitoring System",
    description: "An AI-based security system designed to detect keylogger activity and suspicious processes through real-time monitoring and threat analysis.",
    longDescription: "A sophisticated cybersecurity monitoring system that uses AI-based threat detection to identify keylogger activity and suspicious processes. Features live key press monitoring, suspicious process detection, AI-based threat detection using Isolation Forest algorithm, real-time React dashboard, live activity graphs, and threat status alerts.",
    image: "/images/keylogger-detection.jpg",
    technologies: ["React.js", "Flask", "Python", "Isolation Forest", "Chart.js"],
    category: "Security",
    github: "https://github.com/Kishor2006/Keylogger_Detection",
    demo: "",
    problem: "Keylogger threats pose significant security risks by capturing sensitive information without user knowledge, requiring real-time detection and monitoring.",
    solution: "Developed an AI-based security monitoring system with Python/Flask backend using Isolation Forest ML algorithm, React dashboard for visualization, and real-time threat detection capabilities.",
    features: [
      "Live key press monitoring",
      "Suspicious process detection",
      "AI-based threat detection using Isolation Forest",
      "Real-time React dashboard",
      "Live activity graph visualization",
      "Threat status alerts (Safe/Alert)",
      "Real-time security monitoring"
    ],
    architecture: "Python/Flask backend with Isolation Forest ML algorithm for threat detection, React.js frontend dashboard, Chart.js for data visualization, and real-time communication for security alerts."
  }
];

export const skills = {
  languages: [
    { name: "Java" },
    { name: "Python" },
    { name: "JavaScript" }
  ],
  webTechnologies: [
    { name: "React.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "HTML" },
    { name: "CSS" }
  ],
  databaseTools: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Blender" },
    { name: "Unity" }
  ],
  backendDevelopment: [
    { name: "RESTful APIs" },
    { name: "JWT" },
    { name: "Authentication" },
    { name: "API Integration" }
  ]
};

export const experience = [
  {
    id: 1,
    role: "B.Tech in Computer Science and Engineering",
    company: "Lovely Professional University (LPU), Punjab, India",
    type: "Education",
    duration: "August 2022 – July 2026",
    location: "Punjab, India",
    description: "Graduated with Bachelor of Technology in Computer Science and Engineering. Focused on software development, algorithms, database systems, and practical application development.",
    responsibilities: [
      "Completed comprehensive Computer Science curriculum",
      "Built multiple full-stack projects including car rental and product management systems",
      "Studied data structures, algorithms, and software engineering",
      "Developed practical skills in React.js, Node.js, and PostgreSQL"
    ],
    technologies: ["Java", "Python", "JavaScript", "React", "Node.js", "PostgreSQL"]
  },
  {
    id: 2,
    role: "Data Structures and Algorithms",
    company: "Self-Paced Training",
    type: "Training",
    duration: "May 2024 – July 2024",
    location: "Remote",
    description: "Completed intensive self-paced training in Data Structures and Algorithms, focusing on problem-solving and algorithmic thinking.",
    responsibilities: [
      "Studied core data structures and algorithms",
      "Solved algorithmic problems and challenges",
      "Improved problem-solving and coding skills",
      "Applied DSA concepts to practical projects"
    ],
    technologies: ["Java", "Python", "Data Structures", "Algorithms"]
  }
];

export const certifications = [
  {
    id: 1,
    title: "SAP Certified – Data Analyst, SAP Analytics Cloud",
    issuer: "SAP",
    date: "February 2026",
    description: "Professional certification in SAP Analytics Cloud for data analysis and business intelligence."
  },
  {
    id: 2,
    title: "MERN Stack",
    issuer: "Cipher Schools",
    date: "July 2025",
    description: "Comprehensive certification in MongoDB, Express.js, React.js, and Node.js full-stack development."
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "November 2024",
    description: "Certification in cloud computing concepts, technologies, and implementations."
  },
  {
    id: 4,
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    date: "June 2024",
    description: "Certification in ethical hacking fundamentals and cybersecurity practices."
  }
];

export const achievements = [
  {
    id: 1,
    title: "5-Star Badge in Python & C++",
    organization: "HackerRank",
    date: "2024",
    description: "Earned 5-star proficiency badges in both Python and C++ programming on HackerRank platform."
  },
  {
    id: 2,
    title: "Community Development Project",
    organization: "University Project",
    date: "June 2023",
    description: "Led community development initiative focused on technology education and skill development."
  }
];

export const aiSuggestedQuestions = [
  "What are your key skills?",
  "Tell me about DriveHub project",
  "Tell me about Product Life Cycle Management",
  "What certifications do you have?"
];

// Portfolio knowledge base for AI responses
export const portfolioKnowledgeBase = {
  name: personalInfo.name,
  role: personalInfo.role,
  description: personalInfo.description,
  skills: skills,
  projects: projects,
  experience: experience,
  certifications: certifications,
  achievements: achievements,
  contact: {
    email: personalInfo.email,
    github: personalInfo.github,
    linkedin: personalInfo.linkedin
  }
};
