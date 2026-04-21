import { useState, useEffect } from "react";

export interface CountdownResult {
  d: string;
  h: string;
  m: string;
  s: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export function useCountdown(targetISO: string): CountdownResult {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(targetISO).getTime();
  const delta = Math.max(0, target - now);
  const d = Math.floor(delta / 86400000);
  const h = Math.floor((delta % 86400000) / 3600000);
  const m = Math.floor((delta % 3600000) / 60000);
  const s = Math.floor((delta % 60000) / 1000);

  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}
