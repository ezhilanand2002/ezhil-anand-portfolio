import profilePhotoAsset from "../assets/ezhil_profile.jpg";
import resumePdfAsset from "../assets/Ezhil_Anand_V_Resume.pdf";

export const personalInfo = {
  name: "Ezhil Anand V",
  title: "Computer Science & Engineering Student",
  roles: [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "Competitive Programmer"
  ],
  bio: "Motivated and detail-oriented Computer Science student with proficiency in Java, C, and Web Development, alongside foundational knowledge in Artificial Intelligence. Passionate about building scalable, high-performance applications, exploring emerging tech, and applying AI-driven solutions to solve real-world problems.",
  email: "ezhilanandv369@gmail.com",
  emailMailto: "mailto:ezhilanandv369@gmail.com?subject=Portfolio%20Inquiry&body=Hello,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
  phone: "+91 7904372312",
  phoneTel: "tel:+917904372312",
  location: "Tirupattur, Tamil Nadu, India",
  college: "K S Rangasamy College of Technology",
  degree: "B.E. Computer Science and Engineering",
  cgpa: "9.2 / 10",
  graduationYear: "2023 - 2027",
  profilePhoto: profilePhotoAsset,
  resumePdf: resumePdfAsset,
  socials: {
    github: "https://github.com/ezhilanand2002",
    linkedin: "https://www.linkedin.com/in/ezhilanandv/",
    leetcode: "https://leetcode.com/u/EzhilAnand/",
    hackerrank: "https://hackerrank.com/ezhilanandv"
  },
  stats: {
    cgpa: "9.2",
    projects: "3+",
    certifications: "5",
    dsaSolved: "150+",
    githubRepos: "12+",
    internships: "1"
  }
};

export const educationTimeline = [
  {
    period: "2023 - 2027",
    degree: "B.E. Computer Science and Engineering",
    institution: "K S Rangasamy College of Technology",
    location: "Tiruchengode, Tamil Nadu",
    grade: "CGPA: 9.2 / 10",
    badge: "Current Degree",
    highlights: [
      "Department topper candidate with 9.2 CGPA overall score",
      "Specializing in Data Structures, Algorithms, Full Stack Web Development, & AI Foundations",
      "Active team lead in college hackathons and technical project symposiums"
    ]
  },
  {
    period: "2020",
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Adhiyaman Matric School",
    location: "Uthangarai, Tamil Nadu",
    grade: "Score: 74%",
    badge: "Schooling",
    highlights: [
      "Focused on Physics, Chemistry, Mathematics, and Computer Science",
      "Participated in state-level mathematics & science quizzes"
    ]
  },
  {
    period: "2018",
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "SRKV Jain School",
    location: "Tirupattur, Tamil Nadu",
    grade: "Score: 95%",
    badge: "High Honors",
    highlights: [
      "Achieved 95% overall distinction score",
      "School rank holder in Mathematics & Science subjects"
    ]
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 90, icon: "Coffee", tag: "Primary" },
      { name: "Python", level: 85, icon: "FileCode", tag: "AI/NLP" },
      { name: "C Language", level: 80, icon: "Cpu", tag: "Core" },
      { name: "JavaScript", level: 88, icon: "Terminal", tag: "Web" },
      { name: "SQL", level: 85, icon: "Database", tag: "Queries" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 85, icon: "Atom", tag: "Framework" },
      { name: "HTML5", level: 95, icon: "FileText", tag: "Markup" },
      { name: "CSS3 / Tailwind", level: 90, icon: "Palette", tag: "Styling" },
      { name: "JavaScript (ES6+)", level: 88, icon: "Code", tag: "Logic" },
      { name: "Bootstrap", level: 82, icon: "Layers", tag: "UI Grid" }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: 80, icon: "ShieldCheck", tag: "Backend" },
      { name: "MySQL", level: 85, icon: "Database", tag: "RDBMS" },
      { name: "Node.js", level: 75, icon: "Server", tag: "Runtime" },
      { name: "REST APIs", level: 88, icon: "Network", tag: "Architecture" }
    ]
  },
  {
    category: "Developer Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch", tag: "VCS" },
      { name: "VS Code", level: 95, icon: "Monitor", tag: "IDE" },
      { name: "Postman", level: 85, icon: "Send", tag: "API Testing" },
      { name: "IntelliJ IDEA", level: 82, icon: "Box", tag: "Java IDE" }
    ]
  },
  {
    category: "AI & Productivity Tools",
    icon: "Sparkles",
    skills: [
      { name: "ChatGPT", level: 92, icon: "Bot", tag: "LLM" },
      { name: "Claude AI", level: 90, icon: "MessageSquare", tag: "Reasoning" },
      { name: "GitHub Copilot", level: 88, icon: "Zap", tag: "AI Coding" },
      { name: "NLTK & Scikit-Learn", level: 80, icon: "Brain", tag: "ML/NLP" }
    ]
  },
  {
    category: "Professional Soft Skills",
    icon: "UserCheck",
    skills: [
      { name: "Active Listener", level: 95, icon: "Headphones", tag: "Soft Skill" },
      { name: "Quick Learner", level: 95, icon: "Zap", tag: "Growth" },
      { name: "Adaptable & Flexible", level: 90, icon: "RefreshCw", tag: "Agile" },
      { name: "Proactive Thinker", level: 92, icon: "Lightbulb", tag: "Problem Solving" }
    ]
  }
];

