import Link from 'next/link';
import Clock from './components/Clock';
import CopyButton from './components/CopyButton';
import ProjectGallery from './components/ProjectGallery';
import SpecializationSelector from './components/SpecializationSelector';
import { ArrowIcon } from './components/icons';
import { profile, skillGroups } from './data/portfolio';
import '../styles/globals.css';

export default function Home() {
  return <main>
    <header className="site-header glass">
      <Link href="/" className="logo">MJ<span /></Link>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#stack">Stack</a><a href="#contact">Contact</a><Link href="/about-me">About</Link></nav>
      <Clock />
    </header>
    <div className="shard-a" /><div className="shard-b" />
    <section className="hero page-width">
      <p className="status-line">{'// SYS_STATUS: ONLINE'}</p>
      <h1>{profile.name}</h1>
      <p className="hero-subtitle">{profile.subtitle}</p>
      <SpecializationSelector />
    </section>
    <section id="projects" className="page-width content-section reveal">
      <div className="section-intro"><p className="eyebrow">{'03 // SELECTED BUILDS'}</p><h2 className="section-heading">Projects in motion.</h2></div>
      <ProjectGallery />
    </section>
    <section id="stack" className="page-width content-section reveal">
      <div className="section-intro"><p className="eyebrow">04 // SYSTEM LOADOUT</p><h2 className="section-heading">Tools I reach for.</h2></div>
      <div className="stack-grid">{skillGroups.map((group, index) => <article className="glass stack-card" key={group.category} style={{ '--accent': ['#70b5ff', '#e63946', '#0055ff', '#93a8cf'][index] } as React.CSSProperties}><p className="eyebrow">{group.category}</p><div className="chip-row">{group.items.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></article>)}</div>
    </section>
    <section id="contact" className="page-width content-section reveal">
      <div className="section-intro"><p className="eyebrow">05 // OPEN CHANNEL</p><h2 className="section-heading">Let&apos;s connect.</h2></div>
      <div className="contact-grid"><div className="glass contact-card"><div className="contact-row"><div><span className="eyebrow">EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><CopyButton value={profile.email} /></div><div className="contact-row"><div><span className="eyebrow">GITHUB</span><a href={profile.github} target="_blank" rel="noreferrer">github.com/NikolaiTengu</a></div><CopyButton value={profile.github} /></div><div className="contact-row"><div><span className="eyebrow">LINKEDIN</span><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/marlowe-ian-jumagbas</a></div><CopyButton value={profile.linkedin} /></div></div><aside className="glass availability"><p className="eyebrow">AVAILABILITY // GMT+8</p><h3>Currently open to the next build.</h3><p>Available during:</p><ul>{profile.availability.map((item) => <li key={item}>{item}</li>)}</ul><p className="muted">{profile.timezone}</p></aside></div>
    </section>
    <footer className="page-width site-footer"><span>{'// SYS_STATUS: ONLINE'}</span><span>© {new Date().getFullYear()} {profile.shortName}</span><a href="#top"><ArrowIcon /> Back to top</a></footer>
  </main>;
}
