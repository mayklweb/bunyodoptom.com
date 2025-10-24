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
        <div className="mt-5 lg:mt-10">
          <div className="flex justify-between items-start flex-col lg:flex-row gap-5">
            <h1 className="text-[#00369A] text-2xl font-bold">BIZ HAQIMIZDA</h1>
            <div className="w-full lg:w-3/5">
              <h3 className="text-[#00369A] text-xl lg:text-3xl text-justify leading-[130%] font-semibold">
                <span className="font-bold">BUNYOD OPTOM</span> – Xorazm
                viloyatida ulgurji savdo sohasida ishonchli hamkor. Bizning
                asosiy maqsadimiz – mijozlarimizga sifatli mahsulotlar,
                hamyonbop narxlar va tezkor yetkazib berishni taqdim etish.
              </h3>
            </div>
            {/* <div className="w-full flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-2/3">
                <h3 className=" text-black text-xl lg:text-3xl text-justif mt-5 leading-[130%]">
                  <span className="font-semibold">Bunyod Optom</span> – Xorazm
                  viloyatida ulgurji savdo sohasida ishonchli hamkor. Bizning
                  asosiy maqsadimiz – mijozlarimizga sifatli mahsulotlar,
                  hamyonbop narxlar va tezkor yetkazib berishni taqdim etish.
                </h3>
                <p className="mt-4 text-black text-base lg:text-3xl text-justif leading-[130%]">
                  20 yillik tajribamiz, keng assortiment va ishonchli xizmatimiz
                  bilan yuzlab hamkorlar bizni tanlashadi.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex items-center justify-center">
                <img
                  src="/Frame 1.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="w-full items-center justify-between grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 text-6xl md:text-6xl lg:text-8xl py-5 lg:py-20 mt-5 rounded-[36px] text-white">
            <div className="flex flex-col items-center justify-center bg-[#00369A] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                99+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Торговые Агенты
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#00369A] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                30+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Количество Дистрибуций
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#00369A] rounded-3xl py-6">
              <h1 className="font-bold counter" data-value="99">
                20+
              </h1>
              <p className="text-xs md:text-sm lg:text-lg text-center">
                Сотрудник
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#00369A] rounded-3xl py-6">
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