export const projectsData = [
  {
    id: "smart-nlp-chatbot",
    title: "Smart Chatbot Using Natural Language Processing",
    subtitle: "AI-Powered Conversational Bot with Intent Recognition",
    category: "AI & Web App",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Designed and implemented a web-based AI chatbot using Python Flask, NLTK, and Scikit-learn to handle context-aware domain queries, calculations, and date/time support.",
    fullDescription: "An intelligent conversational chatbot built to deliver domain-specific information, automate answers to common user queries, compute basic calculations, and provide real-time date/time updates through an intuitive web interface. Built leveraging Natural Language Toolkit (NLTK) tokenization, TF-IDF vectorization, and scikit-learn intent classification.",
    technologies: ["Python", "Flask", "NLTK", "Scikit-Learn", "HTML5", "CSS3", "JavaScript"],
    architecture: ["User Interface (HTML/CSS/JS)", "Flask REST Endpoints", "NLTK Tokenizer & Stemmer", "Scikit-Learn Classifier", "JSON Intent Knowledge Base"],
    features: [
      "Context-aware domain-specific query recognition",
      "Natural Language Understanding (NLU) with intent classification",
      "Built-in arithmetic evaluation engine",
      "Real-time date and time response generator",
      "Clean glassmorphism interactive chat window"
    ],
    github: "https://github.com/ezhilanand2002/smart-nlp-chatbot",
    liveDemo: "https://smart-nlp-chatbot-demo.vercel.app",
    status: "Completed",
    difficulty: "Advanced",
    codeSnippet: `from flask import Flask, request, jsonify
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    user_query = request.json.get('message')
    response = process_nlp_intent(user_query)
    return jsonify({'reply': response})`
  },
  {
    id: "blood-donation-system",
    title: "Blood Donation Management System",
    subtitle: "Database-Driven Medical Supply Chain System",
    category: "Database & Backend",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Developed a database-driven system using Oracle MySQL to manage donor registrations, real-time blood bank inventory, hospital emergency requests, and donation history.",
    fullDescription: "A robust enterprise database solution designed to bridge the gap between voluntary blood donors, blood banks, and hospitals during emergencies. Features complex SQL queries, relational table normalizing, stored procedures for stock tracking, and automated matching between request requirements and blood groups.",
    technologies: ["Oracle MySQL", "SQL Triggers", "Relational Database Design", "HTML/CSS Dashboard"],
    architecture: ["Relational Schema (3NF)", "Stored Procedures & Views", "Transaction Management", "Admin & Donor Portals"],
    features: [
      "Donor registration and blood group compatibility mapping",
      "Real-time blood stock units tracking per blood bank branch",
      "Priority hospital emergency request queue management",
      "Comprehensive donation logs & eligibility check tracking",
      "Automated stock alert triggers when threshold falls low"
    ],
    github: "https://github.com/ezhilanand2002/blood-donation-system",
    liveDemo: "https://blood-donation-system-demo.vercel.app",
    status: "Completed",
    difficulty: "Intermediate",
    codeSnippet: `CREATE TABLE Donor (
    donor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    blood_group VARCHAR(5) NOT NULL,
    phone VARCHAR(15) UNIQUE,
    last_donated_date DATE
);

CREATE TRIGGER update_stock AFTER INSERT ON DonationHistory
FOR EACH ROW
BEGIN
    UPDATE BloodStock 
    SET units = units + NEW.units_donated 
    WHERE blood_group = NEW.blood_group;
END;`
  },
  {
    id: "aicte-counselling-system",
    title: "AICTE Counselling Management System",
    subtitle: "Automated Data & Compliance Management Solution",
    category: "Desktop & Data System",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Created a Python-based GUI system for AICTE operations to handle institute details, student records, faculty data, and compliance tracking via persistent file handling.",
    fullDescription: "A specialized administration desktop system built to streamline the complex counseling, record management, and compliance verification operations for institutions accredited under AICTE (All India Council for Technical Education). Leverages Tkinter GUI and structured file handling for rapid local record lookup.",
    technologies: ["Python", "Tkinter", "File Handling", "CSV/JSON Data Storage", "GUI Design"],
    architecture: ["Tkinter Desktop Interface", "Validation & Data Parser", "Persistent File I/O Engine", "Report & Certificate Generator"],
    features: [
      "Institution registration & AICTE code verification",
      "Faculty profiles & qualification matrix storage",
      "Student seat allocation & counseling queue processing",
      "Automated compliance status report compilation",
      "Fast offline file-based storage with search & filter"
    ],
    github: "https://github.com/ezhilanand2002/aicte-counselling-system",
    liveDemo: "https://aicte-system-demo.vercel.app",
    status: "Completed",
    difficulty: "Intermediate",
    codeSnippet: `import tkinter as tk
from tkinter import messagebox
import json

class AICTECounselingApp:
    def __init__(self, root):
        self.root = root
        self.root.title("AICTE Counselling Management System")
        self.create_widgets()

    def save_institution_record(self, data):
        with open("institutions.json", "a") as f:
            json.dump(data, f)
            f.write("\\n")
        messagebox.showinfo("Success", "Record Saved Successfully")`
  }
];

