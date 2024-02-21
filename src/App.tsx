import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import { PaymentMethods } from "./pages/Delivery/PaymentMethods";
import { ReturnGoods } from "./pages/Delivery/ReturnGoods";
import { Guarantees } from "./pages/Delivery/Guarantees";
import { Services } from "./pages/Delivery/Services";
import { QuestionsAnswers } from "./pages/Delivery/QuestionsAnswers";
import { About } from "./pages/Contact/About";
import { Requisites } from "./pages/Contact/Requisites";

const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} index />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/return-goods" element={<ReturnGoods />} />
        <Route path="/guarantees" element={<Guarantees />} />
        <Route path="/services" element={<Services />} />
        <Route path="/questions-answers" element={<QuestionsAnswers />} />
        <Route path="/about" element={<About />} />
        <Route path="/requisites" element={<Requisites />} />
      </Route>
    </Routes>
  );
};

export default App;
