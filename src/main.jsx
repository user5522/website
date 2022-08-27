import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./routes/404";
import Vbot from "./routes/Vbot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="vbot" element={<Vbot />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
