import { FC } from "react";
import Sprite from "@/components/helper/Sprite/index";
import "./Header.scss";
import "./HeaderMedia.scss";

const Header: FC = (): JSX.Element => {
  return (
    <div className="header">
      <section className="header__top">
        <div className="header__container">
          <div className="header__top-body">
            <div className="header__contact">
              <div className="header__info">
                <iframe
                  className="header__yandex-rating"
                  src="https://yandex.ru/sprav/widget/rating-badge/1385530723?type=rating"
                  width="150"
                  height="59"
                  frameBorder="0"
                ></iframe>
                <div className="header__info-icon">
                  <img
                    src="https://city-jaluzi.ru/assets/img/location.svg"
                    alt="map"
                  />
                </div>
                <address className="header__info-text">
                  Москва, Новочеркасский б-р, д.41, к.3 <br />
                </address>
              </div>
              <div className="header__info">
                <div className="header__info-icon">
                  <img
                    src="https://city-jaluzi.ru/assets/img/mail.svg"
                    alt="map"
                  />
                </div>
                <a
                  target="_blank"
                  href="mailto:info@city-jaluzi.ru"
                  className="header__info-text"
                >
                  info@city-jaluzi.ru
                </a>
              </div>
              <div className="header__info">
                <a
                  href="tel:+7 (495) 542-76-98"
                  target="_blank"
                  className="header__info-text"
                >
                  +7 (495) 542-76-98
                </a>
              </div>
              <div className="header__socials">
                <a
                  href="https://api.whatsapp.com/send?phone=998974360640"
                  target="_blank"
                  className="header__social"
                >
                  <Sprite id="whatsapp" />
                </a>
                <a
                  href="https://t.me/username_shakha"
                  target="_blank"
                  className="header__social"
                >
                  <Sprite id="telegram" />
                </a>
              </div>
              <div className="header__buttons">
                <div className="header__button">
                  <button
                    className="header__btn header__btn--green"
                    onClick={() => {}}
                  >
                    Заказать звонок
                  </button>
                </div>
                <div className="header__button">
                  <button
                    className="header__btn header__btn--yellow"
                    onClick={() => {}}
                  >
                    Пригласить на тендер
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
