import React from "react";

const InfoCards = () => {
  return (
    <div className="mx-10 my-4 flex flex-col ">
      <div className="my-1 grid grid-flow-col grid-cols-12">
        <div className=" col-span-5 border border-gray-600 p-8">Established 2025</div>
        <div className=" col-span-3 border border-gray-600 p-8">40+Users</div>
        <div className=" col-span-4 border border-gray-600 p-8">Team of 20+</div>
      </div>

      <div className=" grid grid-flow-col grid-cols-12">
        <div className=" col-span-3 border border-gray-600 p-8">7+ Years Experience</div>
        <div className=" col-span-6 border border-gray-600 p-8">4.9 ratings on Google</div>
        <div className=" col-span-3 border border-gray-600 p-8">10+ Awards</div>
      </div>
    </div>
  );
};

export default InfoCards;
