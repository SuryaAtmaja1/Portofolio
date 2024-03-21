import React from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Hero = () => {
  const [openTitle, setOpenTitle] = useState(false);
  const [titleSelected, setTitleSelected] = useState("Please select....");

  const titles = [
    {
      name: "Beginner Web Development",
    },
    {
      name: "Information Engineering",
    },
    {
      name: "Universitas Gadjah Mada",
    },
  ];

  return (
    <div className=" min-h-screen w-full flex justify-center items-center">
      <div className="lg:w-4/5 w-5/6 flex flex-col-reverse lg:flex-row justify-center gap-32 items-start">
        <div className="flex flex-col gap-9 justify-center h-auto items-center max-w-[600px]">
          <h1 className="align-middle text-6xl text-center lg:text-left font-bold px-4 font-playFair">
            <div className="text-primary">Hi, i'm</div>
            <div className="mt-2 text-base-content text-5xl">
              Kurniawan Surya Atmaja.
            </div>
          </h1>
          <div className="w-full relative">
            <div
              onClick={() => setOpenTitle(!openTitle)}
              className={`bg-neutral w-full text-neutral-content font-manrope text-2xl py-5 px-5 cursor-pointer ${
                openTitle ? "rounded-t-lg" : "rounded-lg"
              }`}
            >
              <div className="flex justify-between">
                <p className="text-left leading-8 left-0 px-5 font-semibold">
                  {titleSelected}
                </p>
                <IoMdArrowDropdown
                  className={`size-9 ${openTitle ? "rotate-180" : ""}`}
                />
              </div>
            </div>
            {openTitle && (
              <div className="bg-neutral w-full absolute text-neutral-content rounded-b-lg cursor-pointer ">
                {titles?.map((title) => (
                  <li
                    className="text-left leading-8 font-semibold list-none text-2xl left-0 py-5 px-10"
                    key={title?.name}
                    onClick={() => {
                      setTitleSelected(title?.name);
                      setOpenTitle(false);
                    }}
                  >
                    {title?.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" bg-slate-400 w-64 h-64 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
