"use client";

/* eslint-disable @next/next/no-img-element */
import {
  addToCart,
  removeFromCart,
} from "@/redux/features/service/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsCart2, BsCartCheck, BsStarFill } from "react-icons/bs";
import profile from "../../assets/user-profile.png";
import BookingModal from "./BookingModal";

const ServiceCard = ({ service }: any) => {
  const cartData = useAppSelector((state) => state.service.services);
  const dispatch = useAppDispatch();
  const [isInCart, setIsInCart] = useState(false);

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
    image,
    location
  } = service;

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<BsStarFill key={i} className="text-cOrange" />);
  }

  const handleAddToCart = () => {
    const check = cartData.find((item) => item._id === _id);
    if (check) {
      // If the item is in the cart, remove it
      dispatch(removeFromCart(service));
      toast.success("Removed from cart");
      setIsInCart(false);
    } else {
      // If the item is not in the cart, add it
      dispatch(addToCart(service));
      toast.success("Added to cart");
      setIsInCart(true);
    }
  };

  return (
    <div className="card lg:card-side bg-gray-50 shadow-lg border border-cDeepBlue/10 lg:h-[300px] ">
      <figure className="lg:w-1/2">
        <Image
          className="object-cover h-full"
          src={image}
          alt="service image"
          width={500}
          height={1000}
        />
      </figure>
      <div className="card-body p-5 justify-center">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-medium uppercase">
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
        <div className="flex lg:flex-col flex-row lg:items-start items-center lg:justify-start justify-between">
          <h1 className="text-2xl font-bold">{subject}</h1>
          <p className="text-sm text-cOrange flex items-center justify-end">
            <span className="flex items-center gap-1">
              {stars.length > 0 ? stars : "0"}
            </span>
          </p>
        </div>
        <div className="my-2">
          <p className=" text-sm text-cOrange">
            <span className="text-gray-800 ">Level :</span> {level}
          </p>
          <p className="mt-2 text-sm text-cOrange">
            <span className="text-gray-800 ">Location :</span> {location}
          </p>
        </div>

        <div className="flex lg:flex-col flex-row lg:items-start items-center lg:justify-start justify-between lg:gap-3">
          <div className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={profile}
                  alt=""
                  height={25}
                  objectFit="cover"
                  className="border rounded-full border-cDeepBlue"
                />

                <p className="ml-2 text-sm text-gray-800">
                  {instructorId?.name}
                </p>
              </div>
            </div>
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
              className="btn hover:bg-cBlue  bg-cDeepBlue btn-sm border-none text-gray-200"
            >
              Book Now
            </button>
            <Link href={`/services/${_id}`}>
              <button className="btn btn-sm border hover:border-cBlue border-cOrange">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------ */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <BookingModal service={service} />
      {/* ------------------- */}
    </div>
  );
};

export default ServiceCard;
