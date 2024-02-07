import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} index />
      </Route>
    </Routes>
  );
};

export default App;
