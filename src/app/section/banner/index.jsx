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
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1600px]
          flex-col
          justify-center
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <div className="container">
          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="
              mb-5
              text-[12px]
              font-medium
              uppercase
              tracking-wider
              text-white/60
              sm:mb-6
              sm:text-xs
              md:text-sm
            "
          >
            Snek va bakaleya distribyutori
          </p>

          {/* Title */}
          <h1
            ref={titleRef}
            className="
              text-[clamp(3.4rem,10vw,9rem)]
              font-bold
              uppercase
              leading-[0.82]
              tracking-[-0.065em]
              text-white
            "
          >
            Bunyod
            <br />
            <span className="text-white/90">Optom</span>
          </h1>

          {/* Bottom content */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-6
              sm:mt-10
              md:mt-12
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <p
              ref={subtitleRef}
              className="
                max-w-[460px]
                text-sm
                leading-[1.5]
                text-white/70
                sm:text-base
                md:text-lg
              "
            >
              Xorazm bo'ylab do'konlarga ishonchli yetkazib beruvchi.
            </p>

            <button
              ref={buttonRef}
              type="button"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-[#001233]
                transition-all
                duration-500
                hover:bg-[#0040b1]
                hover:text-white
                sm:px-6
                sm:py-3.5
              "
            >
              <span>Hamkor bo'lish</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0040b1]
                  text-white
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:bg-white
                  group-hover:text-[#0040b1]
                "
              >
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
