import { FC, useState } from "react";
import Sprite from "@/components/helper/Sprite/index";

import { Link } from "react-router-dom";

interface mock {
  id: number;
  quantity: number;
  cost: string;
  brand: string;
}
[];

const Header: FC = (): JSX.Element => {
  const _mock = {
    id: 1,
    quantity: 2,
    cost: "100$",
    brand: "Nike",
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<mock[]>([_mock, _mock, _mock]);
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
                <Link className="zchbLink" to="/contact">
                  <div className="zchbWidgetIcon3">
                    <div className="zchbHead">ЗА</div>
                    <div className="zchbLogoTextww">ЧЕСТНЫЙ БИЗНЕС</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="header__bottom">
        <div className="header__container">
          <div className="header__bottom-body">
            <div className="header__left">
              <button className="header__burger" data-modal="catalog-modal">
                <div className="header__burger-img">
                  <img
                    src="https://city-jaluzi.ru/assets/img/burger.svg"
                    alt="burger"
                  />
                </div>
                <div className="header__burger-text">Каталог</div>
              </button>
              <a href="/" className="header__logo">
                <img
                  src="https://city-jaluzi.ru/assets/img/logo.svg"
                  alt="logo"
                />
              </a>
            </div>

            <form action="#" className="header__form">
              <div id="custom-templates">
                <span
                  className="twitter-typeahead"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <input
                    className="typeahead tt-input"
                    type="search"
                    placeholder="Я ищу..."
                    autoComplete="off"
                    spellCheck="false"
                    dir="auto"
                    style={{ position: "relative", verticalAlign: "top" }}
                  />
                  <pre
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      visibility: "hidden",
                      whiteSpace: "pre",
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontVariant: "normal",
                      fontWeight: "400",
                      wordSpacing: "0px",
                      letterSpacing: "0px",
                      textIndent: "0px",
                      textRendering: "auto",
                      textTransform: "none",
                    }}
                  ></pre>
                  <div
                    className="tt-menu"
                    style={{
                      position: "absolute",
                      top: "70%",
                      left: "0px",
                      zIndex: "100",
                      display: "none",
                    }}
                  >
                    <div className="tt-dataset tt-dataset-best-pictures"></div>
                  </div>
                </span>
              </div>
              <div className="header__form-search">
                <img
                  src="https://city-jaluzi.ru/assets/img/search.svg"
                  alt="search"
                />
              </div>
            </form>

            <div className="header__data">
              <Link to="/contact">
                <div className="header__data-item">
                  <div className="header__data-icon">
                    <img
                      src="https://city-jaluzi.ru/assets/img/address.svg"
                      alt="address"
                    />
                  </div>
                  <div className="header__data-text">Адрес</div>
                </div>
              </Link>
              <Link to="/delivery">
                <div className="header__data-item">
                  <div className="header__data-icon">
                    <img
                      src="https://city-jaluzi.ru/assets/img/delivery.svg"
                      alt="address"
                    />
                  </div>
                  <div className="header__data-text">Доставка</div>
                </div>
              </Link>
              <div className="header__data-item">
                <button
                  className={
                    isOpen
                      ? "header__data-item-btn header__data-item-btn--active"
                      : "header__data-item-btn"
                  }
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <div className="header__data-icon">
                    <img
                      src="https://city-jaluzi.ru/assets/img/profile.svg"
                      alt="address"
                    />
                  </div>
                  <div className="header__data-text">Профиль</div>
                </button>
                <div
                  className={
                    isOpen ? "header__cab header__cab--visible" : "header__cab"
                  }
                >
                  <div className="header__cab-top">
                    <a href="#" className="header__cab-text">
                      Покупки
                    </a>
                  </div>
                  <div className="header__cab-bottom">
                    <a href="#" className="header__cab-text">
                      Личные данные
                    </a>
                    <a href="#" className="header__cab-exit">
                      Войти
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setCart((prev) => [...prev, _mock]);
                }}
                className="header__data-item"
              >
                <div className="header__data-icon">
                  <Link to="">
                    <img
                      src="https://city-jaluzi.ru/assets/img/cart.svg"
                      alt="cart"
                    />
                  </Link>
                </div>
                <Link to="">
                  <div className="header__data-text">Корзинка</div>
                </Link>
                <div
                  className={
                    cart.length ? "header__data-count" : "display-none"
                  }
                >
                  {!!cart.length && cart.length}
                </div>
              </div>
            </div>
            <div className="header__mobile">
              <a href="tel:+7 (495) 542-76-98" target="_blank">
                <img
                  src="https://city-jaluzi.ru/assets/img/tel.svg"
                  className="header__mobile-tel"
                  alt="cover"
                />
              </a>

              <Link to="/delivery" className="header__mobile-map">
                <img
                  src="https://city-jaluzi.ru/assets/img/map-mob.svg"
                  alt="map"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
