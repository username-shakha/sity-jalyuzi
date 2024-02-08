import Card from "./Card";
import { categories_data } from "@/data";
import "./Categories.scss";

const Categories = (): JSX.Element => {
  return (
    <section className="categories">
      <div className="categories__container">
        <h2 className="categories__title title-box">
          Самые покупаемые категории товаров
        </h2>
        <div className="categories__inner">
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
