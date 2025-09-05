import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import { ThemeContext } from "../context/ThemeContext";

const ExtensionCard = () => {
  const data = useContext(ThemeContext);
  return (
    <>
      {data.data.map((item, index) => (
        <div key={index}>
          <div className="max-w-[500px] h-[215px] p-4 dark:bg-dark-800 rounded-2xl dark:border dark:border-dark-600 light-card">
            <div className="flex gap-4 items-start min-h-34">
              <img src={item.logo} alt="" className="mt-1" />

              <div className="dark:text-light-white text-dark-900">
                <h1 className="font-bold ">{item.name}</h1>
                <p className="font-[200] mt-1 text-sm ">{item.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-end ">
              <button className="dark:hover:bg-dark-red dark:hover:text-dark-900 dark:bg-dark-800 border-2 dark:border-dark-600 px-4 py-2 rounded-3xl font-medium dark:text-light-white rm-btn">
                Remove
              </button>
              <ToggleButton active={item.isActive} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtensionCard;
