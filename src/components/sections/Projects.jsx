import React, { useState } from "react";
import { Folder, ExternalLink, Github, Sparkles, ArrowRight, Eye, Code } from "lucide-react";
import { projectsData } from "../../data/portfolioData";
import { ProjectModal } from "../ui/ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Folder className="w-3.5 h-3.5" /> FEATURED CSE PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Projects & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">AI Systems</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Practical software projects built leveraging Java Spring Boot, MySQL databases, Python Flask, Machine Learning, and modern full-stack web technologies.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0F111A]/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,242,254,0.15)] flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-[#0F111A]/40 to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-mono font-semibold bg-[#08090E]/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <Eye className="w-4 h-4" /> View Details
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-600 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        Coming Soon
                      </span>
                    )}

                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-600 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
