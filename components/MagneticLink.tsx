"use client";

import { useEffect, useRef } from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  strengthX?: number;
  strengthY?: number;
}

/** Anchor that eases toward the cursor while hovered (disabled for reduced motion). */
export function MagneticLink({ strengthX = 0.25, strengthY = 0.4, children, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const move = (ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ev.clientX - (r.left + r.width / 2);
      const y = ev.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strengthX}px, ${y * strengthY}px)`;
    };
    const leave = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strengthX, strengthY]);

  return (
    <a ref={ref} {...rest}>
      {children}
    </a>
  );
}
