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
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme.isDark]);
  return (
    <div className="min-h-screen font-Noto p-4">
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
