import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";

const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} index />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
};

export default App;
