'use client';

import { useEffect, useRef, useState } from 'react';
import { specsReference, type SpecTab } from '../data/specs-reference';
import { CloseIcon } from './icons';

const tabs: SpecTab[] = ['ARCHITECTURE', 'REST_API', 'AUTH', 'SCHEMA'];

function HighlightedCode({ lines }: { lines: readonly string[] }) {
  return <code>{lines.map((line, index) => <span key={`${line}-${index}`} className="code-line"><span className="code-number">{String(index + 1).padStart(2, '0')}</span><span>{line}</span></span>)}</code>;
}

export default function SpecModal({ triggerRef }: { triggerRef: React.RefObject<HTMLButtonElement | null> }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<SpecTab>('ARCHITECTURE');
  const spec = specsReference[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const closeOnBackdrop = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dialog.close();
    };
    dialog.addEventListener('click', closeOnBackdrop);
    dialog.addEventListener('keydown', closeOnEscape);
    dialog.addEventListener('close', () => triggerRef.current?.focus());
    return () => {
      dialog.removeEventListener('click', closeOnBackdrop);
      dialog.removeEventListener('keydown', closeOnEscape);
    };
  }, [triggerRef]);

  return <dialog id="spec-dialog" ref={dialogRef} className="spec-dialog" aria-labelledby="spec-title">
    <div className="dialog-shell glass hud">
      <div className="flex items-start justify-between gap-4">
        <div><p className="eyebrow">{spec.eyebrow}</p><h2 id="spec-title" className="persona-title text-4xl">Inspect specs</h2></div>
        <button className="icon-button" onClick={() => dialogRef.current?.close()} aria-label="Close specs"><CloseIcon /></button>
      </div>
      <div role="tablist" aria-label="Specification sections" className="spec-tabs">
        {tabs.map((tab) => <button key={tab} role="tab" aria-selected={active === tab} tabIndex={active === tab ? 0 : -1} className="tab" onClick={() => setActive(tab)} onKeyDown={(event) => {
          const index = tabs.indexOf(tab);
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]; setActive(next); document.getElementById(`spec-tab-${next}`)?.focus(); }
        }} id={`spec-tab-${tab}`}>{tab}</button>)}
      </div>
      <div role="tabpanel" className="spec-panel">
        <p className="text-mist/80 max-w-2xl">{spec.intro}</p>
        {active === 'ARCHITECTURE' && <><div className="node-map">{specsReference.ARCHITECTURE.nodes.map((node, index) => <span key={node} className="node">{node}{index < specsReference.ARCHITECTURE.nodes.length - 1 && <b>→</b>}</span>)}</div><ol className="flow-list">{specsReference.ARCHITECTURE.flow.map((step) => <li key={step}>{step}</li>)}</ol></>}
        {active === 'REST_API' && <div className="route-list">{specsReference.REST_API.routes.map(([method, route]) => <div key={route}><strong>{method}</strong><span>{route}</span></div>)}</div>}
        {active === 'AUTH' && <><ul className="flow-list">{specsReference.AUTH.policy.map((item) => <li key={item}>{item}</li>)}</ul><p className="eyebrow mt-5">OAuth hand-off</p><ol className="flow-list">{specsReference.AUTH.steps.map((step) => <li key={step}>{step}</li>)}</ol></>}
        {active === 'SCHEMA' && <ul className="flow-list">{specsReference.SCHEMA.models.map((model) => <li key={model}>{model}</li>)}</ul>}
        {'code' in spec && <pre className="code-block"><HighlightedCode lines={spec.code} /></pre>}
      </div>
    </div>
  </dialog>;
}

export function openSpecDialog(dialog: HTMLDialogElement | null) {
  dialog?.showModal();
}
