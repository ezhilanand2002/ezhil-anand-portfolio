import React from "react";
import { Code2, Github, Terminal, Trophy, Star, CheckCircle, TrendingUp, Cpu } from "lucide-react";
import { codingStats } from "../../data/portfolioData";

export const CodingStats = () => {
  return (
    <section id="stats" className="py-24 relative z-10 font-sans border-t border-slate-800/60 bg-[#06070B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" /> COMPETITIVE CODING METRICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LeetCode, HackerRank & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">GitHub Activity</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Live developer metrics showcasing DSA problem solving consistency across competitive programming platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LeetCode Card */}
          <div className="bg-[#0F111A]/90 border border-slate-800/90 hover:border-yellow-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(234,179,8,0.15)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-500/30">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">LeetCode</h3>
                    <p className="text-xs font-mono text-yellow-400">@{codingStats.leetcode.username}</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-yellow-500/10 text-yellow-300 px-2.5 py-1 rounded-full border border-yellow-500/20">
                  {codingStats.leetcode.ranking}
                </span>
              </div>

              <div className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-extrabold text-white font-mono">{codingStats.leetcode.solved}</div>
                <div className="text-[11px] font-mono text-slate-400">DSA PROBLEMS SOLVED</div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">Target Topics Mastered:</span>
                <div className="flex flex-wrap gap-1.5">
                  {codingStats.leetcode.topics.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={codingStats.leetcode.url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-xl text-xs font-semibold font-mono transition-colors"
            >
              View LeetCode Profile →
            </a>
          </div>

          {/* HackerRank Card */}
          <div className="bg-[#0F111A]/90 border border-slate-800/90 hover:border-emerald-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">HackerRank</h3>
                    <p className="text-xs font-mono text-emerald-400">@{codingStats.hackerrank.username}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Star className="w-3.5 h-3.5 fill-emerald-400" /> {codingStats.hackerrank.stars}
                </div>
              </div>

              <div className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-extrabold text-white font-mono">5 Stars</div>
                <div className="text-[11px] font-mono text-slate-400">{codingStats.hackerrank.domain}</div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">Badges Earned:</span>
                <div className="space-y-1 text-xs text-slate-300">
                  {codingStats.hackerrank.badges.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={codingStats.hackerrank.url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold font-mono transition-colors"
            >
              View HackerRank Profile →
            </a>
          </div>

          {/* GitHub Activity Card */}
          <div className="bg-[#0F111A]/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,242,254,0.15)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">GitHub</h3>
                    <p className="text-xs font-mono text-cyan-400">@{codingStats.github.username}</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-cyan-500/10 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  {codingStats.github.repos} Repos
                </span>
              </div>

              <div className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="text-3xl font-extrabold text-white font-mono">{codingStats.github.contributionsThisYear}</div>
                <div className="text-[11px] font-mono text-slate-400">YEARLY CONTRIBUTIONS</div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">Primary Languages:</span>
                <div className="flex flex-wrap gap-1.5">
                  {codingStats.github.topLanguages.map((lang, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={codingStats.github.url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-xl text-xs font-semibold font-mono transition-colors"
            >
              View GitHub Repositories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
