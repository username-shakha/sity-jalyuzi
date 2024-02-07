import href from "../../../assets/sprite/index.svg";

interface Props {
  id: "telegram" | "whatsapp";
}

export const Sprite = ({ id }: Props) => {
  return (
    <svg>
      <use xlinkHref={`${href}#${id}`}></use>
    </svg>
  );
};
