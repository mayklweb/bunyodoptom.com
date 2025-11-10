import Image from "next/image";
import React from "react";

function Products() {
  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <div>
            <h1 className="text-[#003594] text-2xl lg:text-4xl font-bold">
              ЧТО ПРОДАЁМ
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="p-4 bg-[#eff1ff] border border-[#0000000d] rounded-4xl">
              <div className="lg:0">
                <Image
                  src="/cake.png"
                  width={500}
                  height={500}
                  alt="Product 1"
                />
              </div>
              <h1 className="my-2 text-3xl font-medium text-center text-[#002BBA] uppercase">
                Выпечка и печенье
              </h1>
            </div>
            <div className="p-4 bg-[#eff1ff] border border-[#0000000d] rounded-4xl">
              <div className=" lg:0">
                <Image
                  src="/candy.png"
                  width={500}
                  height={500}
                  alt="Product 1"
                />
              </div>
              <h1 className="my-2 text-3xl font-medium text-center text-[#002BBA] uppercase">
                Конфеты и шоколад
              </h1>
            </div>
            <div className="p-4 bg-[#eff1ff] border border-[#0000000d] rounded-4xl">
              <div className="lg:0">
                <Image
                  src="/pasta.png"
                  width={500}
                  height={500}
                  alt="Product 1"
                />
              </div>
              <h1 className="my-2 text-3xl font-medium text-center text-[#002BBA] uppercase">
                Паста и лапша
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Products;
