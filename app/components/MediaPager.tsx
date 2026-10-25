'use client';

import Image from 'next/image';
import { useState } from 'react';

type Item = readonly [string, string, string];

export default function MediaPager({ items, kind }: { items: readonly Item[]; kind: 'music' | 'anime' }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(items.length / 6);
  const visible = items.slice(page * 6, page * 6 + 6);
  return <div className="media-pager"><div className="media-grid">{visible.map(([title, byline, image]) => <article className="media-card" key={title}><div className="media-image"><Image src={image} alt={`${title} ${kind === 'music' ? 'cover' : 'poster'}`} fill sizes="(max-width: 639px) 42vw, (max-width: 1023px) 28vw, 20vw" loading="lazy" /></div><strong>{title}</strong><span>{byline}</span></article>)}</div><div className="pager-controls"><button className="btn btn-sm btn-ghost" disabled={page === 0} onClick={() => setPage((value) => value - 1)}><span>Prev</span></button><span>{page + 1} / {pageCount}</span><button className="btn btn-sm btn-ghost" disabled={page === pageCount - 1} onClick={() => setPage((value) => value + 1)}><span>Next</span></button></div></div>;
}
