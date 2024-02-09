import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "@/components/Modal/Catalog";

const Layout: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <div className="push"></div>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Catalog />
    </div>
  );
};

export default Layout;
