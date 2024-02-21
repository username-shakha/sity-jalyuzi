import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__inner">
          <div className="info__col">
            <div className="info__item">
              <div className="info__item-photo">
                <img
                  src="https://city-jaluzi.ru/assets/img/info/banner-1.png"
                  alt=""
                />
              </div>
              <div className="info__item-content">
                <div className="info__item-title">
                  Бесплатный замер <br />и доставка
                </div>
                <div className="info__item-text">
                  Приедем на замер и доставим ваш заказ в надежной упаковке по
                  Москве и области
                </div>
                <div className="info__item-bottom">
                  <div className="info__item-button">
                    <button
                      className="info__item-btn info__item-btn--green"
                      onClick={() => {}}
                    >
                      Заказать замер
                    </button>
                  </div>
                  <Link to="" className="info__item-link">
                    <div className="info__item-link-text">Подробнее</div>
                    <div className="info__item-link-arrow">
                      <img
                        src="https://city-jaluzi.ru/assets/img/info/arrow.svg"
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="info__col">
            <div className="info__item">
              <div className="info__item-photo">
                <img
                  src="https://city-jaluzi.ru/assets/img/info/banner-2.svg"
                  alt=""
                />
              </div>
              <div className="info__item-content">
                <div className="info__item-title">
                  Как произвести замер <br />и установку самому
                </div>
                <div className="info__item-text">
                  Посмотрите подробные инструкции по замеру или установке жалюзи
                  и штор
                </div>
                <div className="info__item-bottom">
                  <div className="info__item-button">
                    <Link to="">
                      <button className="info__item-btn info__item-btn--black">
                        Инструкции по замеру и установке
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
