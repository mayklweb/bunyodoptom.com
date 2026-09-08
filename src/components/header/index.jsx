"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Bosh sahifa" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#partners", label: "Hamkorlar" },
  { href: "#contact", label: "Aloqa" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`
        fixed left-1/2 top-4 z-50
        w-[92%] sm:w-[85%] md:w-[90%] max-w-225
        -translate-x-1/2
        overflow-hidden
        rounded-[28px] md:rounded-full
        border border-white/70
        bg-white/75
        backdrop-blur-2xl
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          scrolled
            ? "p-1.5 md:p-2 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.25)]"
            : "p-2 md:p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]"
        }
      `}
    >
      {/* Main header */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Image
            src="/big-logo.svg"
            alt="Logo"
            width={180}
            height={40}
            priority
            className={`
              h-auto w-37 md:w-45
              object-contain
              transition-all duration-500
              ${scrolled ? "md:w-42" : ""}
            `}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 text-[14px] tracking-wide">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
    rounded-full
    px-4 py-2
    font-medium
    text-[#171717]/70
    transition-all
    duration-300
    ease-out
    hover:bg-[#0040B1]/10
    hover:text-[#0040B1]
    active:scale-95
  "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+998999607070"
          className="
            hidden md:flex
            items-center
            rounded-full
            bg-[#0040B1]
            px-5 py-2.5
            text-[13px]
            font-medium
            tracking-wide
            text-white
            shadow-[0_6px_16px_-6px_rgba(0,64,177,0.6)]
            transition-all duration-300
            hover:scale-[1.03]
            hover:bg-[#00389C]
            hover:shadow-[0_10px_25px_-7px_rgba(0,64,177,0.65)]
            active:scale-[0.98]
          "
        >
          +998 (99) 960 7070
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            relative
            flex h-10 w-10
            items-center justify-center
            rounded-full
            text-[#171717]
            transition-transform duration-200
            active:scale-90
            md:hidden
          "
        >
          <span
            className={`
              absolute
              h-[1.5px] w-7
              bg-current
              transition-all duration-300
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${menuOpen ? "rotate-45" : "-translate-y-1"}
            `}
          />

          <span
            className={`
              absolute
              h-[1.5px] w-7
              bg-current
              transition-all duration-300
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${menuOpen ? "-rotate-45" : "translate-y-1"}
            `}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          md:hidden
          ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="mt-2 border-t border-[#171717]/10 pt-2 pb-1">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  block
                  rounded-2xl
                  px-3 py-2.5
                  text-lg
                  font-medium
                  text-[#171717]/75
                  transition-all duration-300
                  hover:bg-[#0040B1]/5
                  hover:text-[#0040B1]
                  ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: menuOpen ? `${index * 50 + 100}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
