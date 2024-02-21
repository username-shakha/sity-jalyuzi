import { Link } from "react-router-dom";
import "./Card.scss";
import "./CardMedia.scss";

interface ICardProps {
  href: string;
  img_url: string;
  category_names: string;
}

const Card = ({ href, img_url, category_names }: ICardProps): JSX.Element => {
  return (
    <div className="product__col">
      <Link to={href} className="product__item">
        <div className="product__item-bg">
          <img src={img_url} alt={category_names} />
        </div>
        <div className="product__item-info"></div>
        <div className="product__item-kind">{category_names}</div>
      </Link>
    </div>
  );
};

export default Card;
