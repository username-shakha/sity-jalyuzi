import { useMemo } from "react";
import useFetch from "@/hooks/useFetch";
import { IProducts } from "@/interfaces";
import Card from "./components/Card";

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
      <section className="like">
        <div className="like__container">
          <h2 className="like__title title-block">
            Возможно вам, Понравится {loading && <strong> Loading...</strong>}{" "}
            {error && <strong> {error.message}...</strong>}
          </h2>
          <div className="like__inner">
            {jalousie?.map((product: IProducts) => (
              <Card key={product.id} product={product} />
            ))}
            <div className="like__button">
              <button className="like__btn">
                <a href="">
                  <span className="like__btn-text">Показать еще</span>
                </a>
                <div className="like__btn-arrow">
                  <svg>
                    <use xlinkHref="#arrowduwn"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="like">
        <div className="like__container">
          <h2 className="like__title title-block">
            Мы производим Шторы{loading && <strong> Loading...</strong>}{" "}
            {error && <strong> {error.message}...</strong>}
          </h2>
          <div className="like__inner">
            {curtains?.map((product: IProducts) => (
              <Card key={product.id} product={product} />
            ))}
            <div className="like__button">
              <button className="like__btn">
                <a href="">
                  <span className="like__btn-text">Показать еще</span>
                </a>
                <div className="like__btn-arrow">
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
