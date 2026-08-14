import React from "react";

function About() {
  return (
    <section>
              <video loop autoPlay muted>
                <source src="/bg.mp4" />
              </video>
      <div className="container">
        <div>
          <div className="mt-40">
            <div className="">
            </div>
            <div>
              <h1 className="text-4xl lg:text-9xl font-bold tracking-tight">
                О нас
                <br />
                BUNYOD OPTOM
              </h1>
            </div>
            <div className="mt-5 flex gap-2 flex-col">
              <p className="text-xl tracking-normal text-justify">
                <span className="font-bold">BUNYOD OPTOM </span>— это место, где
                предприниматели покупают товары оптом легко, надёжно и по
                честным ценам.
              </p>
              <p className="text-xl text-justify">
                Мы создали <span className="font-bold">BUNYOD OPTOM</span>,
                чтобы упростить процесс оптовых закупок. Сегодня многим бизнесам
                приходится искать товары вручную, сравнивать цены часами,
                договариваться с разными поставщиками и рисковать качеством.
              </p>
              <p className="text-xl text-justify">
                Наша цель — дать бизнесу удобный и безопасный способ покупать
                оптовые товары: быстро, выгодно и без лишних хлопот.
              </p>
            </div>
            <div className="mt-10">
              <p>
                Помогать предпринимателям экономить время и деньги, предоставляя
                доступ к проверенным оптовым поставщикам и честным условиям
                закупки.
              </p>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl font-bold">Почему выбирают нас</h1>
              <div className="mt-5 flex flex-col lg:flex-row gap-5">
                <div className="p-4 text-[#002BBA] bg-[#eff1ff] border border-[#0000000d] rounded-2xl">
                  <h3 className="font-bold">Проверенные продавцы</h3>
                  <p>Мы работаем только с теми, кому можно доверять.</p>
                </div>
                <div className="p-4 text-[#002BBA] bg-[#eff1ff] border border-[#0000000d] rounded-2xl">
                  <h3 className="font-bold">Честные цены</h3>
                  <p>Никаких скрытых условий и накруток.</p>
                </div>
                <div className="p-4 text-[#002BBA] bg-[#eff1ff] border border-[#0000000d] rounded-2xl">
                  <h3 className="font-bold">Удобный поиск товаров</h3>
                  <p>Быстро находите нужный товар и категорию.</p>
                </div>
                <div className="p-4 text-[#002BBA] bg-[#eff1ff] border border-[#0000000d] rounded-2xl">
                  <h3 className="font-bold">Поддержка бизнеса</h3>
                  <p>Помогаем предпринимателям развиваться и расти.</p>
                </div>
                <div className="p-4 text-[#002BBA] bg-[#eff1ff] border border-[#0000000d] rounded-2xl">
                  <h3 className="font-bold">Безопасные покупки</h3>
                  <p>Мы заботимся о прозрачности и надёжности.</p>
                </div>
                {/* <p>
                  Помогать предпринимателям экономить время и деньги,
                  предоставляя доступ к проверенным оптовым поставщикам и
                  честным условиям закупки.
                </p> */}
              </div>
            </div>
            <div className="mt-10">
              📦 Для кого мы работаем BunyodOptom создан для тех, кто: открывает
              магазин или точку уже занимается продажами и ищет лучших
              поставщиков хочет работать напрямую без посредников ценит время,
              стабильность и честные сделки
            </div>
            <div>
              🚀 Наш путь Мы начали с простой идеи — сделать оптовую торговлю
              доступной, современной и удобной. С каждым днём мы расширяем
              ассортимент, сотрудничаем с новыми поставщиками и улучшаем процесс
              закупки для бизнеса. И это только начало.
            </div>
            <div>
              BunyodOptom — вместе мы строим сильный бизнес Если вы ищете
              надёжность, честность и удобство в оптовых закупках — вы в
              правильном месте. Добро пожаловать в BunyodOptom.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
