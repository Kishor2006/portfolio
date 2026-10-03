// Portfolio knowledge base for AI assistant
// This mirrors the frontend data structure

export const portfolioKnowledgeBase = {
  name: "Kishor Kumar",
  role: "Full Stack Developer",
  description: "Computer Science and Engineering graduate and Full Stack Developer focused on building practical, user-focused software solutions using React, Node.js, and PostgreSQL.",
  
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Lovely Professional University (LPU), Punjab, India",
    duration: "August 2022 – July 2026",
    status: "Graduated"
  },

  skills: {
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
  },

  projects: [
    {
      title: "DriveHub",
      subtitle: "Car Rental Booking System",
      description: "A full-stack car rental and booking application with car listing, availability, booking, rental management, date-based booking logic, price calculation, booking history, cancellation workflows and Razorpay payment integration.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Razorpay"],
      category: "Full Stack",
      github: "https://github.com/Kishor2006/Car_Rental_System-DriveHub-",
      features: [
        "Car listing and availability management",
        "Date-based booking logic",
        "Automated rental price calculation",
        "Booking history and cancellation",
        "Razorpay payment integration",
        "Customer and admin dashboards",
        "Role-based access control"
      ]
    },
    {
      title: "Product Life Cycle Management",
      subtitle: "Digital Product Lifecycle Platform",
      description: "LifeCycle helps users manage the complete lifecycle of purchased products from purchase to resale.",
      technologies: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt", "Multer", "OCR", "Cloudinary", "QR Code", "AI Integration"],
      category: "Full Stack",
      github: "https://github.com/Kishor2006/product-lifecycle-management",
      features: [
        "Product management and invoice storage",
        "Warranty and AMC tracking",
        "Warranty expiry reminders",
        "Repair and service history",
        "Product expense tracking",
        "Total ownership cost calculation",
        "Resale passport and documentation"
      ]
    },
    {
      title: "HelpDesk Mini",
      subtitle: "Support Ticket Management System",
      description: "HelpDesk Mini is a support ticket management application designed for handling support requests through a structured ticket workflow.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      github: "https://github.com/Kishor2006/Helpdesk-mini",
      demo: "https://helpdesk-mini-ashy.vercel.app",
      features: [
        "Ticket creation and tracking",
        "Status management",
        "Support workflow",
        "User-friendly interface"
      ]
    },
    {
      title: "Keylogger Detection",
      subtitle: "AI-Based Cybersecurity Monitoring System",
      description: "An AI-based security system designed to detect keylogger activity and suspicious processes through real-time monitoring and threat analysis.",
      technologies: ["React.js", "Flask", "Python", "Isolation Forest", "Chart.js"],
      category: "Security",
      github: "https://github.com/Kishor2006/Keylogger_Detection",
      features: [
        "Live key press monitoring",
        "Suspicious process detection",
        "AI-based threat detection using Isolation Forest",
        "Real-time React dashboard",
        "Live activity graph visualization",
        "Threat status alerts"
      ]
    }
  ],

  experience: [
    {
      role: "B.Tech in Computer Science and Engineering",
      organization: "Lovely Professional University (LPU), Punjab, India",
      type: "Education",
      duration: "August 2022 – July 2026",
      description: "Graduated with Bachelor of Technology in Computer Science and Engineering."
    },
    {
      role: "Data Structures and Algorithms",
      organization: "Self-Paced Training",
      type: "Training",
      duration: "May 2024 – July 2024",
      description: "Completed intensive training in Data Structures and Algorithms."
    }
  ],

  certifications: [
    {
      title: "SAP Certified – Data Analyst, SAP Analytics Cloud",
      issuer: "SAP",
      date: "February 2026"
    },
    {
      title: "MERN Stack",
      issuer: "Cipher Schools",
      date: "July 2025"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "November 2024"
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council",
      date: "June 2024"
    }
  ],

  achievements: [
    {
      title: "5-Star Badge in Python & C++",
      organization: "HackerRank",
      date: "2024"
    },
    {
      title: "Community Development Project",
      organization: "University Project",
      date: "June 2023"
    }
  ],

  contact: {
    email: "kishorhcs@gmail.com",
    github: "https://github.com/Kishor2006",
    linkedin: "https://www.linkedin.com/in/kishor-kumar206"
  }
};
