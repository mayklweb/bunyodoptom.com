"use client";
import React, { useEffect, useRef } from "react";
import { IMaskInput } from "react-imask";
function Contact() {
  const nameRef = useRef(null);
  const selectRef = useRef(null);
  const phoneRef = useRef(null);
  const mapRef = useRef(null);
  const placemarkRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const select = selectRef.current.value;
    const phone = phoneRef.current.value.trim();

    const token = "8002417328:AAE6NVoyOv8inp3xTFveNwAg6X95bzcJh2c";
    const chat_id = "-4605763808";
    const text = `Ism: ${name}\nTelefon: ${phone}\nSavol: ${select}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id,
          text,
        }),
      });

      nameRef.current.value = "";
      phoneRef.current.value = "";
      selectRef.current.selectedIndex = 0;
      alert("Xabar yuborildi!");
    } catch (err) {
      console.error("Telegramga yuborishda xatolik:", err);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY_HERE&lang=ru_RU";
    script.onload = () => {
      window.ymaps.ready(() => {
        const initialCoords = [41.558874, 60.607095];
        const map = new window.ymaps.Map("map", {
          center: initialCoords,
          zoom: 16,
          controls: [],
        });

        const placemark = new window.ymaps.Placemark(initialCoords, {
          hintContent: "Bino",
          balloonContent: "Bu bino joylashuvi",
        });

        map.geoObjects.add(placemark);

        mapRef.current = map;
        placemarkRef.current = placemark;
      });
    };
    document.body.appendChild(script);
  }, []);
  return (
    <section className="container">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-10 relative mt-10">
        <div className="w-full lg:w-[50%] h-[400px] relative">
          <div id="map" className="w-full h-[400px] mt-5 absolute"></div>
          <div className="w-full h-[400px] mt-5 shadow-[inset_0px_0px_20px_40px_#ffffff]  absolute"></div>
        </div>

        <div className="w-full lg:w-[50%]">
          {/* <h1 className="text-4xl text-center text-[#002bba]">Aloqa</h1> */}
          <form onSubmit={handleSubmit} className="form flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="text-xl text-[#002bba]" htmlFor="name">
                Ismingiz
              </label>
              <input
                required
                ref={nameRef}
                className="name px-4 py-3 text-lg bg-white text-[#002bba] border-[#002bba] border-[1px] border-solid outline-none rounded-[72px]"
                type="text"
                placeholder="Ismingiz..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl text-[#002bba]" htmlFor="phone">
                Telefon
              </label>
              <IMaskInput
                mask="+998 00 000 00 00"
                lazy={true} // bo‘sh joylarni ham ko‘rsatadi
                unmask={true} // qiymatni mask bilan saqlaydi
                inputRef={phoneRef}
                placeholder="Telefon raqamingiz..."
                className="name px-4 py-3 text-lg bg-white text-[#002bba] border-[#002bba] border-[1px] border-solid outline-none rounded-[72px]"
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="select"></label>
              <select
                ref={selectRef}
                required
                className="w-full px-4 py-3 text-lg bg-white text-gray-500 border-[#002bba] border-[1px] border-solid outline-none rounded-[72px]"
                name="select"
                id="select"
              >
                <option className="bg-white" value="">
                  Sizga qanday yordam bera olamiz?
                </option>
                {/* <option value="Kvartira sotib olmoqchiman">Kvartira sotib olmoqchiman.</option> */}
                <option value="Uy sotib olmoqchiman">
                  Uy haqida ma'lumot olmoqchiman.
                </option>
                <option value="Uy sotib olmoqchiman">
                  Uy sotib olmoqchiman.
                </option>
                <option value="Ma'lumot olmoqchiman">
                  Ma'lumot olmoqchiman.
                </option>
                <option value="Boshqa">Boshqa</option>
              </select>
            </div>
            <button className="bg-[#002bba] text-white text-xl mt-5 p-4 cursor-pointer border-[1px] border-solid border-[#002bba] rounded-[72px] hover:bg-transparent hover:text-[#002bba] transition-all duration-300 ease-in-out">
              YUBORISH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
