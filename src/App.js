import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="m-0 p-0 w-full max-w-screen overflow-x-hidden flex flex-col justify-center items-center ">
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuthenticated && <Route path="/main" element={<Main />} />}
      </Routes>
    </div>
  );
}

export default App;
