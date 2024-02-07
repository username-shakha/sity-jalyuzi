import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <div className="push"></div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
