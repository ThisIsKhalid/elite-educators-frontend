/* eslint-disable @next/next/no-img-element */
import { IService } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../assets/photo-1635805737707-575885ab0820.jpg";
import profile from "../../assets/user-profile.png";

const ServiceCard = ({ service }: any) => {
  const {
    _id,
    subject,
    price,
    level,
    startTime,
    endTime,
    duration,
    weeklySchedules,
    rating,
    instructorId,
  } = service;

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
            <span className="text-xs font-medium uppercase">
              {weeklySchedules?.isAvailable ? (
                <span className="text-green-400 border border-cBlue p-1">
                  Available
                </span>
              ) : (
                <span className="text-red-400 border border-cOrange p-1">
                  Not Available
                </span>
              )}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-white"
              role="link"
            >
              {subject}
            </a>

            <div className="flex items-center justify-between">
              <div className="">
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Rating :</span> {rating}
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Level :</span> {level}
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Class Start :</span> {startTime}
                </p>
              </div>

              <div className="">
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Price :</span> {price} BDT
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Duration :</span>  {duration}
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  <span className="text-cOrange ">Class End :</span> {endTime}
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-200 flex items-center gap-2">
              <span className="text-cOrange ">Schedule :</span>
              {weeklySchedules.days.map((day: string, index: any) => (
                <p key={index} className="day">
                  {day},
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={profile} alt="" height={25} objectFit="cover" />

                <p className="mx-2 text-sm text-gray-200">{instructorId?.name}</p>
              </div>
              <div className="flex gap-2">
                <button className="btn hover:bg-cBlue bg-cOrange btn-sm border-none text-gray-200">
                  Enroll Now
                </button>
                <Link href={`/services/${_id}`}>
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
