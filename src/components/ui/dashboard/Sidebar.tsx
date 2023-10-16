"use client";

import Link from "next/link";
import { useState } from "react";
import { BsBoxArrowInLeft, BsBoxArrowInRight, BsBox } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineProfile } from "react-icons/ai";

const Sidebar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleSidebarWidth = () => {
    setIsShrunk(!isShrunk);
  };

  return (
    <div
      className={`bg-cDeepBlue min-h-screen ${
        isShrunk ? "w-20" : "w-60"
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
        <Link
          href="/dashboard/services"
          className="flex items-center  gap-3 hover:bg-gray-800 py-2 pl-2 rounded-lg"
        >
          {isShrunk ? (
            <AiOutlineProfile className='text-2xl' />
          ) : (
            <>
              <h1 className={`font-bold text-xl`}>Services</h1>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
