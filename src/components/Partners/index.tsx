import { clientslogo } from "@/assets";

const Partners = () => {
  return (
    <section className="clients">
      <div className="clients__container">
        <h2 className="clients__title title-block">Нам доверяют</h2>
        <div className="clients__inner">
          {clientslogo.length &&
            clientslogo.map((image, index) => (
              <div key={index} className="clients__col">
                <div className="clients__item">
                  <div
                    className={`clients__item-photo ${
                      index === 1 || index === 7 || index === 11 || index === 13
                        ? "clients__item-photo--big"
                        : ""
                    }`}
                  >
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
