import React, { useState } from "react";
import { Code, Terminal, Database, Wrench, Sparkles, Cpu, Layers } from "lucide-react";
import { skillsData } from "../../data/portfolioData";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((cat) => cat.category)];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 font-sans border-t border-slate-800/60 bg-[#06070B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Languages, Tools & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Technologies</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Categorized breakdown of programming languages, full stack web frameworks, databases, and modern developer productivity tools.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-black border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.3)] scale-105"
                  : "bg-[#0F111A] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredSkills.map((catBlock, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-6 bg-cyan-400 rounded-full" />
                <h3 className="text-xl font-bold text-slate-100">{catBlock.category}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catBlock.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group bg-[#0F111A]/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] relative overflow-hidden"
                  >
                    {/* Top glow line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_#00F2FE]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
