import gsap from "gsap";
import Image from "next/image";
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
      <div className="w-full h-screen relative top-0 left-0 z-[1] bg-[#002bba] ">
        <div className="w-full h-full relative top-0 left-0 z-[2] flex flex-col items-center justify-center gap-40 overflow-x-hidden">
          <Image src={"/banner.avif"} alt="" width={1440} height={900} className="w-full h-full object-cover" />
        </div>
        <div className="container">
          <div className="w-full h-full absolute top-0 left-0 z-[2] flex flex-col items-senter justify-center text-center">
            <div className="overflow-hidden">
              <h1
                ref={titleRef}
                className="text-4xl lg:text-8xl  text-[#fff] font-extrabold"
              >
                BUNYOD OPTOM
              </h1>
            </div>

            <div className="overflow-hidden mt-5">
              <p ref={subTitleRef} className="text-sm lg:text-3xl text-[#fff]">
                ДИСТРИБЬЮТЕРСКАЯ ФИРМА
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
