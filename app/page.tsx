'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AboutContent from './components/AboutContent';
import '../styles/home.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  { category: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'Expo', 'React + Vite'] },
  { category: 'Backend', items: ['Node.js', 'Laravel', 'Express', 'MySQL', 'MongoDB', 'SQLite', 'Firebase'] },
  { category: 'DevOps', items: ['Azure', 'AWS', 'Docker'] },
  { category: 'Tools', items: ['Git', 'Github', 'VS Code', 'Visual Studio', 'Python', 'Linux', 'C#', 'Postman'] },
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

const navItems = [
  { id: 'home', label: 'Home', icon: HomeRoundedIcon, desc: 'Welcome & Overview', color: 'from-blue-500 to-cyan-500' },
  { id: 'about', label: 'About Me', icon: PersonRoundedIcon, desc: 'Background & Education', color: 'from-green-500 to-emerald-500' },
  { id: 'additional', label: 'Additional Info', icon: NotesRoundedIcon, desc: 'Personal Add-ons', color: 'from-rose-500 to-red-600' },
  { id: 'projects', label: 'Projects', icon: RocketLaunchRoundedIcon, desc: 'My Work & Portfolio', color: 'from-purple-500 to-pink-500' },
  { id: 'skills', label: 'Skills', icon: BoltRoundedIcon, desc: 'Technical Expertise', color: 'from-amber-500 to-orange-500' },
  { id: 'contact', label: 'Contact', icon: ContactMailRoundedIcon, desc: 'Get In Touch', color: 'from-red-500 to-pink-500' },
];

const homeQuickNav = [
  { label: 'About Me', id: 'about', icon: PersonRoundedIcon, color: 'from-green-500 to-emerald-600', desc: 'My story' },
  { label: 'Additional Info', id: 'additional', icon: NotesRoundedIcon, color: 'from-rose-500 to-red-600', desc: 'More personal info' },
  { label: 'Projects', id: 'projects', icon: RocketLaunchRoundedIcon, color: 'from-blue-500 to-cyan-600', desc: 'Portfolio showcase' },
  { label: 'Skills', id: 'skills', icon: BoltRoundedIcon, color: 'from-purple-500 to-pink-600', desc: 'Tech stack' },
  { label: 'Contact', id: 'contact', icon: ContactMailRoundedIcon, color: 'from-red-500 to-rose-600', desc: 'Get in touch' },
];

