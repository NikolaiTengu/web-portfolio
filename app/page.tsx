'use client';

import { useState } from 'react';

const skills = [
  { category: 'FRONTEND', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'BACKEND', items: ['Node.js', 'PostgreSQL', 'GraphQL', 'REST APIs'] },
  { category: 'TOOLS', items: ['Git', 'VS Code', 'Figma', 'Docker'] },
];

const projects = [
  {
    id: 1,
    name: 'FULL_STACK_WEB_APP',
    description: 'Developed a responsive web application using React and Next.js with TypeScript for type safety.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    name: 'DATABASE_SYSTEM',
    description: 'Designed and implemented a relational database with PostgreSQL and GraphQL API integration.',
    skills: ['Node.js', 'PostgreSQL', 'GraphQL'],
  },
  {
    id: 3,
    name: 'DATA_DASHBOARD',
    description: 'Created an interactive dashboard for visualizing complex datasets using modern charting libraries.',
    skills: ['React', 'D3.js', 'WebGL'],
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeWindow, setActiveWindow] = useState('home');

  return (
    <div className={`min-h-screen flex flex-col font-mono transition-colors ${
      darkMode 
        ? 'bg-black text-green-400 border-2 border-green-400' 
        : 'bg-yellow-300 text-black border-2 border-black'
    }`} style={{fontFamily: 'Courier New, monospace', letterSpacing: '2px'}}>
      {/* Retro Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px)',
      }}></div>

      {/* Neon Glow Background */}
      <div className="fixed inset-0 pointer-events-none">
        {darkMode && (
          <>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          </>
        )}
      </div>

      {/* Header - Retro Style */}
      <header className={`relative z-50 border-b-4 ${
        darkMode 
          ? 'bg-black border-cyan-400 text-cyan-400' 
          : 'bg-yellow-300 border-black text-black'
      } px-6 py-4 shadow-lg`}>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-black" style={{textShadow: darkMode ? '0 0 10px #00ff00, 0 0 20px #00ff00' : 'none'}}>
            &gt; MARLOWE_PORTFOLIO_v1.0
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 border-2 font-black transition-all ${
              darkMode
                ? 'bg-cyan-400 text-black border-cyan-400 hover:bg-magenta-500 hover:border-magenta-500 hover:text-white'
                : 'bg-black text-yellow-300 border-black hover:bg-yellow-300 hover:text-black'
            }`}
          >
            [{darkMode ? 'DARK' : 'LITE'}]
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative z-10">
        {/* Sidebar - Retro */}
        <div className={`w-56 border-r-4 p-6 overflow-y-auto ${
          darkMode 
            ? 'bg-black border-magenta-500 text-magenta-500' 
            : 'bg-yellow-300 border-black text-black'
        }`}>
          <div className="text-xs font-black mb-6 uppercase" style={{textShadow: darkMode ? '0 0 5px #ff00ff' : 'none'}}>
            &gt; PROGRAMS
          </div>
          <div className="space-y-3">
            {[
              { id: 'home', label: '[ HOME ]' },
              { id: 'about', label: '[ ABOUT ]' },
              { id: 'projects', label: '[ PROJECTS ]' },
              { id: 'skills', label: '[ SKILLS ]' },
              { id: 'contact', label: '[ CONTACT ]' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveWindow(item.id)}
                className={`w-full text-left px-4 py-3 border-2 font-black text-sm uppercase transition-all ${
                  activeWindow === item.id
                    ? darkMode
                      ? 'bg-cyan-400 text-black border-cyan-400'
                      : 'bg-black text-yellow-300 border-black'
                    : darkMode
                    ? 'bg-black text-magenta-500 border-magenta-500 hover:bg-magenta-500 hover:text-black'
                    : 'bg-yellow-300 text-black border-black hover:bg-black hover:text-yellow-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className={`flex-1 overflow-auto border-l-4 ${
          darkMode ? 'border-cyan-400' : 'border-black'
        }`}>
          <div className={`p-8 ${darkMode ? 'bg-black' : 'bg-yellow-300'}`}>
            {/* Window Frame */}
            <div className={`border-4 ${
              darkMode 
                ? 'border-cyan-400 bg-black' 
                : 'border-black bg-yellow-300'
            }`}>
              {/* Title Bar */}
              <div className={`flex items-center justify-between px-6 py-3 border-b-4 ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 border-cyan-400' 
                  : 'bg-black border-black'
              }`}>
                <span className={`text-sm font-black uppercase ${darkMode ? 'text-black' : 'text-yellow-300'}`}>
                  ▶ PORTFOLIO.EXE
                </span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`px-3 py-1 border-2 font-black text-xs ${
                    darkMode
                      ? 'bg-black text-cyan-400 border-cyan-400'
                      : 'bg-yellow-300 text-black border-black'
                  }`}
                >
                  {darkMode ? '◉' : '○'}
                </button>
              </div>

              {/* Window Content */}
              <div className={`p-8 ${darkMode ? 'text-green-400' : 'text-black'}`} style={{textShadow: darkMode ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none'}}>
                {/* Home */}
                {activeWindow === 'home' && (
                  <div>
                    <div className={`text-3xl font-black mb-4 ${darkMode ? 'text-cyan-400' : 'text-black'}`} style={{textShadow: darkMode ? '0 0 10px #00ffff' : 'none'}}>
                      &gt; INITIALIZATION...
                    </div>
                    <p className="mb-6 text-lg font-bold uppercase">MARLOWE_IAN_JUMAGBAS</p>
                    <p className="mb-8 text-sm leading-relaxed font-bold">
                      &gt; SYSTEM_LOADED<br/>
                      &gt; 4TH_YEAR_BSIT | SAINT_MARY'S_UNIVERSITY<br/>
                      &gt; SELECT_PROGRAM_FROM_SIDEBAR
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-2xl">
                      {[
                        { label: '[ ABOUT ]', id: 'about' },
                        { label: '[ PROJECTS ]', id: 'projects' },
                        { label: '[ SKILLS ]', id: 'skills' },
                        { label: '[ CONTACT ]', id: 'contact' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveWindow(item.id)}
                          className={`px-6 py-3 border-2 font-black text-sm uppercase transition-all ${
                            darkMode
                              ? 'bg-cyan-400 text-black border-cyan-400 hover:bg-magenta-500 hover:border-magenta-500 hover:text-white'
                              : 'bg-black text-yellow-300 border-black hover:bg-yellow-300 hover:text-black'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* About */}
                {activeWindow === 'about' && (
                  <div>
                    <div className={`text-2xl font-black mb-6 ${darkMode ? 'text-cyan-400' : 'text-black'}`} style={{textShadow: darkMode ? '0 0 10px #00ffff' : 'none'}}>
                      &gt; ABOUT_SYSTEM
                    </div>
                    <p className="mb-4 leading-relaxed text-sm font-bold">
                      I am a 4th-year Bachelor of Science in Information Technology student at Saint Mary's University, Bayombong. I specialize in full-stack web development with expertise in modern frameworks and technologies.
                    </p>
                    <p className="text-sm font-bold leading-relaxed">
                      My focus is on building scalable, maintainable applications using React, Next.js, and Node.js. I am passionate about clean code architecture, database design, and creating intuitive user experiences.
                    </p>
                  </div>
                )}

                {/* Projects */}
                {activeWindow === 'projects' && (
                  <div>
                    <div className={`text-2xl font-black mb-6 ${darkMode ? 'text-cyan-400' : 'text-black'}`} style={{textShadow: darkMode ? '0 0 10px #00ffff' : 'none'}}>
                      &gt; RUNNING_PROCESSES
                    </div>
                    <div className="space-y-6">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className={`p-4 border-2 ${
                            darkMode
                              ? 'border-magenta-500 bg-black'
                              : 'border-black bg-yellow-300'
                          }`}
                        >
                          <h3 className={`text-lg font-black mb-2 uppercase ${darkMode ? 'text-magenta-500' : 'text-black'}`}>
                            &gt; {project.name}
                          </h3>
                          <p className="mb-3 text-sm font-bold">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <span
                                key={skill}
                                className={`text-xs px-2 py-1 border-2 font-black ${
                                  darkMode
                                    ? 'bg-black border-cyan-400 text-cyan-400'
                                    : 'bg-yellow-300 border-black text-black'
                                }`}
                              >
                                [{skill}]
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {activeWindow === 'skills' && (
                  <div>
                    <div className={`text-2xl font-black mb-6 ${darkMode ? 'text-cyan-400' : 'text-black'}`} style={{textShadow: darkMode ? '0 0 10px #00ffff' : 'none'}}>
                      &gt; SYSTEM_SPECS
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {skills.map((skillGroup, idx) => (
                        <div key={idx} className={`p-4 border-2 ${
                          darkMode
                            ? 'border-green-400 bg-black'
                            : 'border-black bg-yellow-300'
                        }`}>
                          <h3 className={`font-black text-sm mb-4 uppercase ${darkMode ? 'text-green-400' : 'text-black'}`}>
                            [{skillGroup.category}]
                          </h3>
                          <ul className="space-y-2">
                            {skillGroup.items.map((item) => (
                              <li key={item} className="text-xs font-bold">&gt; {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact */}
                {activeWindow === 'contact' && (
                  <div>
                    <div className={`text-2xl font-black mb-6 ${darkMode ? 'text-cyan-400' : 'text-black'}`} style={{textShadow: darkMode ? '0 0 10px #00ffff' : 'none'}}>
                      &gt; TRANSMISSION
                    </div>
                    <p className="mb-8 text-sm font-bold">
                      Send_transmission() // open_to_opportunities()
                    </p>
                    <div className="flex flex-col gap-3 max-w-md">
                      <a
                        href="mailto:your.email@example.com"
                        className={`px-6 py-3 font-black uppercase text-sm border-2 transition-all ${
                          darkMode
                            ? 'bg-cyan-400 text-black border-cyan-400 hover:bg-magenta-500 hover:border-magenta-500 hover:text-white'
                            : 'bg-black text-yellow-300 border-black hover:bg-yellow-300 hover:text-black'
                        }`}
                      >
                        &gt; [EMAIL_TRANSMISSION]
                      </a>
                      <a
                        href="#"
                        className={`px-6 py-3 font-black uppercase text-sm border-2 transition-all ${
                          darkMode
                            ? 'bg-black border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
                            : 'bg-yellow-300 border-black text-black hover:bg-black hover:text-yellow-300'
                        }`}
                      >
                        &gt; [GITHUB_LINK]
                      </a>
                      <a
                        href="#"
                        className={`px-6 py-3 font-black uppercase text-sm border-2 transition-all ${
                          darkMode
                            ? 'bg-black border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
                            : 'bg-yellow-300 border-black text-black hover:bg-black hover:text-yellow-300'
                        }`}
                      >
                        &gt; [LINKEDIN_PROFILE]
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Taskbar - Retro */}
      <footer className={`border-t-4 px-6 py-3 flex items-center justify-between font-black text-xs ${
        darkMode 
          ? 'bg-black border-green-400 text-green-400' 
          : 'bg-yellow-300 border-black text-black'
      }`}>
        <div>&gt; PORTFOLIO_v1.0 ACTIVE</div>
        <div>© 2026 MARLOWE_IAN_JUMAGBAS</div>
      </footer>
    </div>
  );
}
