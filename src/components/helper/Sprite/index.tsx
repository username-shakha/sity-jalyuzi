import href from "../../../assets/sprite/index.svg";

interface Props {
  id: "telegram" | "whatsapp";
}

const Sprite = ({ id }: Props): JSX.Element => {
  return (
    <svg>
      <use xlinkHref={`${href}#${id}`}></use>
    </svg>
  );
};
export default Sprite;
