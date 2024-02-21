import { createContext, useContext, ReactNode, FC, useState } from "react";
import { IProducts } from "../interfaces";

interface IContextCartProviderProps {
  children: ReactNode;
}

interface IContextCartValue {
  cart: IProducts[];
  add: (p: IProducts) => void;
  remove: (id: string) => void;
  quantity: (id: string, ac: string) => void;
}

const ContextCart = createContext<IContextCartValue | undefined>(undefined);

export const useContextCart = () => {
  const context = useContext(ContextCart);
  if (!context) {
    throw new Error(
      "useContextCart must be used within an ContextCartProvider"
    );
  }
  return context;
};

export const ContextCartProvider: FC<IContextCartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<IProducts[]>([]);
  // console.log(cart)
  const remove = (id: string) => {
    if (id) {
      setCart((prev) => prev.filter((product) => product.product_id !== id));
    }
  };

  const add = (p: IProducts) => {
    const check = cart.find((el) => el.id === p.id);
    if (!check) {
      setCart((prev) => [...prev, p]);
    }
  };

  const quantity = (id: string, ac: string) => {
    if (id && ac === "minus") {
      const newArray = cart.map((el) =>
        el.id === id && el.quantity > 1
          ? { ...el, quantity: el.quantity - 1 }
          : el
      );

      if (newArray.length) {
        setCart(newArray);
      }
    }

    if (id && ac === "plus") {
      const newArray = cart.map((el) =>
        el.id === id && el.quantity < el.in_stock
          ? { ...el, quantity: el.quantity + 1 }
          : el
      );

      if (newArray.length) {
        setCart(newArray);
      }
    }
  };
  const ContextCartValue: IContextCartValue = {
    cart,
    add,
    remove,
    quantity,
  };

  return (
    <ContextCart.Provider value={ContextCartValue}>
      {children}
    </ContextCart.Provider>
  );
};
