import React, { useContext } from "react";
import { AssestContext } from "../context/ImgAssestsContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const data = useContext(AssestContext);
  const theme = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center border-2 light-border dark:border-none bg-light-white dark:bg-dark-800 p-1 max-w-[85%] min-h-10 m-auto rounded-xl">
      <div className="p-2">
        <img
          src={theme.isDark ? data.logoDark : data.logoLight}
          alt=""
          width={125}
        />
      </div>
      <div
        className="dark:bg-dark-700 dark:hover:bg-dark-600 bg-light-100 hover:bg-light-300 w-11 h-11 flex justify-center items-center rounded-lg mx-1 back"
        onClick={() => theme.setDark(!theme.isDark)}
      >
        <img src={theme.isDark ? data.sun : data.moon} alt="" />
      </div>
    </div>
  );
};

export default Header;
