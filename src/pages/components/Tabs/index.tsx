import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.scss";
import { nav1, nav2 } from "./constants";

export const TabsWithRouting = () => {
  const location = useLocation();
  const [state, setState] = useState(location);

  useEffect(() => {
    setState(location);
  }, [location]);

  const filtered = useMemo(() => {
    return location.pathname === "/delivery"
      ? nav1
      : location.pathname !== "/"
      ? nav2
      : [];
  }, [location]);

  //   console.log(location);
  console.log(filtered);
  return (
    <div className="page__container">
      <div className="page__navigation">
        {!!filtered.length &&
          filtered.map((nav, index) => (
            <div key={index} className="page__navigation-item">
              <Link
                to={nav.path}
                className={
                  state.pathname === nav.path
                    ? "page__navigation-link active"
                    : "page__navigation-link"
                }
              >
                {nav.label}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
