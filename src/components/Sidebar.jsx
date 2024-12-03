import React, { useState } from "react";
import { RiMessage3Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { BiCommentAdd } from "react-icons/bi";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";

const Sidebar = () => {
  const [project, setProject] = useState("Mobile-App");
  const data = [
    {
      name: "Mobile-App",
      color: "green-300",
    },
    {
      name: "Website-redesign",
      color: "blue-600",
    },
    {
      name: "Design-System",
      color: "green-300",
    },
    {
      name: "Wireframes",
      color: "blue-600",
    },
  ];
  return (
    <div className=" w-[38%] pr-[9px] sm:pr-0 sm:w-[40%] md:w-[20%] h-full flex   font-inter flex-col justfiy-center  items-start">
      <div className=" pt-4 flex flex-col justify-start  cursor-pointer items-start gap-4  font-light">
        <div className="flex justify-center items-start gap-5">
          <IoHomeOutline size={20} color="black" />
          <p>Home</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <RiMessage3Line size={20} color="black" />
          <p>Messages</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FaTasks size={20} color="black" />
          <p>Tasks</p>
        </div>
        <div className="flex justify- items-center gap-5">
          <BsPersonFill size={20} color="black" />
          <p>Members</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <CiSettings size={20} color="black" />
          <p>Settings</p>
        </div>
      </div>
      <div className="w-[90%] h-[0.5px] bg-slate-600  my-4"></div>

      <div className=" w-[90%] flex   justify-between items-center  font-light gap-4">
        <p>My projects</p>
        <BiCommentAdd size={18} />
      </div>
      <div className="flex pt-4   w-[90%] flex-col justify-center items-start text-sm font-light gap-3">
        {data.map((item, index) => (
          <div
            className={`flex  w-full justify-between items-center cursor-pointer ${
              project === item.name
                ? "bg-[hsl(252,20%,81%)] rounded-sm p-2"
                : ""
            } `}
            onClick={() => setProject(item.name)}
          >
            <div className="flex justify-center items-center    gap-2">
              <div
                className={`w-1 h-1 rounded-full ${`bg-${item.color}`} `}
              ></div>
              <p className="text-sm">{item.name}</p>
            </div>
            <PiDotsThreeBold size={20} />
          </div>
        ))}
      </div>
      <div className="relative flex flex-col mt-2 justify-center items-center ">
        <div
          className="absolute top-0  flex justify-center items-center z-10 shadow-[0_20px_30px_-10px_rgba(255,235,59,0.8)] 
 bg-gray-100 w-[50px] h-[50px] rounded-full  "
        >
          <FaLightbulb size={25} color="yellow" />
        </div>
        <div className="w-[80%] rounded-md flex flex-col mb-3 p-3   pt-8 justify-center text-sm items-center  mt-8 bg-gray-100 gap-2">
          <p className="font-bold   ">Thoughts Time</p>
          <p className="w-[96%] text-xs  text-gray-800 leading-relaxed">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <button className="bg-white p-1 px-2 rounded-md  text-sm mt-1 ">
            Write a Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
