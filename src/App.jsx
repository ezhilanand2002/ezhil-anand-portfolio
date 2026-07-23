import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { TerminalModal } from "./components/layout/TerminalModal";
import { CommandPalette } from "./components/layout/CommandPalette";
import { AIChatbot } from "./components/layout/AIChatbot";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Certifications } from "./components/sections/Certifications";
import { CodingStats } from "./components/sections/CodingStats";
import { ResumeViewer } from "./components/sections/ResumeViewer";
import { Blog } from "./components/sections/Blog";
import { Contact } from "./components/sections/Contact";

import { CustomCursor } from "./components/ui/CustomCursor";
import { ParticleBackground } from "./components/ui/ParticleBackground";
import { MatrixBackground } from "./components/ui/MatrixBackground";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { LoadingScreen } from "./components/ui/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isMatrix, setIsMatrix] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Web Audio synth for subtle UI sound feedback
  const playSoundEffect = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio context ignored if not user initiated
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommandSelect = (id) => {
    playSoundEffect();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#08090E] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Glow Cursor Effect */}
      <CustomCursor />

      {/* Interactive Canvas Backgrounds */}
      <ParticleBackground active={!isMatrix} />
      <MatrixBackground active={isMatrix} />

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => {
          playSoundEffect();
          setTerminalOpen(true);
        }}
        onOpenPalette={() => {
          playSoundEffect();
          setPaletteOpen(true);
        }}
        onToggleMatrix={() => {
          playSoundEffect();
          setIsMatrix((prev) => !prev);
        }}
        isMatrix={isMatrix}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <CodingStats />
        <ResumeViewer />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onSelectAction={handleCommandSelect}
      />

      {/* Floating AI Resume Assistant */}
      <AIChatbot />
    </div>
  );
}
