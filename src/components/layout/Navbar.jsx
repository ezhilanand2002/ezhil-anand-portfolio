import React, { useState, useEffect } from "react";
import {
  Terminal,
  Command,
  Volume2,
  VolumeX,
  Sparkles,
  Menu,
  X,
  FileText,
  Github,
  Linkedin,
  Code
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export const Navbar = ({
  onOpenTerminal,
  onOpenPalette,
  onToggleMatrix,
  isMatrix,
  soundEnabled,
  onToggleSound
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "projects",
        "experience",
        "certifications",
        "stats",
        "resume",
        "blog",
        "contact"
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Stats", href: "#stats", id: "stats" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090E]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Profile Photo thumbnail & Fallback */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-transform duration-300 group-hover:scale-105 overflow-hidden">
            <img
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Ezhil+Anand+V&background=0F111A&color=00F2FE&size=100";
              }}
              className="w-full h-full object-cover rounded-[11px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-slate-100 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
              <span>{personalInfo.name}</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              B.E. CSE • CGPA 9.2
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0F111A]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,242,254,0.2)]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenPalette}
            title="Command Palette (Ctrl+K)"
            className="flex items-center gap-1.5 bg-[#0F111A] hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono transition-all duration-200 shadow-sm"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Cmd</span>
            <kbd className="bg-slate-800 text-[10px] px-1.5 py-0.5 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Terminal CLI Button */}
          <button
            onClick={onOpenTerminal}
            title="Interactive CLI Terminal (~)"
            className="p-2 bg-[#0F111A] hover:bg-slate-800 text-slate-300 hover:text-cyan-400 rounded-lg border border-slate-800 transition-all duration-200"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Matrix rain background toggle */}
          <button
            onClick={onToggleMatrix}
            title="Toggle Digital Rain Matrix Mode"
            className={`p-2 rounded-lg border transition-all duration-200 ${
              isMatrix
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                : "bg-[#0F111A] border-slate-800 text-slate-400 hover:text-cyan-400"
            }`}
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? "Mute UI Sounds" : "Enable UI Sounds"}
            className={`p-2 rounded-lg border transition-all duration-200 ${
              soundEnabled
                ? "bg-purple-500/20 border-purple-400 text-purple-300"
                : "bg-[#0F111A] border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-purple-400" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 bg-[#0F111A] text-cyan-400 rounded-lg border border-slate-800"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#0F111A] text-slate-200 rounded-lg border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#08090E]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-2 px-2 text-xs font-medium rounded-lg border transition-colors ${
                  activeSection === item.id
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-400"
                    : "text-slate-300 bg-[#0F111A] border-slate-800/60 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenPalette();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-[#0F111A] px-3 py-2 rounded-lg border border-slate-800"
            >
              <Command className="w-4 h-4" /> Command Palette
            </button>

            <button
              onClick={onToggleSound}
              className="flex items-center gap-2 text-xs text-slate-300 bg-[#0F111A] px-3 py-2 rounded-lg border border-slate-800"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4" />}
              {soundEnabled ? "Audio On" : "Audio Off"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
