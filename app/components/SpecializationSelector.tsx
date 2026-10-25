'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { profile, specializations } from '../data/portfolio';
import { ArrowIcon } from './icons';
import CopyButton from './CopyButton';

const SpecModal = dynamic(() => import('./SpecModal'));

export default function SpecializationSelector() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const current = specializations[active];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const next = (active + (event.key === 'ArrowRight' ? 1 : -1) + specializations.length) % specializations.length; setDirection(next > active ? 'next' : 'prev'); setActive(next); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  function select(index: number) { setDirection(index >= active ? 'next' : 'prev'); setActive(index); }

  return <section className="selector-wrap" aria-label="Specialization selector">
    <div className="tabs" role="tablist" aria-label="Specializations">{specializations.map((item, index) => <button key={item.id} role="tab" aria-selected={active === index} tabIndex={active === index ? 0 : -1} className="tab" onClick={() => select(index)}>{item.tab}</button>)}</div>
    <div className="selector-stage" data-dir={direction}>
      <div className="avatar-frame">
        <div className="avatar-glow glow-one" /><div className="avatar-glow glow-two" /><div className="avatar-glow glow-three" />
        <span className="arcana-number">{String(active + 1).padStart(2, '0')}</span>
        <Image src="/Updated_Me.jpg" alt={`${profile.name} portrait`} fill priority sizes="(max-width: 767px) 82vw, 42vw" className="avatar-image" />
        <p className="arcana-caption">{current.arcana}</p>
      </div>
      <div className="glass hud summary-card">
        <p className="eyebrow">{current.tab}</p><h2 className="persona-title">{current.title}</h2><p className="tagline">{current.tagline}</p><p className="summary">{current.summary}</p>
        <div className="chip-row">{current.skills.map((skill) => <span key={skill} className={`chip ${current.coreSkills.includes(skill) ? 'chip-core' : ''}`}>{skill}</span>)}</div>
        <div className="metrics">{current.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
        <p className="applied">Applied in <a href="#projects">{current.appliedIn} <ArrowIcon /></a></p>
        <div className="action-row">
          <button ref={triggerRef} className="btn btn-primary" onClick={() => (document.getElementById('spec-dialog') as HTMLDialogElement | null)?.showModal()} onMouseEnter={() => import('./SpecModal')} onFocus={() => import('./SpecModal')}><span>Inspect specs</span></button>
          <a className="btn btn-ghost" href="/Marlowe-Ian-Jumagbas-Resume.pdf" download><span>Download resume</span></a>
        </div>
        <div className="copy-row" aria-live="polite"><CopyButton value={profile.email} label="Email" /><CopyButton value={profile.github} label="GitHub" /><CopyButton value={profile.linkedin} label="LinkedIn" /></div>
      </div>
    </div>
    <SpecModal triggerRef={triggerRef} />
  </section>;
}
