import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="grid grid-cols-4 w-full min-h-screen">
      <div className="col-span-1 border-r-2 border-gray-400 flex items-center justify-center">
        <Navbar></Navbar>
      </div>
      <div className="bg-slate-200 col-span-3 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
