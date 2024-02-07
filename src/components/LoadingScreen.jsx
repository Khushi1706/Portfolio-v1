import React from "react";
import loader from "../assets/my_awesome_loader.svg";
const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src={loader} alt="" />
      </div>
      <div>
        <p className="text-purple-900 font-bold">
          A lot going on at the moment!
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
