'use client';

import { useEffect, useRef, useState } from 'react';
import AboutContent from './components/AboutContent';
import Particles from './components/Particles';
import StaggeredMenu from './components/StaggeredMenu';
import '../styles/home.css';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
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

function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
      return () => mediaQuery.removeEventListener('change', updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

export default function Home() {
  const [activeWindow, setActiveWindow] = useState('home');
  const [profileModalType, setProfileModalType] = useState<'about' | 'additional' | null>(null);
  const [profileModalClosing, setProfileModalClosing] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [gsapReady, setGsapReady] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());
  const [bootSequenceVisible, setBootSequenceVisible] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const profileModalTimerRef = useRef<number | null>(null);
  const ABOUT_MODAL_ANIMATION_MS = 220;
  const metroTickerMessage = Array.from({ length: 14 }, () => 'WELCOME!').join('  •  ');

  const openProfileModal = (type: 'about' | 'additional') => {
    if (profileModalTimerRef.current) {
      window.clearTimeout(profileModalTimerRef.current);
      profileModalTimerRef.current = null;
    }

    setProfileModalClosing(false);
    setProfileModalType(type);
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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const hasSeenBoot = window.sessionStorage.getItem('zzz-boot-seen');
    if (prefersReducedMotion || hasSeenBoot === '1') {
      const frame = window.requestAnimationFrame(() => {
        setBootSequenceVisible(false);
        setBootProgress(100);
      });

      return () => window.cancelAnimationFrame(frame);
    }

    const showFrame = window.requestAnimationFrame(() => setBootSequenceVisible(true));
    const progressSequence = [20, 42, 68, 100];
    const timers = progressSequence.map((value, index) =>
      window.setTimeout(() => setBootProgress(value), 220 + index * 260),
    );

    const hideTimer = window.setTimeout(() => {
      setBootSequenceVisible(false);
      setBootProgress(100);
      window.sessionStorage.setItem('zzz-boot-seen', '1');
    }, 1500);

    return () => {
      window.cancelAnimationFrame(showFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(hideTimer);
    };
  }, [prefersReducedMotion]);

  useGSAP(() => {
    if (prefersReducedMotion || !bootSequenceVisible) {
      return;
    }

    gsap.fromTo(
      '.boot-panel',
      { autoAlpha: 0, y: -16 },
      { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' },
    );

    gsap.to('.boot-fill', {
      width: `${bootProgress}%`,
      duration: 0.4,
      ease: 'power1.out',
      overwrite: 'auto',
    });
  }, { scope: rootRef, dependencies: [bootProgress, bootSequenceVisible, prefersReducedMotion] });

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(['.js-topbar', '.js-mainpanel', '.js-bottombar', '.js-content-panel'], {
        clearProps: 'all',
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'none',
      });
      setGsapReady(true);
      return;
    }

    const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    introTimeline
      .from('.js-topbar', { y: -18, duration: 0.45, clearProps: 'transform' })
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
  }, { scope: rootRef, dependencies: [prefersReducedMotion] });

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.js-content-panel', { opacity: 1, y: 0, filter: 'none' });
      return;
    }

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
  }, { scope: rootRef, dependencies: [activeWindow, prefersReducedMotion] });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

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
    <div ref={rootRef} className={`home-page zzz-shell ${gsapReady ? 'gsap-enhanced' : ''} min-h-screen font-inter text-sm page-grid scanlines`}>
      <Particles count={prefersReducedMotion ? 10 : 18} maxSpeed={prefersReducedMotion ? 0.12 : 0.24} color="244, 208, 63" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 right-48 w-96 h-96 opacity-20 bg-gradient-to-br from-indigo-400 via-purple-400 to-transparent rounded-full blur-3xl glow-primary"></div>
        <div className="absolute bottom-40 left-40 w-80 h-48 opacity-25">
          <div className="w-full h-full bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 rounded-2xl transform rotate-12 blur-2xl glow-accent"></div>
        </div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 opacity-15 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-3xl"></div>
      </div>

      
      <header className="js-topbar win7-taskbar neon-beat flex justify-between items-center px-4 py-3 shadow-lg relative z-50">
        <div className="flex items-center gap-4 w-full min-w-0">
          <StaggeredMenu
            position="left"
            items={navItems.map((item) => ({
              label: item.label,
              ariaLabel: item.desc,
              onClick: () => {
                if (item.id === 'about') {
                  openAboutModal();
                  return;
                }

                if (item.id === 'additional') {
                  openAdditionalInfoModal();
                  return;
                }

                setActiveWindow(item.id);
              },
            }))}
            socialItems={[
              { label: 'GitHub', link: 'https://github.com/NikolaiTengu' },
              { label: 'LinkedIn', link: 'https://www.linkedin.com/in/marlowe-ian-jumagbas' },
            ]}
            displaySocials
            displayItemNumbering
            menuButtonColor="#f4f4f6"
            openMenuButtonColor="#f4f4f6"
            changeMenuColorOnOpen
            colors={['#0b0b0b', '#121212']}
            accentColor="#ef4444"
          />
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded border border-blue-300 shadow-sm flex items-center justify-center">
              <WebAssetRoundedIcon sx={{ fontSize: 14, color: 'white' }} />
            </div>
          </div>
          <div className="metro-marquee-wrap" aria-label="Welcome banner">
            <div className="metro-marquee-track">
              <span className="metro-marquee-text">{metroTickerMessage}</span>
              <span className="metro-marquee-text" aria-hidden="true">{metroTickerMessage}</span>
            </div>
          </div>
        </div>
      </header>

      
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-4 md:p-6 space-y-6">
          {bootSequenceVisible && (
            <div className="boot-overlay">
              <div className="boot-panel">
                <div className="boot-header">
                  <span>SYS // BOOT</span>
                  <span>{bootProgress}%</span>
                </div>
                <div className="boot-meter">
                  <span className="boot-fill" style={{ width: `${bootProgress}%` }} />
                </div>
                <div className="boot-sequence">
                  <span>INIT</span>
                  <span>SYNC</span>
                  <span>READY</span>
                </div>
              </div>
            </div>
          )}

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
                  <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start">
                    <div className="panel-card p-4 bg-black/60 border border-red-700/60">
                      <img
                        src="/me.png"
                        alt="Marlowe Ian Jumagbas"
                        className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl shadow-sm"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="disk-console flex-1">
                      <div className="disk-ring" aria-label="Drive status display">
                        <div className="disk-needle" />
                        {[0, 1, 2, 3].map((index) => (
                          <span
                            key={index}
                            className="disk-indicator"
                            style={{ transform: `rotate(${index * 90}deg) translateY(-48px)` }}
                          />
                        ))}
                      </div>
                      <div className="disk-meta">
                        <span className="disk-label">SYS // DRIVE</span>
                        <strong>READY</strong>
                        <small>RUNTIME STABLE</small>
                      </div>
                    </div>

                    <div className="text-center xl:text-left flex-1 space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow-200">
                        Graduate • Open to Opportunities
                      </div>

                      <h1 className="text-4xl md:text-5xl font-bold neon-beat text-rose-100 leading-tight">
                        Marlowe Ian Jumagbas
                      </h1>

                      <p className="text-lg md:text-xl text-white/85 tracking-wide">
                        BSIT Graduate • Aspiring Developer • IT Enthusiast
                      </p>

                      <p className="max-w-xl text-sm md:text-base text-white/70 tracking-wide leading-relaxed">
                        I&apos;m a recent Information Technology graduate who is actively improving my programming
                        skills, learning more about IT as a whole, and looking for opportunities to contribute,
                        grow, and build meaningful solutions in the tech industry.
                      </p>

                      <div className="flex flex-wrap justify-center xl:justify-start gap-2 pt-2">
                        {['Web Development', 'Problem Solving', 'IT Growth', 'Software Learning'].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap justify-center xl:justify-start gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setActiveWindow('contact')}
                          className="panel-button inline-flex items-center gap-2 px-4 py-2 bg-red-700/80 border border-red-400/70 text-white hover:bg-red-600/90"
                        >
                          <ContactMailRoundedIcon sx={{ fontSize: 16 }} />
                          Let&apos;s Connect
                        </button>
                        <button
                          type="button"
                          onClick={openAboutModal}
                          className="panel-button inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white/85 hover:bg-white/20"
                        >
                          <PersonRoundedIcon sx={{ fontSize: 16 }} />
                          View Profile
                        </button>
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
            <span className="font-mono">{currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}</span>
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
