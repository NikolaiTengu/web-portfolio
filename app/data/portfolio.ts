export type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
  image: string;
  collaboration?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Specialization = {
  id: string;
  tab: string;
  title: string;
  arcana: string;
  tagline: string;
  summary: string;
  skills: string[];
  coreSkills: string[];
  metrics: { value: string; label: string }[];
  appliedIn: string;
};

export const profile = {
  name: 'Marlowe Ian P. Jumagbas',
  shortName: 'Marlowe Ian Jumagbas',
  nickname: 'Ian / Xenon',
  role: 'Full-Stack Developer',
  subtitle: 'I build practical web systems with sharp interfaces, dependable APIs, and a growing command of the wider IT landscape.',
  email: 'jumagbasmarlowe@gmail.com',
  github: 'https://github.com/NikolaiTengu',
  linkedin: 'https://www.linkedin.com/in/marlowe-ian-jumagbas',
  availability: ['10:00 AM to 12:00 Noon', '6:00 PM to 7:00 PM'],
  timezone: 'GMT+8 (Philippine Standard Time)',
};

export const skillGroups: SkillGroup[] = [
  { category: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'Expo', 'React + Vite'] },
  { category: 'Backend', items: ['Node.js', 'Laravel', 'Express', 'MySQL', 'MongoDB', 'SQLite', 'Firebase'] },
  { category: 'DevOps', items: ['Azure', 'AWS', 'Docker'] },
  { category: 'Tools', items: ['Git', 'Github', 'VS Code', 'Visual Studio', 'Python', 'Linux', 'C#', 'Postman'] },
];

export const projects: Project[] = [
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
    collaboration: 'Collaborative project',
  },
  {
    id: 3,
    name: 'MDLAB Direct',
    description: 'Functional diagnostic laboratory service website for booking appointments and managing laboratory results. Collaborative project with Renz, Dwyane, and Madelene.',
    skills: ['React', 'Node.js', 'Express.js'],
    image: '/mdlab.png',
    collaboration: 'Collaborative project',
  },
  {
    id: 4,
    name: 'Digital Management System',
    description: 'On-premise platform for centralized guest, workstation, event, and report management across DICTcenters, with role-based administration, real-time PC monitoring, kiosk ticket validation, and restricted PC access.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Docker', 'REST API', 'QRCode'],
    image: '/DTC_System.png',
  },
  {
    id: 5,
    name: 'Eskora',
    description: 'Kotlin mobile application that enables users to schedule tasks in a simple and efficient way without the complications of a calendar system like Google Calendar.',
    skills: ['Kotlin', 'Android'],
    image: '/Eskora.png',
  },
];

export const specializations: Specialization[] = [
  {
    id: 'fullstack',
    tab: '// 01_FULLSTACK_ENGINEER',
    title: 'The Full-Stack Engineer',
    arcana: 'I The Magician',
    tagline: 'Turning a blank canvas into a working system.',
    summary: 'A practical builder focused on connecting interfaces, application logic, and data into useful full-stack experiences.',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    coreSkills: ['React', 'Next.js', 'Node.js'],
    metrics: [{ value: '5', label: 'featured projects' }, { value: '2', label: 'collaborative builds' }, { value: '1', label: 'personal build' }],
    appliedIn: 'Noona Cafe',
  },
  {
    id: 'systems',
    tab: '// 02_SYSTEMS_&_APIS',
    title: 'The Systems Builder',
    arcana: 'IV The Emperor',
    tagline: 'Order, flow, and clear boundaries.',
    summary: 'Designing service flows that make room for dependable APIs, message queues, and real-world operational constraints.',
    skills: ['Express.js', 'Node.js', 'RabbitMQ', 'Docker', 'REST APIs'],
    coreSkills: ['Express.js', 'RabbitMQ', 'Docker'],
    metrics: [{ value: '2', label: 'service-led builds' }, { value: '1', label: 'message queue' }, { value: '3', label: 'API projects' }],
    appliedIn: 'Sinaing Express',
  },
  {
    id: 'database',
    tab: '// 03_DATABASE_&_DEVOPS',
    title: 'The Data Operator',
    arcana: 'VII The Chariot',
    tagline: 'Move the data. Keep the system steady.',
    summary: 'Working across data stores and deployment tools while building a stronger foundation in schema design and operations.',
    skills: ['MongoDB', 'MySQL', 'SQLite', 'AWS', 'Azure', 'Docker'],
    coreSkills: ['MongoDB', 'MySQL', 'Docker'],
    metrics: [{ value: '7', label: 'data technologies' }, { value: '3', label: 'cloud / ops tools' }, { value: '3', label: 'projects using data' }],
    appliedIn: 'MDLAB Direct',
  },
];
