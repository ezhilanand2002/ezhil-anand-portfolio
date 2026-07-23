import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05060A] border-t border-slate-800/80 pt-16 pb-12 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#08090E] rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400">
                  EA
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">{personalInfo.name}</h3>
                <p className="text-xs text-cyan-400 font-mono">{personalInfo.degree}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0F111A] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 rounded-lg border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0F111A] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 rounded-lg border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.emailMailto}
                className="p-2 bg-[#0F111A] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 rounded-lg border border-slate-800 transition-colors"
                title="Send Inquiry Email"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About & Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  EduSkills Internship
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-400 transition-colors">
                  Certifications (UiPath, Oracle, Gold)
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-cyan-400 transition-colors">
                  Interactive Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={personalInfo.emailMailto} className="hover:text-cyan-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Ezhil Anand V. Crafted with React, Tailwind CSS, & Modern Web Standards.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#0F111A] hover:bg-slate-800 text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
