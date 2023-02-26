import React from "react";
import Info from "./navComponents/Info";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="bg-white rounded-lg ">
      <div className="flex justify-between mx-5 py-3 ">
        <h2>User info</h2>
        <button>X</button>
      </div>
      <hr></hr>
      <div className="flex justify-between my-5 mx-2 pb-2">
        <div className="flex justify-center items-center">
          <img
            className="w-20 h-20 rounded-3xl"
            src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
          <div className="px-4">
            <h2>Devan lane</h2>
            <p className="text-bgColor-primary">shradhyashakya12@gmail.com</p>
            <p className="text-gray-500 text-[12px]">Techer:Microbiology</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="bg-green-600 rounded-3xl px-8 py-2 text-center text-white text-lg">
            <p>Call</p>
          </div>
          <div className="bg-bgColor-primary rounded-3xl px-8 py-2 text-center text-white text-lg ">
            <p>Message</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Dashboard;
