import React, { useState } from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "open footer__item acc accCl" : "footer__item acc"
      }`}
    >
      <div className="footer__title" onClick={toggleCollapse}>
        {title}
      </div>

      <nav
        className={
          isOpen ? "footer__list accD" : "footer__list accD dn collapse-content"
        }
      >
        {children}
      </nav>
    </div>
  );
};

export default Collapse;
