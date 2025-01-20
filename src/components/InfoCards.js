import React from "react";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const InfoCards = () => {
  return (
    <div className="mx-10 my-4 flex flex-col ">
      <div className="my-1 grid grid-flow-col grid-cols-11">
        <div className=" col-span-4 border border-gray-600 p-8 bg-clay flex flex-col items-center">
          <span>
            <AssuredWorkloadIcon sx={{fontSize:72}}/>
          </span>
          <span>Established 2025</span>
        </div>
        <div className=" col-span-3 border border-gray-600 p-8 bg-gray-700 flex flex-col items-center">
          <span>
            <AdminPanelSettingsIcon sx={{fontSize:72}}/>
          </span>
          <span>40+Users</span>
        </div>
        <div className=" col-span-4 border border-gray-600 p-8 bg-slate-200 flex flex-col items-center">
          <span>
            <GroupsIcon sx={{fontSize:72}}/>
          </span>
          <span>Team of 20+</span>
        </div>
      </div>

      <div className=" grid grid-flow-col grid-cols-12">
        <div className=" col-span-3 border border-gray-600 p-8 bg-amber-200 flex flex-col items-center">
          <span>
            <GroupsIcon sx={{fontSize:72}}/>
          </span>
          <span>7+ Years Experience</span>
        </div>
        <div className=" col-span-6 border border-gray-600 p-8 bg-zinc-500 flex flex-col items-center">
          <span>
            <StarsIcon sx={{fontSize:72}}/>
          </span>
          <span>4.9 ratings on Google</span>
        </div>
        <div className=" col-span-3 border border-gray-600 p-8 bg-neutral-600 flex flex-col items-center">
          <span>
            <EmojiEventsIcon sx={{fontSize:72}}/>
          </span>
          <span>10+ Awards</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
