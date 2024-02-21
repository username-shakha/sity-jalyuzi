import { useNavigate } from "react-router-dom";
import { IProducts } from "@/interfaces";
import "./style.scss";

interface ICardProps {
  product: IProducts;
}

const Card = ({ product }: ICardProps) => {
  const navigate = useNavigate();

  return (
    <div className="like__col">
      <div
        className="like__item"
        onClick={() => {
          if (product) navigate(`/details/${product.id}`);
        }}
      >
        <div className="like__item-photo">
          <img
            data-src="https://city-jaluzi.ru/storage/2023/12/14/d89e2b403e97110109cb21a9c03826a79252a49a.webp"
            alt="Вертикальные тканевые жалюзи МАЛЬТА 5992 бирюзовый 89 мм"
            className=" ls-is-cached lazyloaded"
            src={product.image_url}
          />

          <div className="buy__item-discount">{product.discount}</div>

          <div className="like__item-preview">
            <div className="like__item-preview-text"> Быстрый просмотр</div>
          </div>
        </div>
        <div className="like__item-content">
          <div className="like__item-cost">
            <div className="like__item-new">{product.sale_price}</div>

            <div className="buy__item-old">{product.price}</div>
          </div>
          <div className="like__item-discription">{product.description}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
