import React from "react";

function Attendance() {
  return (
    <div className="bg-gray-100 h-fit ">
      <div className="flex justify-center gap-10 pt-5 ">
        <div className="px-5 py-5 text-center bg-white rounded-md mb-10">
          <h2 className="text-green-500 text-2xl">82%</h2>
          <p>Attendance</p>
        </div>
        <div className="px-5 py-5 text-center bg-white rounded-md mb-10">
          <h2 className="text-gray-500 text-2xl">12 Days</h2>
          <p>Paid Leave Remaining</p>
        </div>
        <div className="px-5 py-5 text-center bg-white rounded-md mb-10">
          <h2 className="text-red-500 text-2xl">2 Days</h2>
          <p>Absent in this month</p>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
