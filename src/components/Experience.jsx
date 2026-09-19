import React, { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  const workExperience = [
    {
      role: 'Python Developer Intern',
      company: 'Betterinu',
      period: '2026 — Present',
      location: 'Onsite / Hybrid',
      description:
        'Working on backend REST API endpoints using FastAPI, handling SQL database transactions, managing content workflows, and collaborating on frontend optimizations.',
      highlights: [
        'FastAPI backend endpoint design',
        'Database query optimization',
        'CMS integration & web optimization',
      ],
    },
  ];

  const educationHistory = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Al Jamia Arts and Science College',
      period: '2023 — 2026',
      description:
        'Core degree program focusing on software development principles, computer networks, database management systems, algorithms, and web applications.',
    },
    {
      degree: 'Higher Secondary Education (Computer Science)',
      institution: 'PTMYHSS Edappalam',
      period: '2021 — 2023',
      description:
        'Higher secondary coursework emphasizing foundational computer programming, mathematics, and science fundamentals.',
    },
    {
      degree: 'High School Education',
      institution: 'PTMYHSS Edappalam',
      period: '2021',
      description:
        'Completed secondary school education with academic distinction and early focus on web basics.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-[#1a1d2b]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">03 // Experience & Education</span>
          <div className="h-px bg-[#232738] flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-100">
              Career trajectory
            </h2>
            <p className="mt-2 text-gray-400 text-base">
              My practical developer internship and academic foundation.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="inline-flex p-1 rounded-xl bg-[#12141d] border border-[#232738] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <i className="ri-briefcase-line"></i>
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <i className="ri-graduation-cap-line"></i>
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="space-y-6 max-w-4xl">
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#12141d] border border-[#232738] p-6 sm:p-8 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-gray-100">
                        {exp.role} <span className="text-purple-400 font-normal">@ {exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-gray-400">{exp.location}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 font-mono text-xs w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="pt-4 border-t border-[#1a1d2b]">
                    <span className="text-xs font-mono text-gray-500 block mb-2">Key Areas:</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((item, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-[#0b0c10] border border-[#232738] text-xs font-mono text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {educationHistory.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#12141d] border border-[#232738] p-6 sm:p-8 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold font-display text-gray-100">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-purple-400">{edu.institution}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#161926] border border-[#262b3d] text-gray-400 font-mono text-xs w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
