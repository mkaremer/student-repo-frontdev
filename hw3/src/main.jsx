//

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import List from "./pages/list";
import Population from "./pages/population";
import CustomRoute from "./pages/customRoute";
import Error from "./pages/error";

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/population" element={<Population />} />
      <Route path="/customRoute" element={<CustomRoute />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
