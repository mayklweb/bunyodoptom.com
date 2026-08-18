"use client";

import React, { useRef, useState } from "react";
import { IMaskInput } from "react-imask";

function Contact() {
  const nameRef = useRef(null);
  const selectRef = useRef(null);
  const phoneRef = useRef(null);

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const topic = selectRef.current.value;
    const phone = phoneRef.current.value.trim();

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          topic,
        }),
      });

      if (!res.ok) {
        throw new Error("Send failed");
      }

      nameRef.current.value = "";
      phoneRef.current.value = "";
      selectRef.current.selectedIndex = 0;

      setStatus("sent");
    } catch (err) {
      console.error("Yuborishda xatolik:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container ">
        {/* Heading */}
        <div className="mt-20 mb-10">
          <h1
            className="
                text-[clamp(3rem,6vw,5.5rem)]
                font-semibold
                uppercase
                leading-[90%]
                tracking-tighter
                text-[#171717]
              "
          >
            Keling,
            <br />
            <span className="text-[#171717]/50">gaplashamiz.</span>
          </h1>
        </div>

        {/* Contact Card */}
        <div
          className="
            overflow-hidden
            rounded-[32px]
            bg-white
            shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            sm:rounded-[40px]
            lg:rounded-[44px]
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* ================= LEFT ================= */}
            <div
              className="
                relative
                min-h-[520px]
                overflow-hidden
                bg-[linear-gradient(135deg,#001233_0%,#002B78_50%,#0040B1_100%)]
                p-7
                text-white
                sm:p-10
                lg:p-12
                xl:p-14
                rounded-[44px]
              "
            >
              {/* Decorative circle */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-80
                  w-80
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-40
                  -left-40
                  h-96
                  w-96
                  rounded-full
                  bg-white/[0.04]
                "
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h3
                    className="
                      mt-12
                      max-w-lg
                      text-[clamp(2.5rem,5vw,5rem)]
                      font-semibold
                      uppercase
                      leading-[0.86]
                      tracking-[-0.06em]
                    "
                  >
                    Hamkorlikni
                    <br />
                    <span className="text-white/50">birga</span>
                    <br />
                    boshlaymiz.
                  </h3>

                  <p className="mt-8 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                    Hamkorlik, mahsulotlar yoki distribyutsiya bo‘yicha
                    savollaringiz bo‘lsa, biz bilan bog‘laning.
                  </p>
                </div>

                {/* Contact info */}
                <div className="mt-16">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                        Telefon
                      </p>

                      <a
                        href="tel:+998000000000"
                        className="
                          text-lg
                          font-medium
                          tracking-tight
                          transition-colors
                          hover:text-[#8DB5FF]
                          sm:text-xl
                        "
                      >
                        +998 99 966 70 70
                      </a>
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                        Email
                      </p>

                      <a
                        href="mailto:info@bunyodoptom.com"
                        className="
                          text-sm
                          text-white/60
                          transition-colors
                          hover:text-white
                          sm:text-base
                        "
                      >
                        info@bunyodoptom.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="p-6 sm:p-10 lg:p-12 xl:p-14">
              <div className="mb-10">
                <p className="mt-3 text-sm leading-relaxed tracking-wide text-[#171717]/50 uppercase">
                  Ma'lumotlaringizni qoldiring. Tez orada siz bilan bog‘lanamiz.
                </p>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="border-t border-black/10 py-4 sm:py-5">
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                      Ismingiz
                    </label>

                    <input
                      ref={nameRef}
                      type="text"
                      required
                      placeholder="Ismingiz"
                      className="
          w-full
          bg-transparent
          text-xl
          font-medium
          tracking-[-0.03em]
          text-[#171717]
          outline-none
          placeholder:text-black/15
          sm:text-2xl
        "
                    />
                  </div>

                  {/* Phone */}
                  <div className="border-t border-black/10 py-4 sm:py-5">
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                      Telefon
                    </label>

                    <IMaskInput
                      inputRef={phoneRef}
                      mask="+998 (00) 000-00-00"
                      placeholder="+998 (__) ___-__-__"
                      className="
          w-full
          bg-transparent
          text-xl
          font-medium
          tracking-[-0.03em]
          text-[#171717]
          outline-none
          placeholder:text-black/15
          sm:text-2xl
        "
                    />
                  </div>

                  {/* Topic */}
                  <div className="border-t border-black/10 py-4 sm:py-5">
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                      Mavzu
                    </label>

                    <div className="relative">
                      <select
                        ref={selectRef}
                        defaultValue=""
                        required
                        className="
            w-full
            appearance-none
            bg-transparent
            pr-8
            text-xl
            font-medium
            tracking-[-0.03em]
            text-[#171717]
            outline-none
            sm:text-2xl
          "
                      >
                        <option value="" disabled>
                          Mavzuni tanlang
                        </option>

                        <option value="hamkorlik">Hamkorlik</option>
                        <option value="mahsulot">Mahsulotlar</option>
                        <option value="distributsiya">Distribyutsiya</option>
                        <option value="boshqa">Boshqa</option>
                      </select>

                      <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-black/30">
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="border-t border-black/10 pt-5">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="
          group
          w-full
          rounded-full
          bg-[#0040b1]
          px-5
          py-5
          text-lg
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-[#00328f]
          sm:px-6
        "
                    >
                      <span>
                        {status === "sending"
                          ? "Yuborilmoqda..."
                          : status === "sent"
                            ? "So‘rov yuborildi"
                            : "Hamkorlikni boshlash"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
