import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/home_img/withoutbg.png';
import resumePdf from '../assets/CV/FOUZAN MUHAMMED K V.pdf';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const email = 'fouzanmuhammedkv@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `# main.py — Fouzan Muhammed Portfolio API
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Fouzan Portfolio API")

class Developer(BaseModel):
    name: str = "Fouzan Muhammed"
    role: str = "Python Full Stack Developer"
    internship: str = "Betterinu"
    location: str = "Perinthalmanna, Kerala"
    stack: list[str] = ["Python", "FastAPI", "React", "Tailwind CSS"]

@app.get("/api/v1/developer")
async def get_developer_profile():
    return Developer()`;

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-grid-blueprint">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f121d] border border-emerald-500/30 text-xs font-mono text-slate-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">Python Developer Intern</span>
              <span className="text-slate-500">@</span>
              <span className="text-slate-300">Betterinu</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-100 tracking-tight leading-none">
                Fouzan Muhammed
              </h1>
              <p className="text-xl sm:text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-semibold">
                Python Full Stack Developer
              </p>
            </div>

            {/* Direct Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Full stack developer with hands-on experience building backend APIs in{' '}
              <strong className="text-emerald-300 font-mono font-medium">Python & FastAPI</strong> and crafting responsive web interfaces with{' '}
              <strong className="text-emerald-300 font-mono font-medium">React & Tailwind CSS</strong>. Currently based in Perinthalmanna, Kerala.
            </p>

            {/* Tech Stack Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-slate-500 font-sans mr-1 text-[11px] uppercase tracking-wider">Stack:</span>
              <span className="px-2.5 py-1 rounded bg-[#0f121d] border border-emerald-500/20 text-emerald-400 shadow-sm">Python</span>
              <span className="px-2.5 py-1 rounded bg-[#0f121d] border border-emerald-500/20 text-emerald-400 shadow-sm">FastAPI</span>
              <span className="px-2.5 py-1 rounded bg-[#0f121d] border border-emerald-500/20 text-cyan-400 shadow-sm">React</span>
              <span className="px-2.5 py-1 rounded bg-[#0f121d] border border-emerald-500/20 text-cyan-400 shadow-sm">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded bg-[#0f121d] border border-slate-800 text-slate-300">SQL</span>
            </div>

            {/* Actions & Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm font-mono transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-2"
              >
                <span>View Projects</span>
                <i className="ri-arrow-down-line"></i>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-[#0f121d] hover:bg-[#161b2b] border border-[#1c2438] text-slate-200 font-medium text-sm transition-all flex items-center gap-2 group"
              >
                <i className={`text-emerald-400 ${copied ? 'ri-check-line text-emerald-300' : 'ri-file-copy-line'}`}></i>
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                href="/Fouzan_Muhammed_CV.pdf"
                download="Fouzan_Muhammed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#0f121d] hover:bg-[#161b2b] border border-[#1c2438] text-slate-300 font-medium text-sm transition-all flex items-center gap-2 font-mono"
              >
                <i className="ri-profile-line text-emerald-400"></i>
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-5 text-slate-400 border-t border-[#1c2438] max-w-md">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
              <a
                href="https://github.com/Fouzzan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
              >
                <i className="ri-github-fill text-base"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fouzan-mhd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
              >
                <i className="ri-linkedin-fill text-base"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:fouzanmuhammedkv@gmail.com"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
              >
                <i className="ri-mail-line text-base"></i>
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dual-Tab Interactive Graphic Card (Photo & Python Terminal Code Window) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl bg-[#0f121d] border border-[#1c2438] shadow-2xl overflow-hidden">
              
              {/* Graphic Window Title Bar & Tabs */}
              <div className="bg-[#06080d] px-4 py-3 border-b border-[#1c2438] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                <div className="flex items-center bg-[#0f121d] rounded-lg p-0.5 border border-[#1c2438] text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeTab === 'profile'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Portrait
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeTab === 'code'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    main.py
                  </button>
                </div>
              </div>

              {/* Tab 1: Portrait */}
              {activeTab === 'profile' ? (
                <div className="p-4 relative">
                  <div className="absolute top-4 right-4 text-right">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">LOC</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 justify-end">
                      <i className="ri-map-pin-2-line"></i> Kerala, IN
                    </span>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <img
                      src={heroImg}
                      alt="Fouzan Muhammed"
                      className="w-64 sm:w-72 h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  <div className="mt-3 p-3 rounded-xl bg-[#06080d] border border-[#1c2438] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-slate-300">BCA Candidate</span>
                    </div>
                    <span className="text-emerald-500">2023 - 2026</span>
                  </div>
                </div>
              ) : (
                /* Tab 2: Python / FastAPI Code Editor Preview */
                <div className="p-4 bg-[#06080d] font-mono text-xs overflow-x-auto min-h-[360px] flex flex-col justify-between">
                  <pre className="text-slate-300 leading-relaxed">
                    <code>
                      <span className="text-slate-500"># main.py — Fouzan Portfolio API</span>{'\n'}
                      <span className="text-cyan-400">from</span> fastapi <span className="text-cyan-400">import</span> FastAPI{'\n'}
                      <span className="text-cyan-400">from</span> pydantic <span className="text-cyan-400">import</span> BaseModel{'\n\n'}
                      app = FastAPI(title=<span className="text-emerald-300">"Fouzan API"</span>){'\n\n'}
                      <span className="text-purple-400">class</span> <span className="text-amber-300">Developer</span>(BaseModel):{'\n'}
                      {'    '}name: <span className="text-cyan-400">str</span> = <span className="text-emerald-300">"Fouzan Muhammed"</span>{'\n'}
                      {'    '}role: <span className="text-cyan-400">str</span> = <span className="text-emerald-300">"Python Full Stack Developer"</span>{'\n'}
                      {'    '}internship: <span className="text-cyan-400">str</span> = <span className="text-emerald-300">"Betterinu"</span>{'\n'}
                      {'    '}location: <span className="text-cyan-400">str</span> = <span className="text-emerald-300">"Perinthalmanna, Kerala"</span>{'\n\n'}
                      <span className="text-emerald-400">@app.get</span>(<span className="text-emerald-300">"/api/v1/developer"</span>){'\n'}
                      <span className="text-purple-400">async def</span> <span className="text-teal-300">get_profile</span>():{'\n'}
                      {'    '}<span className="text-purple-400">return</span> Developer()
                    </code>
                  </pre>

                  <div className="mt-4 pt-3 border-t border-[#1c2438] flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      FastAPI Status: 200 OK
                    </span>
                    <button
                      onClick={() => navigator.clipboard.writeText(codeSnippet)}
                      className="px-2 py-1 rounded bg-[#0f121d] hover:bg-[#161b2b] border border-[#1c2438] text-slate-300 transition-colors"
                    >
                      Copy Snippet
                    </button>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
