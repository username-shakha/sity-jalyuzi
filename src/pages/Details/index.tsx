import { ChangeEvent, FC, useEffect, useState } from "react";
import "./style.scss";
import { useContextCart } from "@/context/ContextCart";
import { Link, useLocation, useParams } from "react-router-dom";
import { IProducts } from "@/interfaces";
const initialStateInputValue = {
  token: "h2s2cfp7NHhU0gp0pGTT3mM4z1saEngncZKgVM81",
  markup: "0",
  sale: "30",
  curs_dolar: "90.4",
  type_calc: "m2",
  id_product: "14674",
  with: "100",
  height: "100",
  quantity: "1",
};

const url = "https://657bc4a7394ca9e4af14b9a3.mockapi.io/products";

export const Details: FC = () => {
  const { pathname } = useLocation();
  const { add } = useContextCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [product, setProduct] = useState<IProducts>();
  console.log(product);
  const { id } = useParams();
  const [sldierClick, setSliderClick] = useState({
    image: true,
    dopimage: false,
  });

  const handleClickSlider = (num: number) => {
    if (num === 1)
      setSliderClick((slider) => ({ ...slider, dopimage: false, image: true }));
    if (num === 2)
      setSliderClick((slider) => ({ ...slider, dopimage: true, image: false }));
  };

  useEffect(() => {
    if (id) {
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const [state, setState] = useState(initialStateInputValue);

  // const [select, setSelect] = useState({
  //   opt_695_opt: '',
  // })
  // console.log(select)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target
  //   setSelect((initial) => ({ ...initial, [name]: value }))
  // }
  return (
    <div className="card__product">
      <div className="page__container">
        <div className="page__header card__page-header">
          <div className="page__header-btn">
            <Link to="/" className="page__header-button">
              Назад
            </Link>
          </div>

          <a href="https://city-jaluzi.ru" className="page__header-link">
            Главная
          </a>
          <span>/</span>

          <a
            href="https://city-jaluzi.ru/cat/vertikalnye"
            className="page__header-link"
          >
            Вертикальные
          </a>
          <span>/</span>
          <a className="page__header-link">{product?.description}</a>
        </div>
        <div className="page__name page__name--dekst">
          <h1 className="page__title">{product?.description}</h1>
        </div>
      </div>

      <section className="card">
        <div className="card__container">
          <div className="card__left">
            <div className="card__left-photo card__left-photo-dekst">
              <div className="card__left-min">
                <div className="card__arrow">
                  <svg>
                    <use xlinkHref="#cardArrow"></use>
                  </svg>
                </div>
                <div
                  className={
                    sldierClick.image
                      ? "card__left-min-item active"
                      : "card__left-min-item"
                  }
                  onClick={() => handleClickSlider(1)}
                >
                  <img
                    data-src="https://city-jaluzi.ru/storage/2023/12/14/d181ea9c0a0fe563f9a1cf36440ad79a6b8b3339.webp"
                    alt="Вертикальные тканевые жалюзи МАЛЬТА 5850 зеленый 89 мм"
                    className=" ls-is-cached lazyloaded"
                    src="https://city-jaluzi.ru/storage/2023/12/14/d181ea9c0a0fe563f9a1cf36440ad79a6b8b3339.webp"
                  />
                </div>
                <div
                  className={
                    sldierClick.dopimage
                      ? "card__left-min-item active"
                      : "card__left-min-item"
                  }
                  onClick={() => handleClickSlider(2)}
                >
                  <img
                    data-src="https://city-jaluzi.ru/catalog/dop-images/vertikalnye_tkanevye_zaliuzi/vertikalnye_tkanevye_zaliuzi_malta_5850_zelenyi_89_mm.png"
                    alt="Вертикальные тканевые жалюзи МАЛЬТА 5850 зеленый 89 мм"
                    className=" ls-is-cached lazyloaded"
                    src="https://city-jaluzi.ru/catalog/dop-images/vertikalnye_tkanevye_zaliuzi/vertikalnye_tkanevye_zaliuzi_malta_5850_zelenyi_89_mm.png"
                  />
                </div>
              </div>
              <div className="swiper-container card__left-slide">
                <div className="card__left-big swiper-wrapper">
                  <div
                    className="card__left-big-item swiper-slide"
                    style={
                      sldierClick.image
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <div className="card__left-big-discount">-30%</div>
                    <div className="card__left-big-photo image__wrapper">
                      <img
                        className="minimized  ls-is-cached lazyloaded"
                        data-src="https://city-jaluzi.ru/storage/2023/12/14/d181ea9c0a0fe563f9a1cf36440ad79a6b8b3339.webp"
                        alt={product?.image_url}
                        src={product?.image_url}
                      />
                    </div>
                  </div>
                  <div
                    className="card__left-big-item swiper-slide"
                    style={
                      sldierClick.dopimage
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <div className="card__left-big-discount">-30%</div>
                    <div className="card__left-big-photo ">
                      <img
                        className="minimized ls-is-cached lazyloaded"
                        data-src="https://city-jaluzi.ru/catalog/dop-images/vertikalnye_tkanevye_zaliuzi/vertikalnye_tkanevye_zaliuzi_malta_5850_zelenyi_89_mm.png"
                        alt="Вертикальные тканевые жалюзи МАЛЬТА 5850 зеленый 89 мм"
                        src="https://city-jaluzi.ru/catalog/dop-images/vertikalnye_tkanevye_zaliuzi/vertikalnye_tkanevye_zaliuzi_malta_5850_zelenyi_89_mm.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__left-photos-mob-body swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="card__left-photos-mob swiper-wrapper"
                id="swiper-wrapper-49249dc1c135bf4f"
                aria-live="polite"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="card__left-mob-photo swiper-slide">
                  <img
                    src="https://city-jaluzi.ru/storage/2023/12/14/d181ea9c0a0fe563f9a1cf36440ad79a6b8b3339.webp"
                    alt=""
                  />
                </div>
                <div className="card__left-mob-photo swiper-slide">
                  <img
                    src="https://city-jaluzi.ru/catalog/dop-images/vertikalnye_tkanevye_zaliuzi/vertikalnye_tkanevye_zaliuzi_malta_5850_zelenyi_89_mm.png"
                    alt="Вертикальные тканевые жалюзи МАЛЬТА 5850 зеленый 89 мм"
                  />
                </div>
              </div>

              <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                <span className="swiper-pagination-current">0</span>/
                <span className="swiper-pagination-total">0</span>
              </div>
              <div className="card__left-mob-photo-arrow">
                <Link to="/">
                  <img
                    src="https://city-jaluzi.ru/assets/img/card/arrow-mob.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="card__left-mob-photo-heart">
                <svg>
                  <use xlinkHref="#heartBuy"></use>
                </svg>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
            <div className="card__right-slide">
              <div className="card__cost">
                <div className="card__cost-present">
                  <span className="result_sale">768</span> ₽
                </div>

                <div className="card__cost-past">
                  <span className="price_makup"> 1097</span>₽
                </div>
              </div>
              <div className="card__right-block">
                <div className="card__right-text">Цвет:</div>
                <div className="card__right-type"> зеленый</div>
              </div>
            </div>
            <div className="page__name page__name--mobile">
              <h2 className="page__title">
                Вертикальные тканевые жалюзи МАЛЬТА 5850 зеленый 89 мм
              </h2>
            </div>

            <div className="card__description">
              <div className="card__description-title page__title">
                Описание
              </div>
              <div className="card__description-text">
                <p>Вертикальные тканевые жалюзи</p> <br /> * Не являются
                публичной офертой (ст.435 ГК РФ, cт. 437 ГК РФ)
              </div>
            </div>

            <div className="specifications">
              <div className="specifications__body">
                <div className="specifications__col">
                  <div className="specifications__suptitle">Характеристики</div>

                  <div className="specifications__item">
                    <div className="specifications__name">Цвет</div>
                    <span></span>
                    <div className="specifications__info">green</div>
                  </div>
                  <div className="specifications__item">
                    <div className="specifications__name">Прозрачность</div>
                    <span></span>
                    <div className="specifications__info">45</div>
                  </div>
                  <div className="specifications__item">
                    <div className="specifications__name">Состав</div>
                    <span></span>
                    <div className="specifications__info">100%P</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">Ширина ролика</div>
                    <span></span>
                    <div className="specifications__info">см.</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">Структура</div>
                    <span></span>
                    <div className="specifications__info">жаккард</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">Вес</div>
                    <span></span>
                    <div className="specifications__info">204 г/м2</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">Огнестойкость</div>
                    <span></span>
                    <div className="specifications__info"> Нет</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">
                      Подходит ли для влажных помещений
                    </div>
                    <span></span>
                    <div className="specifications__info"> Не подходит</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">Отражающий слой</div>
                    <span></span>
                    <div className="specifications__info">0</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">
                      Стойкость к выцветанию
                    </div>
                    <span></span>
                    <div className="specifications__info">1</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">Уход и чистка</div>
                    <span></span>
                    <div className="specifications__info">Сухая чистка</div>
                  </div>

                  <div className="specifications__item">
                    <div className="specifications__name">
                      {" "}
                      Страна происхождения
                    </div>
                    <span></span>
                    <div className="specifications__info">Китай</div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="specifications__link specifications__button-first"
              >
                Развернуть характеристики
              </a>
              <a
                href="#"
                className="specifications__link specifications__button-second hide"
              >
                Свернуть характеристики
              </a>
            </div>
          </div>

          <div className="card__right">
            <div className="card__right-slide">
              <div className="card__cost">
                <div className="card__cost-present">
                  <span className="result_sale">{product?.sale_price}</span>
                </div>
                <div className="card__cost-past">
                  <span className="price_makup">{product?.price}</span>
                </div>
              </div>
              <div className="card__right-inner">
                <h1>{`< Slider: Image >`}</h1>
              </div>
            </div>

            <form id="form">
              <input
                type="hidden"
                name="token"
                value={state.token}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="hidden"
                name="markup"
                value={state.markup}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="hidden"
                name="sale"
                value={state.sale}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="hidden"
                name="curs_dolar"
                value={state.curs_dolar}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="hidden"
                name="type_calc"
                value={state.type_calc}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="hidden"
                name="id_product"
                value={state.id_product}
                onChange={(e) => handleChange(e)}
              />

              <div className="card__buttons">
                <div className="card__buttons-top">
                  <div className="card__button">
                    <button
                      type="button"
                      className="card__btn card__btn--fill"
                      onClick={() => {
                        if (product) add(product);
                      }}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                  {/* <div className="card__button-heart">
                  <svg>
                    <use xlinkHref="#heartBuy"></use>
                  </svg>
                </div> */}
                </div>
              </div>

              {/* <div className="card__element">
              <div className="card__element-suptitle">Параметры</div>
              <span style={{ color: 'red' }}></span>
              <h1 style={{ color: 'coral' }}>
                <span
                  className="result_message"
                  style={{ color: 'red' }}
                ></span>
              </h1>

              <div className="card__element-form">
                <div className="card__element-form-item option_validate">
                  <label>Ширина (см)</label>
                  <input
                    id="width"
                    type="number"
                    name="width"
                    value={state.with}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div className="option_validate card__element-form-item  ">
                  <label>Высота (см)</label>
                  <input
                    id="height"
                    type="number"
                    name="height"
                    value={state.height}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div className="card__element-form-item option_validate">
                  <label>Кол-во (шт)</label>
                  <input
                    id="quantity"
                    type="number"
                    name="quantity"
                    value={state.quantity}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="card__element">
                <div className="card__element-suptitle">Тип управления</div>

                <div className="select-wrapper">
                  <select
                    className="select"
                    name="opt_695_opt"
                    onChange={(e) => handleSelect(e)}
                    id=""
                    required
                  >
                    <option value="12431" selected>
                      К управлению 0 ₽
                    </option>
                    <option value="12432"> От центра 0 ₽</option>
                    <option value="12433"> От управления 0 ₽</option>
                    <option value="12434"> К центру 0 ₽</option>
                  </select>
                </div>
              </div>

              <div className="card__element">
                <div className="card__element-suptitle">Управление</div>

                <div className="select-wrapper">
                  <select
                    className="select"
                    name="opt_696_opt"
                    id=""
                    required
                  >
                    <option value="12435"> Правое 0 ₽</option>
                    <option value="12436"> Левое 0 ₽</option>
                  </select>
                </div>
              </div>

              <div className="card__element">
                <div className="card__element-suptitle">
                  Длина управления (мм)
                </div>
                <div className="card__element-form-item option_validate">
                  <input
                    name="opt_697_opt"
                    type="number"
                    value="1000"
                    required
                  />
                </div>
              </div>

              <div className="card__element">
                <div className="card__element-suptitle">Тип крепления</div>

                <div className="select-wrapper">
                  <select
                    className="select"
                    name="opt_787_opt"
                    id=""
                    required
                  >
                    <option value="13026" selected>
                      {' '}
                      Стена 0 ₽
                    </option>
                    <option value="13027"> Потолок 0 ₽</option>
                    <option value="13028"> Наборный потолок 0 ₽</option>
                  </select>
                </div>
              </div>

              <div className="card__buttons-mob">
                <button className="card__btn" onClick={() => {}}>
                  В корзину
                </button>
              </div>

              <div className="specifications specifications__right">
                <div className="specifications__body">
                  <div className="specifications__col">
                    <div className="specifications__suptitle">
                      Характеристики
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">Цвет</div>
                      <span></span>
                      <div className="specifications__info">turquoise</div>
                    </div>
                    <div className="specifications__item">
                      <div className="specifications__name">
                        Прозрачность
                      </div>
                      <span></span>
                      <div className="specifications__info">45</div>
                    </div>
                    <div className="specifications__item">
                      <div className="specifications__name">Состав</div>
                      <span></span>
                      <div className="specifications__info">100%P</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        Ширина ролика
                      </div>
                      <span></span>
                      <div className="specifications__info">см.</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">Структура</div>
                      <span></span>
                      <div className="specifications__info">жаккард</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">Вес</div>
                      <span></span>
                      <div className="specifications__info">204 г/м2</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        Огнестойкость
                      </div>
                      <span></span>
                      <div className="specifications__info"> Нет</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        Подходит ли для влажных помещений
                      </div>
                      <span></span>
                      <div className="specifications__info">
                        {' '}
                        Не подходит
                      </div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        Отражающий слой
                      </div>
                      <span></span>
                      <div className="specifications__info">0</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        Стойкость к выцветанию
                      </div>
                      <span></span>
                      <div className="specifications__info">1</div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        Уход и чистка
                      </div>
                      <span></span>
                      <div className="specifications__info">
                        Сухая чистка
                      </div>
                    </div>

                    <div className="specifications__item">
                      <div className="specifications__name">
                        {' '}
                        Страна происхождения
                      </div>
                      <span></span>
                      <div className="specifications__info">Китай</div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="specifications__link specifications__button-first"
                >
                  Развернуть характеристики
                </a>
                <a
                  href="#"
                  className="specifications__link specifications__button-second hide"
                >
                  Свернуть характеристики
                </a>
              </div>
            </div> */}
              <div className="card__element">
                <div className="card__buttons-mob">
                  <button
                    type="button"
                    className="card__btn"
                    onClick={() => {
                      if (product) add(product);
                    }}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
