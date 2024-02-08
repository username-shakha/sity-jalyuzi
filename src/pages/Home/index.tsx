import { FC } from "react";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Goods from "@/components/Goods";

const Home: FC = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Categories />
      <Goods />
    </>
  );
};

export default Home;
