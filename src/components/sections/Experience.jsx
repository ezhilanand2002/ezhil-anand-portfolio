import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Terminal } from "lucide-react";
import { experienceTimeline } from "../../data/portfolioData";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 font-sans border-t border-slate-800/60 bg-[#06070B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> INTERNSHIPS & EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry Training & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Technical Growth</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Practical development experience gained through AICTE EduSkills internship, open source contributions, and competitive programming.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 via-indigo-500 before:to-purple-500">
          {experienceTimeline.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#08090E] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#00F2FE] z-10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:pr-8 group">
                <div className="bg-[#0F111A]/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-md border border-purple-500/20">
                      {exp.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mt-1">
                      {exp.company}
                    </p>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5 font-mono">
                      <MapPin className="w-3 h-3 text-cyan-400" /> {exp.location}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