export const experienceTimeline = [
  {
    period: "Jan 2026 - Mar 2026",
    role: "Java Full Stack Developer Intern",
    company: "EduSkills (AICTE Virtual Internship)",
    location: "Remote / AICTE Platform",
    type: "Internship",
    badge: "Key Internship",
    description: "Engaged in hands-on industrial training and project development focused on Java core, object-oriented design, Spring Boot architecture, REST APIs, and modern frontend integration.",
    responsibilities: [
      "Developed modular Java enterprise application components using OOP principles",
      "Designed and implemented RESTful microservice endpoints with Spring Boot framework",
      "Worked with MySQL relational databases, writing queries, joins, and data persistence layers",
      "Collaborated on full-stack web interface integration using HTML, CSS, JavaScript, and React"
    ]
  },
  {
    period: "2024 - 2025",
    role: "Open Source Contributor & Competitive Programmer",
    company: "GitHub / LeetCode / HackerRank",
    location: "Self-Driven",
    type: "Personal Growth",
    badge: "Continuous",
    description: "Active coder on LeetCode and HackerRank practicing algorithms, data structures, and software engineering principles.",
    responsibilities: [
      "Solved 150+ coding challenges spanning arrays, strings, trees, dynamic programming, and graphs",
      "Earned 5-star ratings in problem solving on competitive coding platforms",
      "Maintained version-controlled repositories documenting clean code implementations"
    ]
  },
  {
    period: "2024",
    role: "Technical Workshop & Hackathon Participant",
    company: "K S Rangasamy College of Technology",
    location: "Tiruchengode",
    type: "Academic",
    badge: "Hackathons",
    description: "Participated in national-level technical symposiums, hands-on workshops on AI & Cloud computing, and collaborative hackathons.",
    responsibilities: [
      "Built rapid prototypes under strict time constraints during hackathons",
      "Presented technical solutions on AI chatbot architectures and web development"
    ]
  }
];

export const certificationsData = [
  {
    id: "uipath-automation",
    title: "UiPath Certified Professional Automation Developer Associate",
    issuer: "UiPath",
    issueDate: "2025",
    credentialId: "UIPATH-DEV-2025-99",
    category: "RPA & Automation",
    color: "from-orange-500 to-amber-500",
    badge: "Verified Certification",
    description: "Validates core competence in robotic process automation, UiPath Studio workflows, selector debugging, and automated business flow orchestration.",
    verifyUrl: "https://uipath.com/verify"
  },
  {
    id: "oracle-cloud-ai",
    title: "Certified-Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "2025",
    credentialId: "OCI-AI-2025-FOUNDATIONS",
    category: "Artificial Intelligence & Cloud",
    color: "from-red-600 to-orange-600",
    badge: "Oracle Certified",
    description: "Certifies foundational expertise in Oracle Cloud Infrastructure (OCI) AI services, Machine Learning workloads, Generative AI models, and cloud vision/NLP APIs.",
    verifyUrl: "https://education.oracle.com/verify"
  },
  {
    id: "nasscom-gold",
    title: "NASSCOM Digital Engineering Certification – Gold",
    issuer: "NASSCOM FutureSkills",
    issueDate: "2025",
    credentialId: "NASSCOM-GOLD-DE-2025",
    category: "Software Engineering",
    color: "from-yellow-400 to-amber-600",
    badge: "Gold Grade",
    description: "Highest level gold certification awarded for excellence in software engineering principles, web stack fundamentals, and digital solution delivery.",
    verifyUrl: "https://futureskillsprime.in/verify"
  },
  {
    id: "nptel-hci",
    title: "NPTEL - Human Computer Interaction",
    issuer: "NPTEL / IIT",
    issueDate: "2024",
    credentialId: "NPTEL-HCI-2024-PASS",
    category: "UI/UX & Cognitive Engineering",
    color: "from-cyan-500 to-blue-600",
    badge: "IIT Course",
    description: "Completed rigorous academic course on user interface principles, usability testing, cognitive ergonomics, interactive prototyping, and user-centric design.",
    verifyUrl: "https://nptel.ac.in/verify"
  },
  {
    id: "salesforce-agentblazer",
    title: "Salesforce - Agentblazer Champion",
    issuer: "Salesforce",
    issueDate: "2025",
    credentialId: "SF-AGENTBLAZER-CHAMP",
    category: "AI Agents & CRM",
    color: "from-blue-500 to-indigo-600",
    badge: "Champion",
    description: "Recognized as Agentblazer Champion for mastering Salesforce autonomous AI agents, workflow automation, and CRM intelligence integration.",
    verifyUrl: "https://trailhead.salesforce.com/verify"
  }
];

