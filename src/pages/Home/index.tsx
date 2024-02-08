import { FC } from "react";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

const Home: FC = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};

export default Home;
