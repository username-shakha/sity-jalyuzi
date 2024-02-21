import { useNavigate } from "react-router-dom";
import { IProducts } from "@/interfaces";
import "./style.scss";

interface ICardProps {
  product: IProducts;
}

const Card = ({ product }: ICardProps) => {
  const navigate = useNavigate();

  return (
    <div className="we-produce__col">
      <div
        className="we-produce__item"
        onClick={() => {
          if (product) navigate(`/details/${product.id}`);
        }}
      >
        <div className="we-produce__item-photo">
          <img
            data-src="https://city-jaluzi.ru/storage/2023/12/14/d89e2b403e97110109cb21a9c03826a79252a49a.webp"
            alt="Вертикальные тканевые жалюзи МАЛЬТА 5992 бирюзовый 89 мм"
            className=" ls-is-cached lazyloaded"
            src={product.image_url}
          />

          <div className="buy__item-discount">{product.discount}</div>

          <div className="we-produce__item-preview">
            <div className="we-produce__item-preview-text">
              {" "}
              Быстрый просмотр
            </div>
          </div>
        </div>
        <div className="we-produce__item-content">
          <div className="we-produce__item-cost">
            <div className="we-produce__item-new">{product.sale_price}</div>

            <div className="buy__item-old">{product.price}</div>
          </div>
          <div className="we-produce__item-discription">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
