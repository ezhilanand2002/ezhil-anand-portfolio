import React, { useState, useEffect } from "react";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Brain,
  CheckCircle2,
  Award,
  Terminal,
  Download,
  Eye,
  MapPin
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import profilePhotoImg from "../../assets/ezhil_profile.jpg";

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.roles;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailAction = (e) => {
    e.preventDefault();
    scrollToSection("contact");
    setTimeout(() => {
      window.location.href = "mailto:ezhilanandv369@gmail.com";
    }, 300);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                CSE Undergraduate | Full Stack Developer | AI & ML Enthusiast
              </p>
            </div>

            {/* Typewriter Role Box */}
            <div className="h-12 bg-[#0F111A]/80 border border-slate-800 rounded-xl p-3 flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-400 shadow-inner">
              <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="text-slate-400">role = </span>
              <span className="font-semibold text-white">"{currentText}"</span>
              <span className="w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Download Resume Button */}
              <a
                href={personalInfo.resumePdf}
                download="Ezhil_Anand_V_Resume.pdf"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>

              {/* View Resume Navigation Button */}
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("resume");
                }}
                className="flex items-center gap-2 bg-[#0F111A] hover:bg-slate-800 text-slate-200 hover:text-cyan-400 px-4 py-3 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-cyan-400" /> View Resume
              </a>

              {/* Email Me Button (Navigates to #contact & triggers mailto) */}
              <a
                href="mailto:ezhilanandv369@gmail.com"
                onClick={handleEmailAction}
                className="flex items-center gap-2 bg-[#0F111A] hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 font-semibold px-5 py-3 rounded-xl border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.15)] transition-all duration-300 hover:scale-105"
                title="Email Me / Navigate to Contact Form"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Me</span>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#0F111A] hover:bg-slate-800 text-slate-200 hover:text-cyan-400 px-4 py-3 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-cyan-400" /> GitHub
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#0F111A] hover:bg-slate-800 text-slate-200 hover:text-cyan-400 px-4 py-3 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-purple-400" /> LinkedIn
              </a>

              {/* LeetCode Link */}
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#0F111A] hover:bg-slate-800 text-slate-200 hover:text-yellow-400 px-4 py-3 rounded-xl border border-slate-800 hover:border-yellow-500/40 transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-yellow-400" /> LeetCode
              </a>
            </div>

            {/* Direct Email Address Display Box */}
            <div className="pt-2">
              <a
                href="mailto:ezhilanandv369@gmail.com"
                onClick={handleEmailAction}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 bg-[#0F111A]/80 border border-slate-800 hover:border-cyan-500/40 px-3.5 py-2 rounded-xl transition-colors group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>{personalInfo.email}</span>
                <span className="text-[10px] text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 ml-2">
                  Click to email / contact
                </span>
              </a>
            </div>

            {/* Top Academic Highlights */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> K S Rangasamy College of Tech
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-purple-400" /> CGPA: 9.2 / 10
              </span>
            </div>
          </div>

          {/* Right Column - User Photo & Holographic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse" />

              {/* Main Card with Ezhil's Photo */}
              <div className="relative bg-[#0F111A]/95 border border-cyan-500/40 rounded-3xl p-6 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,242,254,0.2)] space-y-6">
                {/* Ezhil Anand V Professional Portrait Photo */}
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-[#161925] to-slate-900 border border-slate-800 p-6 text-center overflow-hidden">
                  <div className="relative w-44 h-44 mx-auto rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 p-[4px] shadow-[0_0_35px_rgba(0,242,254,0.6)] group">
                    <img
                      src={profilePhotoImg}
                      alt={personalInfo.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/ezhil_profile.jpg";
                      }}
                      className="w-full h-full object-cover rounded-full border-2 border-cyan-400 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-1 right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#0F111A] flex items-center justify-center text-xs text-black font-bold shadow-lg" title="Available for hire">
                      ✓
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold text-white tracking-tight">{personalInfo.name}</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-1 font-semibold">B.E. Computer Science (2023-2027)</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Tirupattur, Tamil Nadu
                  </p>
                </div>

                {/* Grid of Key Animated Stats */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="bg-[#08090E]/80 border border-slate-800/80 p-3.5 rounded-2xl hover:border-cyan-500/40 transition-colors">
                    <div className="text-2xl font-extrabold text-cyan-400">{personalInfo.stats.cgpa}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">CURRENT CGPA</div>
                  </div>

                  <div className="bg-[#08090E]/80 border border-slate-800/80 p-3.5 rounded-2xl hover:border-purple-500/40 transition-colors">
                    <div className="text-2xl font-extrabold text-purple-400">{personalInfo.stats.projects}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">CSE PROJECTS</div>
                  </div>

                  <div className="bg-[#08090E]/80 border border-slate-800/80 p-3.5 rounded-2xl hover:border-indigo-500/40 transition-colors">
                    <div className="text-2xl font-extrabold text-indigo-400">{personalInfo.stats.certifications}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">CERTIFICATIONS</div>
                  </div>

                  <div className="bg-[#08090E]/80 border border-slate-800/80 p-3.5 rounded-2xl hover:border-emerald-500/40 transition-colors">
                    <div className="text-2xl font-extrabold text-emerald-400">{personalInfo.stats.dsaSolved}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">DSA SOLVED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
