import { clientslogo } from "@/assets";
import "./style.scss";
const Partners = () => {
  return (
    <section className="clients">
      <div className="clients__container">
        <h2 className="clients__title title-box">Нам доверяют</h2>
        <div className="clients__inner">
          {clientslogo.length &&
            clientslogo.map((image, index) => (
              <div key={index} className="clients__col">
                <div className="clients__item">
                  <div className="clients__item-photo">
                    <img src={image} alt="client" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
