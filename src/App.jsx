import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Active from "./pages/Active";
import InActive from "./pages/InActive";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    if (theme.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme.isDark]);
  return (
    <div className="bg-linear-180 from-[#EBF2FC] to-[#EEF8F9] dark:bg-linear-180 dark:from-[#040918] dark:to-[#091540] min-h-screen font-Noto p-4">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active" element={<Active />} />
        <Route path="/inactive" element={<InActive />} />
      </Routes>
    </div>
  );
};

export default App;
