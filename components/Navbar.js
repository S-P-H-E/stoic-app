import React from "react";
import { FiBook } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

const Nav = ({ activeSection, handleSectionClick }) => {
  return (
    <>
    <div className="bg-[#1C1C1C] py-10 px-5 w-[250px] border-r border-[#282828] flex-col justify-between hidden">
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="text-xl w-full flex justify-center items-center cursor-default">
          <h1>S T O I C</h1>
        </div>
        <div className="w-full flex flex-col gap-2">
          {/* Cources */}
          <div
            className={`flex justify-start items-center gap-2 text-[#9D9D9D] cursor-pointer px-3 py-2 rounded-md w-full transition-all hover:text-white border border-transparent ${
              activeSection === "courses" ? "bg-[#2B2B2B] shadow-md border-[#393939]" : ""
            }`}
            onClick={() => handleSectionClick("courses")}
          >
            <FiBook
              size={14}
              className={activeSection === "courses" ? "text-white" : ""}
            />
            <h1 className={activeSection === "courses" ? "text-white" : ""}>Courses</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* Profile */}
        {/* <div
          className={`flex justify-start items-center gap-2 text-[#9D9D9D] cursor-pointer px-3 py-2 rounded-md w-full transition-all hover:text-white border border-transparent ${
            activeSection === "profile" ? "bg-[#2B2B2B] shadow-md border-[#393939]" : ""
          }`}
          onClick={() => handleSectionClick("profile")}
        >
          <BiUser
            size={14}
            className={activeSection === "profile" ? "text-white" : ""}
          />
          <h1 className={activeSection === "profile" ? "text-white" : ""}>Profile</h1>
        </div> */}
      </div>
    </div>
      <div className="bg-[#1C1C1C] fixed w-full h-[40px] flex p-6 rounded-t-2xl shadow-2xl shadow-black hidden" >
        <button>
          <FiBook />
        </button>
      </div>
    </>
  );
};

export default Nav;
