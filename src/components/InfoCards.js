import React from "react";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const InfoCards = () => {
  return (
    <div className="mx-10 my-4 flex flex-col ">
      {/*First Row of info cards*/}
      <div className="my-1 grid grid-flow-col grid-cols-11">
        <div className=" col-span-4 border border-gray-600 p-8 bg-clay flex flex-col items-center hover:scale-x-95 transition-all ease-in-out">
          <span>
            <AssuredWorkloadIcon sx={{ fontSize: 72, color: "white" }} />
          </span>
          <span className="text-white">Established 2025</span>
        </div>
        <div className=" col-span-3 border border-gray-600 p-8 bg-gray-700 flex flex-col items-center hover:scale-x-95 transition-all ease-in-out">
          <span>
            <AdminPanelSettingsIcon
              sx={{ fontSize: 72, color: "whitesmoke" }}
            />
          </span>
          <span className="text-white">40+Users</span>
        </div>
        <div className=" col-span-4 border border-gray-600 p-8 bg-slate-500 flex flex-col items-center hover:scale-x-95 transition-all ease-in-out">
          <span>
            <GroupsIcon sx={{ fontSize: 72, color: "whitesmoke" }} />
          </span>
          <span className="text-white">Team of 20+</span>
        </div>
      </div>
       {/*Second Row of info cards*/}
      <div className=" grid grid-flow-col grid-cols-12">
        <div className=" col-span-3 border border-gray-600 p-8 bg-indigo-300 flex flex-col items-center hover:scale-x-95 transition-all ease-in-out">
          <span>
            <HubOutlinedIcon sx={{ fontSize: 72, color: "white" }} />
          </span>
          <span className="text-white">7+ Years Experience</span>
        </div>
        <div className=" col-span-6 border border-gray-600 p-8 bg-zinc-500 flex flex-col items-center hover:scale-x-95 transition-all ease-in-out">
          <span>
            <StarsIcon sx={{ fontSize: 72, color: "whitesmoke" }} />
          </span>
          <span className="text-white">4.9 ratings on Google</span>
        </div>
        <div className=" col-span-3 border border-gray-500 p-8 bg-neutral-600 flex flex-col items-center hover:scale-x-95 transition-all ease-in-out">
          <span>
            <EmojiEventsIcon sx={{ fontSize: 72, color: "white" }} />
          </span>
          <span className="text-white">10+ Awards</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
