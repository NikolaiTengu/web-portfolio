'use client';

import { useState } from 'react';

const skills = [
  { category: 'FRONTEND', items: ['Next.js', 'Tailwind CSS', 'Expo', 'React + Vite'] },
  { category: 'BACKEND', items: ['Node.js', 'Laravel', 'Express', 'MySQL', 'MongoDB', 'SQLite', 'Firebase'] },
  { category: 'DEVOPS', items: ['Azure', 'AWS', 'Docker'] },
  { category: 'OTHER', items: ['Git', 'Github', 'VS Code', 'Visual Studio', 'Python', 'Linux', 'C#', 'Postman'] },
];

const projects = [
  {
    id: 1,
    name: 'Noona Cafe',
    description: 'Full-stack café website with complete functionality for menu browsing, ordering, and user management. Personal project.',
    skills: ['React + Vite', 'Express.js', 'MongoDB'],
    image: '/noonacafe.png', 
  },
  {
    id: 2,
    name: 'Sinaing Express',
    description: 'Scalable web app with functioning services, utilizing microservices architecture and message queuing. Collaborative project with Renz, Dwyane, and Andrei.',
    skills: ['React + Vite', 'Mongoose', 'Express.js', 'Docker', 'RabbitMQ'],
    image: '/Sinaing-Express.png', 
  },
  {
    id: 3,
    name: 'MDLAB Direct',
    description: 'Functional diagnostic laboratory service website for booking appointments and managing laboratory results. Collaborative project with Renz, Dwyane, and Madelene.',
    skills: ['React', 'Node.js', 'Express.js'],
    image: '/mdlab.png',  
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeWindow, setActiveWindow] = useState('home');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col font-mono transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black text-cyan-400' 
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-blue-600'
    }`} style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.5px'}}>
      {/* Cytus Scanlines Effect */}
      <div className={`fixed inset-0 pointer-events-none ${
        darkMode ? 'opacity-10' : 'opacity-5'
      }`} style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, currentColor 1px, currentColor 2px)',
      }}></div>

      {/* Cytus Geometric Patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {darkMode ? (
          <>
            <div className="absolute top-20 right-20 w-64 h-64 border border-cyan-500/20" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
            <div className="absolute bottom-32 left-32 w-48 h-48 border border-purple-500/20" style={{transform: 'rotate(45deg)'}}></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/5 backdrop-blur-3xl rounded-full"></div>
          </>
        ) : (
          <>
            <div className="absolute top-20 right-20 w-64 h-64 border border-blue-300/30" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
            <div className="absolute bottom-32 left-32 w-48 h-48 border border-blue-400/30" style={{transform: 'rotate(45deg)'}}></div>
          </>
        )}
      </div>

      {/* Header  */}
      <header className={`relative z-50 border-b ${
        darkMode 
          ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-cyan-400/30 text-cyan-400' 
          : 'bg-gradient-to-r from-white via-gray-50 to-white border-blue-500/30 text-blue-600'
      } px-4 sm:px-6 md:px-8 py-4 md:py-5 shadow-lg`}>
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`md:hidden relative w-10 h-10 border transition-all ${
              darkMode
                ? 'bg-slate-800/50 border-cyan-400/50 text-cyan-400'
                : 'bg-white border-blue-500/50 text-blue-600'
            }`}
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="text-lg sm:text-xl md:text-2xl font-black tracking-wider" style={{textShadow: darkMode ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 2px 4px rgba(0,0,0,0.1)'}}>
            <span className={darkMode ? 'text-cyan-400' : 'text-blue-600'}>━━</span> <span className="hidden sm:inline">MARLOWE</span><span className="sm:hidden">M.I.J</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-12 h-12 border transition-all group ${
              darkMode
                ? 'bg-slate-800/50 border-cyan-400/50 hover:border-cyan-400 hover:bg-slate-700/50'
                : 'bg-white border-blue-500/50 hover:border-blue-500 hover:bg-gray-50'
            }`}
            style={{clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {darkMode ? (
                <svg className="w-6 h-6 text-cyan-400 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-blue-600 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative z-10">
        {/* Sidebar */}
        <div className={`fixed md:static inset-y-0 left-0 z-50 w-64 border-r p-6 overflow-y-auto backdrop-blur-sm transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${
          darkMode 
            ? 'bg-slate-900/80 border-cyan-500/20 text-cyan-400' 
            : 'bg-white/80 border-blue-500/20 text-blue-600'
        }`}>
          <div className="text-xs font-bold mb-6 uppercase tracking-widest" style={{textShadow: darkMode ? '0 0 10px rgba(34, 211, 238, 0.3)' : 'none'}}>
            <span className={darkMode ? 'text-cyan-400' : 'text-blue-600'}>━━</span> NAVIGATION
          </div>
          <div className="space-y-2">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'about', label: 'ABOUT' },
              { id: 'projects', label: 'PROJECTS' },
              { id: 'skills', label: 'SKILLS' },
              { id: 'contact', label: 'CONTACT' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveWindow(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-4 border-l-4 font-bold text-sm uppercase transition-all relative overflow-hidden group ${
                  activeWindow === item.id
                    ? darkMode
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                      : 'bg-blue-500/20 border-blue-500 text-blue-600'
                    : darkMode
                    ? 'bg-transparent border-transparent text-cyan-400/60 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400'
                    : 'bg-transparent border-transparent text-blue-600/60 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-600'
                }`}
                style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'}}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ${
                  darkMode ? 'bg-cyan-400/5' : 'bg-blue-500/5'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Content Area */}
        <div className={`flex-1 overflow-auto ${
          darkMode ? 'bg-slate-900/50' : 'bg-white/50'
        }`}>
          <div className="p-4 sm:p-6 md:p-8">
            {/* Window Frame */}
            <div className={`border backdrop-blur-md ${
              darkMode 
                ? 'border-cyan-400/30 bg-slate-800/30' 
                : 'border-blue-500/30 bg-white/50'
            } shadow-2xl`} style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'}}>
              {/* Title Bar */}
              <div className={`flex items-center justify-between px-6 py-4 border-b backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 border-cyan-400/30' 
                  : 'bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 border-blue-500/30'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    darkMode ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                  }`}></div>
                  <span className={`text-sm font-bold uppercase tracking-wider ${
                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    PORTFOLIO.SYS
                  </span>
                </div>
              </div>

              {/* Window Content */}
              <div className={`p-4 sm:p-6 md:p-8 lg:p-10 ${darkMode ? 'text-cyan-100' : 'text-gray-800'}`}>
                {/* Home */}
                {activeWindow === 'home' && (
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {/* Profile Picture */}
                    <div className={`flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-4 overflow-hidden ${
                      darkMode ? 'border-cyan-400/50' : 'border-blue-500/50'
                    }`} style={{clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'}}>
                      <img 
                        src="/me.png" 
                        alt="Marlowe Ian Jumagbas"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} style={{textShadow: darkMode ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 2px 10px rgba(59, 130, 246, 0.3)'}}>
                        MARLOWE IAN JUMAGBAS
                      </div>
                      <div className={`inline-block px-4 py-2 mb-8 border-l-4 ${
                        darkMode ? 'border-cyan-400 bg-cyan-500/10' : 'border-blue-500 bg-blue-500/10'
                      }`}>
                        <p className="text-sm leading-relaxed font-medium">
                          4th-Year BSIT Student<br/>
                          Saint Mary's University
                        </p>
                      </div>
                      <p className={`mb-8 sm:mb-12 text-sm sm:text-base leading-relaxed ${
                        darkMode ? 'text-cyan-100/80' : 'text-gray-700'
                      }`}>
                        Full-stack developer specializing in modern web technologies. Explore my work through the navigation menu.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
                        {[
                          { label: 'ABOUT', id: 'about' },
                          { label: 'PROJECTS', id: 'projects' },
                          { label: 'SKILLS', id: 'skills' },
                          { label: 'CONTACT', id: 'contact' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveWindow(item.id)}
                            className={`relative px-6 py-4 border font-bold text-sm uppercase transition-all group overflow-hidden ${
                              darkMode
                                ? 'bg-slate-800/50 text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10'
                                : 'bg-white text-blue-600 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10'
                            }`}
                            style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'}}
                          >
                            <span className="relative z-10">{item.label}</span>
                            <div className={`absolute top-0 right-0 w-0 h-full group-hover:w-full transition-all duration-500 ${
                              darkMode ? 'bg-cyan-400/5' : 'bg-blue-500/5'
                            }`} style={{transform: 'skewX(-10deg)'}}></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* About */}
                {activeWindow === 'about' && (
                  <div>
                    <div className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} style={{textShadow: darkMode ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 2px 10px rgba(59, 130, 246, 0.3)'}}>
                      ABOUT ME
                    </div>
                    <div className={`mb-6 pb-6 border-l-4 pl-6 ${
                      darkMode ? 'border-cyan-400/50' : 'border-blue-500/50'
                    }`}>
                      <p className="mb-4 leading-relaxed text-base">
                        I am a 4th-year Bachelor of Science in Information Technology student at Saint Mary's University, Bayombong. As an aspiring IT professional, I am eager to gain hands-on experience and learn from real-world technology environments.
                      </p>
                      <p className="text-base leading-relaxed">
                        I am currently exploring full-stack web development with technologies like React, Next.js, and Node.js. Motivated, adaptable, and committed to growing my skills through practical work and continuous learning, I am excited to contribute to meaningful projects while expanding my knowledge.
                      </p>
                    </div>
                  </div>
                )}

                {/* Projects */}
                {activeWindow === 'projects' && (
                  <div>
                    <div className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} style={{textShadow: darkMode ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 2px 10px rgba(59, 130, 246, 0.3)'}}>
                      PROJECTS
                    </div>
                    <div className="space-y-6">
                      {projects.map((project, idx) => (
                        <div
                          key={project.id}
                          className={`overflow-hidden border-l-4 backdrop-blur-sm transition-all hover:translate-x-2 ${
                            darkMode
                              ? 'border-cyan-400 bg-slate-800/30 hover:bg-slate-800/50'
                              : 'border-blue-500 bg-white/50 hover:bg-white/80'
                          }`}
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
                            animationDelay: `${idx * 100}ms`
                          }}
                        >
                          {/* Project Image */}
                          {project.image && (
                            <div 
                              className={`w-full h-48 bg-gradient-to-br overflow-hidden cursor-pointer group/img ${
                                darkMode ? 'from-slate-700 to-slate-900' : 'from-gray-200 to-gray-300'
                              }`}
                              onClick={() => setFullscreenImage(project.image)}
                            >
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                              <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity ${
                                darkMode ? 'bg-black/50' : 'bg-white/50'
                              }`}>
                                <div className={`px-4 py-2 border ${
                                  darkMode ? 'border-cyan-400 text-cyan-400' : 'border-blue-500 text-blue-600'
                                } backdrop-blur-sm font-bold text-sm`}>
                                  CLICK TO ENLARGE
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div className="p-6">
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                              {project.name.replace(/_/g, ' ')}
                            </h3>
                            <p className={`mb-4 text-base leading-relaxed ${
                              darkMode ? 'text-cyan-100/80' : 'text-gray-700'
                            }`}>{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className={`text-xs px-3 py-1 border font-semibold ${
                                    darkMode
                                      ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-400'
                                      : 'bg-blue-500/10 border-blue-500/30 text-blue-600'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {activeWindow === 'skills' && (
                  <div>
                    <div className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} style={{textShadow: darkMode ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 2px 10px rgba(59, 130, 246, 0.3)'}}>
                      SKILLS
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {skills.map((skillGroup, idx) => (
                        <div key={idx} className={`p-6 border backdrop-blur-sm transition-all hover:scale-105 ${
                          darkMode
                            ? 'border-cyan-400/30 bg-slate-800/30'
                            : 'border-blue-500/30 bg-white/50'
                        }`} style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'}}>
                          <h3 className={`font-bold text-base mb-4 uppercase tracking-wider ${
                            darkMode ? 'text-cyan-400' : 'text-blue-600'
                          }`}>
                            {skillGroup.category}
                          </h3>
                          <ul className="space-y-2">
                            {skillGroup.items.map((item) => (
                              <li key={item} className={`text-sm flex items-center gap-2 ${
                                darkMode ? 'text-cyan-100/80' : 'text-gray-700'
                              }`}>
                                <span className={`w-1 h-1 rounded-full ${
                                  darkMode ? 'bg-cyan-400' : 'bg-blue-500'
                                }`}></span>
                                {item}
                              </li>
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
                    <div className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} style={{textShadow: darkMode ? '0 0 20px rgba(34, 211, 238, 0.5)' : '0 2px 10px rgba(59, 130, 246, 0.3)'}}>
                      CONTACT
                    </div>
                    <p className={`mb-10 text-base ${
                      darkMode ? 'text-cyan-100/80' : 'text-gray-700'
                    }`}>
                      Let's connect and build something amazing together.
                    </p>
                    <div className="flex flex-col gap-4 max-w-md">
                      <a
                        href="mailto:jumagbasmarlowe@gmail.com"
                        className={`relative px-6 py-4 font-bold uppercase text-sm border transition-all group overflow-hidden ${
                          darkMode
                            ? 'bg-slate-800/50 text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10'
                            : 'bg-white text-blue-600 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10'
                        }`}
                        style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'}}
                      >
                        <span className="relative z-10">EMAIL</span>
                        <div className={`absolute top-0 right-0 w-0 h-full group-hover:w-full transition-all duration-500 ${
                          darkMode ? 'bg-cyan-400/5' : 'bg-blue-500/5'
                        }`}></div>
                      </a>
                      <a
                        href="https://github.com/NikolaiTengu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative px-6 py-4 font-bold uppercase text-sm border transition-all group overflow-hidden ${
                          darkMode
                            ? 'bg-slate-800/50 text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10'
                            : 'bg-white text-blue-600 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10'
                        }`}
                        style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'}}
                      >
                        <span className="relative z-10">GITHUB</span>
                        <div className={`absolute top-0 right-0 w-0 h-full group-hover:w-full transition-all duration-500 ${
                          darkMode ? 'bg-cyan-400/5' : 'bg-blue-500/5'
                        }`}></div>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/marlowe-ian-jumagbas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative px-6 py-4 font-bold uppercase text-sm border transition-all group overflow-hidden ${
                          darkMode
                            ? 'bg-slate-800/50 text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10'
                            : 'bg-white text-blue-600 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10'
                        }`}
                        style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'}}
                      >
                        <span className="relative z-10">LINKEDIN</span>
                        <div className={`absolute top-0 right-0 w-0 h-full group-hover:w-full transition-all duration-500 ${
                          darkMode ? 'bg-cyan-400/5' : 'bg-blue-500/5'
                        }`}></div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Cytus Style */}
      <footer className={`border-t px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs backdrop-blur-sm ${
        darkMode 
          ? 'bg-slate-900/80 border-cyan-400/30 text-cyan-400/60' 
          : 'bg-white/80 border-blue-500/30 text-blue-600/60'
      }`}>
        <div className="flex items-center gap-2">
          <div className={`w-1 h-1 rounded-full animate-pulse ${
            darkMode ? 'bg-cyan-400' : 'bg-blue-500'
          }`}></div>
          <span className="font-medium">SYSTEM ACTIVE</span>
        </div>
        <div className="font-medium">© 2026 MARLOWE IAN JUMAGBAS</div>
      </footer>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setFullscreenImage(null)}
            className={`absolute top-6 right-6 w-12 h-12 border transition-all z-10 group ${
              darkMode
                ? 'bg-slate-800/50 border-cyan-400/50 hover:border-cyan-400 hover:bg-slate-700/50 text-cyan-400'
                : 'bg-white border-blue-500/50 hover:border-blue-500 hover:bg-gray-50 text-blue-600'
            }`}
            style={{clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}
          >
            <svg className="w-6 h-6 mx-auto transition-transform group-hover:rotate-90 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`border backdrop-blur-md overflow-hidden ${
              darkMode 
                ? 'border-cyan-400/30 bg-slate-800/30' 
                : 'border-blue-500/30 bg-white/50'
            }`} style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'}}>
              <img 
                src={fullscreenImage} 
                alt="Project Preview"
                className="w-full h-auto max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Instruction Text */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 text-sm font-medium ${
              darkMode ? 'text-cyan-400/60' : 'text-blue-600/60'
            }`}>
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
