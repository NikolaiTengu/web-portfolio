'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setTime(new Date());
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return <time dateTime={time?.toISOString()} className="font-mono text-[10px] tracking-[0.12em] text-ice">{time ? new Intl.DateTimeFormat('en-PH', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: false }).format(time) : '--:--'} PHT</time>;
}
