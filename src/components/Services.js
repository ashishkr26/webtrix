import React from "react";
import { serviceData } from "../assets/mockData";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";
import Choose from "./Choose";

const Services = () => {
  const navigate = useNavigate();
  return (
  <>
    <div className="p-4 bg-gray-200 my-10 font-poppins text-gray-800">
      <div className=" text-5xl font-semibold my-10 mx-24 text-center">
        Empowering Businesses with Software and Web Excellence
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={()=>navigate("/services")} className="bg-yellow-500 text-2xl font-semibold my-10 mx-24 p-4 rounded-md text-white ">
          VIEW ALL SERVICES
        </button>
      </div>
    </div>
    <Choose/>
  </>
  
  );
};

export default Services;
