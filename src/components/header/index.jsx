"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on route change / outside interactions like resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed left-1/2 z-50 w-[92%] sm:w-[85%] md:w-[90%] max-w-[900px] -translate-x-1/2 rounded-[28px] md:rounded-full border transition-all duration-500 ease-out top-4 border-white/70 bg-white/75 p-2 md:p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] backdrop-blur-2xl `}
    >
      <div className="flex items-center justify-between">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/big-logo.svg"
            alt="Logo"
            width={180}
            height={40}
            className="object-contain transition-all duration-500 ease-out"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-[14px] tracking-wide">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 font-medium text-[#171717]/80 transition-colors duration-300 hover:text-[#171717]"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-[#0040b1] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* desktop phone CTA */}
        <a
          href="tel:+998999607070"
          className="hidden md:flex items-center gap-2 rounded-full bg-[#0040b1] px-5 py-2.5 text-[13px] font-medium tracking-wide text-white shadow-[0_6px_16px_-6px_rgba(0,64,177,0.6)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_-6px_rgba(0,64,177,0.7)] active:scale-[0.98]"
        >
          +998 (99) 960 7070
        </a>

        {/* mobile: call icon + menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-5 w-10 items-center justify-center rounded-full text-[#171717] active:scale-95 transition-transform duration-200"
          >
            <span
              className={`absolute h-[1.5px] w-8 bg-current transition-all duration-300 ease-out ${
                menuOpen ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-8 bg-current transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* mobile nav panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <nav className="flex flex-col border-t border-[#171717]/10 pt-2 pb-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg rounded-2xl px-2 py-2 font-medium text-[#171717]/80 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
