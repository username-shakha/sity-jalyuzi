import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default App;
