"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Banner() {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play().catch(() => {});

    gsap.fromTo(
      titleRef.current,
      { y: 100 },
      { y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subTitleRef.current,
      { y: 100 },
      { y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section>
      <div className="h-[820px] relative overflow-hidden">
        <div className="h-full">
          <div className="w-full h-full bg-black/80 absolute z-[1]"></div>
          <video
            src="/bg.mp4"
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-full object-cover object-center"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 z-[2] flex flex-col items-center justify-center text-center">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="text-4xl lg:text-8xl font-[800] text-white"
            >
              BUNYOD OPTOM
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              ref={subTitleRef}
              className="text-sm lg:text-2xl text-white mt-2"
            >
              ДИСТРИБЬЮТЕРСКАЯ ФИРМА
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
