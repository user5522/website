import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import NotFound from "/src/routes/404";
import Vbot from "/src/routes/Vbot";
import Beta from "/src/routes/Beta";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path="vbot" element={<Vbot />} />
      <Route path="beta" element={<Beta />} />
    </Routes>
  </BrowserRouter>
);
