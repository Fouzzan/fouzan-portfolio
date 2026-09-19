import React, { useState, useEffect } from 'react';
import resumePdf from '../assets/CV/FOUZAN MUHAMMED K V.pdf';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#232738] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group font-display text-lg font-bold text-gray-100 hover:text-purple-400 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-400 flex items-center justify-center text-sm font-mono group-hover:bg-purple-600 group-hover:text-white transition-all">
            FM
          </span>
          <span className="tracking-tight">Fouzan Muhammed</span>
          <span className="hidden sm:inline-block text-xs font-normal text-gray-400 font-mono pl-1">
            / fullstack
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12141d]/80 border border-[#232738] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={resumePdf}
            download="Fouzan_Muhammed_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-sm hover:shadow-purple-500/25"
          >
            <span>Resume</span>
            <i className="ri-download-line text-sm"></i>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white bg-[#12141d] border border-[#232738]"
            aria-label="Toggle Navigation Menu"
          >
            <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232738] bg-[#0b0c10]/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                  : 'text-gray-300 hover:bg-[#12141d]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={resumePdf}
              download="Fouzan_Muhammed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold px-4 py-2.5 rounded-lg bg-purple-600 text-white"
            >
              <span>Download Resume</span>
              <i className="ri-download-line"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
