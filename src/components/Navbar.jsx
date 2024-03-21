import React from "react";

const Navbar = () => {
  return (
    <div className="relative">
      <div
        data-theme="night"
        className="text-white flex justify-between items-center w-full h-auto absolute top-0 bg-base px-4 py-3"
      >
        <p className="text-xl text-base-content py-2 font-manrope px-7 font-semibold cursor-pointer">
          Surya.Atmaja
        </p>
        <div className="flex justify-center items-center text-base-content px-4 gap-4 font-manrope">
          <p className="cursor-pointer font-semibold hover:bg-neutral hover:text-neutral-content px-4 py-2 rounded-lg transition duration-300">
            Home
          </p>
          <p className="cursor-pointer font-semibold hover:bg-neutral hover:text-neutral-content px-4 py-2 rounded-lg transition duration-300">
            About
          </p>
          <p className="cursor-pointer font-semibold hover:bg-neutral hover:text-neutral-content px-4 py-2 rounded-lg transition duration-300">
            Project
          </p>
          <p className="cursor-pointer font-semibold hover:bg-neutral hover:text-neutral-content px-4 py-2 rounded-lg transition duration-300">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
