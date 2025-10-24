import Image from "next/image";
import React from "react";

function Partner() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="text-[#003594] text-2xl font-bold">HAMKORLAR</h1>
          <div className="mt-6">
            <div className="w-full flex flex-col lg:flex-row items-center">
              <p className="w-full lg:w-4/6 text-xl md:text-2xl lg:text-4xl text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                quisquam excepturi, repellendus non incidunt dolorum ad
                inventore impedit distinctio, laudantium, atque natus
                praesentium perspiciatis. Natus omnis aspernatur laboriosam
                tenetur dolorum.
              </p>
              <div className="w-full lg:w-2/6">
                <Image
                  className="w-full h-full object-cover"
                  src="/nmedov.png"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-2/6">
                <Image
                  className="w-full h-full object-cover"
                  src="/krember.jpg"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
              <p className="w-full lg:w-4/6 text-xl md:text-2xl lg:text-4xl text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                nam neque quisquam dolores, aut natus praesentium possimus
                tenetur quae dolor, eos ullam deserunt, asperiores consequatur
                facere. Est maxime itaque laborum.
              </p>
            </div>
            <div className="bg-[#003594] p-4 rounded-xl">
              <p className="text-white text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur a aliquam sint dolores minus corrupti, ipsa quia.
                Quasi architecto ipsam dolorum qui voluptates animi velit, natus
                possimus veniam consequatur provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
