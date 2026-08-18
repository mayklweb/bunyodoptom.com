"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Banner() {
  const rootRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        eyebrowRef.current,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
      )
        .fromTo(
          titleRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
          },
          "-=0.35",
        )
        .fromTo(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.55",
        )
        .fromTo(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.35",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] w-full overflow-hidden "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,#001233_0%,#0040B1_45%,#4C74C9_75%,#F5F5F5_100%)]
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-400/10
          blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative max-w-[800px] pl-5 sm:pl-8">
          <p
            ref={eyebrowRef}
            className="mb-8 text-[10px] uppercase tracking-[0.25em] text-white/40 sm:text-xs"
          >
            2019 — Xorazm
          </p>

          <h1
            ref={titleRef}
            className="text-[clamp(4rem,9vw,9rem)] font-semibold uppercase leading-[0.75] tracking-[-0.08em] text-white"
          >
            Bunyod
            <br />
            <span className="text-white/50">Optom</span>
          </h1>

          <div className="mt-10">
            <p
              ref={subtitleRef}
              className="max-w-[340px] text-sm leading-[1.6] text-white/45 sm:text-base"
            >
              Xorazm bo'ylab oziq-ovqat mahsulotlarini ishonchli va uzluksiz
              yetkazib beramiz.
            </p>

            <button
              ref={buttonRef}
              className="mt-7 bg-white rounded-4xl p-4 border-b border-white/20 pb-2 text-sm text-[#0040B1] transition-colors hover:border-white"
            >
              Hamkor bo'lish ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
