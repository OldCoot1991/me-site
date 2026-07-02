"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  suffix?: string;
  durationMs?: number;
}

/** Counts up from 0 to `to` once it scrolls into view. */
export function Counter({ to, suffix = "", durationMs = 1300 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (reduce) {
            setVal(to);
            return;
          }
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const p = Math.min(1, (ts - start) / durationMs);
            setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
