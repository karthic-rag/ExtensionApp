import { createContext } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import logoDark from "../assets/images/logo-1.svg";
import logoLight from "../assets/images/logo.svg";

export const AssestContext = createContext();

export const AssestContextProvider = (props) => {
  const data = { moon, sun, logoDark, logoLight };
  return (
    <AssestContext.Provider value={data}>
      {props.children}
    </AssestContext.Provider>
  );
};
