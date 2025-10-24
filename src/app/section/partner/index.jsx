import Image from "next/image";
import React from "react";

function Partner() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="text-[#003594] text-4xl font-bold">
            HAMKORLAR ПАРТНЕРЫ
          </h1>
          <div className="mt-6">
            <div className="w-full flex flex-col lg:flex-row items-center">
              <p className="w-4/6 text-4xl text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                quisquam excepturi, repellendus non incidunt dolorum ad
                inventore impedit distinctio, laudantium, atque natus
                praesentium perspiciatis. Natus omnis aspernatur laboriosam
                tenetur dolorum.
              </p>
              <div className="w-2/6">
                <Image
                  className="w-full h-full object-cover"
                  src="/nmedov.png"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row">
              <div className="w-2/6">
                <Image src="/krember.jpg" width={300} height={300} alt="" />
              </div>
              <p className="w-4/6 text-4xl text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                nam neque quisquam dolores, aut natus praesentium possimus
                tenetur quae dolor, eos ullam deserunt, asperiores consequatur
                facere. Est maxime itaque laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
