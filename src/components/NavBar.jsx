import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { dataSet } from "../assets/data";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const [category, setCate] = useState("all");
  const data = useContext(ThemeContext);

  const applyFilter = () => {
    if (category === "all") {
      data.setData(dataSet);
    }

    if (category === "active") {
      data.setData(dataSet.filter((items) => items.isActive));
    }

    if (category === "inactive") {
      data.setData(dataSet.filter((items) => !items.isActive));
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category]);
  return (
    <div className=" flex sm:flex-row flex-col justify-between items-center max-w-[85%] mt-8 mb-7 m-auto ">
      <div className="mt-2">
        <h1 className="ml-2 my-3 font-bold text-2xl dark:text-light-white text-dark-900">
          Extensions List
        </h1>
      </div>
      <div className="flex gap-2">
        <NavLink to={"/"} onClick={() => setCate("all")}>
          <button className="btn-light dark:bg-dark-700 dark:hover:bg-dark-600 dark:border dark:border-dark-600 dark:text-light-white">
            All
          </button>
        </NavLink>
        <NavLink to={"/active"} onClick={() => setCate("active")}>
          <button className="btn-light dark:bg-dark-700 dark:hover:bg-dark-600 dark:border dark:border-dark-600 dark:text-light-white">
            Active
          </button>
        </NavLink>
        <NavLink to={"/inactive"} onClick={() => setCate("inactive")}>
          <button className="btn-light dark:bg-dark-700 dark:hover:bg-dark-600 dark:border dark:border-dark-600 dark:text-light-white ">
            Inactive
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
