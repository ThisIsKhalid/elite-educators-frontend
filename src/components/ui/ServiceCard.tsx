import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../assets/photo-1635805737707-575885ab0820.jpg";
import profile from "../../assets/user-profile.png";

const ServiceCard = () => {
  return (
    <div className="transition  ease-in-out delay-150 duration-300">
      <div className="max-w-2xl overflow-hidden  rounded-lg shadow-md bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium uppercase text-blue-400 border border-cBlue p-1">
              Available
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-white"
              role="link"
            >
              Chemistry
            </a>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Price :</span> $10
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Level :</span> Junior
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Schedule :</span> Sunday ,
                  Monday, Tuesday
                </p>
              </div>

              <div className="">
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Rating :</span> 4.5
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Class Start :</span> January
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Duration :</span> 06 Month
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={profile} alt="" height={25} objectFit="cover" />

                <p className="mx-2 text-sm text-gray-200">Khalid Hasan</p>
              </div>
              <div className="flex gap-2">
                <button className="btn hover:bg-cBlue bg-cOrange btn-sm border-none text-gray-200">
                  Book Now
                </button>
                <Link href="/services/1">
                  <button className="btn btn-sm ">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
