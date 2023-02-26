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
            : " relative top-10 z-30  max-w-2xl bg-white rounded-md mx-auto min-w-min "
        }
      >
        <Dashboard ispopUp={popup} />
      </div>
    </div>
  );
}

export default Home;
