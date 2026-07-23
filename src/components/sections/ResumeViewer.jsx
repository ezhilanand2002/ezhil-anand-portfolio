import React from "react";
import { FileText, Download, Printer, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { personalInfo, educationTimeline, skillsData, projectsData, certificationsData } from "../../data/portfolioData";

export const ResumeViewer = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative z-10 font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" /> CURRICULUM VITAE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Resume Viewer</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Inspect Ezhil Anand V's resume credentials, academic record, and industry certifications in real-time.
          </p>
        </div>

        {/* Action Header Bar */}
        <div className="bg-[#0F111A] border border-slate-800 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">ATS Optimized Resume Standard</h3>
              <p className="text-xs text-slate-400 font-mono">Verified 98/100 ATS Score • 2026 Format</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Resume in new tab */}
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> View Resume PDF
            </a>

            {/* Direct Download Button */}
            <a
              href={personalInfo.resumePdf}
              download="Ezhil_Anand_V_Resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-bold text-xs px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              <Printer className="w-4 h-4 text-cyan-400" /> Print
            </button>
          </div>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-[#0D0E16] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 font-sans">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full border-2 border-cyan-400 p-0.5 overflow-hidden shrink-0 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Ezhil+Anand+V&background=0F111A&color=00F2FE&size=150";
                  }}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
                <p className="text-sm font-semibold text-cyan-400 font-mono uppercase tracking-wide">
                  {personalInfo.degree}
                </p>
                <p className="text-xs text-slate-400">
                  {personalInfo.location} • {personalInfo.email} • {personalInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 px-3 py-1 rounded hover:text-cyan-400 border border-slate-700"
              >
                LeetCode: EzhilAnand
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 px-3 py-1 rounded hover:text-cyan-400 border border-slate-700"
              >
                GitHub: ezhilanand2002
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 px-3 py-1 rounded hover:text-cyan-400 border border-slate-700"
              >
                LinkedIn: Ezhil Anand V
              </a>
            </div>
          </div>

          {/* Section: Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              SUMMARY
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Section: Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              EDUCATION
            </h3>
            <div className="space-y-3">
              {educationTimeline.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-slate-100">• {edu.degree}</span>
                    <p className="text-slate-400 pl-3">{edu.institution} — <span className="text-emerald-400 font-semibold">{edu.grade}</span></p>
                  </div>
                  <span className="text-slate-500 font-mono">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
              <div><strong className="text-slate-100">Languages:</strong> C, Python, Java</div>
              <div><strong className="text-slate-100">Frontend:</strong> HTML, CSS, JavaScript, React</div>
              <div><strong className="text-slate-100">Databases:</strong> MySQL, Oracle MySQL</div>
              <div><strong className="text-slate-100">Tools:</strong> Git, GitHub, VS Code, Postman</div>
              <div><strong className="text-slate-100">Soft Skills:</strong> Active Listener, Quick Learner, Adaptable</div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              PROJECTS
            </h3>
            <div className="space-y-3 text-xs">
              {projectsData.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100">{idx + 1}. {proj.title}</span>
                    <span className="font-mono text-cyan-400 text-[11px]">{proj.technologies.slice(0, 4).join(", ")}</span>
                  </div>
                  <p className="text-slate-400 pl-4">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              CERTIFICATIONS
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {certificationsData.map((c, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span><strong>{c.title}</strong> — {c.issuer} ({c.issueDate})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
