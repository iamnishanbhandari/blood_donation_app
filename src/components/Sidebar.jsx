import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  let activeStyle = {
    color: "white",
    backgroundColor: "red" , 
  };
  return (
    <div className=" fixed  flex  w-full   ">
      <div className="text-l w-full flex flex-col text-center flex-[0.2] h-screen border-r-2  py-10 ">
        <NavLink
          to="/dashboard"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2  hover:shadow-md"
        >
          Blood Availability Search
        </NavLink>
        <NavLink
          to="/candidate"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-sm"
        >
          Blood Bank Directory 
        </NavLink>
        <NavLink
          to="/election"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Blood Donation Camp
        </NavLink>
        <NavLink
          to="/voters"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Doner Login
        </NavLink>
        <NavLink
          to="/reset"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Register Voluntary Blood Camp
        </NavLink>
        <NavLink
          to="/result"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          How donation Works 
        </NavLink>
      </div>
      <div className="flex-[0.8] bg-gray-100 justify-center w-full">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
