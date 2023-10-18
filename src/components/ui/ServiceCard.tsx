"use client";

/* eslint-disable @next/next/no-img-element */
import { addToCart } from "@/redux/features/service/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsCart2, BsStarFill } from "react-icons/bs";
import profile from "../../assets/user-profile.png";
import BookingModal from "./BookingModal";

const ServiceCard = ({ service }: any) => {
  const cartData = useAppSelector((state) => state.service.services);
  const dispatch = useAppDispatch();

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

  const handleAddToCart = () => {
    if (cartData.length >= 0) {
      const check = cartData.find((item) => item._id === _id);
      if (check) {
        return toast.error("Already added to cart");
      } else {
        dispatch(addToCart(service));
        return toast.success("Added to cart");
      }
    } 
  };

  return (
    <div className="transition  ease-in-out delay-150 duration-300">
      <div className="max-w-2xl overflow-hidden  rounded-lg shadow-md bg-cDeepBlue relative">
        <img
          className="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />
        <button
          onClick={handleAddToCart}
          className="tooltip tooltip-left bg-cDeepBlue text-white text-2xl absolute top-0 right-0 border-l border-b rounded-es-lg px-2 py-1"
          data-tip="Add To Cart"
        >
          <BsCart2 />
        </button>

        <div className="p-6">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase">
                {isAvailable ? (
                  <span className="text-green-400 border border-cBlue p-1">
                    Available
                  </span>
                ) : (
                  <span className="text-red-400 border border-cOrange p-1">
                    Not Available
                  </span>
                )}
              </p>
            </div>
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
                  <span className="flex items-center gap-1">
                    {stars.length > 0 ? stars : "0"}
                  </span>
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
          <BookingModal service={service} />
          {/* ------------------- */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
