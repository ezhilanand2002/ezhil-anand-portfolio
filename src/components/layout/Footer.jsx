import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2, Sparkles, Code } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Stats", href: "#stats" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-[#06070B] border-t border-slate-800/80 pt-16 pb-12 font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/ezhil_profile.jpg";
                  }}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              B.E. Computer Science & Engineering Undergraduate (CGPA 9.2/10). Specializing in Java, Spring Boot, Node.js, and AI/ML applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0F111A] text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0F111A] text-slate-400 hover:text-purple-400 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0F111A] text-slate-400 hover:text-yellow-400 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-[#0F111A] text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 font-mono text-[10px]">›</span> {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Location & Contact
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5 font-mono">
              <p>📍 {personalInfo.location}</p>
              <p>✉️ {personalInfo.email}</p>
              <p>📞 {personalInfo.phone}</p>
              <p className="text-emerald-400 pt-1 font-sans font-semibold">✓ Open for Full Stack & AI Roles</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Vite & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#0F111A] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 px-3.5 py-2 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
