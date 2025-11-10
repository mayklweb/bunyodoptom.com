"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    const counters = gsap.utils.toArray(".counter");

    counters.forEach((counter) => {
      const el = counter;
      const endValue = parseInt(el.dataset.value || "0");

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: endValue,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
          },
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
          onUpdate: function () {
            el.innerText = `${Math.floor(parseFloat(el.innerText))}+`;
          },
        }
      );
    });
  }, []);
  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <div className="flex justify-between items-start flex-col lg:flex-row gap-5">
            <h1 className="text-[#002bba] text-2xl font-semibold">О НАС</h1>
            <div className="w-full lg:w-1/2">
              <h3 className="text-[#121212] text-xl lg:text-3xl text-justify leading-[130%] font-normal  tracking-tight">
                <span className="font-semibold">BUNYOD OPTOM</span> —
                это сервис, который помогает предпринимателям покупать товары
                оптом быстро, удобно и выгодно. Мы соединяем бизнес с
                проверенными поставщиками и делаем процесс закупки максимально
                лёгким и надёжным.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="w-full items-center justify-between grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 text-6xl md:text-6xl lg:text-8xl py-5 lg:py-20 mt-5 rounded-[36px] text-white">
            <div className="flex flex-col items-center justify-center bg-[#002bba] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                99+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Торговые Агенты
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#002bba] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                30+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Количество Дистрибуций
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#002bba] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                20+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Сотрудник
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#002bba] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                99+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Количество Транспортов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
