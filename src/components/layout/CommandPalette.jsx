import React, { useState, useEffect } from "react";
import { Search, Command, FileText, Code, Folder, Award, Mail, ExternalLink, X } from "lucide-react";
import { personalInfo, projectsData, certificationsData } from "../../data/portfolioData";

export const CommandPalette = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: "hero", title: "Go to Hero Section", category: "Navigation", icon: Command },
    { id: "about", title: "Go to About Me & Education", category: "Navigation", icon: FileText },
    { id: "skills", title: "Explore Tech Stack & Skills", category: "Navigation", icon: Code },
    { id: "projects", title: "View Featured CSE Projects", category: "Navigation", icon: Folder },
    { id: "certifications", title: "View Industry Certifications", category: "Navigation", icon: Award },
    { id: "contact", title: "Contact Ezhil Anand V", category: "Navigation", icon: Mail },
    {
      id: "resume-dl",
      title: "Download Resume PDF",
      category: "Actions",
      icon: FileText,
      action: () => window.open("#resume", "_self")
    },
    {
      id: "github-link",
      title: "Open GitHub Profile (@ezhilanandv)",
      category: "External Link",
      icon: ExternalLink,
      action: () => window.open(personalInfo.socials.github, "_blank")
    },
    {
      id: "linkedin-link",
      title: "Open LinkedIn Profile (Ezhil Anand V)",
      category: "External Link",
      icon: ExternalLink,
      action: () => window.open(personalInfo.socials.linkedin, "_blank")
    }
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    if (item.action) {
      item.action();
    } else {
      onSelectAction(item.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4">
      <div className="w-full max-w-xl bg-[#0F111A] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.25)] overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            autoFocus
            className="w-full bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 text-sm font-sans"
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 border border-transparent hover:border-cyan-500/20 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded">
                    Jump
                  </span>
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-sm text-slate-500">
              No matching commands found.
            </div>
          )}
        </div>

        <div className="bg-[#08090E] px-4 py-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500 font-mono">
          <span>Tip: Use ↑ ↓ arrows to navigate</span>
          <span>Esc to exit</span>
        </div>
      </div>
    </div>
  );
};
