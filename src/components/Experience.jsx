import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  const workExperience = [
    {
      role: 'Python Developer Intern',
      company: 'Betterinu',
      period: '2026 — Present',
      location: 'Onsite / Hybrid',
      description:
        'Engineered RESTful backend endpoints in FastAPI, managed SQL database queries, assisted with CMS integrations, and optimized web application performance.',
      highlights: [
        'FastAPI API endpoints & routing',
        'Database query optimization',
        'CMS workflow & site performance',
      ],
    },
  ];

  const educationHistory = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Al Jamia Arts and Science College',
      period: '2023 — 2026',
      description:
        'Degree program covering core computer science principles, database systems, software engineering, computer networks, algorithms, and web applications.',
    },
    {
      degree: 'Higher Secondary Education (Computer Science)',
      institution: 'PTMYHSS Edappalam',
      period: '2021 — 2023',
      description:
        'Higher secondary curriculum emphasizing foundational computer programming, mathematics, and logic.',
    },
    {
      degree: 'High School Education',
      institution: 'PTMYHSS Edappalam',
      period: '2021',
      description:
        'Completed secondary school education with early distinction in technical subjects.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-[#1c2438]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">03 // Timeline</span>
          <div className="h-px bg-[#1c2438] flex-1"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100">
              Experience & education
            </h2>
            <p className="mt-2 text-slate-400 text-base">
              My hands-on developer internship and academic trajectory.
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <div className="inline-flex p-1 rounded-xl bg-[#0f121d] border border-[#1c2438] self-start md:self-auto font-mono">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <i className="ri-briefcase-line"></i>
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <i className="ri-graduation-cap-line"></i>
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="space-y-6 max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {workExperience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0f121d] border border-[#1c2438] p-6 sm:p-8 hover:border-emerald-500/40 transition-all shadow-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-display text-slate-100">
                          {exp.role} <span className="text-emerald-400 font-normal font-mono">@ {exp.company}</span>
                        </h3>
                        <span className="text-xs font-mono text-slate-400">{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs w-fit font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="pt-4 border-t border-[#1c2438]">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">Focus Areas:</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((item, i) => (
                          <span key={i} className="px-3 py-1 rounded-md bg-[#06080d] border border-[#1c2438] text-xs font-mono text-emerald-400">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {educationHistory.map((edu, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0f121d] border border-[#1c2438] p-6 sm:p-8 hover:border-emerald-500/40 transition-all shadow-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold font-display text-slate-100">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-mono text-emerald-400">{edu.institution}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#06080d] border border-[#1c2438] text-slate-400 font-mono text-xs w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
