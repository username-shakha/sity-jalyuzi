import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="push"></div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
