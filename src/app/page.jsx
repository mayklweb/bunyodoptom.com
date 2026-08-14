"use client";
import About from "./section/about";
import Banner from "./section/banner";
import Contact from "./section/contact";
import Partners from "./section/partners";

export default function Home() {
  return (
    <>
      <main className="">
        <Banner />
        <About />
        <Partners />
        <Contact />
      </main>
    </>
  );
}
