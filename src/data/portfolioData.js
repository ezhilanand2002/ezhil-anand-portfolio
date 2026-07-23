import profilePhotoAsset from "../assets/ezhil_profile.jpg";
import resumePdfAsset from "../assets/Ezhil_Anand_V_Resume.pdf";

import uipathCertImg from "../assets/certificates/uipath_certificate.jpg";
import oracleAiCertImg from "../assets/certificates/oracle_ai_certificate.png";
import nasscomGoldCertImg from "../assets/certificates/nasscom_gold_certificate.png";
import nptelHciCertImg from "../assets/certificates/nptel_hci_certificate.png";

export const personalInfo = {
  name: "EZHIL ANAND V",
  title: "Computer Science & Engineering Student",
  roles: [
    "Full Stack Developer",
    "Java & Spring Boot Developer",
    "Node.js & Express.js Developer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "Competitive Programmer"
  ],
  bio: "Motivated and detail-oriented Computer Science student with proficiency in Java, C, and Web Development, alongside foundational knowledge in Artificial Intelligence concepts. Passionate about building efficient, enterprise-grade software solutions, applying AI-driven approaches, and exploring emerging technologies.",
  email: "ezhilanandv369@gmail.com",
  emailMailto: "mailto:ezhilanandv369@gmail.com",
  phone: "+91 7904372312",
  phoneTel: "tel:+917904372312",
  location: "Tirupattur, Tamil Nadu, India",
  college: "K S Rangasamy College of Technology",
  degree: "B.E. Computer Science and Engineering",
  cgpa: "9.2 / 10",
  graduationYear: "2023 - 2027",
  profilePhoto: profilePhotoAsset,
  resumePdf: resumePdfAsset,
  languagesSpoken: ["Hindi", "Tamil", "English"],
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
      "Specializing in Data Structures, Algorithms, Spring Boot Full Stack, Node.js & Machine Learning",
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
      { name: "Java", level: 92, icon: "Coffee", tag: "Core & Enterprise" },
      { name: "Python", level: 88, icon: "FileCode", tag: "AI / ML / Data Science" },
      { name: "C Language", level: 82, icon: "Cpu", tag: "Core Fundamentals" },
      { name: "JavaScript (ES6+)", level: 88, icon: "Terminal", tag: "Full Stack" },
      { name: "SQL", level: 85, icon: "Database", tag: "Relational Queries" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "HTML5", level: 95, icon: "FileText", tag: "Markup Structure" },
      { name: "CSS3 / Tailwind", level: 90, icon: "Palette", tag: "Modern Styling" },
      { name: "JavaScript", level: 88, icon: "Code", tag: "Logic & DOM" },
      { name: "Bootstrap", level: 85, icon: "Layers", tag: "Responsive Grid" }
    ]
  },
  {
    category: "Backend Frameworks",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: 88, icon: "ShieldCheck", tag: "Java Enterprise API" },
      { name: "Node.js", level: 80, icon: "Server", tag: "JS Runtime" },
      { name: "Express.js", level: 80, icon: "Network", tag: "REST Middleware" },
      { name: "JPA / Hibernate", level: 85, icon: "Database", tag: "ORM Persistence" }
    ]
  },
  {
    category: "Databases & Tools",
    icon: "Wrench",
    skills: [
      { name: "MySQL / Oracle MySQL", level: 88, icon: "Database", tag: "RDBMS" },
      { name: "GitHub", level: 92, icon: "GitBranch", tag: "Version Control" },
      { name: "VS Code", level: 95, icon: "Monitor", tag: "IDE Studio" },
      { name: "Maven", level: 85, icon: "Box", tag: "Build Tool" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Sparkles",
    skills: [
      { name: "Scikit-Learn", level: 85, icon: "Brain", tag: "ML Classifiers" },
      { name: "Pandas & NumPy", level: 85, icon: "Layers", tag: "Data Analysis" },
      { name: "Decision Trees & SVM", level: 82, icon: "Zap", tag: "Predictive Models" },
      { name: "Python Flask", level: 88, icon: "Server", tag: "ML Web Serving" }
    ]
  },
  {
    category: "Professional Soft Skills",
    icon: "UserCheck",
    skills: [
      { name: "Active Listener", level: 95, icon: "Headphones", tag: "Communication" },
      { name: "Quick Learner", level: 95, icon: "Zap", tag: "Growth Mindset" },
      { name: "Adaptable & Flexible", level: 90, icon: "RefreshCw", tag: "Agile Ready" },
      { name: "Proactive Thinker", level: 92, icon: "Lightbulb", tag: "Problem Solving" }
    ]
  }
];

export const projectsData = [
  {
    id: "volun-track",
    title: "VolunTrack – Enterprise Volunteer & Fundraising Platform",
    subtitle: "Secure Multi-Tier Web Application with Spring Boot & JWT",
    category: "Enterprise Web & Backend",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Developed a secure, multi-tier web application to coordinate volunteer activities and charity donations. Engineered a Spring Boot REST API integrated with Spring Security and JWT for role-based authorization.",
    fullDescription: "VolunTrack is a comprehensive enterprise volunteer and fundraising platform designed to streamline community activities, charity campaign management, and donor contributions. Features a modular Spring Boot REST API architecture with Spring Security & JWT authentication, Spring Data JPA relational mapping, dynamic admin dashboard statistics, event scheduling, and real-time fundraising progress tracking.",
    technologies: ["Java (Spring Boot)", "JPA/Hibernate", "MySQL", "Bootstrap", "JavaScript", "Maven", "Spring Security", "JWT"],
    architecture: ["Bootstrap/JS Frontend", "Spring Security & JWT Filter", "Spring Boot REST Controller", "Spring Data JPA Repository Layer", "MySQL Relational Schema"],
    features: [
      "Role-based access control (Admin, Organizer, Volunteer, Donor) with JWT tokens",
      "Dynamic dashboard stats tracking live fundraising campaign progress",
      "Volunteer event scheduling, registration, and attendance tracking",
      "Secure MySQL relational schema for donations and user audit logs",
      "Maven enterprise build lifecycle integration"
    ],
    github: "https://github.com/ezhilanand2002/voluntrack-springboot",
    liveDemo: "https://volun-track-demo.vercel.app",
    status: "Completed",
    difficulty: "Advanced Enterprise",
    codeSnippet: `@RestController
@RequestMapping("/api/v1/volunteers")
@CrossOrigin(origins = "*")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;

    @PostMapping("/events/{eventId}/register")
    @PreAuthorize("hasRole('VOLUNTEER')")
    public ResponseEntity<RegistrationResponse> registerForEvent(
            @PathVariable Long eventId,
            @AuthenticationPrincipal UserDetails userDetails) {
        RegistrationResponse response = volunteerService.registerVolunteer(eventId, userDetails.getUsername());
        return ResponseEntity.ok(response);
    }
}`
  },
  {
    id: "blood-donation-system",
    title: "Blood Donation System",
    subtitle: "Database-Driven Medical Supply Chain Solution",
    category: "Database & Supply Chain",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Developed a database-driven application using Oracle MySQL to manage donor registrations, real-time blood bank stock, hospital emergency requests, and donation history.",
    fullDescription: "A robust database-driven solution designed to streamline the blood donation process during medical emergencies. Connects voluntary blood donors, hospital inventory systems, and blood bank branches through efficient normalized relational tables, automated stock triggers, and donation history logging.",
    technologies: ["Oracle MySQL", "SQL Triggers", "Relational Database Design", "HTML/CSS Dashboard"],
    architecture: ["Relational Schema (3NF)", "Stored Procedures & Views", "Transaction Management", "Admin & Donor Portals"],
    features: [
      "Donor registration and blood group compatibility mapping",
      "Real-time blood stock units tracking per blood bank branch",
      "Priority hospital emergency request queue management",
      "Comprehensive donation logs & eligibility check tracking",
      "Automated stock alert triggers when threshold falls low"
    ],
    github: "https://github.com/ezhilanand2002/Blood-donation",
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
    id: "weather-forecasting-ml",
    title: "Weather Forecasting Using Machine Learning",
    subtitle: "Web-Based Predictive Weather Intelligence System",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Designed and developed a web application using Machine Learning (Decision Tree & SVM) to predict weather conditions from meteorological data, served via an interactive Flask web interface.",
    fullDescription: "A predictive weather forecasting system built using machine learning techniques on historical meteorological datasets. Implemented comprehensive data preprocessing, feature scaling, model training, and performance evaluation comparing Decision Tree and Support Vector Machine (SVM) algorithms. Features a responsive Python Flask web application for real-time weather predictions.",
    technologies: ["Python (Flask)", "HTML", "CSS", "JavaScript", "Scikit-Learn", "Pandas", "NumPy", "Decision Tree", "SVM"],
    architecture: ["Meteorological Data Pipeline", "Pandas & NumPy Preprocessor", "Scikit-Learn Classifier (Decision Tree & SVM)", "Flask API Backend", "Interactive Web Frontend"],
    features: [
      "Meteorological data preprocessing, missing value handling, and feature scaling",
      "Supervised ML model training with Decision Tree and Support Vector Machine (SVM)",
      "Model accuracy evaluation and performance metric comparisons",
      "Interactive Python Flask web interface for instant weather inference",
      "Real-time prediction charts and meteorological parameter visualizers"
    ],
    github: "https://github.com/ezhilanand2002/weather_prediction",
    liveDemo: "https://weather-ml-demo.vercel.app",
    status: "Completed",
    difficulty: "Advanced ML",
    codeSnippet: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

# Preprocessing & Model Evaluation
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

dt_model = DecisionTreeClassifier()
dt_model.fit(X_train, y_train)
dt_accuracy = accuracy_score(y_test, dt_model.predict(X_test))

svm_model = SVC(kernel='rbf')
svm_model.fit(X_train, y_train)
svm_accuracy = accuracy_score(y_test, svm_model.predict(X_test))`
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
    title: "UiPath Certified Professional Automation Developer Associate Certification",
    issuer: "UiPath",
    issueDate: "January 27, 2026",
    credentialId: "004757",
    category: "RPA & Automation",
    color: "from-orange-500 to-amber-500",
    badge: "Official Certificate",
    description: "Validates core competence in robotic process automation, UiPath Studio workflows, selector debugging, and automated business flow orchestration.",
    image: uipathCertImg,
    downloadUrl: "/certificates/uipath_certificate.jpg",
    fileName: "UiPath_Automation_Developer_Certificate.jpg"
  },
  {
    id: "oracle-cloud-ai",
    title: "Certified-Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    issueDate: "November 16, 2025",
    credentialId: "103211960OCI25AICFA",
    category: "Artificial Intelligence & Cloud",
    color: "from-red-600 to-orange-600",
    badge: "Oracle Certified",
    description: "Certifies foundational expertise in Oracle Cloud Infrastructure (OCI) AI services, Machine Learning workloads, Generative AI models, and cloud vision/NLP APIs. Valid until Nov 16, 2027.",
    image: oracleAiCertImg,
    downloadUrl: "/certificates/oracle_ai_certificate.png",
    fileName: "Oracle_Cloud_AI_Foundations_Certificate.png"
  },
  {
    id: "nasscom-gold",
    title: "NASSCOM Digital Engineering Certification – Gold",
    issuer: "NASSCOM FutureSkills Prime",
    issueDate: "April 16, 2026",
    credentialId: "FSP/2026/4/10284839",
    category: "Software Engineering",
    color: "from-yellow-400 to-amber-600",
    badge: "Gold Grade (70%+)",
    description: "Highest level gold category certification awarded for excellence in digital engineering principles, web stack fundamentals, and digital solution delivery.",
    image: nasscomGoldCertImg,
    downloadUrl: "/certificates/nasscom_gold_certificate.png",
    fileName: "NASSCOM_Digital_Engineering_Gold_Certificate.png"
  },
  {
    id: "nptel-hci",
    title: "NPTEL - Human Computer Interaction (Elite Grade)",
    issuer: "NPTEL / IIT Madras (Govt. of India)",
    issueDate: "Jan-Apr 2026",
    credentialId: "NPTEL26CS70S264900368",
    category: "UI/UX & Cognitive Engineering",
    color: "from-cyan-500 to-blue-600",
    badge: "Elite Grade (83%)",
    description: "Awarded Elite grade with 83% consolidated score (Assignments: 25/25, Exam: 57.5/75) for completing 12-week course on user interface design & usability engineering.",
    image: nptelHciCertImg,
    downloadUrl: "/certificates/nptel_hci_certificate.png",
    fileName: "NPTEL_Human_Computer_Interaction_Elite_Certificate.png"
  },
  {
    id: "salesforce-agentblazer",
    title: "Salesforce - Agentblazer Champion",
    issuer: "Salesforce Trailhead",
    issueDate: "2025",
    credentialId: "SF-AGENTBLAZER-CHAMP",
    category: "AI Agents & CRM",
    color: "from-blue-500 to-indigo-600",
    badge: "Champion",
    description: "Recognized as Agentblazer Champion for mastering Salesforce autonomous AI agents, workflow automation, and CRM intelligence integration.",
    image: null,
    downloadUrl: null,
    fileName: null
  }
];

export const blogPosts = [
  {
    id: "spring-boot-voluntrack-architecture",
    title: "Building Enterprise Microservices with Spring Boot, Spring Security & JWT",
    excerpt: "A comprehensive design pattern breakdown of role-based authorization, JPA relational persistence, and Maven build pipelines.",
    category: "Backend Architecture",
    readTime: "7 min read",
    date: "July 2025",
    tags: ["Java", "Spring Boot", "JWT", "MySQL"],
    content: `
### Enterprise Spring Boot Architecture
In modern backend systems, securing REST APIs with JSON Web Tokens (JWT) and Spring Security ensures robust role-based access control.

### Core Modules
1. **Security Config**: Configuring \`SecurityFilterChain\` with stateless session policy.
2. **JWT Filter**: Intercepting incoming HTTP requests to validate bearer token claims.
3. **Service & JPA**: Managing complex relational queries with Spring Data JPA.
    `
  },
  {
    id: "weather-ml-forecasting",
    title: "Predictive Weather Forecasting Using Decision Trees & SVM in Python",
    excerpt: "Data preprocessing, feature scaling, and comparing supervised machine learning models for real-time web prediction.",
    category: "Machine Learning",
    readTime: "6 min read",
    date: "June 2025",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "Flask"],
    content: `
### Predictive Weather Intelligence
Machine Learning algorithms allow us to detect complex non-linear patterns in meteorological datasets.

### Model Comparison Pipeline
- **Preprocessing**: Imputing missing data, scaling features via \`StandardScaler\`.
- **Decision Tree**: Evaluating decision boundaries for temperature and humidity thresholds.
- **Support Vector Machine (SVM)**: Applying Radial Basis Function (RBF) kernel for optimal hyper-plane separation.
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
    username: "ezhilanand-LC",
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
    topLanguages: ["Java", "Python", "JavaScript", "Spring Boot", "SQL"]
  }
};
