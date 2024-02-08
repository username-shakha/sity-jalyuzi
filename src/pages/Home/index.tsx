import { FC } from "react";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Goods from "@/components/Goods";
import Info from "@/components/Info";
import Partners from "@/components/Partners";
import Article from "@/components/Article";

const Home: FC = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Categories />
      <Goods />
      <Info />
      <Partners />
      <Article />
    </>
  );
};

export default Home;
