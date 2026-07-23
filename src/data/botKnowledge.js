export const getBotResponse = (input) => {
  const query = input.toLowerCase().trim();

  if (query.includes("who") || query.includes("about") || query.includes("summary") || query.includes("ezhil")) {
    return `Ezhil Anand V is a Computer Science & Engineering undergraduate at K S Rangasamy College of Technology (2023-2027) with an impressive CGPA of 9.2/10. He specializes in Java, Python, C, Full Stack Web Development (React, Spring Boot, MySQL), and AI/NLP applications. He recently completed a Java Full Stack Developer Internship with EduSkills (AICTE).`;
  }

  if (query.includes("project") || query.includes("build") || query.includes("portfolio")) {
    return `Ezhil has built 3 key technical projects:
1. 🤖 **Smart Chatbot Using NLP**: Web AI chatbot built with Python Flask, NLTK, and Scikit-learn.
2. 🩸 **Blood Donation Management System**: Database-driven app using Oracle MySQL with stock triggers & hospital request queues.
3. 🏫 **AICTE Counselling Management System**: Python Tkinter desktop system with file handling for institution & compliance data.`;
  }

  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("language")) {
    return `Ezhil's core technical stack includes:
• **Languages**: Java, Python, C, JavaScript, SQL
• **Frontend**: React, HTML5, CSS3, Tailwind, Bootstrap
• **Backend**: Spring Boot, Node.js, REST APIs, MySQL
• **Tools**: Git, GitHub, VS Code, Postman, IntelliJ
• **AI Tools**: ChatGPT, Claude, GitHub Copilot, NLTK, Scikit-learn`;
  }

  if (query.includes("certif") || query.includes("oracle") || query.includes("uipath") || query.includes("nasscom")) {
    return `Ezhil holds 5 prestigious industry certifications:
1. 🏆 **UiPath Certified Professional Automation Developer Associate** (2025)
2. ☁️ **Certified Oracle Cloud Infrastructure 2025 AI Foundations Associate**
3. 🥇 **NASSCOM Digital Engineering Certification – Gold**
4. 🎓 **NPTEL - Human Computer Interaction** (IIT)
5. ⚡ **Salesforce - Agentblazer Champion**`;
  }

  if (query.includes("education") || query.includes("cgpa") || query.includes("college") || query.includes("grade")) {
    return `🎓 **Education Profile**:
• **B.E. Computer Science & Engineering** (2023–2027): K S Rangasamy College of Technology | **CGPA: 9.2 / 10**
• **SSLC** (2018): SRKV Jain School, Tirupattur | **Score: 95%**
• **HSC** (2020): Adhiyaman Matric School, Uthangarai | **Score: 74%**`;
  }

  if (query.includes("internship") || query.includes("work") || query.includes("experience") || query.includes("eduskills")) {
    return `💼 **Internship Experience**:
**Java Full Stack Developer Intern** at EduSkills (AICTE Virtual Internship) [Jan 2026 – Mar 2026].
Focused on Java core, OOP design, RESTful microservices with Spring Boot, MySQL data modeling, and React frontend integration.`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach") || query.includes("hire")) {
    return `📫 You can reach Ezhil Anand V directly via:
• **Email**: ezhilanandv369@gmail.com
• **Phone**: +91 7904372312
• **Location**: Tirupattur, Tamil Nadu, India
• **LinkedIn**: linkedin.com/in/ezhilanandv
• **GitHub**: github.com/ezhilanandv`;
  }

  if (query.includes("leetcode") || query.includes("hackerrank") || query.includes("dsa") || query.includes("coding")) {
    return `💻 **Coding & Competitive Programming Stats**:
• **LeetCode**: @ezhilanand-LC | 150+ Problems Solved | Top 25%
• **HackerRank**: @ezhilanandv | 5 Stars in Problem Solving & Java
• **GitHub**: @ezhilanandv | 340+ Contributions this year`;
  }

  return `I am Ezhil's AI Portfolio Assistant! You can ask me about:
• "Tell me about Ezhil's background and CGPA"
• "What are Ezhil's top projects?"
• "What technical skills and tools does Ezhil know?"
• "Show Ezhil's industry certifications"
• "How can I contact or hire Ezhil?"`;
};
