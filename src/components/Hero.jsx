import React, { useState } from 'react';
import heroImg from '../assets/home_img/withoutbg.png';
import resumePdf from '../assets/CV/FOUZAN MUHAMMED K V.pdf';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = 'fouzanmuhammedkv@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12141d] border border-[#232738] text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Python Developer Intern @ Betterinu</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-100 tracking-tight">
                Fouzan Muhammed
              </h1>
              <p className="text-xl sm:text-2xl font-display text-purple-400 font-medium">
                Python Full Stack Developer
              </p>
            </div>

            {/* Direct, non-generic Bio */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Full stack developer with hands-on experience building web applications using{' '}
              <strong className="text-gray-200 font-semibold">Python</strong>,{' '}
              <strong className="text-gray-200 font-semibold">FastAPI</strong>,{' '}
              <strong className="text-gray-200 font-semibold">React</strong>, and{' '}
              <strong className="text-gray-200 font-semibold">Tailwind CSS</strong>. Currently based in Perinthalmanna, Kerala.
            </p>

            {/* Tech Stack Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-gray-300">
              <span className="text-gray-500 font-sans mr-1">Core Tech:</span>
              <span className="px-2.5 py-1 rounded bg-[#161926] border border-[#262b3d] text-gray-300">Python</span>
              <span className="px-2.5 py-1 rounded bg-[#161926] border border-[#262b3d] text-gray-300">FastAPI</span>
              <span className="px-2.5 py-1 rounded bg-[#161926] border border-[#262b3d] text-gray-300">React</span>
              <span className="px-2.5 py-1 rounded bg-[#161926] border border-[#262b3d] text-gray-300">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded bg-[#161926] border border-[#262b3d] text-gray-300">SQL</span>
            </div>

            {/* Actions & Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <span>View Projects</span>
                <i className="ri-arrow-down-line"></i>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-lg bg-[#12141d] hover:bg-[#1a1d2b] border border-[#232738] text-gray-200 font-medium text-sm transition-all flex items-center gap-2 group"
              >
                <i className={`text-purple-400 ${copied ? 'ri-check-line text-emerald-400' : 'ri-[#12141d] ri-file-copy-line'}`}></i>
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                href={resumePdf}
                download="Fouzan_Muhammed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#12141d] hover:bg-[#1a1d2b] border border-[#232738] text-gray-300 font-medium text-sm transition-all flex items-center gap-2"
              >
                <i className="ri-profile-line text-purple-400"></i>
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 text-gray-400 border-t border-[#1a1d2b] max-w-md">
              <span className="text-xs font-mono text-gray-500">Connect:</span>
              <a
                href="https://github.com/Fouzzan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <i className="ri-github-fill text-lg"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fouzan-mhd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <i className="ri-linkedin-fill text-lg"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:fouzanmuhammedkv@gmail.com"
                className="hover:text-purple-400 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <i className="ri-mail-line text-lg"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle background container box with border */}
              <div className="relative rounded-2xl bg-[#12141d] border border-[#232738] p-4 shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 text-right">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Location</span>
                  <span className="text-xs font-mono text-gray-300 flex items-center gap-1 justify-end">
                    <i className="ri-map-pin-2-line text-purple-400"></i> Kerala, IN
                  </span>
                </div>

                <div className="relative pt-6 flex justify-center">
                  <img
                    src={heroImg}
                    alt="Fouzan Muhammed"
                    className="w-64 sm:w-72 h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom card status overlay */}
                <div className="mt-2 p-3 rounded-xl bg-[#0b0c10]/90 border border-[#232738] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-gray-300 font-medium">BCA Graduate Candidate</span>
                  </div>
                  <span className="text-gray-500 font-mono">2023 - 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
