import React from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck, Download, Sparkles } from "lucide-react";
import { certificationsData } from "../../data/portfolioData";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" /> VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry Certifications & <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Gold Credentials</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Professional certifications earned across RPA Automation, Oracle Cloud AI 2025, NASSCOM Digital Engineering Gold, and Salesforce.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group bg-[#0F111A]/90 border border-slate-800/90 hover:border-amber-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500/20 to-transparent px-4 py-1 rounded-bl-2xl text-[10px] font-mono text-amber-300 font-bold border-b border-l border-amber-500/30">
                {cert.badge}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {cert.issuer} • {cert.issueDate}
                    </span>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                <div className="bg-[#08090E] p-3 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>ID: {cert.credentialId}</span>
                  <span className="text-cyan-400">{cert.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                </a>

                <button
                  onClick={() => alert(`Downloading Certificate details for ${cert.title}...`)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Download Certificate Info"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
