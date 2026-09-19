import React from 'react';
import { motion } from 'framer-motion';
import makeMyTripImg from '../assets/Projects/MakeMyTrip.png';
import todoListImg from '../assets/Projects/todolist.png';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'MakeMyTrip Web Clone',
      type: 'Frontend Web Application',
      description:
        'A comprehensive responsive frontend clone of the MakeMyTrip travel booking portal. Features pixel-perfect layouts, responsive navigation, multi-tab search panels, promotional card carousels, and custom Tailwind CSS styling.',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
      image: makeMyTripImg,
      github: 'https://github.com/Fouzzan/make-my-trip-clone.git',
      featured: true,
    },
    {
      id: '02',
      title: 'React Task Management App',
      type: 'React Web Application',
      description:
        'An interactive task tracking application built using React component state and local storage persistence. Features task creation, completion toggling, filter states, and responsive layout.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
      image: todoListImg,
      github: 'https://github.com/Fouzzan',
      featured: false,
    },
    {
      id: '03',
      title: 'Developer Portfolio Application',
      type: 'React Single-Page App',
      description:
        'Modern React portfolio application engineered with modular components, Framer Motion scroll reveal animations, top progress tracking, interactive Python API preview, and direct contact tools.',
      tech: ['React', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
      image: null,
      github: 'https://github.com/Fouzzan/fouzan-portfolio.git',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-[#1c2438] bg-[#090c14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">04 // Featured Projects</span>
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
            Selected projects & applications
          </h2>
          <p className="mt-2 text-slate-400 text-base">
            Real projects built with concrete technical stack requirements and responsive UI design.
          </p>
        </motion.div>

        {/* Projects Stack Layout */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-2xl bg-[#0f121d] border border-[#1c2438] p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Project Image / Visual Column */}
                <div className={`lg:col-span-6 ${project.image ? 'block' : 'hidden lg:block'}`}>
                  {project.image ? (
                    <div className="relative rounded-xl overflow-hidden bg-[#06080d] border border-[#192033] group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-72 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080d]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-mono text-emerald-400 font-medium flex items-center gap-1">
                          <i className="ri-external-link-line"></i> View Screenshot Preview
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl bg-[#06080d]/90 border border-[#192033] p-8 h-64 sm:h-72 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>FULL STACK</span>
                        <span>SPA</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold font-display text-slate-200 block mb-2">
                          {project.title}
                        </span>
                        <span className="text-xs font-mono text-emerald-400">Source Available on GitHub</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-[#0f121d] text-[11px] font-mono text-slate-400 border border-[#1c2438]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details Column */}
                <div className={`${project.image ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-medium">{project.id} // {project.type}</span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-semibold">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display text-slate-100">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#06080d] border border-[#1c2438] text-xs font-mono text-emerald-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-[#06080d] hover:bg-emerald-500 hover:text-slate-950 border border-[#1c2438] text-slate-200 transition-all font-mono"
                    >
                      <i className="ri-github-fill text-base"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
