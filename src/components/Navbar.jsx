import React from "react";
import { GoGlobe } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="font-lexend-deca flex items-center justify-center max-w-[991px] mx-auto p-4 text-white bg-[#ff8fa2]">
      <div className="pr-2">
        <GoGlobe size={30} />
      </div>
      <h6>my travel journal</h6>
    </div>
  );
};

export default Navbar;
