import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import { PaymentMethods } from "./pages/Contact/PaymentMethods";
import { ReturnGoods } from "./pages/Contact/ReturnGoods";

const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} index />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/return-goods" element={<ReturnGoods />} />
      </Route>
    </Routes>
  );
};

export default App;
