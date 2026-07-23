import React, { useState } from "react";
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Code,
  CheckCircle2,
  Cpu,
  Play,
  Copy,
  Check
} from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#0F111A] border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(0,242,254,0.2)] overflow-hidden my-8 max-h-[90vh] flex flex-col font-sans">
        {/* Header Image Overlay */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-[#0F111A]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/40">
                {project.category}
              </span>
              <span className="text-xs font-mono bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/40">
                Difficulty: {project.difficulty}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-[#08090E] px-6 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Overview & Features
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === "architecture"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            System Architecture
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab("code")}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === "code"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Source Snippet
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  Project Description
                </h4>
                <p className="leading-relaxed text-slate-300">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  Key Deliverables & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 bg-[#08090E] p-3 rounded-xl border border-slate-800 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  Tech Stack Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-slate-200 text-xs font-mono rounded-lg border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Module Dataflow & Flowchart
              </h4>
              <div className="bg-[#08090E] border border-slate-800 rounded-2xl p-6 space-y-3 font-mono text-xs">
                {project.architecture.map((layer, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 p-3 bg-[#0F111A] border border-slate-800 rounded-xl text-slate-200">
                      {layer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "code" && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Core Implementation File
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs font-mono text-cyan-400 bg-slate-800 px-2.5 py-1 rounded hover:bg-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                {project.codeSnippet}
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-[#08090E] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" /> Repository
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              <ExternalLink className="w-4 h-4" /> Live Preview
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white font-mono"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};
