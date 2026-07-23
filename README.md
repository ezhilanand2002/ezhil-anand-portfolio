# Ezhil Anand V - Futuristic CSE Portfolio Website

A state-of-the-art, high-performance, futuristic portfolio website for **Ezhil Anand V** (Computer Science & Engineering Student, Full Stack Developer, and AI/ML Enthusiast). Inspired by design engineering standards from **Apple Developer, GitHub, Stripe, Vercel, Linear, Notion, and Microsoft Build**.

---

## 🌟 Key Features & Highlights

- **Aesthetic Theme**: Dark Mode default with Cyberpunk neon accents (Cyan `#00F2FE`, Indigo `#6366F1`, Purple `#7F00FF`), glassmorphism cards, and interactive canvas backgrounds.
- **Interactive AI Resume Assistant (`AIChatbot.jsx`)**: Built-in virtual assistant trained on Ezhil's resume to answer recruiter questions about CGPA (9.2/10), projects, skills, and certifications.
- **Terminal Mode (`ezhil-cli`)**: Interactive command-line overlay (`~` or button trigger) supporting commands: `whoami`, `skills`, `projects`, `certs`, `edu`, `contact`, `clear`, `exit`.
- **Command Palette (`Ctrl+K` / `⌘K`)**: Instant search overlay for quick navigation and file downloads.
- **Competitive Coding Dashboard**: Real-time stats cards for LeetCode (`ezhilanand-LC`), HackerRank (`ezhilanandv`), and GitHub repos (`ezhilanandv`).
- **Interactive Project Showcase**: Deep dives into *Smart NLP Chatbot* (Python Flask, Scikit-learn), *Blood Donation System* (Oracle MySQL), and *AICTE Counselling System* (Tkinter, Python) with expandable architecture modals, features list, and source code previews.
- **Verified Certifications Gallery**: Highlights *UiPath Certified Automation Developer Associate*, *Oracle Cloud Infrastructure 2025 AI Foundations Associate*, *NASSCOM Digital Engineering Gold*, *NPTEL HCI*, and *Salesforce Agentblazer Champion*.
- **Interactive Resume Viewer**: Embedded ATS-compliant document preview with text file export and one-click print functionality.
- **Digital Rain / Matrix Mode**: Dynamic matrix rain canvas background toggle.
- **Web Audio Sound Feedback**: Optional subtle sci-fi click sounds on interactions.

---

## 📂 Project Structure

```
ezhil_anand_portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx (Glass navigation & shortcut controls)
│   │   │   ├── Footer.jsx (Social links & direct contacts)
│   │   │   ├── TerminalModal.jsx (Interactive ezhil-cli CLI window)
│   │   │   ├── CommandPalette.jsx (Ctrl+K search overlay)
│   │   │   └── AIChatbot.jsx (Resume AI assistant)
│   │   ├── sections/
│   │   │   ├── Hero.jsx (Typewriter role, CTAs, holographic stats)
│   │   │   ├── About.jsx (Academic timeline, CGPA 9.2, career objective)
│   │   │   ├── Skills.jsx (Filterable tech matrix with level bars)
│   │   │   ├── Projects.jsx (Featured CSE projects & modals)
│   │   │   ├── Experience.jsx (EduSkills Java Full Stack Internship)
│   │   │   ├── Certifications.jsx (UiPath, Oracle AI 2025, NASSCOM Gold)
│   │   │   ├── CodingStats.jsx (LeetCode, HackerRank, GitHub metrics)
│   │   │   ├── ResumeViewer.jsx (ATS resume preview & download)
│   │   │   ├── Blog.jsx (Technical writing articles & reader modal)
│   │   │   └── Contact.jsx (Direct copy channels & message form)
│   │   └── ui/
│   │       ├── CustomCursor.jsx (Glowing pointer trail)
│   │       ├── MatrixBackground.jsx (Digital rain canvas)
│   │       ├── ParticleBackground.jsx (Node network canvas)
│   │       ├── ScrollProgress.jsx (Top progress bar)
│   │       ├── LoadingScreen.jsx (Cyberpunk boot sequence loader)
│   │       └── ProjectModal.jsx (Expandable project modal)
│   ├── data/
│   │   ├── portfolioData.js (Central resume & project data)
│   │   └── botKnowledge.js (AI assistant knowledge base)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open browser at `http://localhost:3000`.

---

## 💻 Technical Stack

- **Frontend Core**: React 18, Vite 5, Tailwind CSS
- **Design System**: Vanilla Glassmorphism, Custom HSL Color Tokens
- **Icons**: Lucide Icons
- **Canvas Visuals**: HTML5 Canvas Particle Engine & Matrix Rain

---

## 📜 Resume Summary

- **Candidate Name**: Ezhil Anand V
- **Education**: B.E. Computer Science and Engineering (2023 - 2027), K S Rangasamy College of Technology | **CGPA: 9.2 / 10**
- **Location**: Tirupattur, Tamil Nadu
- **Email**: ezhilanandv369@gmail.com | **Phone**: +91 7904372312
- **LeetCode**: `ezhilanand-LC` | **GitHub**: `ezhilanandv` | **HackerRank**: `ezhilanandv`
