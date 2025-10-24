import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Banner() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
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
      <div className="w-full h-screen relative top-0 left-0 z-[1] bg-[#00369A] ">
        <div className="w-full h-full relative top-0 left-0 z-[2] flex flex-col items-center justify-center gap-40 overflow-x-hidden">
          <div className="w-full h-30 bg-[#fff] animate-[wave_5s_ease-in-out_infinite_0s] rotate-[15deg]"></div>
          <div className="w-full h-20 bg-[#fff] animate-[wave_6s_ease-in-out_infinite_0s] rotate-[5deg]"></div>
          <div className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl"></div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[2] flex flex-col items-center justify-center text-center bg-black/50">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="text-4xl lg:text-8xl font-[800] text-[#fff]"
            >
              BUNYOD OPTOM
            </h1>
          </div>

          <div className="overflow-hidden">
            <p ref={subTitleRef} className="text-sm lg:text-3xl text-[#fff]">
              ДИСТРИБЬЮТЕРСКАЯ ФИРМА
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
