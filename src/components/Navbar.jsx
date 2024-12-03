import React from "react";
import image1 from "../assets/image1.png";
import image from "../assets/image.png";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiSquareQuestion } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const logoutUri =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOGOUT_URI
      : process.env.REACT_APP_LOGOUT_URI_PROD;

  return (
    <div className="w-screen  h-[60px]  flex items-center justify-center  border-b-stone-800  border-b-[1px]">
      <div className="w-[96%]  h-full  flex  justify-start  items-center">
        <div className="h-full w-[19%] border-r-gray-700 border-r-[1px]  flex  gap-5 justify-between items-center ">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src={image1} alt="logo " className="w-[20px] h-[20px]" />
            <p> Project M.</p>
          </div>
          <div className=" pr-4">
            <RxDoubleArrowLeft size={20} />
          </div>
        </div>
        <div className="w-full px-4 flex  flex-row  justify-between items-center ">
          <div>
            <div
              className="absolute top-5  pl-3  hover:scale-90"
              onClick={() => alert("result your query")}
            >
              <CiSearch color="black" size={20} />
            </div>

            <input
              type="text"
              placeholder="Search for anything ..."
              className="bg-[#F5F5F5] text-black placeholder-slate-600 placeholder:text-sm  placeholder:p-3   px-[40px]  py-2  rounded-[0.5rem]  w-[24rem] "
            />
          </div>
          <div className=" flex justify-center items-center gap-8 ">
            <div className=" flex justify-center items-center gap-4 ">
              <CiCalendarDate size={20} />
              <CiSquareQuestion size={20} />
              <IoMdNotificationsOutline size={20} />
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col justify-center items-end text-sm">
                <p className=" font-bold">{user.name}</p>
                <p className="font-light ">Rajasthan, India</p>
              </div>
              <img
                src={user.picture}
                loading="lazy"
                className="w-10 h-10 rounded-full"
              />
              <RiArrowDownSLine size={20} />
              <div
                className=" bg-yellow-400 p-3 justify-center cursor-pointer rounded-lg text-sm items-center flex"
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: logoutUri },
                  })
                }
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
