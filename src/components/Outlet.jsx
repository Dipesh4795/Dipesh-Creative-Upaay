import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import image from "../assets/image.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { PiEqualsFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import Kanban from "./Kanban";

const Outlet = ({ setConfirmationModal }) => {
  const [Filter, setFilter] = useState(null);
  const [date, setdate] = useState(dayjs());

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="h-full flex justify-center  item-center w-full  border-l-[1px] border-l-stone-800">
      <div className=" w-[96%] mt-8 h-full flex  flex-col gap-5 justify-center items-center ">
        <div className="w-full  flex justify-between  pr-[60px] items-center">
          <div className="flex  text-4xl  items-center justify-center gap-3">
            <h1>Mobile-App</h1>
            <div className="p-1 bg-blue-400  cursor-pointer rounded-md">
              <MdEdit size={10} />
            </div>
            <div className="p-1 bg-blue-400 cursor-pointer rounded-md">
              <CiLink size={10} />
            </div>
          </div>

          <div className=" hidden md:flex justify-center items-center gap-3">
            <div className="p-1 bg-blue-400 cursor-pointer rounded-md">
              <IoIosAdd size={10} />
            </div>
            <p className="text-blue-600 cursor-pointer">Invite </p>
            <div className="relative flex justify-center items-center">
              <img src={image} alt="logo" className="   w-[30px] h-[30px]" />
              <img
                src={image}
                alt="logo"
                className="  absolute left-5 z-10  w-[30px] h-[30px]"
              />
              <img
                src={image}
                alt="logo"
                className=" absolute z-20 left-10  w-[30px] h-[30px]"
              />
              <img
                src={image}
                alt="logo"
                className=" absolute z-30 left-14 w-[30px] h-[30px]"
              />
              <div className="flex justify-center absolute left-20 z-40 w-[30px] h-[30px] bg-red-300 items-center  rounded-2xl">
                <p className="text-xs">+2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex  justify-between  items-start">
          <div className="flex   flex-col sm:flex-row items-start justify-center sm:items-center gap-4">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label text-xs">
                Filter
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={Filter}
                label="Filter"
                onChange={handleChange}
              >
                <MenuItem value={null}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date"
                  name="startDate"
                  defaultValue={dayjs()}
                  sx={{
                    width: "40px",
                  }}
                  // value={}
                  onChange={(newValue) => setdate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            {/* <p>{Filter}</p>
            <p>{date.format("YYYY-MM-DD")}</p> */}
          </div>
          <div className=" hidden md:flex justify-center items-center gap-2 ">
            <div className="flex justify-center items-center pr-5 border-r-[1px] border-r-slate-600">
              <button className="p-2 rounded-md text-sm flex gap-2 border-[2px] border-black justify-center items-center">
                <MdOutlinePersonAddAlt size={18} />
                <p>Share</p>
              </button>
            </div>
            <PiEqualsFill size={30} color="blue" />
            <CgMenuGridO size={25} />
          </div>
        </div>
        <Kanban setConfirmationModal={setConfirmationModal} Filter={Filter} />
      </div>
    </div>
  );
};

export default Outlet;
