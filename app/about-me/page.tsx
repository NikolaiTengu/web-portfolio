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
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ITEMS_PER_PAGE = 6;

export default function AboutMePage() {
  const [musicPage, setMusicPage] = useState(0);
  const [gamesPage, setGamesPage] = useState(0);
  const [animePage, setAnimePage] = useState(0);
  const rootRef = useRef<HTMLElement | null>(null);

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
    { title: 'Monitoring', artist: 'DECO 27, Hatsune Miku', image: '/pictures/monitoring-deco-27.jpg' },
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
    gsap.from('.js-about-shell', {
      autoAlpha: 0,
      y: 12,
      duration: 0.3,
      ease: 'power1.out',
    });

    gsap.from('.js-about-card', {
      autoAlpha: 0,
      y: 10,
      duration: 0.28,
      stagger: 0.04,
      ease: 'power1.out',
    });

    gsap.utils.toArray<HTMLElement>('.js-about-highlight:not(.js-paged-item)').forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0.92, y: 8, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.26,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  }, { scope: rootRef });

  useGSAP(() => {
    const pagedItems = gsap.utils.toArray<HTMLElement>('.js-paged-item');

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
    <main ref={rootRef} className="about-me-page-root gsap-enhanced min-h-screen cyber-grid cyber-scanlines text-rose-50 px-4 py-8 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="js-about-shell retro-card reveal-up reveal-delay-1 border border-red-800/70 bg-black/70">
          <div className="retro-header neon-beat inline-flex items-center gap-2">
            <BadgeRoundedIcon sx={{ fontSize: 20 }} /> MORE PERSONAL INFO // MARLOWE IAN JUMAGBAS
          </div>
          <div className="p-6 md:p-8 space-y-6 reveal-up reveal-delay-2">
            <section className="js-about-card js-about-highlight character-sheet-card highlight-focus">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/90">Nickname</p>
                  <p className="text-lg font-bold text-rose-100">Ian / Xenon</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/90">Class</p>
                  <p className="text-lg font-bold text-rose-100">Full-Stack Developer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/90">Guild</p>
                  <p className="text-lg font-bold text-rose-100">BSIT • Saint Mary&apos;s University</p>
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-6">
              <section className="js-about-card js-about-highlight character-sheet-card space-y-4 highlight-focus">
                <h2 className="character-sheet-title"><PsychologyAltRoundedIcon sx={{ fontSize: 18 }} /> Core Build Stats</h2>
                {buildStats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-rose-100/95">
                      <span>{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-red-950/70 overflow-hidden border border-red-900/80">
                      <div className="h-full character-sheet-fill" style={{ width: `${stat.value}%` }} />
                    </div>
                  </div>
                ))}
              </section>

              <section className="js-about-card js-about-highlight character-sheet-card space-y-4 highlight-focus">
                <h2 className="character-sheet-title"><FavoriteRoundedIcon sx={{ fontSize: 18 }} /> Preferences</h2>
                <p className="text-sm text-rose-50/95">
                  Hobbies: Gaming, reading, and deep thinking.
                </p>
              </section>
            </div>

            <section className="js-about-card character-sheet-card space-y-3">
              <h2 className="character-sheet-title"><LibraryMusicRoundedIcon sx={{ fontSize: 18 }} /> Artists & Music I Like</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleMusic.map((music) => (
                  <article key={music.title} className="js-paged-item js-about-highlight highlight-focus rounded-xl border border-red-800/70 bg-red-950/30 p-3 hover:border-red-500/70 transition-colors">
                    <div className="aspect-square rounded-lg border border-red-700/70 bg-gradient-to-br from-red-900/70 to-black/80 flex items-center justify-center mb-3 shadow-lg">
                      <img
                        src={music.image}
                        alt={`${music.title} - ${music.artist} cover`}
                        className="w-full h-full object-cover rounded-lg"
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
                    className="retro-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 14 }} /> Prev
                  </button>
                  <span className="text-xs text-white/90 px-2">
                    {musicPage + 1} / {musicPageCount}
                  </span>
                  <button
                    onClick={() => setMusicPage((prev) => Math.min(prev + 1, musicPageCount - 1))}
                    disabled={musicPage >= musicPageCount - 1}
                    className="retro-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    Next <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              )}
            </section>

            <section className="js-about-card character-sheet-card space-y-3">
              <h2 className="character-sheet-title"><SportsEsportsRoundedIcon sx={{ fontSize: 18 }} /> Games I Played</h2>
              <div className="flex flex-wrap gap-2">
                {visibleGames.map((game) => (
                  <span key={game} className="js-paged-item js-about-highlight highlight-focus px-3 py-1.5 rounded-md border border-red-700 bg-red-950/40 text-xs md:text-sm text-rose-50/95">
                    {game}
                  </span>
                ))}
              </div>
              {gamesPageCount > 1 && (
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => setGamesPage((prev) => Math.max(prev - 1, 0))}
                    disabled={gamesPage === 0}
                    className="retro-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 14 }} /> Prev
                  </button>
                  <span className="text-xs text-white/90 px-2">
                    {gamesPage + 1} / {gamesPageCount}
                  </span>
                  <button
                    onClick={() => setGamesPage((prev) => Math.min(prev + 1, gamesPageCount - 1))}
                    disabled={gamesPage >= gamesPageCount - 1}
                    className="retro-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    Next <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              )}
            </section>

            <section className="js-about-card character-sheet-card space-y-3">
              <h2 className="character-sheet-title"><FavoriteRoundedIcon sx={{ fontSize: 18 }} /> Anime I Watched</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleAnime.map((anime) => (
                  <article key={anime.name} className="js-paged-item js-about-highlight highlight-focus rounded-xl border border-red-800/70 bg-red-950/30 p-3 hover:border-red-500/70 transition-colors">
                    <div className="aspect-square rounded-lg border border-red-700/70 bg-gradient-to-br from-red-900/70 to-black/80 flex items-center justify-center mb-3 shadow-lg">
                      <img
                        src={anime.image}
                        alt={`${anime.name} poster`}
                        className="w-full h-full object-cover rounded-lg"
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
                    className="retro-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 14 }} /> Prev
                  </button>
                  <span className="text-xs text-white/90 px-2">
                    {animePage + 1} / {animePageCount}
                  </span>
                  <button
                    onClick={() => setAnimePage((prev) => Math.min(prev + 1, animePageCount - 1))}
                    disabled={animePage >= animePageCount - 1}
                    className="retro-button inline-flex items-center gap-1 px-3 py-1.5 text-xs disabled:opacity-50"
                  >
                    Next <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              )}
            </section>

            <section className="js-about-card js-about-highlight character-sheet-card space-y-2 highlight-focus">
              <h2 className="character-sheet-title"><ScheduleRoundedIcon sx={{ fontSize: 18 }} /> Availability Boundary</h2>
              <p className="text-sm text-rose-50/95">I am available only during:</p>
              <ul className="mt-1 text-sm text-rose-50/95 list-disc pl-5">
                <li>10:00 AM to 12:00 Noon</li>
                <li>6:00 PM to 7:00 PM</li>
                <li>Timezone: GMT+8 (Philippine Standard Time)</li>
              </ul>
            </section>

            <div className="pt-2">
              <Link
                href="/"
                className="js-about-highlight highlight-focus retro-button inline-flex items-center gap-2 px-4 py-2 bg-red-800/60 border border-red-600 text-red-100 hover:bg-red-700/70"
              >
                <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
