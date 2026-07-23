import React from "react";
import { GraduationCap, Award, Target, UserCheck, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { personalInfo, educationTimeline } from "../../data/portfolioData";
import profilePhotoImg from "../../assets/ezhil_profile.jpg";

export const About = () => {
  const strengths = [
    "Proactive Problem Solver",
    "Quick Technology Adaptability",
    "Active Listener & Communicator",
    "Algorithmic Thinking",
    "Clean Code Enthusiast",
    "AI & ML Fundamentals"
  ];

  return (
    <section id="about" className="py-24 relative z-10 font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5" /> ABOUT ME & EDUCATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic Background & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Career Objective</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Combining computer science fundamentals, full-stack software development, and AI exploration with a top-tier 9.2 CGPA academic record.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Summary & Objective */}
          <div className="lg:col-span-6 space-y-8">
            {/* Profile Photo Spotlight Card */}
            <div className="bg-[#0F111A]/90 border border-cyan-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-xl flex items-center gap-6">
              <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-400 to-purple-500 p-[3px] shrink-0 shadow-[0_0_25px_rgba(0,242,254,0.4)]">
                <img
                  src={profilePhotoImg}
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/ezhil_profile.jpg";
                  }}
                  className="w-full h-full object-cover rounded-[13px]"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold">{personalInfo.degree}</p>
                <p className="text-xs text-slate-400">{personalInfo.college}</p>
                <div className="inline-block mt-2 text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  CGPA: 9.2 / 10
                </div>
              </div>
            </div>

            {/* Career Objective Card */}
            <div className="bg-[#0F111A]/90 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Career Objective</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Motivated and detail-oriented Computer Science student with proficiency in Java, Python, and C programming, alongside foundational knowledge in Artificial Intelligence concepts. Actively seeking an entry-level software engineering opportunity or internship to apply programming, full stack, and AI skills in real-world software products.
              </p>
            </div>

            {/* Strengths & Soft Skills */}
            <div className="bg-[#0F111A]/90 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Core Strengths & Aptitude</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#08090E] border border-slate-800 p-3 rounded-xl text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Education Timeline</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
              {educationTimeline.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#08090E] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_#00F2FE]" />

                  {/* Card Content */}
                  <div className="bg-[#0F111A]/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100">{edu.degree}</h4>
                    <p className="text-xs font-medium text-slate-300">{edu.institution} • {edu.location}</p>

                    <ul className="pt-2 space-y-1.5 text-xs text-slate-400">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
