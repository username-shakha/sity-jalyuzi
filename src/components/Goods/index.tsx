import Card from "./components/Card";
import "./style.scss";

const Goods = () => {
  return (
    <>
      <section className="we-produce">
        <div className="we-produce__container">
          <h2 className="we-produce__title title-box">Мы производим</h2>
          <div className="we-produce__inner">
            {/* {!!jalousie.length &&
              jalousie.map((product, index) => (
                <Card key={index} loading={loading} product={product} />
              ))} */}
            <div className="we-produce__button">
              <button className="we-produce__btn">
                <a href="">
                  <span className="we-produce__btn-text">Показать еще</span>
                </a>
                <div className="we-produce__btn-arrow">
                  <svg>
                    <use xlinkHref="#arrowduwn"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Goods;
