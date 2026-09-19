import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Core Logic',
      icon: 'ri-server-line',
      description: 'Building REST endpoints, managing database transactions, and writing backend logic.',
      skills: [
        { name: 'Python', detail: 'Primary Language' },
        { name: 'FastAPI', detail: 'REST APIs & Routing' },
        { name: 'SQL / PostgreSQL', detail: 'Data Persistence' },
        { name: 'CMS Integrations', detail: 'Workflow & Content' },
      ],
    },
    {
      title: 'Frontend & UI Architecture',
      icon: 'ri-layout-4-line',
      description: 'Crafting responsive, structured web interfaces with clean modern standards.',
      skills: [
        { name: 'React', detail: 'Component System' },
        { name: 'JavaScript', detail: 'ES6+ Standards' },
        { name: 'Tailwind CSS v4', detail: 'Utility Layout' },
        { name: 'HTML5 & CSS3', detail: 'Semantic Markup' },
      ],
    },
    {
      title: 'Tools & Ecosystem',
      icon: 'ri-tools-line',
      description: 'Version control workflows, build optimization, and web performance tuning.',
      skills: [
        { name: 'Git & GitHub', detail: 'Version Control' },
        { name: 'Vite', detail: 'Build Tooling' },
        { name: 'Web Optimization', detail: 'Audit & Speed' },
        { name: 'Responsive Layouts', detail: 'Cross-device' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-[#1c2438] bg-[#090c14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">02 // Technical Skills</span>
          <div className="h-px bg-[#1c2438] flex-1"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100">
            Tech stack & competencies
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Languages, frameworks, and workflow tooling I use in full-stack web development.
          </p>
        </motion.div>

        {/* Categorized Cards Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-[#0f121d] border border-[#1c2438] p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <i className={category.icon}></i>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-100 mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#1c2438]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#06080d] border border-[#192033] text-xs font-mono"
                  >
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-[11px] text-emerald-400/80">{skill.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
