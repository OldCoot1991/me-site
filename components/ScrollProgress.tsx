"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const sc = h.scrollTop || document.body.scrollTop || 0;
      const max = h.scrollHeight - h.clientHeight || 1;
      bar.style.width = `${Math.min(100, (sc / max) * 100)}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="progress" />;
}
