"use client";
import About from "./section/about";
import SmoothScrollWrapper from "./smooth-scroll";
// import Banner from "./section/banner";
import Partners from "./section/partners";
import Contact from "./section/contact";
import Link from "next/link";
import CEO from "./section/ceo";
import Partner from "./section/partner";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Products from "./section/products";
import Banner from "./section/banner/banner";

export default function Home() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100 },
      { y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <SmoothScrollWrapper>
      <>
        <header className="w-full fixed top-0 left-0 z-10 pt-6 overflow-hidden">
          <div className="container">
            <div
              ref={headerRef}
              className="w-full py-3 px-4 md:py-4 md:px-6 lg:py-6 lg:px-8 flex items-center justify-between backdrop-blur-[30px] border-solid border-[1px] border-[#0000000d] bg-[#fffc] rounded-[24px] "
            >
              <div className="">
                <h1 className="text-base lg:text-2xl text-[#002bba] font-bold lg:font-extrabold">
                  BUNYOD OPTOM
                </h1>
              </div>
              <div className="gap-2 hidden lg:flex mix-blend-difference">
                <Link
                  href={"#"}
                  className=" px-6 py-1 rounded-4xl text-md text-white"
                >
                  +998 (99) 960 7070
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="">
          <Banner />
          <About />
          {/* <Partner /> */}
          <Partners/>
          <Products />
          <CEO />
          <Contact />
          <p></p>
          <footer className="w-full text-center py-6 text-sm text-gray-500 ">
            <div></div>
            &copy; {new Date().getFullYear()} Bunyod Optom. All rights reserved.
          </footer>
        </main>
      </>
    </SmoothScrollWrapper>
  );
}
