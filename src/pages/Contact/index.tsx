const Contact = () => {
  return (
    <section className="delivery">
      <div className="information__container">
        <h2 className="information__title">Контакты</h2>
        <section className="">
          <h1 className="section__title"></h1>
          <div className="section__inner">
            <h2>
              <strong>Магазин Сити-Жалюзи в Москве</strong>
            </h2>

            <p>&nbsp;</p>

            <p>
              <strong>Наш телефон</strong>: 8 (495) 542-76-98
            </p>

            <p>
              <strong>Прием звонков:</strong> с 9:00 до 21:00
            </p>

            <p>&nbsp;</p>

            <p>
              <strong>Офис:</strong>
            </p>

            <p>109369, Москва, Новочеркасский б-р, дом 41, корпус 3</p>

            <p>
              (Здание магазина «Мебель» вход справа "Запчасти для бытовой
              техники", бесплатная парковка, трудно припарковаться, мало мест)
            </p>

            <p>&nbsp;</p>

            <p>
              <strong>Часы работы офиса:</strong>
            </p>

            <p>По будням с 10:00 до 17:00 без перерывов</p>

            <p>Суббота–воскресенье — выходной</p>

            <p>&nbsp;</p>

            <p>
              <strong>e-mail:</strong>{" "}
              <a href="mailto:info@city-jaluzi.ru">info@city-jaluzi.ru</a>
            </p>

            <p>&nbsp;</p>

            <p>
              <strong>Наш сайт:</strong>{" "}
              <a href="https://city-jaluzi.ru">https://city-jaluzi.ru</a>
            </p>

            <p>&nbsp;</p>
            <div className="information__way">
              <div style={{ position: "relative", overflow: "hidden" }}>
                <a
                  href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&amp;utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  Москва
                </a>
                <a
                  href="https://yandex.ru/maps/213/moscow/?from=mapframe&amp;indoorLevel=1&amp;ll=37.738007%2C55.648363&amp;mode=usermaps&amp;source=mapframe&amp;um=constructor%3A8ee3c131c89c407681c8ff3094ecf501f3e94db6dbf3950c0e9c8dd8a00abcd6&amp;utm_medium=mapframe&amp;utm_source=maps&amp;z=16.5"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14p",
                  }}
                >
                  Карта Москвы с улицами и номерами домов — Яндекс Карты
                </a>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?from=mapframe&amp;indoorLevel=1&amp;ll=37.738007%2C55.648363&amp;mode=usermaps&amp;source=mapframe&amp;um=constructor%3A8ee3c131c89c407681c8ff3094ecf501f3e94db6dbf3950c0e9c8dd8a00abcd6&amp;utm_source=mapframe&amp;z=16.5"
                  frameBorder="1"
                  allowFullScreen={true}
                  style={{ position: "relative" }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
