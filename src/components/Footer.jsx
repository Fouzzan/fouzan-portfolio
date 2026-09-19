import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#1c2438] bg-[#06080d] text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-slate-200 font-semibold">&copy; {currentYear} Fouzan Muhammed.</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400">Python Full Stack Developer</span>
        </div>

        {/* Right: Social & Back-to-Top Links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a
            href="https://github.com/Fouzzan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fouzan-mhd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <i className="ri-arrow-up-line"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}
