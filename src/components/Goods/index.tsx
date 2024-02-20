import { useMemo } from "react";
import useFetch from "@/hooks/useFetch";
import { IProducts } from "@/interfaces";
import Card from "./components/Card";

import "./style.scss";

const Goods = () => {
  const URL = "https://657bc4a7394ca9e4af14b9a3.mockapi.io/products";
  //REST API CAll
  const { data, loading, error } = useFetch<IProducts[]>(URL);

  const jalousie = useMemo(() => {
    return data?.filter(
      (product: IProducts) => product.category === "vertikalnye"
    );
  }, [data]);

  const curtains = useMemo(() => {
    return data?.filter(
      (product: IProducts) => product.category === "rulonnye-story"
    );
  }, [data]);

  return (
    <>
      <section className="we-produce">
        <div className="we-produce__container">
          <h2 className="we-produce__title title-box">
            Возможно вам, Понравится {loading && <strong> Loading...</strong>}{" "}
            {error && <strong> {error.message}...</strong>}
          </h2>
          <div className="we-produce__inner">
            {jalousie?.map((product: IProducts) => (
              <Card key={product.id} product={product} />
            ))}
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

      <section className="we-produce">
        <div className="we-produce__container">
          <h2 className="we-produce__title title-box">
            Мы производим Шторы{loading && <strong> Loading...</strong>}{" "}
            {error && <strong> {error.message}...</strong>}
          </h2>
          <div className="we-produce__inner">
            {curtains?.map((product: IProducts) => (
              <Card key={product.id} product={product} />
            ))}
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
