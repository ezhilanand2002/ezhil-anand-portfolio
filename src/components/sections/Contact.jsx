import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger custom mailto link with form input values prefilled
    const subject = encodeURIComponent(formState.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, "_self");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Extraordinary</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Open for full-time software engineering roles, full-stack internships, AI project collaborations, or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Location Radar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0F111A]/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" /> Contact Channels
                </h3>
                {/* Professional Email Button */}
                <a
                  href={personalInfo.emailMailto}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1.5 rounded-xl border border-cyan-500/30 transition-all hover:scale-105"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Me
                </a>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 font-sans text-xs">
                {/* Email Card with Clickable Mailto link */}
                <div className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">DIRECT EMAIL (CLICKABLE)</div>
                      <a
                        href={personalInfo.emailMailto}
                        className="text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        title="Click to send email with prefilled subject"
                      >
                        {personalInfo.email}
                        <ExternalLink className="w-3 h-3 text-cyan-400 opacity-80" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, "email")}
                    className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">PHONE NUMBER</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-slate-200 hover:text-purple-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                    className="p-2 text-slate-400 hover:text-purple-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="bg-[#08090E] p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">LOCATION</div>
                    <div className="text-xs font-semibold text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Location Radar Visualization */}
              <div className="relative h-44 rounded-2xl bg-[#08090E] border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-4 text-center font-mono">
                <div className="absolute inset-0 bg-[radial-gradient(#00F2FE_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center animate-ping absolute" />
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center z-10 text-cyan-400 font-bold text-xs shadow-[0_0_20px_#00F2FE]">
                  TN
                </div>
                <div className="z-10 mt-3 text-xs font-bold text-slate-200">Tirupattur, Tamil Nadu</div>
                <div className="z-10 text-[10px] text-cyan-400">12.4961° N, 78.5721° E</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F111A]/90 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100">Send Me a Direct Message</h3>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, {formState.name || "visitor"}! Your default email client was opened to deliver your message directly to Ezhil.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#08090E] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#08090E] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold">Subject</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Portfolio Inquiry"
                      className="w-full bg-[#08090E] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-[#08090E] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" /> Send Direct Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
