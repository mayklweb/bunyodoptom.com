import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Partners() {
  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <h1 className="text-[#003594] text-2xl lg:text-4xl font-bold">
            ДИСТРИБЬЮТЕРСТВО
          </h1>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/krember.jpg"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px]"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px] ">
              <Image src={"/nmedov.png"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px] p-10"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/krember.jpg"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px]"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/nmedov.png"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px] p-10"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/krember.jpg"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px]"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/nmedov.png"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px] p-10"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/sfad.png"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px]"/>
            </div>
            <div className="w-full h-full bg-[#eff1ff] border-[1px] border-solid border-[#0000000d] rounded-[24px] lg:rounded-[50px]">
              <Image src={"/candy_gold.png"} alt="" width={300} height={300} className="w-full h-full object-cover rounded-[24px] lg:rounded-[50px] p-10"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
