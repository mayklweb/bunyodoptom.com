"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // to'g'ri ease-out (cubic)
      smoothWheel: true,
      // smoothTouch odatda kerak emas — mobil UX'ni yomonlashtiradi
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;