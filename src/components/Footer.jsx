import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#1a1d2b] bg-[#0b0c10] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-gray-400 font-mono">
          <span>&copy; {currentYear} Fouzan Muhammed.</span>
          <span className="hidden sm:inline-block text-gray-600">|</span>
          <span className="text-gray-500">Python Full Stack Developer</span>
        </div>

        {/* Right: Quick back to top */}
        <div className="flex items-center gap-6 text-gray-400">
          <a
            href="https://github.com/Fouzzan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fouzan-mhd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="flex items-center gap-1 hover:text-purple-400 transition-colors font-mono"
          >
            <span>Back to top</span>
            <i className="ri-arrow-up-line"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}
