import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [isDark, setDark] = useState(true);
  const [data, setData] = useState([]);

  return (
    <ThemeContext.Provider value={{ isDark, setDark, data, setData }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
