import React from "react";

function Info() {
  return (
    <div className="text-gray-700 max-w-3xl mx-auto ">
      <div className="ml-4">
        <div className="flex gap-10  pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">PAN No.:</h2>
          <p>674627939 </p>
        </div>
        <div className="flex gap-10  pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">DOB:</h2>
          <p>2055-10-23 </p>
        </div>
        <div className="flex gap-10  pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Gender:</h2>
          <p>Male </p>
        </div>
        <div className="flex  gap-10 pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Education:</h2>
          <p>Msc.CSIT Bsc.CSIT </p>
        </div>
        <div className="flex gap-10 pb-5  justify-start">
          <h2 className="max-w-[70px] pr-10">Additional Certificates:</h2>
          <p>Google Project Management, Child Pedalogy </p>
        </div>
        <div className="flex gap-10 pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Address:</h2>
          <p>Ratnanagar-08, Chitwan </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
