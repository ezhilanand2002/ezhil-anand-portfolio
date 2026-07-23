export const getBotResponse = (input) => {
  const query = input.toLowerCase().trim();

  if (query.includes("who") || query.includes("about") || query.includes("summary") || query.includes("ezhil")) {
    return `Ezhil Anand V is a Computer Science & Engineering undergraduate at K S Rangasamy College of Technology (2023-2027) with an impressive CGPA of 9.2/10. He specializes in Java, Python, C, Full Stack Development (Spring Boot, Node.js, Express.js, MySQL, React), and Machine Learning. He recently completed a Java Full Stack Developer Internship with EduSkills (AICTE).`;
  }

  if (query.includes("project") || query.includes("build") || query.includes("portfolio") || query.includes("volun") || query.includes("weather")) {
    return `Ezhil has developed 3 key software engineering projects:
1. 🚀 **VolunTrack – Enterprise Volunteer & Fundraising Platform**: Multi-tier web app engineered with Java Spring Boot, Spring Security, JWT authentication, JPA/Hibernate, MySQL, and Maven.
2. 🩸 **Blood Donation System**: Database-driven management application using Oracle MySQL with stock triggers & hospital request queues.
3. ⛅ **Weather Forecasting Using Machine Learning**: Web application using Decision Tree & Support Vector Machine (SVM) models trained on meteorological data, served via Python Flask.`;
  }

  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("language") || query.includes("backend")) {
    return `Ezhil's technical skill set includes:
• **Languages**: Java, Python, C, JavaScript, SQL
• **Frontend**: HTML5, CSS3, JavaScript, Bootstrap, React
• **Backend**: Spring Boot, Node.js, Express.js, JPA/Hibernate, Maven
• **Databases**: MySQL, Oracle MySQL
• **Tools**: GitHub, VS Code, Postman
• **AI & ML**: Scikit-Learn, Pandas, NumPy, Decision Tree, SVM, Flask
• **Languages Spoken**: Hindi, Tamil, English`;
  }

  if (query.includes("certif") || query.includes("oracle") || query.includes("uipath") || query.includes("nasscom")) {
    return `Ezhil holds 5 prestigious industry certifications:
1. 🏆 **UiPath Certified Professional Automation Developer Associate Certification**
2. ☁️ **Certified-Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate**
3. 🥇 **NASSCOM Digital Engineering Certification – Gold**
4. 🎓 **NPTEL- Human Computer Interaction** (IIT)
5. ⚡ **Sales Force - Agentblazer Champion**`;
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
Focused on Java core, OOP design, RESTful microservices with Spring Boot, MySQL data modeling, and web interface integration.`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach") || query.includes("hire")) {
    return `📫 You can reach Ezhil Anand V directly via:
• **Email**: ezhilanandv369@gmail.com
• **Phone**: +91 7904372312
• **Location**: Tirupattur, Tamil Nadu, India
• **LinkedIn**: linkedin.com/in/ezhilanandv
• **GitHub**: github.com/ezhilanand2002`;
  }

  if (query.includes("leetcode") || query.includes("hackerrank") || query.includes("dsa") || query.includes("coding")) {
    return `💻 **Coding & Competitive Programming Stats**:
• **LeetCode**: @ezhilanand-LC | 150+ Problems Solved | Top 25%
• **HackerRank**: @ezhilanandv | 5 Stars in Problem Solving & Java
• **GitHub**: @ezhilanand2002 | 340+ Contributions this year`;
  }

  return `I am Ezhil's AI Portfolio Assistant! You can ask me about:
• "Tell me about Ezhil's background and CGPA"
• "What are Ezhil's projects like VolunTrack or Weather ML?"
• "What technical skills does Ezhil know in Backend & AI?"
• "Show Ezhil's industry certifications"
• "How can I contact or hire Ezhil?"`;
};
