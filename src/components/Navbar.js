import React, { useState } from "react";
import Activity from "./navComponents/Activity";
import Attendance from "./navComponents/Attendance";
import Employment from "./navComponents/Employment";
import Info from "./navComponents/Info";
import Medical from "./navComponents/Medical";

function Navbar() {
  const [page, setPage] = useState("info");
  return (
    <div className="max-w-4xl p-3">
      <div className="">
        <ul className="flex items-center justify-center text-md  ">
          <li>
            <button
              onClick={() => setPage("info")}
              className={
                page === "info"
                  ? "px-3 py-2 mr-3 bg-bgColor-primary text-center rounded-md text-white"
                  : "px-3 py-2"
              }
            >
              Info
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("medical")}
              className={
                page === "medical"
                  ? "px-3 py-2 mr-3 bg-bgColor-primary text-center rounded-md text-white"
                  : "px-3 py-2"
              }
            >
              Medical History
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("employment")}
              className={
                page === "employment"
                  ? "px-3 py-2 mr-3 bg-bgColor-primary text-center rounded-md text-white"
                  : "px-3 py-2"
              }
            >
              Employment Info
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("attendance")}
              className={
                page === "attendance"
                  ? "px-3 py-2 mr-3 bg-bgColor-primary text-center rounded-md text-white"
                  : "px-3 py-2"
              }
            >
              Attendance
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("activity")}
              className={
                page === "activity"
                  ? "px-3 py-2 mr-3 bg-bgColor-primary text-center rounded-md text-white"
                  : "px-3 py-2"
              }
            >
              Activity Timeline
            </button>
          </li>

          <li>
            <button
              // onClick={() => setPage("info")}
              className={
                "px-3 py-2 mr-3 bg-gray-500 text-center rounded-md text-white"
              }
            >
              Edit
            </button>
          </li>
        </ul>
      </div>
      <hr className="my-3"></hr>

      <div className="min-h-[300px] max-w[300px] min-w[300px]">
        {page === "info" && <Info />}

        {page === "medical" && <Medical />}
        {page === "employment" && <Employment />}
        {page === "attendance" && <Attendance />}
        {page === "activity" && <Activity />}
      </div>
    </div>
  );
}

export default Navbar;
