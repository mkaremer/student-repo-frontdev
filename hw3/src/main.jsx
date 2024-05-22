import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import List from "./pages/list";
import Population from "./pages/population";
import CustomRoute from "./pages/customRoute";
// import Navbar from "./components/navbar";

const Main = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/population" element={<Population />}></Route>
      <Route path="/customRoute" element={<CustomRoute />}></Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
