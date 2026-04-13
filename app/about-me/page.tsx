 'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../styles/about-me.css';
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
import TvRoundedIcon from '@mui/icons-material/TvRounded';

const ITEMS_PER_PAGE = 6;

export default function AboutMePage() {
  const [musicPage, setMusicPage] = useState(0);
  const [gamesPage, setGamesPage] = useState(0);
  const [animePage, setAnimePage] = useState(0);

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
    { name: 'EDM', note: 'High-energy electronic sound' },
    { name: 'Lofi', note: 'Chill focus vibe' },
    { name: 'Alternative Rock', note: 'Dynamic and expressive' },
    { name: 'Rock', note: 'Classic and modern riffs' },
    { name: 'Vocaloid', note: 'Digital vocal style' },
    { name: 'Covers', note: 'Creative reinterpretations' },
    { name: 'Pop', note: 'Melodic mainstream hits' },
  ];

  const animeWatched = [
    { title: 'Guilty Crown', status: 'Completed' },
    { title: 'K-ON', status: 'Completed' },
    { title: 'Umamusume Pretty Derby (S1-S3)', status: 'Completed' },
    { title: 'Umamusumee Cinderella Gray (S1-S2)', status: 'Completed' },
    { title: 'One Punch Man (S1-S2)', status: 'Completed' },
    { title: 'Parasyte: The Maxim', status: 'Completed' },
    { title: 'Sword Art Online (S1-S3)', status: 'Completed' },
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

  return (
    <main className="about-me-page-root min-h-screen cyber-grid cyber-scanlines text-rose-50 px-4 py-8 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="retro-card reveal-up reveal-delay-1 border border-red-800/70 bg-black/70">
          <div className="retro-header neon-beat inline-flex items-center gap-2">
            <BadgeRoundedIcon sx={{ fontSize: 20 }} /> MORE PERSONAL INFO // MARLOWE IAN JUMAGBAS
          </div>
          <div className="p-6 md:p-8 space-y-6 reveal-up reveal-delay-2">
            <section className="character-sheet-card">
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
              <section className="character-sheet-card space-y-4">
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

              <section className="character-sheet-card space-y-4">
                <h2 className="character-sheet-title"><FavoriteRoundedIcon sx={{ fontSize: 18 }} /> Preferences</h2>
                <p className="text-sm text-rose-50/95">
                  Hobbies: Gaming, reading, and deep thinking.
                </p>
              </section>
            </div>

            <section className="character-sheet-card space-y-3">
              <h2 className="character-sheet-title"><LibraryMusicRoundedIcon sx={{ fontSize: 18 }} /> Artists & Music I Like</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleMusic.map((music) => (
                  <article key={music.name} className="rounded-xl border border-red-800/70 bg-red-950/30 p-3 hover:border-red-500/70 transition-colors">
                    <div className="aspect-square rounded-lg border border-red-700/70 bg-gradient-to-br from-red-900/70 to-black/80 flex items-center justify-center mb-3 shadow-lg">
                      <div className="text-center text-rose-100/90">
                        <MusicNoteRoundedIcon sx={{ fontSize: 28 }} />
                        <p className="text-[0.68rem] mt-1 tracking-wide uppercase">Cover Placeholder</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-rose-50">{music.name}</p>
                    <p className="text-xs text-white/90 mt-1">{music.note}</p>
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

            <section className="character-sheet-card space-y-3">
              <h2 className="character-sheet-title"><SportsEsportsRoundedIcon sx={{ fontSize: 18 }} /> Games I Played</h2>
              <div className="flex flex-wrap gap-2">
                {visibleGames.map((game) => (
                  <span key={game} className="px-3 py-1.5 rounded-md border border-red-700 bg-red-950/40 text-xs md:text-sm text-rose-50/95">
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

            <section className="character-sheet-card space-y-3">
              <h2 className="character-sheet-title"><FavoriteRoundedIcon sx={{ fontSize: 18 }} /> Anime I Watched</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleAnime.map((anime) => (
                  <article key={anime.title} className="rounded-xl border border-red-800/70 bg-red-950/30 p-3 hover:border-red-500/70 transition-colors">
                    <div className="aspect-square rounded-lg border border-red-700/70 bg-gradient-to-br from-red-900/70 to-black/80 flex items-center justify-center mb-3 shadow-lg">
                      <div className="text-center text-rose-100/90">
                        <TvRoundedIcon sx={{ fontSize: 28 }} />
                        <p className="text-[0.68rem] mt-1 tracking-wide uppercase">Poster Placeholder</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-rose-50">{anime.title}</p>
                    <p className="text-xs text-white/90 mt-1">{anime.status}</p>
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

            <section className="character-sheet-card space-y-2">
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
                className="retro-button inline-flex items-center gap-2 px-4 py-2 bg-red-800/60 border border-red-600 text-red-100 hover:bg-red-700/70"
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
