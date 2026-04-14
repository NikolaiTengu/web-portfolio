'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import '../../styles/about-me.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ITEMS_PER_PAGE = 6;

type AboutContentProps = {
  mode?: 'page' | 'modal';
  section?: 'about' | 'additional' | 'both';
};

export default function AboutContent({ mode = 'page', section = 'both' }: AboutContentProps) {
  const [musicPage, setMusicPage] = useState(0);
  const [gamesPage, setGamesPage] = useState(0);
  const [animePage, setAnimePage] = useState(0);
  const rootRef = useRef<HTMLElement | null>(null);
  const isModal = mode === 'modal';
  const showAboutSection = section === 'about' || section === 'both';
  const showAdditionalSection = section === 'additional' || section === 'both';

  const games = [
    'League of Legends',
    'Apex Legends',
    'Star Wars Battlefront 2',
    "Baldur's Gate 3",
    'Starcraft II',
    'Helldivers 2',
    'Space Marines 2',
    'Minecraft',
  ];

  const artistsAndMusic = [
    { title: 'Tek it', artist: 'Cafune', image: '/pictures/cafune-tek-it.jpg' },
    { title: 'I really want to stay at your house', artist: 'Samuel Kim', image: '/pictures/cyberpunk.jpg' },
    { title: 'Fallen', artist: 'Lola Amour', image: '/pictures/fallen-lola-amour.jpg' },
    { title: 'Ghost', artist: 'Hoshimachi Suisei', image: '/pictures/ghost-suisei.jpg' },
    { title: 'Falling Behind', artist: 'Laufey', image: '/pictures/laufey.jpg' },
    { title: 'Monitoring (Best Friend Remix)', artist: 'DECO 27, Hatsune Miku', image: '/pictures/monitoring-deco-27.jpg' },
    { title: 'End of a Life', artist: 'Mori Calliope', image: '/pictures/mori-end-of-life.jpg' },
    { title: 'Multo', artist: 'Cup of Joe', image: '/pictures/multo-album.jpg' },
    { title: 'Mundo', artist: 'IV of Spades', image: '/pictures/mundo.jpg' },
    { title: 'Why do i', artist: 'Set it Off', image: '/pictures/set-it-off-why-do-i.jpg' },
    { title: 'Tibok', artist: 'Earl Agustin', image: '/pictures/tibok-earl-agustin.jpg' },
    { title: 'Calling After Me', artist: 'Wallows', image: '/pictures/wallows.jpg' },
    { title: 'Umapyoi Densetsu', artist: 'Akihiro Honda', image: '/pictures/Umapyoi-Densetsu.jpg' },
    { title: 'Freebird', artist: 'Lynyrd skynyrd', image: '/pictures/freebird.jpg' },
    { title: 'From the Start', artist: 'Goodkid', image: '/pictures/goodkid-from-the-start.jpg' },
    { title: 'Brainrot', artist: 'Tokyo Manaka', image: '/pictures/brainrot.jpg' },
    { title: 'Low Cortisol (ai đưa em về )', artist: 'TIA', image: '/pictures/low-cortisol.gif' },
    { title: 'Sunday', artist: 'Emotional Orange', image: '/pictures/Sunday-emotional-orange.jpg' },
  ];

  const animeWatched = [
    { name: 'Guilty Crown', studio: 'Production I.G', image: '/pictures/guilty-crown.jpg' },
    { name: 'K-ON', studio: 'Kyoto Animation', image: '/pictures/k-on.webp' },
    { name: 'Umamusume Pretty Derby (S1-S3)', studio: 'P.A.Works / Studio Kai', image: '/pictures/pretty-derby.jpg' },
    { name: 'Umamusume Cinderella Gray (S1-S2)', studio: 'CygamesPictures', image: '/pictures/cinderella gray.jpg' },
    { name: 'One Punch Man (S1-S2)', studio: 'Madhouse / J.C.Staff', image: '/pictures/one-punch-man.jpg' },
    { name: 'Parasyte: The Maxim', studio: 'Madhouse', image: '/pictures/parasyte.jpg' },
    { name: 'Sword Art Online (S1-S3)', studio: 'A-1 Pictures', image: '/pictures/sword-art-online.png' },
    { name: 'Fullmetal Alchemist', studio: 'Studio Bones', image: '/pictures/alchemist-brotherhood.jpg' },
    { name: 'Code Geass', studio: 'Studio Sunrise', image: '/pictures/code geass.jpg' },
    { name: 'Bleach', studio: 'Studio Pierrot', image: '/pictures/Bleach.jpg' },
    { name: 'Naruto', studio: 'Studio Pierrot', image: '/pictures/Naruto.jpg' },
    { name: 'Fate Stay Night Unlimited Blade Works', studio: 'Ufotable', image: '/pictures/fate-stay-night-ubw.jpg' },
    { name: 'Hunter x Hunter', studio: 'Madhouse Studio', image: '/pictures/hunter-hunter-2011.jpg' },
    { name: 'My Youth Romantic Comedy Is Wrong, As I Expected', studio: "Brain's Base/Feel", image: '/pictures/Snafu.png' },
    { name: 'Toradora', studio: 'J.C Staff', image: '/pictures/toradora.jpg' },
    { name: 'Your Lie in April', studio: 'A-1 Pictures', image: '/pictures/Lie-in-april.jpg' },
    { name: 'My Dress Up Darling', studio: 'Studio Cloverworks', image: '/pictures/my-dress-up-darling.jpg' },
    { name: 'Magical Girl Madoka', studio: 'Studio SHAFT', image: '/pictures/magical-girl-madoka.jpg' },
    { name: 'Wotaku: Love is hard for Otaku', studio: 'A-1 Pictures', image: '/pictures/Otaku.jpg' },
    { name: 'Jujutsu Kaisen', studio: 'Studio MAPPA', image: '/pictures/jujutsu-kaisen.webp' },
    { name: 'Fate Strange Fake', studio: 'A-1 Pictures', image: '/pictures/fate-strange-fake.jpg' },
    { name: 'Devil May Cry (2011)', studio: 'Studio Madhouse', image: '/pictures/devil-may-cry.jpg' },
    { name: 'Nichijou, My ordinary Life', studio: 'Kyoanimations', image: '/pictures/nichijou.jpg' },
    { name: 'Ouran High School Host Club', studio: 'Studio Bones', image: '/pictures/ouran-host-high-school-club.webp' },
  ];

  const buildStats = [
    { label: 'Creativity', value: 88 },
    { label: 'Problem Solving', value: 90 },
    { label: 'Adaptability', value: 85 },
    { label: 'Teamwork', value: 82 },
  ];

  const musicPageCount = Math.ceil(artistsAndMusic.length / ITEMS_PER_PAGE);
  const gamesPageCount = Math.ceil(games.length / ITEMS_PER_PAGE);
  const animePageCount = Math.ceil(animeWatched.length / ITEMS_PER_PAGE);

  const visibleMusic = artistsAndMusic.slice(
    musicPage * ITEMS_PER_PAGE,
    (musicPage + 1) * ITEMS_PER_PAGE,
  );
  const visibleGames = games.slice(gamesPage * ITEMS_PER_PAGE, (gamesPage + 1) * ITEMS_PER_PAGE);
  const visibleAnime = animeWatched.slice(animePage * ITEMS_PER_PAGE, (animePage + 1) * ITEMS_PER_PAGE);

  useGSAP(() => {
    gsap.from('.js-about-container', {
      y: 12,
      duration: 0.3,
      ease: 'power1.out',
      clearProps: 'transform',
    });

    gsap.from('.js-about-section', {
      y: 10,
      duration: 0.28,
      stagger: 0.04,
      ease: 'power1.out',
      clearProps: 'transform',
    });

    const highlightElements = gsap.utils.toArray<HTMLElement>('.js-about-animate:not(.js-page-item)');

    if (isModal) {
      gsap.fromTo(
        highlightElements,
        { y: 6, scale: 0.995 },
        {
          y: 0,
          scale: 1,
          duration: 0.22,
          ease: 'power1.out',
          immediateRender: false,
          clearProps: 'transform',
          stagger: 0.02,
        },
      );
      return;
    }

    highlightElements.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0.92, y: 8, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.26,
          ease: 'power1.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  }, { scope: rootRef, dependencies: [isModal] });

  useGSAP(() => {
    const pagedItems = gsap.utils.toArray<HTMLElement>('.js-page-item');

    gsap.killTweensOf(pagedItems);
    gsap.set(pagedItems, { autoAlpha: 1, y: 0, clearProps: 'filter' });

    gsap.fromTo(
      pagedItems,
      { autoAlpha: 0.94, y: 6 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.16,
        ease: 'none',
        stagger: 0.02,
        immediateRender: false,
        overwrite: 'auto',
      },
    );
  }, { scope: rootRef, dependencies: [musicPage, gamesPage, animePage] });

  return (
    <section
      ref={rootRef}
      className={`${isModal ? 'about-modal' : 'about-page min-h-screen page-grid scanlines px-4 py-8 md:px-10'} gsap-enhanced text-rose-50`}
    >
      <div className={`${isModal ? 'space-y-6' : 'max-w-6xl mx-auto space-y-6'}`}>
        {showAboutSection && (
          <div className="js-about-container panel-card border border-red-800/70 bg-black/60">
          <div className="panel-header inline-flex items-center gap-2">
            <DescriptionRoundedIcon sx={{ fontSize: 20 }} /> ABOUT ME // MARLOWE IAN JUMAGBAS
          </div>
          <div className="p-6 md:p-8 content-surface space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white/90">
                    I am a 4th-year Bachelor of Science in Information Technology student at
                    Saint Mary&apos;s University, Bayombong. As an aspiring IT professional, I am eager to
                    gain hands-on experience and learn from real-world technology environments.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white/90">
                    I am currently exploring full-stack web development with technologies like React,
                    Next.js, and Node.js. Motivated, adaptable, and committed to growing my skills through
                    practical work and continuous learning.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg mb-4">Quick Overview</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="panel-card p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">4th</div>
                    <div className="text-sm text-white/90">Year Level</div>
                  </div>
                  <div className="panel-card p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                    <div className="text-2xl font-bold text-green-600">BSIT</div>
                    <div className="text-sm text-white/90">Degree Program</div>
                  </div>
                  <div className="panel-card p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">SMU</div>
                    <div className="text-sm text-white/90">University</div>
                  </div>
                  <div className="panel-card p-4 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600">2026</div>
                    <div className="text-sm text-white/90">Expected Grad</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200/70">
              <h4 className="font-semibold text-white mb-4">Current Focus Areas</h4>
              <div className="flex flex-wrap gap-3">
                {['Full-Stack Development', 'React.js', 'Node.js', 'Database Design', 'UI/UX Design', 'DevOps'].map((focus, idx) => (
                  <span key={focus} className={`px-4 py-2 rounded-full text-sm font-medium ${
                    idx % 3 === 0 ? 'bg-blue-700 text-blue-50 border border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.3)]' :
                    idx % 3 === 1 ? 'bg-emerald-700 text-emerald-50 border border-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.3)]' :
                    'bg-violet-700 text-violet-50 border border-violet-400/80 shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                  }`}>
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200/70 space-y-3">
              <h4 className="font-semibold text-white">Job Experience</h4>
              <div className="panel-card p-5 bg-gradient-to-r from-red-950/80 to-black/70 border border-red-700/70 space-y-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h5 className="text-base font-semibold text-rose-100">On-the-Job Training (OJT) Intern</h5>
                    <p className="text-sm text-rose-100/90">DICT Nueva Vizcaya Provincial Office</p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-800/60 border border-red-600/80 text-rose-100">Current</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">Nueva Vizcaya • Present</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-rose-100/95 leading-relaxed">
                  <li>Assisting in day-to-day ICT support, documentation, and office technology tasks.</li>
                  <li>Applying academic knowledge to practical public-service technology workflows.</li>
                  <li>Continuously developing professional skills in communication, problem-solving, and technical operations.</li>
                </ul>
              </div>
            </div>

            {!isModal && !showAdditionalSection && (
              <div className="pt-2">
                <Link
                  href="/"
                  className="js-about-animate hover-highlight panel-button inline-flex items-center gap-2 px-4 py-2 bg-red-800/60 border border-red-600 text-red-100 hover:bg-red-700/70"
                >
                  <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
                  Back to Portfolio
                </Link>
              </div>
            )}
          </div>
          </div>
        )}

        {showAdditionalSection && (
          <div className="js-about-container panel-card reveal-up reveal-delay-1 border border-red-800/70 bg-black/70">
          <div className="panel-header neon-beat inline-flex items-center gap-2">
            <BadgeRoundedIcon sx={{ fontSize: 20 }} /> ADDITIONAL PERSONAL INFO // MARLOWE IAN JUMAGBAS
          </div>
          <div className="p-6 md:p-8 space-y-6 reveal-up reveal-delay-2">
            <section className="js-about-section js-about-animate info-card hover-highlight">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/90">Nickname</p>
                  <p className="text-lg font-bold text-rose-100">Ian / Xenon</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/90">Profession</p>
                  <p className="text-lg font-bold text-rose-100">Full-Stack Developer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/90">School</p>
                  <p className="text-lg font-bold text-rose-100">BSIT • Saint Mary&apos;s University</p>
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-6">
              <section className="js-about-section js-about-animate info-card space-y-4 hover-highlight">
                <h2 className="section-title"><PsychologyAltRoundedIcon sx={{ fontSize: 18 }} /> Core Build Stats</h2>
                {buildStats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-rose-100/95">
                      <span>{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-red-950/70 overflow-hidden border border-red-900/80">
                      <div className="h-full stat-fill" style={{ width: `${stat.value}%` }} />
                    </div>
                  </div>
                ))}
              </section>

              <section className="js-about-section js-about-animate info-card space-y-4 hover-highlight">
                <h2 className="section-title"><FavoriteRoundedIcon sx={{ fontSize: 18 }} /> Preferences</h2>
                <p className="text-sm text-rose-50/95">
                  Hobbies: Gaming, reading, and deep thinking.
                </p>
              </section>
            </div>

            <section className="js-about-section info-card space-y-3">
              <h2 className="section-title"><LibraryMusicRoundedIcon sx={{ fontSize: 18 }} /> Artists & Music I Like</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleMusic.map((music) => (
                  <article key={music.title} className="js-page-item js-about-animate hover-highlight rounded-xl border border-red-800/70 bg-red-950/30 p-3 hover:border-red-500/70 transition-colors">
                    <div className="aspect-square rounded-lg border border-red-700/70 bg-gradient-to-br from-red-900/70 to-black/80 flex items-center justify-center mb-3 shadow-lg">
                      <img
                        src={music.image}
                        alt={`${music.title} - ${music.artist} cover`}
                        className="w-full h-full object-contain object-center rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-rose-50">{music.title}</p>
                    <p className="text-xs text-white/90 mt-1">{music.artist}</p>
                  </article>
                ))}
              </div>
              {musicPageCount > 1 && (
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => setMusicPage((prev) => Math.max(prev - 1, 0))}
                    disabled={musicPage === 0}
                    className="panel-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 14 }} /> Prev
                  </button>
                  <span className="text-xs text-white/90 px-2">
                    {musicPage + 1} / {musicPageCount}
                  </span>
                  <button
                    onClick={() => setMusicPage((prev) => Math.min(prev + 1, musicPageCount - 1))}
                    disabled={musicPage >= musicPageCount - 1}
                    className="panel-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    Next <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              )}
            </section>

            <section className="js-about-section info-card space-y-3">
              <h2 className="section-title"><SportsEsportsRoundedIcon sx={{ fontSize: 18 }} /> Games I Played</h2>
              <div className="flex flex-wrap gap-2">
                {visibleGames.map((game) => (
                  <span key={game} className="js-page-item js-about-animate hover-highlight px-3 py-1.5 rounded-md border border-red-700 bg-red-950/40 text-xs md:text-sm text-rose-50/95">
                    {game}
                  </span>
                ))}
              </div>
              {gamesPageCount > 1 && (
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => setGamesPage((prev) => Math.max(prev - 1, 0))}
                    disabled={gamesPage === 0}
                    className="panel-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 14 }} /> Prev
                  </button>
                  <span className="text-xs text-white/90 px-2">
                    {gamesPage + 1} / {gamesPageCount}
                  </span>
                  <button
                    onClick={() => setGamesPage((prev) => Math.min(prev + 1, gamesPageCount - 1))}
                    disabled={gamesPage >= gamesPageCount - 1}
                    className="panel-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    Next <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              )}
            </section>

            <section className="js-about-section info-card space-y-3">
              <h2 className="section-title"><FavoriteRoundedIcon sx={{ fontSize: 18 }} /> Anime I Watched</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleAnime.map((anime) => (
                  <article key={anime.name} className="js-page-item js-about-animate hover-highlight rounded-xl border border-red-800/70 bg-red-950/30 p-3 hover:border-red-500/70 transition-colors">
                    <div className="aspect-square rounded-lg border border-red-700/70 bg-gradient-to-br from-red-900/70 to-black/80 flex items-center justify-center mb-3 shadow-lg">
                      <img
                        src={anime.image}
                        alt={`${anime.name} poster`}
                        className="w-full h-full object-contain object-center rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-rose-50">{anime.name}</p>
                    <p className="text-xs text-white/90 mt-1">{anime.studio}</p>
                  </article>
                ))}
              </div>
              {animePageCount > 1 && (
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => setAnimePage((prev) => Math.max(prev - 1, 0))}
                    disabled={animePage === 0}
                    className="panel-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 14 }} /> Prev
                  </button>
                  <span className="text-xs text-white/90 px-2">
                    {animePage + 1} / {animePageCount}
                  </span>
                  <button
                    onClick={() => setAnimePage((prev) => Math.min(prev + 1, animePageCount - 1))}
                    disabled={animePage >= animePageCount - 1}
                    className="panel-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    Next <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              )}
            </section>

            <section className="js-about-section js-about-animate info-card space-y-2 hover-highlight">
              <h2 className="section-title"><ScheduleRoundedIcon sx={{ fontSize: 18 }} /> Availability Boundary</h2>
              <p className="text-sm text-rose-50/95">I am available only during:</p>
              <ul className="mt-1 text-sm text-rose-50/95 list-disc pl-5">
                <li>10:00 AM to 12:00 Noon</li>
                <li>6:00 PM to 7:00 PM</li>
                <li>Timezone: GMT+8 (Philippine Standard Time)</li>
              </ul>
            </section>

            {!isModal && (
              <div className="pt-2 flex items-center gap-3 flex-wrap">
                <Link
                  href="/"
                  className="js-about-animate hover-highlight panel-button inline-flex items-center gap-2 px-4 py-2 bg-red-800/60 border border-red-600 text-red-100 hover:bg-red-700/70"
                >
                  <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
                  Back to Portfolio
                </Link>
              </div>
            )}
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
