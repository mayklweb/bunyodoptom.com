"use client";

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
    <section className="w-full">
      <div className="container">
        {/* Header */}
        <div className="mt-20 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className="
                text-[clamp(3rem,6vw,5.5rem)]
                font-semibold
                uppercase
                leading-[90%]
                tracking-tighter
                text-[#171717]
              "
            >
              Biz bilan
              <br />
              <span className="text-[#171717]/40">birga.</span>
            </h2>
          </div>

          <p
            className="
              max-w-65
              text-sm
              leading-relaxed
              text-[#171717]/50
              sm:text-base
            "
          >
            Biznesimizni rivojlantirishda ishonch bildirgan hamkorlarimiz.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {LOGOS.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px] border border-black/5 bg-white p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#0040B1]/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] sm:p-7 lg:p-8"
            >
              {/* Logo */}
              <div
                className={`
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.04]
                  ${logo.pad ? "p-6 sm:p-10" : ""}
                `}
              >
                <Image
                  src={logo.src}
                  alt="Hamkor brend"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
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
                items-center
                justify-center
                overflow-hidden
                rounded-[28px]  
                border
                border-black/5
                bg-white
                p-5
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-1
                hover:border-[#0040B1]/10
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
                sm:p-7
                lg:p-8
  "
          >
            {/* Content */}
            <div
              className="
      relative
      z-10
      flex
      flex-col
      items-center
      transition-transform
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-[1.03]
    "
            >
              <span
                className="
        text-[12px]
        font-medium
        uppercase
        tracking-widest
        text-[#17171780]
        sm:text-xs
      "
              >
                Hamkorlarimiz
              </span>

              <span
                className="
        mt-4
        text-[clamp(3.5rem,7vw,5.5rem)]
        font-semibold
        leading-[0.85]
        tracking-[-0.07em]
        text-black
      "
              >
                30+
              </span>

              <span
                className="
        mt-4
        text-xs
        font-medium
        text-[#17171780]
        transition-colors
        duration-300
        group-hover:text-black/60
        sm:text-sm
      "
              >
                mahalliy brend
              </span>
            </div>
          </div>
          div
        </div>
      </div>
    </section>
  );
}

export default Partners;
