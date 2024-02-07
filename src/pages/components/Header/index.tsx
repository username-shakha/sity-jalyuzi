import { FC } from "react";

import "./Header.scss";
import "./HeaderMedia.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <section className="header__top">
        <div className="header__container">
          <div className="header__top-body">
            <div className="header__contact">
              <div className="header__info">
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
                  href="mailto:info@city-jaluzi.ru"
                  className="header__info-text"
                >
                  info@city-jaluzi.ru
                </a>
              </div>
              <div className="header__info">
                <a href="tel:+7 (495) 542-76-98" className="header__info-text">
                  +7 (495) 542-76-98
                </a>
              </div>
              <div className="header__socials">
                <a href="#" className="header__social"></a>
                <a href="#" className="header__social"></a>
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
