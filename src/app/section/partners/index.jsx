"use client";

import React from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/krember.jpg", pad: false },
  { src: "/nmedov.png", pad: true },
  { src: "/sfad.png", pad: false },
  { src: "/nmedov.png", pad: true },
  { src: "/candy_gold.png", pad: true },
];

function Partners() {
  return (
    <section>
      <div className="container ">
        {/* Header */}
        <div className="mt-20 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1
              className="
                text-[clamp(2.5rem,6vw,5.5rem)]
                font-semibold
                uppercase
                leading-[100%]
                tracking-tighter
                text-[#171717]
              "
            >
              Biz bilan
              <br />
              <span className="text-[#171717]/50">birga.</span>
            </h1>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-[#171717]/50 sm:text-base">
            Biznesimizni rivojlantirishda ishonch bildirgan hamkorlarimiz.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3 mt-10">
          {LOGOS.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="
                group
                relative
                flex
                aspect-square
                items-center
                justify-center
                overflow-hidden
                rounded-[28px]
                border
                border-black/[0.06]
                bg-white
                p-5
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
                sm:p-7
                lg:p-8
              "
            >
              <div
                className={`
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-500
                  group-hover:scale-[1.04]
                  ${logo.pad ? "p-6 sm:p-10" : ""}
                `}
              >
                <Image
                  src={logo.src}
                  alt="Hamkor brend"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* More partners */}
          <div
            className="
              group
              relative
              flex
              aspect-square
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-[28px]
              bg-[#001233]
              p-6
              text-center
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-[#0040b1]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            "
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50 sm:text-xs">
              Va yana
            </p>

            <p
              className="
                mt-3
                text-[clamp(3rem,6vw,5rem)]
                font-semibold
                leading-none
                tracking-[-0.06em]
                text-white
              "
            >
              99+
            </p>

            <p className="mt-3 text-xs text-white/60 sm:text-sm">
              mahalliy brend
            </p>

            <span
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-sm
                text-white
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:bg-white
                group-hover:text-[#0040b1]
              "
            >
              ↗
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
