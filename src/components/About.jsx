import React from 'react';
import aboutImg from '../assets/About/1000605388.png';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-[#1a1d2b]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">01 // About Me</span>
          <div className="h-px bg-[#232738] flex-1"></div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image Container */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl bg-[#12141d] border border-[#232738] p-3 shadow-lg">
                <img
                  src={aboutImg}
                  alt="Fouzan Muhammed"
                  className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Fouzan Muhammed</span>
                  <span className="text-purple-400">Software Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Personal Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-100 leading-tight">
              Building reliable backend APIs & responsive web interfaces.
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              <p>
                I am a <strong className="text-gray-200">Python Full Stack Developer</strong> based in Perinthalmanna, Kerala. Currently, I work as a Python Developer Intern at <strong className="text-purple-300">Betterinu</strong>, where I gain practical experience with FastAPI, database integration, CMS workflows, and web performance optimization.
              </p>

              <p>
                My academic background includes pursuing a <strong className="text-gray-200">Bachelor of Computer Applications (BCA)</strong> at Al Jamia Arts and Science College (2023–2026). I take a structured approach to development, prioritizing code readability, modular components, and real-world problem solving over visual gimmicks.
              </p>
            </div>

            {/* Quick Fact Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#12141d] border border-[#232738]">
                <span className="text-gray-500 block mb-1">CURRENT ROLE</span>
                <span className="text-gray-200 font-semibold block">Intern @ Betterinu</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#12141d] border border-[#232738]">
                <span className="text-gray-500 block mb-1">DEGREE</span>
                <span className="text-gray-200 font-semibold block">BCA (2023–2026)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#12141d] border border-[#232738]">
                <span className="text-gray-500 block mb-1">LOCATION</span>
                <span className="text-gray-200 font-semibold block">Perinthalmanna, IN</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
