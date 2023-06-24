import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex flex-col items-center gap-5 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-info font-bold" : "")}
        >
          <li className="cursor-pointer">Home</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-info font-bold" : "")}
        >
          <li className="cursor-pointer">Contact</li>
        </NavLink>
        <NavLink
          to="/information"
          className={({ isActive }) => (isActive ? "text-info font-bold" : "")}
        >
          <li className="cursor-pointer">Information</li>
        </NavLink>
        <NavLink
          to="/guide"
          className={({ isActive }) => (isActive ? "text-info font-bold" : "")}
        >
          <li className="cursor-pointer">Guide</li>
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;