export default function Home() {
  const [activeWindow, setActiveWindow] = useState('home');
  const [profileModalType, setProfileModalType] = useState<'about' | 'additional' | null>(null);
  const [profileModalClosing, setProfileModalClosing] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const profileModalTimerRef = useRef<number | null>(null);
  const ABOUT_MODAL_ANIMATION_MS = 220;

  const openProfileModal = (type: 'about' | 'additional') => {
    if (profileModalTimerRef.current) {
      window.clearTimeout(profileModalTimerRef.current);
      profileModalTimerRef.current = null;
    }

    setProfileModalClosing(false);
    setProfileModalType(type);
    setSidebarOpen(false);
  };

  const openAboutModal = () => openProfileModal('about');
  const openAdditionalInfoModal = () => openProfileModal('additional');

  const closeAboutModal = () => {
    if (!profileModalType || profileModalClosing) {
      return;
    }

    setProfileModalClosing(true);
    profileModalTimerRef.current = window.setTimeout(() => {
      setProfileModalType(null);
      setProfileModalClosing(false);
      profileModalTimerRef.current = null;
    }, ABOUT_MODAL_ANIMATION_MS);
  };

  useGSAP(() => {
    const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    introTimeline
      .from('.js-topbar', { y: -18, duration: 0.45, clearProps: 'transform' })
      .from('.js-sidepanel', { x: -36, duration: 0.55, clearProps: 'transform' }, '-=0.25')
      .from('.js-mainpanel', { y: 24, duration: 0.55, clearProps: 'transform' }, '-=0.3')
      .from('.js-bottombar', { y: 12, duration: 0.4, clearProps: 'transform' }, '-=0.2');

    gsap.utils.toArray<HTMLElement>('.js-animate-item').forEach((element) => {
      gsap.fromTo(
        element,
        { y: 20, scale: 0.985 },
        {
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: 'power2.out',
          immediateRender: false,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });

    setGsapReady(true);
  }, { scope: rootRef });

  useGSAP(() => {
    gsap.fromTo(
      '.js-content-panel',
      { y: 16, filter: 'blur(5px)' },
      {
        y: 0,
        filter: 'blur(0px)',
        duration: 0.42,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'transform,filter',
      },
    );

    gsap.fromTo(
      '.sidebar-nav-item.active',
      { scale: 0.985, boxShadow: '0 0 0 rgba(239, 68, 68, 0)' },
      {
        scale: 1,
        boxShadow: '0 0 24px rgba(248, 113, 113, 0.42)',
        duration: 0.45,
        ease: 'power2.out',
        clearProps: 'transform',
      },
    );
  }, { scope: rootRef, dependencies: [activeWindow] });

  useEffect(() => {
    if (!profileModalType && !fullscreenImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [profileModalType, fullscreenImage]);

  useEffect(() => {
    return () => {
      if (profileModalTimerRef.current) {
        window.clearTimeout(profileModalTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      if (fullscreenImage) {
        setFullscreenImage(null);
        return;
      }

      if (profileModalType) {
        closeAboutModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [profileModalType, fullscreenImage]);

  return (
    <div ref={rootRef} className={`home-page ${gsapReady ? 'gsap-enhanced' : ''} min-h-screen font-inter text-sm page-grid scanlines`}>
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 right-48 w-96 h-96 opacity-20 bg-gradient-to-br from-indigo-400 via-purple-400 to-transparent rounded-full blur-3xl glow-primary"></div>
        <div className="absolute bottom-40 left-40 w-80 h-48 opacity-25">
          <div className="w-full h-full bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 rounded-2xl transform rotate-12 blur-2xl glow-accent"></div>
        </div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 opacity-15 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-3xl"></div>
      </div>

      
      <header className="js-topbar win7-taskbar neon-beat flex justify-between items-center px-4 py-3 shadow-lg relative z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="win7-taskbar-button px-4 py-2 text-sm font-medium md:hidden rounded-md"
          >
            <span className="inline-flex items-center gap-1.5">
              <WebAssetRoundedIcon sx={{ fontSize: 16 }} />
              Start
            </span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded border border-blue-300 shadow-sm flex items-center justify-center">
              <WebAssetRoundedIcon sx={{ fontSize: 14, color: 'white' }} />
            </div>
            <span className="font-medium text-white text-sm hidden sm:block">Portfolio - Marlowe Ian Jumagbas</span>
            <span className="font-medium text-white text-sm sm:hidden">M.I.J Portfolio</span>
          </div>
        </div>
        <div className="text-xs text-white/90 hidden sm:flex items-center gap-3">
          <span>{new Date().toLocaleDateString()}</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </header>

      
      <main className="flex-1 flex overflow-hidden">
        
        <div className={`js-sidepanel fixed md:static inset-y-0 left-0 z-40 w-80 panel-card sidebar-panel reveal-up reveal-delay-1 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } mt-0 md:mt-6 ml-0 md:ml-6 rounded-xl`}>
          <div className="panel-header sidebar-panel-header text-base font-semibold">
            <div className="flex items-center gap-3">
              <AutoAwesomeRoundedIcon sx={{ fontSize: 20 }} />
              <span>Navigation</span>
            </div>
          </div>
          <div className="p-6 h-full overflow-y-auto sidebar-panel-body">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'about') {
                      openAboutModal();
                      return;
                    }

                    if (item.id === 'additional') {
                      openAdditionalInfoModal();
                      return;
                    }

                    setActiveWindow(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`nav-item sidebar-nav-item group w-full text-left transition-all rounded-xl flex items-center gap-4 ${
                    item.id === 'skills'
                      ? 'hover:bg-rose-500/20 hover:ring-2 hover:ring-rose-300/80 hover:shadow-[0_0_18px_rgba(251,113,133,0.45)]'
                      : ''
                  } ${
                    (item.id === 'about' ? profileModalType === 'about' : item.id === 'additional' ? profileModalType === 'additional' : activeWindow === item.id)
                      ? 'active sidebar-nav-item-active text-red-100'
                      : 'text-red-100 hover:text-white'
                  }`}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white shadow-lg text-lg`}>
                    <item.icon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[0.92rem] tracking-wide">{item.label}</div>
                    <div className={`nav-description text-xs ${item.id === 'skills' ? 'group-hover:text-rose-100' : ''}`}>{item.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-red-900/70">
              <div className="text-xs font-semibold text-red-100/90 mb-4 uppercase tracking-wider">Quick Links</div>
              <div className="space-y-2">
                <a href="mailto:jumagbasmarlowe@gmail.com" className="js-animate-item hover-highlight panel-button quick-link w-full text-left p-3 text-xs flex items-center gap-3">
                  <EmailRoundedIcon sx={{ fontSize: 16 }} />
                  <span>Email Me</span>
                </a>
                <a href="https://github.com/NikolaiTengu" target="_blank" rel="noopener noreferrer" className="js-animate-item hover-highlight panel-button quick-link w-full text-left p-3 text-xs flex items-center gap-3">
                  <GitHubIcon sx={{ fontSize: 16 }} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        
        <div className="flex-1 p-4 md:p-6 space-y-6">
          
          <div className="js-mainpanel panel-card main-panel reveal-up reveal-delay-2 h-[calc(100vh-200px)] md:h-[calc(100vh-160px)] flex flex-col">
            <div className="panel-header flex justify-between items-center text-base relative">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                  {activeWindow === 'home' && <HomeRoundedIcon sx={{ fontSize: 14 }} />}
                  {activeWindow === 'projects' && <RocketLaunchRoundedIcon sx={{ fontSize: 14 }} />}
                  {activeWindow === 'skills' && <BoltRoundedIcon sx={{ fontSize: 14 }} />}
                  {activeWindow === 'contact' && <ContactMailRoundedIcon sx={{ fontSize: 14 }} />}
                </div>
                <span className="font-semibold">
                  {activeWindow === 'home' && 'Portfolio Dashboard'}
                  {activeWindow === 'projects' && 'Project Showcase'}
                  {activeWindow === 'skills' && 'Technical Skills'}
                  {activeWindow === 'contact' && 'Contact Information'}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-white/10 rounded hover:bg-yellow-400/20 transition-colors flex items-center justify-center cursor-pointer">
                  <RemoveRoundedIcon sx={{ fontSize: 14 }} />
                </div>
                <div className="w-6 h-6 bg-white/10 rounded hover:bg-green-400/20 transition-colors flex items-center justify-center cursor-pointer">
                  <CropSquareRoundedIcon sx={{ fontSize: 12 }} />
                </div>
                <div className="w-6 h-6 bg-white/10 rounded hover:bg-red-400/20 transition-colors flex items-center justify-center cursor-pointer">
                  <CloseRoundedIcon sx={{ fontSize: 14 }} />
                </div>
              </div>
            </div>
            <div className="js-content-panel flex-1 p-6 overflow-auto main-panel-body">
              
              {activeWindow === 'home' && (
                <div className="space-y-8 reveal-up reveal-delay-3">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <button
                      type="button"
                      onClick={openAboutModal}
                      className="group relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48 panel-card p-3 bg-black/60 border border-red-700/60 hover:border-red-500 transition-all duration-300 cursor-pointer"
                    >
                      <img 
                        src="/me.png" 
                        alt="Marlowe Ian Jumagbas"
                        className="w-full h-full object-cover rounded-lg shadow-sm group-hover:scale-[1.02] transition-transform"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-red-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                        <span className="text-xs font-semibold tracking-wide text-red-100">ENTER PROFILE</span>
                      </div>
                    </button>
                    <div className="flex-1">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-beat text-rose-100">
                        Marlowe Ian Jumagbas
                      </h1>
                      
                      <div className="panel-card p-6 mb-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-indigo-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                            <SchoolRoundedIcon sx={{ fontSize: 18 }} />
                          </div>
                          <h3 className="font-semibold text-white">Academic Journey</h3>
                        </div>
                        <p className="text-sm font-medium text-white">
                          4th-Year Bachelor of Science in Information Technology<br/>
                          Saint Mary&apos;s University, Bayombong
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-indigo-400 mb-8">
                        <p className="text-base leading-relaxed text-white">
                          Welcome to my digital portfolio! I&apos;m a passionate full-stack developer 
                          specializing in modern web technologies. Explore my journey through 
                          projects, skills, and professional experience.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 max-w-2xl">
                        {homeQuickNav.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              if (item.id === 'about') {
                                openAboutModal();
                                return;
                              }

                              if (item.id === 'additional') {
                                openAdditionalInfoModal();
                                return;
                              }

                              setActiveWindow(item.id);
                            }}
                            className="js-animate-item hover-highlight panel-button text-sm px-4 py-4 text-left flex items-center gap-3 hover:shadow-lg transition-all group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
                              <item.icon sx={{ fontSize: 20 }} />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{item.label}</div>
                              <div className="text-xs text-white/90">{item.desc}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              
              {activeWindow === 'projects' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl glow-primary">
                      <RocketLaunchRoundedIcon sx={{ fontSize: 32 }} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-rose-100">
                        Project Showcase
                      </h2>
                      <p className="text-white/90">A collection of my recent work and achievements</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {projects.map((project, idx) => (
                      <div key={project.id} className="js-animate-item hover-highlight panel-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                        <div className="panel-header flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${
                              idx % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                              idx % 3 === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                              'bg-gradient-to-br from-purple-500 to-pink-500'
                            }`}>
                              <FolderRoundedIcon sx={{ fontSize: 18 }} />
                            </div>
                            <span className="font-semibold text-lg">{project.name}</span>
                          </div>
                          <button 
                            onClick={() => setFullscreenImage(project.image)}
                            className="panel-button px-4 py-2 text-sm bg-white/20 border-white/30 hover:bg-white/30 text-white"
                          >
                            <span className="inline-flex items-center gap-1.5"><ZoomInRoundedIcon sx={{ fontSize: 16 }} />Preview</span>
                          </button>
                        </div>
                        
                        <div className="content-surface">
                          {project.image && (
                            <div 
                              className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden cursor-pointer group/img relative"
                              onClick={() => setFullscreenImage(project.image)}
                            >
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <div className="panel-button px-6 py-3 text-white bg-black/50 border-white/30 backdrop-blur-sm">
                                  <span className="inline-flex items-center gap-2"><ZoomInRoundedIcon sx={{ fontSize: 18 }} />View Full Size</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div className="p-8">
                            <h3 className="font-bold text-xl mb-4 text-rose-100">
                              {project.name}
                            </h3>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-6">
                              <p className="text-base text-white/90 leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                            
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-rose-100/90 uppercase tracking-wider">Technology Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, skillIdx) => (
                                  <span
                                    key={skill}
                                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all hover:scale-105 ${
                                      skillIdx % 4 === 0 ? 'bg-blue-700 text-blue-50 border border-blue-400/80 hover:bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.28)]' :
                                      skillIdx % 4 === 1 ? 'bg-emerald-700 text-emerald-50 border border-emerald-400/80 hover:bg-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.28)]' :
                                      skillIdx % 4 === 2 ? 'bg-violet-700 text-violet-50 border border-violet-400/80 hover:bg-violet-600 shadow-[0_0_10px_rgba(139,92,246,0.28)]' :
                                      'bg-amber-700 text-amber-50 border border-amber-400/80 hover:bg-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.28)]'
                                    }`}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              
              {activeWindow === 'skills' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl glow-primary">
                      <BoltRoundedIcon sx={{ fontSize: 32 }} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        Technical Skills
                      </h2>
                      <p className="text-white/90">My expertise in modern technologies and tools</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skillGroup, idx) => (
                      <div key={idx} className="js-animate-item hover-highlight panel-card group hover:scale-105 transition-all duration-300">
                        <div className={`panel-header ${
                          idx === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          idx === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          idx === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                          'bg-gradient-to-r from-orange-500 to-red-500'
                        }`}>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xl">
                              {idx === 0 ? <PaletteRoundedIcon sx={{ fontSize: 18 }} /> : idx === 1 ? <BuildRoundedIcon sx={{ fontSize: 18 }} /> : idx === 2 ? <CloudRoundedIcon sx={{ fontSize: 18 }} /> : <NotesRoundedIcon sx={{ fontSize: 18 }} />}
                            </div>
                            <span className="font-semibold text-lg">{skillGroup.category}</span>
                          </div>
                        </div>
                        <div className="p-6 content-surface space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            {skillGroup.items.map((item, itemIdx) => (
                              <div key={item} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-all group/item">
                                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                                  itemIdx % 4 === 0 ? 'bg-blue-500' :
                                  itemIdx % 4 === 1 ? 'bg-green-500' :
                                  itemIdx % 4 === 2 ? 'bg-purple-500' : 'bg-orange-500'
                                } group-hover/item:scale-110 transition-transform`}></div>
                                <span className="font-medium text-white transition-colors">{item}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-semibold text-white/90">Proficiency Level</span>
                              <span className="text-sm font-bold text-white">
                                {idx === 0 ? '85%' : idx === 1 ? '75%' : idx === 2 ? '70%' : '80%'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                                <div 
                                  className={`h-full transition-all duration-1000 ease-out ${
                                    idx === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-[85%]' :
                                    idx === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500 w-[75%]' :
                                    idx === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-[70%]' :
                                    'bg-gradient-to-r from-orange-500 to-red-500 w-[80%]'
                                  } shadow-sm`}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              
              {activeWindow === 'contact' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl shadow-xl">
                      <EmailRoundedIcon sx={{ fontSize: 24 }} />
                    </div>
                    <h2
                      className="panel-header text-2xl font-semibold text-white"
                      style={{ WebkitTextFillColor: 'currentColor', WebkitBackgroundClip: 'border-box', backgroundClip: 'border-box' }}
                    >
                      Contact Information
                    </h2>
                  </div>
                  
                  <div className="panel-card p-6">
                    <div className="panel-header -m-6 mb-6 inline-flex items-center gap-2 text-white">
                      <EmailRoundedIcon sx={{ fontSize: 18 }} /> New Message - Let&apos;s Connect!
                    </div>
                    <div className="content-surface p-6 rounded-lg border border-red-900/60 shadow-inner">
                      <p className="text-sm text-white/90 leading-relaxed bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border-l-4 border-indigo-400">
                        Ready to collaborate on your next project? I&apos;d love to hear from you! 
                        Feel free to reach out through any of the channels below. I typically 
                        respond within 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 max-w-2xl">
                    <a
                      href="mailto:jumagbasmarlowe@gmail.com"
                      className="js-animate-item hover-highlight panel-button p-4 text-left flex items-center gap-4 hover:scale-[1.02] transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl shadow-xl group-hover:scale-105 transition-transform">
                        <EmailRoundedIcon sx={{ fontSize: 22 }} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">Email Address</div>
                        <div className="text-sm text-white/95">jumagbasmarlowe@gmail.com</div>
                        <div className="text-xs text-white/85">Primary contact method - Professional inquiries</div>
                      </div>
                      <div className="text-white/70 group-hover:text-white transition-colors text-lg"><ArrowForwardRoundedIcon sx={{ fontSize: 20 }} /></div>
                    </a>
                    
                    <a
                      href="https://github.com/NikolaiTengu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="js-animate-item hover-highlight panel-button p-4 text-left flex items-center gap-4 hover:scale-[1.02] transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white text-xl shadow-xl group-hover:scale-105 transition-transform">
                        <GitHubIcon sx={{ fontSize: 22 }} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">GitHub Profile</div>
                        <div className="text-sm text-white/95">github.com/NikolaiTengu</div>
                        <div className="text-xs text-white/85">View my repositories and open source contributions</div>
                      </div>
                      <div className="text-white/70 group-hover:text-white transition-colors text-lg"><ArrowForwardRoundedIcon sx={{ fontSize: 20 }} /></div>
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/marlowe-ian-jumagbas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="js-animate-item hover-highlight panel-button p-4 text-left flex items-center gap-4 hover:scale-[1.02] transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-lg flex items-center justify-center text-white text-xl shadow-xl group-hover:scale-105 transition-transform">
                        <LinkedInIcon sx={{ fontSize: 22 }} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">LinkedIn Profile</div>
                        <div className="text-sm text-white/95">linkedin.com/in/marlowe-ian-jumagbas</div>
                        <div className="text-xs text-white/85">Professional network and career updates</div>
                      </div>
                      <div className="text-white/70 group-hover:text-white transition-colors text-lg"><ArrowForwardRoundedIcon sx={{ fontSize: 20 }} /></div>
                    </a>
                  </div>
                  
                  <div className="panel-card p-4 bg-gradient-to-r from-yellow-50 to-orange-50">
                    <div className="panel-header text-xs -m-4 mb-3 bg-gradient-to-r from-yellow-500 to-orange-600 inline-flex items-center gap-2">
                      <WarningAmberRoundedIcon sx={{ fontSize: 16 }} /> Quick Note
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-white/90">
                        <strong>Availability:</strong> 10:00 AM to 12:00 Noon, and 6:00 PM to 7:00 PM<br/>
                        <strong>Time Zone:</strong> GMT+8 (Philippine Standard Time)<br/>
                        <strong>Boundary:</strong> Messages outside these hours may be answered the next day
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      
      <footer className="js-bottombar bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 px-4 py-3 flex justify-between items-center shadow-2xl border-t border-white/10 relative z-50">
        <div className="flex items-center gap-4">
          <div className="text-sm px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white/90 font-medium shadow-inner select-none cursor-default inline-flex items-center">
            <span className="mr-2"><HomeRoundedIcon sx={{ fontSize: 16 }} /></span>
            <span className="font-bold">Home</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-medium">System Online</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <PublicRoundedIcon sx={{ fontSize: 17 }} />
              <span>Connected</span>
            </span>
            <span className="flex items-center gap-1">
              <SaveRoundedIcon sx={{ fontSize: 17 }} />
              <span>Portfolio v2.0</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/90 text-sm">
          <div className="hidden sm:block font-medium">
            © 2026 Marlowe Ian Jumagbas
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg shadow-inner">
            <ScheduleRoundedIcon sx={{ fontSize: 17 }} />
            <span className="font-mono">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </footer>

      {profileModalType && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-6 about-modal-overlay ${profileModalClosing ? 'about-modal-overlay-closing' : ''}`}
          onClick={closeAboutModal}
        >
          <div
            className={`panel-card w-full max-w-6xl h-[92vh] overflow-hidden ${profileModalClosing ? 'app-popout' : 'app-popin'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="panel-header flex justify-between items-center">
              <div className="flex items-center gap-3">
                {profileModalType === 'about' ? <PersonRoundedIcon sx={{ fontSize: 20 }} /> : <NotesRoundedIcon sx={{ fontSize: 20 }} />}
                <span className="font-semibold">{profileModalType === 'about' ? 'About Me' : 'Additional Personal Info'}</span>
              </div>
              <button
                onClick={closeAboutModal}
                className="w-6 h-6 bg-white/10 rounded hover:bg-red-400/20 transition-colors flex items-center justify-center"
              >
                <CloseRoundedIcon sx={{ fontSize: 14 }} />
              </button>
            </div>
            <div className="h-[calc(92vh-60px)] overflow-y-auto p-4 md:p-6 bg-black/35">
              <AboutContent mode="modal" section={profileModalType === 'about' ? 'about' : 'additional'} />
            </div>
          </div>
        </div>
      )}

      
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="panel-card w-full max-w-6xl max-h-[92vh] overflow-hidden">
            <div className="panel-header flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ImageRoundedIcon sx={{ fontSize: 20 }} />
                <span className="font-semibold">Image Viewer - Project Preview</span>
              </div>
              <div className="flex gap-2">
                <button className="w-6 h-6 bg-white/10 rounded hover:bg-yellow-400/20 transition-colors flex items-center justify-center">
                  <RemoveRoundedIcon sx={{ fontSize: 14 }} />
                </button>
                <button className="w-6 h-6 bg-white/10 rounded hover:bg-green-400/20 transition-colors flex items-center justify-center">
                  <CropSquareRoundedIcon sx={{ fontSize: 12 }} />
                </button>
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="w-6 h-6 bg-white/10 rounded hover:bg-red-400/20 transition-colors flex items-center justify-center"
                >
                  <CloseRoundedIcon sx={{ fontSize: 14 }} />
                </button>
              </div>
            </div>
            <div className="content-surface p-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 shadow-inner h-[68vh] flex items-center justify-center overflow-hidden">
                <img 
                  src={fullscreenImage} 
                  alt="Project Preview"
                  className="max-w-full max-h-full object-contain mx-auto block shadow-lg rounded"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="text-center mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-l-4 border-indigo-400">
                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <SmartphoneRoundedIcon sx={{ fontSize: 16 }} />
                  <strong>Tip:</strong> Click outside the window to close | Use window controls above to manage view
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
