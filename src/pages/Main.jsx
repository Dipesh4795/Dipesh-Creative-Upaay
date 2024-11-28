import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Outlet from "../components/Outlet";
import ConfirmationModal from "../components/ConfirmationModal";

const Main = () => {
  const [confirmationModal, setConfirmationModal] = useState(null);
  return (
    <div className="flex w-screen  justify-center items-center flex-col">
      <Navbar />
      <div className="w-full  h-full  flex justify-center  items-center ">
        <div className=" w-[96%] h-full flex flex-row justify-start items-start">
          <Sidebar />
          <Outlet setConfirmationModal={setConfirmationModal} />
        </div>
      </div>
      {confirmationModal && (
        <ConfirmationModal
          setConfirmationModal={setConfirmationModal}
          modalData={confirmationModal}
        />
      )}
    </div>
  );
};

export default Main;
