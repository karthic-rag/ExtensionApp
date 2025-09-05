import React from "react";
import ExtensionCard from "../components/ExtensionCard";

const Home = () => {
  return (
    <div className="max-w-[85%]  m-auto lg:grid-cols-3 sm:grid-cols-2  grid grid-cols-1 place-content-stretch  gap-3">
      <ExtensionCard />
    </div>
  );
};

export default Home;
