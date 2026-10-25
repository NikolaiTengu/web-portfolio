'use client';

import { useState } from 'react';
import { CopyIcon } from './icons';

export default function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return <button type="button" onClick={copy} className="copy-button" aria-label={`${label}: ${value}`}><CopyIcon /> <span>{copied ? 'Copied' : label}</span></button>;
}
