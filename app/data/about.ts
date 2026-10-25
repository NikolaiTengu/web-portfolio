export type MediaItem = readonly [string, string, string];

export const aboutCopy: {
  education: string[];
  focusAreas: string[];
  experience: { title: string; organization: string; location: string; bullets: string[] };
  games: string[];
  music: MediaItem[];
  anime: MediaItem[];
  stats: { label: string; value: number }[];
} = {
  education: [
    "I am a graduate of the Bachelor of Science in Information Technology at Saint Mary's University, Bayombong. I have completed my studies and am now focused on growing my skills, building real-world experience, and preparing for opportunities in the IT industry.",
    'I am currently enhancing my programming skills in full-stack development, software engineering, and modern web technologies such as React, Next.js, and Node.js. I am also learning more about the broader IT landscape, including systems, workflows, and practical problem-solving in real-world environments.',
  ],
  focusAreas: ['Full-Stack Development', 'React.js', 'Node.js', 'Database Design', 'UI/UX Design', 'DevOps'],
  experience: {
    title: 'Full Stack Developer Intern',
    organization: 'DICT Nueva Vizcaya Provincial Office',
    location: 'Nueva Vizcaya • Professional Experience',
    bullets: [
      'Assisting in day-to-day ICT support, documentation, and office technology tasks.',
      'Applying academic knowledge to practical public-service technology workflows.',
      'Continuously developing professional skills in communication, problem-solving, and technical operations.',
    ],
  },
  games: ['League of Legends', 'Apex Legends', 'Star Wars Battlefront 2', "Baldur's Gate 3", 'Starcraft II', 'Helldivers 2', 'Space Marines 2', 'Minecraft'],
  music: [
    ['Tek it', 'Cafune', '/pictures/cafune-tek-it.jpg'], ['I really want to stay at your house', 'Samuel Kim', '/pictures/cyberpunk.jpg'],
    ['Fallen', 'Lola Amour', '/pictures/fallen-lola-amour.jpg'], ['Ghost', 'Hoshimachi Suisei', '/pictures/ghost-suisei.jpg'],
    ['Falling Behind', 'Laufey', '/pictures/laufey.jpg'], ['Monitoring (Best Friend Remix)', 'DECO 27, Hatsune Miku', '/pictures/monitoring-deco-27.jpg'],
    ['End of a Life', 'Mori Calliope', '/pictures/mori-end-of-life.jpg'], ['Multo', 'Cup of Joe', '/pictures/multo-album.jpg'],
    ['Mundo', 'IV of Spades', '/pictures/mundo.jpg'], ['Why do i', 'Set it Off', '/pictures/set-it-off-why-do-i.jpg'],
    ['Tibok', 'Earl Agustin', '/pictures/tibok-earl-agustin.jpg'], ['Calling After Me', 'Wallows', '/pictures/wallows.jpg'],
    ['Umapyoi Densetsu', 'Akihiro Honda', '/pictures/Umapyoi-Densetsu.jpg'], ['Freebird', 'Lynyrd skynyrd', '/pictures/freebird.jpg'],
    ['From the Start', 'Goodkid', '/pictures/goodkid-from-the-start.jpg'], ['Brainrot', 'Tokyo Manaka', '/pictures/brainrot.jpg'],
    ['Low Cortisol (ai đưa em về )', 'TIA', '/pictures/low-cortisol.gif'], ['Sunday', 'Emotional Orange', '/pictures/Sunday-emotional-orange.jpg'],
  ],
  anime: [
    ['Guilty Crown', 'Production I.G', '/pictures/guilty-crown.jpg'], ['K-ON', 'Kyoto Animation', '/pictures/k-on.webp'],
    ['Umamusume Pretty Derby (S1-S3)', 'P.A.Works / Studio Kai', '/pictures/pretty-derby.jpg'], ['Umamusume Cinderella Gray (S1-S2)', 'CygamesPictures', '/pictures/cinderella gray.jpg'],
    ['One Punch Man (S1-S2)', 'Madhouse / J.C.Staff', '/pictures/one-punch-man.jpg'], ['Parasyte: The Maxim', 'Madhouse', '/pictures/parasyte.jpg'],
    ['Sword Art Online (S1-S3)', 'A-1 Pictures', '/pictures/sword-art-online.png'], ['Fullmetal Alchemist', 'Studio Bones', '/pictures/alchemist-brotherhood.jpg'],
    ['Code Geass', 'Studio Sunrise', '/pictures/code geass.jpg'], ['Bleach', 'Studio Pierrot', '/pictures/Bleach.jpg'],
    ['Naruto', 'Studio Pierrot', '/pictures/Naruto.jpg'], ['Fate Stay Night Unlimited Blade Works', 'Ufotable', '/pictures/fate-stay-night-ubw.jpg'],
    ['Hunter x Hunter', 'Madhouse Studio', '/pictures/hunter-hunter-2011.jpg'], ['My Youth Romantic Comedy Is Wrong, As I Expected', "Brain's Base/Feel", '/pictures/Snafu.png'],
    ['Toradora', 'J.C Staff', '/pictures/toradora.jpg'], ['Your Lie in April', 'A-1 Pictures', '/pictures/Lie-in-april.jpg'],
    ['My Dress Up Darling', 'Studio Cloverworks', '/pictures/my-dress-up-darling.jpg'], ['Magical Girl Madoka', 'Studio SHAFT', '/pictures/magical-girl-madoka.jpg'],
    ['Wotaku: Love is hard for Otaku', 'A-1 Pictures', '/pictures/Otaku.jpg'], ['Jujutsu Kaisen', 'Studio MAPPA', '/pictures/jujutsu-kaisen.webp'],
    ['Fate Strange Fake', 'A-1 Pictures', '/pictures/fate-strange-fake.jpg'], ['Devil May Cry (2011)', 'Studio Madhouse', '/pictures/devil-may-cry.jpg'],
    ['Nichijou, My ordinary Life', 'Kyoanimations', '/pictures/nichijou.jpg'], ['Ouran High School Host Club', 'Studio Bones', '/pictures/ouran-high-school-club.webp'],
  ],
  stats: [{ label: 'Creativity', value: 88 }, { label: 'Problem Solving', value: 90 }, { label: 'Adaptability', value: 85 }, { label: 'Teamwork', value: 82 }],
};
