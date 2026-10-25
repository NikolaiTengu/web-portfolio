'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { projects } from '../data/portfolio';
import { CloseIcon } from './icons';

export default function ProjectGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(projects[0]);
  return <div className="project-list">{projects.map((project, index) => <article className={`project-row ${index % 2 ? 'project-row-reverse' : ''}`} key={project.id}>
    <button className="project-image" onClick={() => { setSelected(project); dialogRef.current?.showModal(); }} aria-label={`Preview ${project.name}`}><Image src={project.image} alt={`${project.name} screenshot`} fill sizes="(max-width: 767px) 92vw, 48vw" /><span>OPEN PREVIEW</span></button>
    <div className="glass project-card"><p className="eyebrow">PROJECT // {String(project.id).padStart(2, '0')}</p><h3 className="section-heading">{project.name}</h3><p>{project.description}</p><div className="chip-row">{project.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div>{project.collaboration && <p className="project-note">{project.collaboration}</p>}</div>
  </article>)}
  <dialog ref={dialogRef} className="image-dialog"><div className="dialog-image-shell"><button className="icon-button" onClick={() => dialogRef.current?.close()} aria-label="Close preview"><CloseIcon /></button><p className="eyebrow">PROJECT PREVIEW // {selected.name}</p><Image src={selected.image} alt={`${selected.name} preview`} width={1200} height={720} sizes="90vw" /></div></dialog>
  </div>;
}
