import { useState } from "react";

const Catalog = () => {
  const [state, setState] = useState(false);
  return (
    <>
      {state && (
        <div className="modal show" id="catalog-modal">
          <div
            className="menu__close"
            onClick={() => setState((prev) => !prev)}
          >
            <svg>
              <use xlinkHref="#menuClose"></use>
            </svg>
          </div>
          <div className="modal__dialog" style={{ transform: "none" }}>
            <div className="modal__body">
              <div className="modal__sidebar">
                <div className="modal__sidebar-col">
                  <li className="modal__sidebar-item">
                    <div className="modal__sidebar-item-block">
                      <div className="modal__sidebar-icon">
                        <img
                          src="https://city-jaluzi.ru/public/assets/img/menu-icon/roller-blinds.svg"
                          alt=""
                        />
                      </div>
                      <div className="modal__sidebar-text">Рулонные шторы</div>
                    </div>
                    <div className="modal__mobile modal__mobile-window ">
                      <div className="modal__mobile-content">
                        <div className="modal__mobile-title" id="block-1">
                          Рулонные Шторы
                        </div>
                        <div className="modal__mobile-list">
                          <ul className="modal__list">
                            <li className="modal__mobile-item">
                              <a
                                href="https://city-jaluzi.ru/cat/rulonnye-story/rulonnye-story-mini"
                                className="modal__suptitle"
                              >
                                Рулонные шторы MINI
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="modal__block">
                      <div className="modal__block-body">
                        <div className="modal__body-inner">
                          <ul className="modal__list">
                            <li>
                              <a
                                href="https://city-jaluzi.ru/cat/rulonnye-story/rulonnye-story-mini"
                                className="modal__suptitle"
                              >
                                Рулонные шторы MINI
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="modal__photo">
                        <img
                          src="https://city-jaluzi.ru/assets/img/menu-big/Рулонные шторы.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Catalog;
