"use client";

/* eslint-disable @next/next/no-img-element */
import { IService } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import img from "../../assets/photo-1635805737707-575885ab0820.jpg";
import profile from "../../assets/user-profile.png";

const ServiceCard = ({ service }: any) => {
  const {
    _id,
    subject,
    price,
    level,
    seats,
    enrolled,
    isAvailable,
    rating,
    instructorId,
  } = service;

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<BsStarFill key={i} className="text-cOrange" />);
  }

  const [selectedPrice, setSelectedPrice] = useState({});
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePrice = (price: any) => {
    setSelectedPrice(price);
  };

  const handleConfirmPrice = () => {
    toast.success("Price Confirmed");
    console.log(selectedPrice);
    console.log(formData.startDate, formData.endDate);
  };

  return (
    <div className="transition  ease-in-out delay-150 duration-300">
      <div className="max-w-2xl overflow-hidden  rounded-lg shadow-md bg-cDeepBlue">
        <img
          className="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium uppercase">
              {isAvailable ? (
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
                <p className="mt-2 text-sm text-cOrange flex items-center">
                  <span className="text-gray-100 mr-3">Rating :</span>
                  <span className="flex items-center gap-1">{stars}</span>
                </p>
                <p className="mt-2 text-sm text-cOrange">
                  <span className="text-gray-100 ">Level :</span> {level}
                </p>
              </div>

              <div className="">
                <p className="mt-2 text-sm text-cOrange">
                  <span className="text-gray-100 ">Seat :</span> {seats}
                </p>
                <p className="mt-2 text-sm text-cOrange">
                  <span className="text-gray-100 ">Enrolled :</span> {enrolled}
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-200 ">
              <p className="text-gray-100">
                Offered Service(per week) :{" "}
                <span className="text-gray-300">
                  There are {price.length} different type of service. Click on
                  Book Now to see the details.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={profile} alt="" height={25} objectFit="cover" />

                <p className="mx-2 text-sm text-gray-200">
                  {instructorId?.name}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const dialog = document.getElementById(
                      _id
                    ) as HTMLDialogElement;
                    if (dialog) {
                      dialog.showModal();
                    }
                  }}
                  className="btn hover:bg-cBlue bg-cOrange btn-sm border-none text-gray-200"
                >
                  Book Now
                </button>
                <Link href={`/services/${_id}`}>
                  <button className="btn btn-sm ">Details</button>
                </Link>
              </div>
            </div>
          </div>
          {/* ------------------ */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog id={_id} className="modal">
            <div className="modal-box">
              <div className="text-center">
                <h3 className="font-bold text-cOrange text-xl">{subject}</h3>
                <p className="mt-1 text-xs">{instructorId?.name}</p>
              </div>
              <div className="mt-2 text-center">
                <p className="text-cBlack font-bold font-mono uppercase text-xl mb-2">
                  Offered Service(per week) :
                </p>
                <div className="flex flex-col items-center gap-2">
                  {price?.map((priced: any) => (
                    <button
                      onClick={() => handlePrice(priced)}
                      className={` text-lg btn hover:bg-cOrange ${
                        selectedPrice === priced
                          ? "bg-cOrange text-gray-100"
                          : "bg-cDeepBlue text-cyan-500"
                      }`}
                      key={priced._id}
                    >
                      Days : {priced.daysPerWeek} - Price :{" "}
                      {priced.amountPerWeek}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <div>
                  <label className="label">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="px-5 py-2 rounded-lg bg-cDeepBlue text-gray-100"
                  />
                </div>
                <div>
                  <label className="label">End Date </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="px-5 py-2 rounded-lg bg-cDeepBlue text-gray-100"
                  />
                </div>
              </div>
              <div>
                <form method="dialog">
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={handleConfirmPrice}
                      className="btn btn-sm btn-success"
                      type="submit"
                    >
                      Confirm
                    </button>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      <ImCancelCircle />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
          {/* ------------------- */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
