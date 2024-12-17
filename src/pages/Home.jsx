import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  // console.log("Home");
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex w-full  min-h-screen flex-col ">
      <div className="h-[60px] w-full items-center bg-slate-800 flex justify-end pr-4">
        <button
          className="bg-yellow-300 px-3 py-1 rounded-md "
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      </div>
      <div className="w-full min-h-screen flex justify-center items-center">
        Home
      </div>
    </div>
  );
};

export default Home;
