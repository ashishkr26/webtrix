import React, { useEffect } from "react";
import newbg from "../../assets/newbg.png";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../assets/store/appSlice";

const WebtrixSevice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Close the sidebar when the ContactUs page loads
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="m-10 flex justify-between">
      <div>
        <div className="text-blue-600 font-poppins">What we offer ?</div>
        <div className="text-3xl font-semibold font-poppins text-gray-600">
          Services
        </div>
      </div>
      <div className="flex justify-end ">
        <img className="w-2/3 shadow-xl" alt="bg" src={newbg} />
      </div>
    </div>
  );
};

export default WebtrixSevice;
