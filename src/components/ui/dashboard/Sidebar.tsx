"use client";

import { useState } from "react";
import { BsBoxArrowInLeft, BsBoxArrowInRight, BsBox } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

const Sidebar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleSidebarWidth = () => {
    setIsShrunk(!isShrunk);
  };

  return (
    <div
      className={`bg-cDeepBlue min-h-screen ${
        isShrunk ? "w-16" : "w-72"
      } transition-all duration-300 ease-in-out relative p-5`}
    >
      <button
        onClick={toggleSidebarWidth}
        className="absolute bottom-2 right-1/2"
      >
        {isShrunk ? (
          <BsBoxArrowInRight className="text-gray-100 text-2xl" />
        ) : (
          <BsBoxArrowInLeft className="text-gray-100 text-2xl" />
        )}
      </button>

      {/* ----------------main part------------- */}
      <div className="text-gray-200">
        <div className="flex items-center text-2xl gap-3 hover:bg-gray-800 py-2 pl-2 rounded-lg">
          {isShrunk ? (
            <BsBox />
          ) : (
            <>
              <h1 className={`font-bold`}>Elite Educators</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
