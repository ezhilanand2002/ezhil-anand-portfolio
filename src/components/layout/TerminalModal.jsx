import React, { useState, useRef, useEffect } from "react";
import { X, Terminal as TerminalIcon, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import { personalInfo, educationTimeline, skillsData, projectsData, certificationsData } from "../../data/portfolioData";

export const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { text: "EZHIL OS Interactive Terminal v2.6.0 (Updated with Latest Resume)", type: "system" },
    { text: "Type 'help' or 'ls' to list available commands.", type: "system" }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      const newHistory = [...history, { text: `ezhil@portfolio:~$ ${input}`, type: "user" }];
      setCommandHistory([...commandHistory, input]);
      setHistoryIndex(-1);

      switch (cmd) {
        case "help":
        case "ls":
          newHistory.push({
            text: `Available commands:
  • help       : Display command list
  • whoami     : About Ezhil Anand V
  • skills     : View technical skills (Java, Spring Boot, Node.js, ML)
  • projects   : View software projects (VolunTrack, Weather ML, Blood Donation)
  • certs      : View industry certifications
  • edu        : View education details & CGPA (9.2/10)
  • contact    : Get contact information & links
  • clear      : Clear terminal screen
  • exit       : Close terminal window`,
            type: "output"
          });
          break;

        case "whoami":
          newHistory.push({
            text: `${personalInfo.name} - ${personalInfo.title}
Degree: ${personalInfo.degree} (${personalInfo.college})
CGPA: ${personalInfo.cgpa}
Bio: ${personalInfo.bio}`,
            type: "output"
          });
          break;

        case "skills":
          const skillList = skillsData
            .map((cat) => `[${cat.category}]\n  ${cat.skills.map((s) => s.name).join(", ")}`)
            .join("\n\n");
          newHistory.push({ text: skillList, type: "output" });
          break;

        case "projects":
          const projList = projectsData
            .map((p) => `• ${p.title}\n  Tech: ${p.technologies.join(", ")}\n  Github: ${p.github}`)
            .join("\n\n");
          newHistory.push({ text: projList, type: "output" });
          break;

        case "certs":
          const certList = certificationsData
            .map((c) => `🏆 ${c.title} (${c.issuer} - ${c.issueDate})`)
            .join("\n");
          newHistory.push({ text: certList, type: "output" });
          break;

        case "edu":
          const eduList = educationTimeline
            .map((e) => `🎓 ${e.degree} | ${e.institution} | ${e.grade}`)
            .join("\n");
          newHistory.push({ text: eduList, type: "output" });
          break;

        case "contact":
          newHistory.push({
            text: `Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.socials.github}
LinkedIn: ${personalInfo.socials.linkedin}`,
            type: "output"
          });
          break;

        case "clear":
          setHistory([]);
          setInput("");
          return;

        case "exit":
          onClose();
          setInput("");
          return;

        default:
          newHistory.push({
            text: `Command not found: '${cmd}'. Type 'help' for available commands.`,
            type: "error"
          });
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#08090E] border border-cyan-500/30 rounded-xl shadow-[0_0_50px_rgba(0,242,254,0.2)] overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Header */}
        <div className="bg-[#0F111A] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> ezhil@portfolio-cli:~
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span className="hidden sm:inline font-mono text-[10px] text-slate-500">
              Press ESC or 'exit' to close
            </span>
            <button onClick={onClose} className="p-1 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 font-mono text-xs text-slate-200 overflow-y-auto space-y-3 selection:bg-cyan-500 selection:text-black">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === "system" && <div className="text-cyan-400/80">{item.text}</div>}
              {item.type === "user" && <div className="text-slate-100 font-semibold">{item.text}</div>}
              {item.type === "output" && (
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed font-mono bg-slate-900/40 p-2.5 rounded border border-slate-800/60 my-1">
                  {item.text}
                </pre>
              )}
              {item.type === "error" && <div className="text-red-400">{item.text}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="bg-[#0F111A] border-t border-slate-800 p-3 flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 font-bold">ezhil@cli:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-slate-100 placeholder-slate-600"
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-slate-500" />
        </div>
      </div>
    </div>
  );
};
