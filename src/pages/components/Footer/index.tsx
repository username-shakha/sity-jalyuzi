import Collapse from "@/components/Collapse";

import Sprite from "@/components/helper/Sprite";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__inner">
            <Collapse title="Покупателям">
              <li>
                <a
                  href="https://city-jaluzi.ru/dilevery"
                  className="footer__link"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/payment-methods"
                  className="footer__link"
                >
                  Способы оплаты
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/returns"
                  className="footer__link"
                >
                  Возврат товара
                </a>
              </li>
              <li>
                <a
                  href=" https://city-jaluzi.ru/guarantees"
                  className="footer__link"
                >
                  Гарантии
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/services"
                  className="footer__link"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/question-answer"
                  className="footer__link"
                >
                  Вопросы и ответы
                </a>
              </li>
            </Collapse>
            <Collapse title="Полезное">
              <li>
                <a
                  href="https://city-jaluzi.ru/instructions"
                  className="footer__link"
                >
                  Инструкции
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/blog/vertikalnye-zhalyuzi"
                  className="footer__link"
                >
                  Статьи
                </a>
              </li>

              <li>
                <a
                  href="https://program.city-jaluzi.ru/download-the-contract"
                  className="footer__link"
                >
                  Типовой Договор ООО Авалон (скачать)
                </a>
              </li>
              <li>
                <a
                  href="https://program.city-jaluzi.ru/download-rules"
                  className="footer__link"
                >
                  Рекомендации при совершении операций с банковской картой через
                  сеть Интернет (скачать)
                </a>
              </li>
              <li>
                <a
                  href="https://program.city-jaluzi.ru/download-soglasie"
                  className="footer__link"
                >
                  Согласие на обработку персональных данных (скачать)
                </a>
              </li>
              <li>
                <a
                  href="https://program.city-jaluzi.ru/download-deistvia"
                  className="footer__link"
                >
                  Общие рекомендации(скачать)
                </a>
              </li>
            </Collapse>
            <Collapse title="Компания">
              <li>
                <a href="https://city-jaluzi.ru/about" className="footer__link">
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/contacts"
                  className="footer__link"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/requisites"
                  className="footer__link"
                >
                  Реквизиты
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/documentation"
                  className="footer__link"
                >
                  Документы
                </a>
              </li>
              <li>
                <a
                  href="https://city-jaluzi.ru/vacancies"
                  className="footer__link"
                >
                  Вакансии
                </a>
              </li>
            </Collapse>
            <Collapse title="Мы в соцсетях">
              <li>
                <a
                  href="https://vk.com/city_jaluzi"
                  className="footer__link"
                  target="_blank"
                >
                  Вконтакте
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/group/52785973887068"
                  className="footer__link"
                  target="_blank"
                >
                  Одноклассники
                </a>
              </li>
            </Collapse>
            <Collapse title="Контакты">
              <a href="tel:+7 (495) 542-76-98" className="footer__tel">
                +7 (495) 542-76-98
              </a>
              <a href="mailto:info@city-jaluzi.ru" className="footer__mail">
                info@city-jaluzi.ru
              </a>
              <div className="footer__socials">
                <div className="footer__social">
                  <a
                    href="https://api.whatsapp.com/send?phone=79295035272"
                    target="_blank"
                  >
                    <Sprite id="whatsapp" />
                  </a>
                </div>
                <div className="footer__social">
                  <a href="https://telegram.im/@cityjaluzi" target="_blank">
                    <Sprite id="telegram" />
                  </a>
                </div>
              </div>
              <address className="footer__address">
                <b>
                  109369, Москва <br />
                  Новочеркасский б-р, дом 41, корпус 3{" "}
                </b>
                <br />
                Мы принимаем к оплате на сайте <br />
                <img src="https://city-jaluzi.ru/photo/payment.png" alt="" />
              </address>
            </Collapse>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <div className="footer__container">
          <div className="footer__copy-text">
            2022 © Сити Жалюзи — производим жалюзи, собираем карнизы, шьем
            шторы. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
