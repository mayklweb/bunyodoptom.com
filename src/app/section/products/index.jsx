import Image from "next/image";
import React from "react";

const PRODUCTS = [
  {
    src: "/cake.png",
    name: "Выпечка и печенье",
    index: "01",
  },
  {
    src: "/candy.png",
    name: "Конфеты и шоколад",
    index: "02",
  },
  {
    src: "/pasta.png",
    name: "Паста и лапша",
    index: "03",
  },
];

function Products() {
  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="container py-20 sm:py-28 lg:py-36">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#0040b1] sm:text-sm">
            03 — Mahsulotlar
          </p>

          <h2
            className="
              max-w-4xl
              text-[clamp(2.5rem,6vw,5.5rem)]
              font-semibold
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
              text-[#171717]
            "
          >
            Biz qaysi
            <br />
            <span className="text-black/30">mahsulotlarni</span>
            <br />
            tarqatamiz?
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.index}
              className="
                group
                relative
                flex
                min-h-[130px]
                items-center
                justify-between
                overflow-hidden
                rounded-[24px]
                bg-white
                px-5
                py-4
                transition-all
                duration-500
                hover:bg-[#001233]
                sm:min-h-[160px]
                sm:px-7
                lg:min-h-[180px]
                lg:px-8
              "
            >
              {/* Index */}
              <div className="relative z-10 w-10 shrink-0 sm:w-16">
                <span className="text-xs font-medium tracking-[0.15em] text-black/30 transition-colors duration-500 group-hover:text-white/40">
                  {product.index}
                </span>
              </div>

              {/* Image */}
              <div className="relative z-10 flex h-24 w-24 shrink-0 items-center justify-center sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="relative z-10 flex-1 px-5 sm:px-8">
                <h3
                  className="
                    text-lg
                    font-semibold
                    leading-tight
                    tracking-[-0.02em]
                    text-[#171717]
                    transition-colors
                    duration-500
                    group-hover:text-white
                    sm:text-2xl
                    lg:text-4xl
                  "
                >
                  {product.name}
                </h3>
              </div>

              {/* Arrow */}
              <div className="relative z-10 shrink-0">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    text-black/50
                    transition-all
                    duration-500
                    group-hover:border-white/20
                    group-hover:bg-white
                    group-hover:text-[#001233]
                    sm:h-12
                    sm:w-12
                  "
                >
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;