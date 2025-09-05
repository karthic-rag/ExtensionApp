import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { AssestContextProvider } from "./context/ImgAssestsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <AssestContextProvider>
        <App />
      </AssestContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
