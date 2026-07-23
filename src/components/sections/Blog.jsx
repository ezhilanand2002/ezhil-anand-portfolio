import React, { useState } from "react";
import { BookOpen, Clock, ArrowRight, X, Sparkles, Tag } from "lucide-react";
import { blogPosts } from "../../data/portfolioData";

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-24 relative z-10 font-sans border-t border-slate-800/60 bg-[#06070B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" /> TECHNICAL WRITING & ARTICLES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Insights & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Technical blogs exploring Java Spring Boot REST architectures, Python NLP intent classification, and Oracle Cloud AI.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-[#0F111A]/90 border border-slate-800/90 hover:border-purple-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(127,0,255,0.15)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                    {post.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedPost(post)}
                className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                Read Technical Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-3xl bg-[#0F111A] border border-purple-500/30 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto font-sans">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-purple-400">{selectedPost.category} • {selectedPost.date}</span>
                <h2 className="text-2xl font-bold text-white">{selectedPost.title}</h2>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
              {selectedPost.content}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Written by Ezhil Anand V</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
