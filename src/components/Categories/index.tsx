import Card from "./Card";
import { categories_data } from "@/data";

const Categories = (): JSX.Element => {
  return (
    <section className="product">
      <div className="product__container">
        <h2 className="like__title title-block">
          Самые покупаемые категории товаров
        </h2>
        <div className="product__inner">
          {!!categories_data.length &&
            categories_data.map((category) => (
              <Card
                key={category.id}
                href={category.href}
                img_url={category.img_url}
                category_names={category.category_names}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