export const blogPosts = [
  {
    id: "building-nlp-chatbots-flask",
    title: "Building Intelligent NLP Chatbots with Flask & Scikit-Learn",
    excerpt: "A deep dive into tokenization, TF-IDF vectorization, and intent classification to build context-aware conversational bots from scratch.",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    date: "July 2025",
    tags: ["Python", "NLP", "Flask", "Scikit-Learn"],
    content: `
### Introduction to NLP Chatbots
Conversational interfaces have transformed how users interact with web software. In this technical walkthrough, we explore how tokenization, stemming, and vectorization come together in a Flask framework to deliver rapid intent classification.

### Core Architecture
1. **Preprocessing**: Removing noise, converting to lowercase, and using NLTK's WordNetLemmatizer.
2. **Feature Extraction**: Applying Term Frequency-Inverse Document Frequency (TF-IDF) to convert textual queries into numeric feature vectors.
3. **Classification**: Training a Naive Bayes or Logistic Regression model on intent label pairs.

### Code Sample
\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(corpus)
\`\`\`
    `
  },
  {
    id: "java-spring-boot-architecture",
    title: "Mastering Java & Spring Boot REST API Architecture",
    excerpt: "Best practices for designing scalable microservices, dependency injection, JPA ORM persistence, and clean layered architecture.",
    category: "Backend Development",
    readTime: "8 min read",
    date: "June 2025",
    tags: ["Java", "Spring Boot", "REST API", "MySQL"],
    content: `
### Why Spring Boot?
Spring Boot provides opinionated starter dependencies and auto-configuration that enable developers to build production-grade Java applications effortlessly.

### Layered Architecture Design
- **Controller Layer**: Handles HTTP requests, path variables, and response DTOs.
- **Service Layer**: Implements core business logic, validations, and transaction boundaries.
- **Repository Layer**: Extends \`JpaRepository\` to execute clean SQL operations.
    `
  },
  {
    id: "oracle-cloud-ai-guide",
    title: "Navigating Oracle Cloud Infrastructure (OCI) AI Foundations",
    excerpt: "Understanding cloud vision, document understanding, automated speech recognition, and generative AI service integrations in enterprise clouds.",
    category: "Cloud & AI",
    readTime: "5 min read",
    date: "May 2025",
    tags: ["Cloud", "OCI", "AI", "Oracle"],
    content: `
### Key OCI AI Services
Oracle Cloud Infrastructure provides pre-trained AI models that can be consumed directly via REST endpoints. Key components include OCI Language for sentiment analysis, OCI Vision for object detection, and OCI Document Understanding.
    `
  }
];

export const codingStats = {
  leetcode: {
    username: "EzhilAnand",
    url: "https://leetcode.com/u/EzhilAnand/",
    solved: "150+",
    ranking: "Top 25%",
    badges: ["50 Days Badge 2025", "Problem Solving Specialist"],
    topics: ["Arrays", "String Manipulation", "Trees", "Binary Search", "Dynamic Programming"]
  },
  hackerrank: {
    username: "ezhilanandv",
    url: "https://hackerrank.com/ezhilanandv",
    stars: "5 Stars",
    domain: "Problem Solving & Java",
    badges: ["Problem Solving (Gold)", "Java (Gold)", "Python (Silver)"]
  },
  github: {
    username: "ezhilanand2002",
    url: "https://github.com/ezhilanand2002",
    contributionsThisYear: "340+",
    repos: "12",
    topLanguages: ["Java", "Python", "JavaScript", "HTML/CSS", "SQL"]
  }
};
