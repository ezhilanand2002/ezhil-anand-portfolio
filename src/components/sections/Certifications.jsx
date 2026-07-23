import React, { useState } from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck, Download, Eye, X, FileImage } from "lucide-react";
import { certificationsData } from "../../data/portfolioData";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative z-10 font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" /> VERIFIED CREDENTIALS & CERTIFICATES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Official Certificates & <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Gold Credentials</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Inspect & download official certificates earned across UiPath RPA, Oracle Cloud AI 2025, NASSCOM Digital Engineering Gold, and NPTEL Elite HCI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group bg-[#0F111A]/90 border border-slate-800/90 hover:border-amber-500/40 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between space-y-4 relative"
            >
              {/* Image Preview Container (if available) */}
              {cert.image ? (
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-48 bg-slate-900 overflow-hidden cursor-pointer group/img"
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-black/30 opacity-70 group-hover/img:opacity-40 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-amber-500/90 text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg">
                    {cert.badge}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <span className="bg-black/70 text-cyan-300 text-xs font-mono px-3 py-1.5 rounded-full border border-cyan-500/40 flex items-center gap-1.5 backdrop-blur-md">
                      <Eye className="w-3.5 h-3.5" /> View Full Certificate
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
                    {cert.badge}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 pt-2 flex-1 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    {cert.issuer} • {cert.issueDate}
                  </span>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="bg-[#08090E] p-3 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span className="truncate max-w-[170px]">ID: {cert.credentialId}</span>
                  <span className="text-cyan-400 shrink-0">{cert.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {cert.downloadUrl ? (
                  <>
                    <a
                      href={cert.downloadUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </a>

                    <a
                      href={cert.downloadUrl}
                      download={cert.fileName || "Certificate.png"}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold text-xs px-3.5 py-2 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all hover:scale-105"
                      title="Download Official Certificate File"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                  </>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">Official Badge Earned</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Image Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0D0E16] border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
                <p className="text-xs text-amber-400 font-mono">{selectedCert.issuer} • Issued: {selectedCert.issueDate}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto rounded-2xl bg-black flex items-center justify-center p-2 border border-slate-800">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full h-auto rounded-xl object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-slate-400">Credential ID: {selectedCert.credentialId}</span>
              <a
                href={selectedCert.downloadUrl}
                download={selectedCert.fileName || "Certificate.png"}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all"
              >
                <Download className="w-4 h-4" /> Download Official File
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
