import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([
    "INITIALIZING KERNEL [EZHIL OS v2.5]...",
    "LOADING CSE REPOSITORY DATA...",
    "VERIFYING ORACLE & UIPATH CERTIFICATIONS...",
    "ESTABLISHING HIGH-SPEED GITHUB API LINK...",
    "SYSTEM READY."
  ]);
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    const logTimer = setInterval(() => {
      setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 350);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [logs.length, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#08090E] z-50 flex flex-col items-center justify-center font-mono text-cyan-400 p-6 selection:bg-cyan-500 selection:text-black">
      <div className="w-full max-w-md bg-[#0F111A]/90 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden">
        {/* Top bar styling */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            EZHIL_ANAND_OS.BOOT
          </span>
        </div>

        {/* Console logs */}
        <div className="h-28 text-xs space-y-1.5 overflow-hidden flex flex-col justify-end text-slate-300">
          {logs.slice(0, currentLog + 1).map((log, idx) => (
            <p key={idx} className="flex items-center gap-2">
              <span className="text-cyan-500">&gt;</span>
              <span className={idx === currentLog ? "text-cyan-300 animate-pulse" : "opacity-75"}>
                {log}
              </span>
            </p>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-6">
          <div className="flex justify-between text-xs font-semibold mb-2">
            <span className="text-slate-400">COMPILE_PROGRESS</span>
            <span className="text-cyan-400">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-100 ease-out shadow-[0_0_12px_#00F2FE]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 text-[10px] text-center text-slate-500 tracking-widest uppercase">
          Ezhil Anand V • B.E. CSE Student • Portfolio 2026
        </div>
      </div>
    </div>
  );
};
