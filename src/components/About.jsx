import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/About/1000605388.png';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-[#1c2438]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">01 // About Me</span>
          <div className="h-px bg-[#1c2438] flex-1"></div>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl bg-[#0f121d] border border-[#1c2438] p-3 shadow-xl hover:border-emerald-500/40 transition-all duration-300">
                <img
                  src={aboutImg}
                  alt="Fouzan Muhammed"
                  className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-200">Fouzan Muhammed</span>
                  <span className="text-emerald-400 font-semibold">Python Dev Intern</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 leading-tight">
              Engineering robust backend APIs & crisp frontend user interfaces.
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed text-base sm:text-lg">
              <p>
                I am a <strong className="text-slate-200 font-semibold">Python Full Stack Developer</strong> based in Perinthalmanna, Kerala. Currently working as a Python Developer Intern at <strong className="text-emerald-400 font-semibold">Betterinu</strong>, I specialize in building RESTful endpoints using FastAPI, managing database integrations, and refining CMS workflows.
              </p>

              <p>
                Pursuing a <strong className="text-slate-200 font-semibold">Bachelor of Computer Applications (BCA)</strong> at Al Jamia Arts and Science College (2023–2026), I focus on writing maintainable code, optimizing API responses, and creating structured React interfaces.
              </p>
            </div>

            {/* Quick Fact Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#0f121d] border border-[#1c2438]">
                <span className="text-slate-500 block mb-1 text-[11px]">ROLE</span>
                <span className="text-emerald-400 font-semibold block">Intern @ Betterinu</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0f121d] border border-[#1c2438]">
                <span className="text-slate-500 block mb-1 text-[11px]">EDUCATION</span>
                <span className="text-slate-200 font-semibold block">BCA (2023–2026)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0f121d] border border-[#1c2438]">
                <span className="text-slate-500 block mb-1 text-[11px]">LOCATION</span>
                <span className="text-slate-200 font-semibold block">Perinthalmanna, IN</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
