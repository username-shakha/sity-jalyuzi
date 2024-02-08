import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <div className="push"></div>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
