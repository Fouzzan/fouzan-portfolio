import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import resumePdf from '../assets/CV/FOUZAN MUHAMMED K V.pdf';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Framer Motion Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#06080d]/90 backdrop-blur-xl border-b border-[#1c2438] py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group font-display text-lg font-bold text-slate-100 hover:text-emerald-400 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xs font-mono font-semibold group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              FM
            </span>
            <span className="tracking-tight">Fouzan Muhammed</span>
            <span className="hidden sm:inline-block text-xs font-normal text-emerald-500/70 font-mono pl-1">
              .py
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#0f121d]/90 border border-[#1c2438] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.15)] font-semibold'
                      : 'text-slate-300 hover:text-emerald-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/Fouzan_Muhammed_CV.pdf"
              download="Fouzan_Muhammed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] font-mono"
            >
              <span>Resume</span>
              <i className="ri-download-line text-sm"></i>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-emerald-400 bg-[#0f121d] border border-[#1c2438]"
              aria-label="Toggle Navigation Menu"
            >
              <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-[#1c2438] bg-[#06080d]/95 backdrop-blur-2xl px-4 py-4 space-y-2 mt-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-[#0f121d]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/Fouzan_Muhammed_CV.pdf"
                download="Fouzan_Muhammed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold font-mono px-4 py-2.5 rounded-lg bg-emerald-500 text-slate-950"
              >
                <span>Download Resume</span>
                <i className="ri-download-line"></i>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
