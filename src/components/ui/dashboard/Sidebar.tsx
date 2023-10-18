"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsBox, BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";

const Sidebar = () => {
  const [isShrunk, setIsShrunk] = useState(true);

  const toggleSidebarWidth = () => {
    setIsShrunk(!isShrunk);
  };

  return (
    <div
      className={`bg-cDeepBlue min-h-screen h-full ${
        isShrunk ? "w-20" : "w-60"
      } transition-all duration-300 ease-in-out relative p-5`}
    >
      <button onClick={toggleSidebarWidth} className="absolute top-2 right-2">
        {isShrunk ? (
          <BsBoxArrowInRight className="text-gray-100 text-xl" />
        ) : (
          <BsBoxArrowInLeft className="text-gray-100 text-xl" />
        )}
      </button>
      <Link href="/" className="text-gray-100 text-2xl absolute bottom-10 left-1/2 -translate-x-1/2" >
        <BiHomeAlt />
      </Link>

      {/* ----------------main part------------- */}
      <div className="text-gray-200 mt-5">
        <Link
          href="/dashboard"
          className="flex items-center  gap-3 hover:bg-gray-800 py-2 pl-2 rounded-lg"
        >
          {isShrunk ? (
            <BsBox className="text-2xl" />
          ) : (
            <>
              <h1 className={`font-bold text-2xl`}>Elite Educators</h1>
            </>
          )}
        </Link>
        <Link
          href="/dashboard/services"
          className="flex items-center  gap-3 hover:bg-gray-800 py-2 pl-2 rounded-lg"
        >
          {isShrunk ? (
            <AiOutlineProfile className="text-2xl" />
          ) : (
            <>
              <AiOutlineProfile className="text-2xl" />
              <h1 className={`font-bold text-base`}>Services</h1>
            </>
          )}
        </Link>
        <Link
          href="/dashboard/bookings"
          className="flex items-center  gap-3 hover:bg-gray-800 py-2 pl-2 rounded-lg"
        >
          {isShrunk ? (
            <TbBrandBooking className="text-2xl" />
          ) : (
            <>
              <TbBrandBooking className="text-2xl" />
              <h1 className={`font-bold text-base`}>Bookings</h1>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
