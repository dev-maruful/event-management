import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="flex flex-col items-center gap-5 text-lg font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Information</li>
        <li className="cursor-pointer">Guide</li>
      </ul>
    </>
  );
};

export default Navbar;
