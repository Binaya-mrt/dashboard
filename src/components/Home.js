import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Home() {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  return (
    <div
      className={
        !popup
          ? "bg-white h-screen  flex justify-center items-center"
          : "bg-gray-400 h-screen flex justify-center items-center"
      }
    >
      <button
        onClick={openPopup}
        className=" rounded-full bg-bgColor-primary text-white text-2xl 
        px-10 py-4 "
      >
        Click Me
      </button>

      <div
        className={
          !popup
            ? "hidden"
            : " flex justify-center absolute my-[3%] items-center z-10  max-w-2xl bg-white rounded-md  min-w-min "
        }
      >
        <Dashboard fun={openPopup} />
      </div>
    </div>
  );
}

export default Home;
