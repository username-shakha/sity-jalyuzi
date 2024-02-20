import "./style.scss";

const Delivery = () => {
  return (
    <>
      <section className="delivery">
        <div className="delivery__container">
          <div className="delivery__content">
            <h1 className="delivery__title">
              Быстро доставим ваш заказ по Москве и области
            </h1>
            <div className="delivery__body">
              <div className="delivery__item">
                <div className="delivery__text">
                  Доставляем ежедневно с 9:00 до 21:00
                </div>
              </div>
              <div className="delivery__item">
                <div className="delivery__text">
                  Самовывоз в будни с 9:00 до 17:00
                </div>
              </div>
            </div>
          </div>
          <div className="delivery__photo">
            <img
              className="delivery__img"
              src="https://city-jaluzi.ru/public/assets/img/delivery/car.webp"
              alt="car"
            />
            <img
              className="delivery__decor"
              src="https://city-jaluzi.ru/public/assets/img/delivery/decor.svg"
              alt="cover1"
            />
          </div>
        </div>
      </section>

      <section className="information">
        <div className="information__container">
          <h2 className="information__title">Информация о доставке</h2>
          <div className="information__inner">
            <div className="information__content">
              <div className="information__content-element">
                <div className="information__content-block">
                  <div className="information__item">
                    <div className="information__orange"></div>
                    <div className="information__item-body">
                      <div className="information__item-cost">
                        В пределах МКАД — бесплатно
                      </div>
                      <div className="information__item-text">
                        <p>
                          Если сумма заказа менее 10 000 ₽, стоимость доставки -
                          681 ₽
                        </p>
                        <p>
                          Крупногабаритные (более 1,75 м) и тяжелые (от 15 кг)
                          заказы доставляем только транспортом по тарифам
                          сервиса "Достависта"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="information__item">
                    <div className="information__green"></div>
                    <div className="information__item-body">
                      <div className="information__item-cost">
                        До 20км от МКАД — 1500 Р
                      </div>
                      <div className="information__item-text">
                        <p>Если габарит не превышает 175см и вес до 10 кг </p>
                      </div>
                    </div>
                  </div>

                  <div className="information__item">
                    <div className="information__yellow"></div>
                    <div className="information__item-body">
                      <div className="information__item-cost">
                        Доставка по России
                      </div>
                      <div className="information__item-text">
                        <p>
                          Мы доставляем товары по всей России транспортными
                          компаниями и СДЭК, наш менеджер отдельно произведет
                          расчет.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="information__item">
                    <div className="information__red"></div>
                    <div className="information__item-body">
                      <div className="information__item-cost">
                        До 100км от МКАД — 5000 Р
                      </div>
                      <div className="information__item-text">
                        <p>
                          Перед отправкой мы упаковываем изделия защитной
                          пленкой, полиэтиленовым пакетом и картонной коробкой,
                          чтобы вы получили товар чистым, без царапин и вмятин.
                        </p>
                        <p>
                          Заказы из регионов доставляем до транспортной
                          компании.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="information__map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A893e73f4ba809af3f5c4dc806a15ffaf55b9881b66da68a226e59212d80c6be6&amp;source=constructor"
                width="500"
                height="471"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="information">
        <div className="information__container">
          <h2 className="information__title">Информация о самовывозе</h2>
          <div className="information__inner">
            <div className="information__content">
              <div className="information__content-element">
                <div className="information__content-block">
                  <div className="information__block">
                    <div className="information__item-cost">
                      Забрать заказ можно в будни с 9:00 до 18:00 по адресу:
                    </div>
                  </div>
                  <div className="information__block">
                    <address className="information__item-cost">
                      г. Москва, Новочеркасский бульвар, д. 41, корп. 3
                    </address>
                    <div className="information__item-text">
                      <p>
                        Здание магазина «Мебель», вход справа "Запчасти для
                        бытовой техники". Бесплатная парковка, мало мест –
                        трудно припарковаться.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="information__content-block">
                  <div className="information__block">
                    <div className="information__item-cost">
                      Работаем без перерыва. Суббота–воскресенье — выходной
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    top: "14px",
                  }}
                >
                  Карта Москвы с улицами и номерами домов — Яндекс&nbsp;Карты
                </a>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?from=mapframe&amp;indoorLevel=1&amp;ll=37.738007%2C55.648363&amp;mode=usermaps&amp;source=mapframe&amp;um=constructor%3A8ee3c131c89c407681c8ff3094ecf501f3e94db6dbf3950c0e9c8dd8a00abcd6&amp;utm_source=mapframe&amp;z=16.5"
                  //   frameBorder="1"
                  //   allowFullScreen={true}
                  style={{ position: "relative" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
