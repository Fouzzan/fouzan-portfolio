import React from 'react';
import makeMyTripImg from '../assets/Projects/MakeMyTrip.png';
import todoListImg from '../assets/Projects/todolist.png';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'MakeMyTrip Web Clone',
      type: 'Frontend Web Application',
      description:
        'A comprehensive responsive frontend clone of the MakeMyTrip travel booking platform. Built with a focus on pixel-perfect layouts, responsive navigation, multi-tab search panels, and custom Tailwind CSS styling.',
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
        'An interactive single-page todo and task manager built using React component state and local storage persistence. Allows users to create, complete, filter, and organize daily tasks.',
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
        'Modern React portfolio application engineered with modular components, Tailwind CSS v4 design system, responsive drawer navigation, active scroll link highlighting, and direct contact tools.',
      tech: ['React', 'Tailwind CSS v4', 'Vite', 'JavaScript'],
      image: null,
      github: 'https://github.com/Fouzzan/fouzan-portfolio-2026',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-[#1a1d2b]/60 bg-[#0c0e14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">04 // Featured Projects</span>
          <div className="h-px bg-[#232738] flex-1"></div>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-100">
            Selected work & projects
          </h2>
          <p className="mt-2 text-gray-400 text-base">
            Real projects built with concrete technical stack requirements and responsive UI design.
          </p>
        </div>

        {/* Projects Stack Layout */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#12141d] border border-[#232738] p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Project Image Column */}
                <div className={`lg:col-span-6 ${project.image ? 'block' : 'hidden lg:block'}`}>
                  {project.image ? (
                    <div className="relative rounded-xl overflow-hidden bg-[#0b0c10] border border-[#1f2333] group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-72 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-mono text-purple-300">View Preview</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl bg-[#0b0c10]/80 border border-[#1f2333] p-8 h-64 sm:h-72 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                        <span>FULL STACK</span>
                        <span>SPA</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold font-display text-gray-300 block mb-2">
                          {project.title}
                        </span>
                        <span className="text-xs font-mono text-purple-400">Source Available on GitHub</span>
                      </div>
                      <div className="flex gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-[#161926] text-[11px] font-mono text-gray-400">
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
                    <span className="text-xs font-mono text-purple-400">{project.id} // {project.type}</span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-300 text-[11px] font-mono">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display text-gray-100">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#0b0c10] border border-[#232738] text-xs font-mono text-gray-300"
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
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-[#0b0c10] hover:bg-purple-600 hover:text-white border border-[#232738] text-gray-200 transition-all"
                    >
                      <i className="ri-github-fill text-base"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
