"use client";

import { useEffect, useRef } from "react";

/**
 * Reveal-on-scroll. Attach the returned ref to any element; it starts hidden
 * (via the `.reveal` class) and gets `.is-visible` when it enters the viewport.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return ref;
}
