"use client";

import { ArrowUp, ArrowUpNarrowWide } from "lucide-react";
import Link from "next/link";
import React from "react";

const LINKS = [
  { label: "Bosh sahifa", href: "#" },
  { label: "Biz haqimizda", href: "#about" },
  { label: "Hamkorlar", href: "#partners" },
  { label: "Aloqa", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-20
    relative
    w-full
    overflow-hidden
    bg-[linear-gradient(135deg,#001233_0%,#002B78_50%,#0040B1_100%)]
    text-white
  "
    >
      <div className="container">
        <div>
          {/* BRAND + NAVIGATION */}
          <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-12 sm:pb-16 lg:grid-cols-12 lg:gap-8 pt-10">
            {/* Brand */}
            <div className="lg:col-span-6">
              <h2
                className="
                text-[clamp(3.5rem,8vw,8rem)]
                font-semibold
                uppercase
                leading-[100%]
                tracking-tighter
              "
              >
                Bunyod
                <br />
                <span className="text-white">Optom</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
                2019 yildan buyon Xorazm hududidagi savdo nuqtalariga oziq-ovqat
                mahsulotlarini ishonchli va uzluksiz yetkazib berib kelayotgan
                distribyutorlik kompaniyasi.
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3 lg:col-start-8">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                Sahifalar
              </p>

              <nav className="flex flex-col gap-3">
                {LINKS.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                  >
                    <span className="">•</span>

                    <span>{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Activity */}
            <div className="lg:col-span-2">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Faoliyat
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/55">
                <span>Shirinliklar</span>
                <span>Bakaleya mahsulotlari</span>
                <span>Oziq-ovqat mahsulotlari</span>
                <span>Distribyutsiya</span>
              </div>
            </div>
          </div>
          {/* CONTACT */}
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:py-16 md:grid-cols-3">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Telefon
              </p>

              <a
                href="tel:+998000000000"
                className="
                text-xl
                font-medium
                tracking-[-0.02em]
                text-white
                transition-colors
                duration-300
                hover:text-[#B8D0FF]
                sm:text-2xl
              "
              >
                +998 99 966 70 70
              </a>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Elektron pochta
              </p>

              <a
                href="mailto:info@bunyodoptom.uz"
                className="
                text-base
                text-white
                transition-colors
                duration-300
                hover:text-white
                sm:text-lg
              "
              >
                info@bunyodoptom.uz
              </a>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                Manzil
              </p>

              <p className="max-w-xs text-sm leading-[120%] text-white sm:text-base">
                Xorazm viloyati,
                <br />
                O'zbekiston
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between">
            {/* SOCIALS */}
            <div className="flex items-center gap-6">
              <Link
                href="https://t.me/bunyodoptom"
                className="group text-xs uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  Telegram
                </span>
              </Link>

              <Link
                href="https://www.instagram.com/bunyodoptom/"
                className=" group text-xs uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                Instagram
              </Link>
            </div>

            {/* BACK TO TOP */}
            <button
              onClick={scrollToTop}
              className=" group flex items-center gap-3 self-start text-xs uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 hover:text-white sm:self-auto cursor-pointer"
            >
              <span>Yuqoriga</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-white/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/30 group-hover:bg-white group-hover:text-[#001233]">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>
          {/* COPYRIGHT */}
          <div className=" flex flex-col gap-3 border-t border-white/10 py-6 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Bunyod Optom</p>

            <p className="text-white/20">2019 — {year}</p>

            <p>Barcha huquqlar himoyalangan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
