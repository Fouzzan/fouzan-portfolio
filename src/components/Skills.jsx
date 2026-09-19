import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & System Logic',
      icon: 'ri-server-line',
      description: 'Building server-side logic, API endpoints, and managing database connections.',
      skills: [
        { name: 'Python', detail: 'Primary Language' },
        { name: 'FastAPI', detail: 'REST APIs & Endpoints' },
        { name: 'SQL & Databases', detail: 'Data Management' },
        { name: 'CMS Workflows', detail: 'Content Integration' },
      ],
    },
    {
      title: 'Frontend & User Interface',
      icon: 'ri-layout-4-line',
      description: 'Crafting responsive, accessible, and structured web interfaces.',
      skills: [
        { name: 'React', detail: 'Component Architecture' },
        { name: 'JavaScript', detail: 'ES6+ Standards' },
        { name: 'Tailwind CSS', detail: 'Utility Styling' },
        { name: 'HTML5 & CSS3', detail: 'Semantic Layout' },
      ],
    },
    {
      title: 'Tools & Ecosystem',
      icon: 'ri-tools-line',
      description: 'Version control, build automation, and performance tuning.',
      skills: [
        { name: 'Git & GitHub', detail: 'Version Control' },
        { name: 'Vite', detail: 'Build Tooling' },
        { name: 'Web Optimization', detail: 'Performance & Audit' },
        { name: 'Responsive UI', detail: 'Cross-device Layouts' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-[#1a1d2b]/60 bg-[#0c0e14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">02 // Technical Skills</span>
          <div className="h-px bg-[#232738] flex-1"></div>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-100">
            Tech stack & core competencies
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Languages, frameworks, and tools I use to build full-stack web applications.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[#12141d] border border-[#232738] p-6 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-xl mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <i className={category.icon}></i>
                </div>

                <h3 className="text-xl font-bold font-display text-gray-100 mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#1a1d2b]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#0b0c10]/60 border border-[#1f2333] text-xs"
                  >
                    <span className="font-semibold text-gray-200">{skill.name}</span>
                    <span className="font-mono text-[11px] text-gray-400">{skill.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
