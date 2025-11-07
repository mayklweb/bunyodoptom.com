import Image from "next/image";
import React from "react";

function Products() {
  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <div>
            <h1 className="text-[#002BBA] text-2xl font-bold uppercase">
              Bizdan topasiz
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div>
              <div className="p-4 lg:0">
                <Image
                  src="/cake.png"
                  width={500}
                  height={500}
                  alt="Product 1"
                />
              </div>
              <h1 className="text-2xl font-medium text-center text-[#002BBA] uppercase">
                Shirinliklar va shokoladlar
              </h1>
            </div>
            <div>
              <div className="p-4 lg:0">
                <Image
                  src="/candy.png"
                  width={500}
                  height={500}
                  alt="Product 1"
                />
              </div>
              <h1 className="text-2xl font-medium text-center text-[#002BBA] uppercase">
                Qandolat mahsulotlari
              </h1>
            </div>
            <div>
              <div className="p-4 lg:0">
                <Image
                  src="/pasta.png"
                  width={500}
                  height={500}
                  alt="Product 1"
                />
              </div>
              <h1 className="text-2xl font-medium text-center text-[#002BBA] uppercase">
                Makaron va noodl
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
      
      </div>
    </section>
  );
}

export default Products;
