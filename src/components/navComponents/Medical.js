import React from "react";

function Medical() {
  return (
    <div className="text-gray-700 max-w-3xl mx-auto ">
      <div className="ml-4">
        <div className="flex gap-10  pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Issue:</h2>
          <p>Medical Issue 1 </p>
        </div>
        <div className="flex gap-10  pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Status: </h2>
          <p className="text-red-500">Active</p>
        </div>
        <div className="flex gap-10  pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Description:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue sed phasellus vel
            bibendum neque nulla aliquam aliquet. Sit feugiat faucibus cras sem
            lacus. Pulvinar arcu tellus diam eu. Tristique aliquam eu gravida
            malesuada vel maecenas. Dis pretium dui cursus eget nam dui dui nibh
            maecenas. Volutpat imperdiet sollicitudin in.
          </p>
        </div>
        <div className="flex  gap-10 pb-5 justify-start">
          <h2 className="max-w-[70px] pr-10">Prescribed Medicines:</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur. Lectus diam.</li>
            <li>Lorem ipsum dolor sit amet consectetur. Blandit viverra.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Medical;
