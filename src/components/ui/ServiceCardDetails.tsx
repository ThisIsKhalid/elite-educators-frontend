"use client";

/* eslint-disable @next/next/no-img-element */
import { useGetReviewsByCourseIdQuery } from "@/redux/api/reviewsApi";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import BookingModal from "./BookingModal";
import HashLoading from "./HashLoading";
import ServiceReview from "./ServiceReview";
import { BsStarFill } from "react-icons/bs";

const ServiceCardDetails = ({ id }: any) => {
  const { data, isLoading } = useGetSingleServiceQuery(id);

  if (isLoading) return <HashLoading />;
  // console.log(data);
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
    description,
    location,
    classtime,
  } = data;

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<BsStarFill key={i} className="text-cOrange" />);
  }

  return (
    <div className="min-h-screen py-14 md:px-24 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-start gap-10">
        <div>
          <p className="flex gap-1 text-sm">{stars}</p>
          <div className="flex items-center gap-3 mt-2">
            <h1 className="text-4xl font-bold uppercase">{subject}</h1>
            {
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
            }
          </div>
          <h1 className="font-semibold">
            <span className="font-bold text-cBlack">Instructor :</span>{" "}
            <span className="text-cOrange">{instructorId?.name}</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-2">
            <h1 className="font-semibold">
              <span className="font-bold text-cBlack">Level :</span>{" "}
              <span className="text-cOrange">{level}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-bold text-cBlack">Seats :</span>{" "}
              <span className="text-cOrange">{seats}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-bold text-cBlack">Enrolled :</span>{" "}
              <span className="text-cOrange">{enrolled}</span>
            </h1>

            <h1 className="font-semibold">
              <span className="font-bold text-cBlack">Classtime :</span>{" "}
              <span className="text-cOrange">{classtime}</span>
            </h1>
          </div>
          <h1 className="font-semibold">
            <span className="font-bold text-cBlack">Location :</span>{" "}
            <span className="text-cOrange">{location}</span>
          </h1>
          <p className="text-gray-500 mt-2">{description}</p>

          <div className="mt-5 flex flex-col gap-2">
            <div className="">
              <h1 className="font-bold text-cBlack mb-2">Services :</h1>
              <div className="flex md:flex-row flex-col md:items-center gap-2">
                {price?.map((priced: any) => (
                  <button
                    className="text-lg btn bg-gray-100 text-cDeepBlue border border-cDeepBlue"
                    key={priced._id}
                  >
                    Day/Week : {priced.daysPerWeek} - Price/Week :{" "}
                    {priced.amountPerWeek}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />
          <div className="">
            <button
              onClick={() => {
                const dialog = document.getElementById(
                  data?._id
                ) as HTMLDialogElement;
                if (dialog) {
                  dialog.showModal();
                }
              }}
              className="btn w-full hover:bg-cBlue bg-cOrange border-none text-gray-200"
            >
              Book Now
            </button>
            {data && <BookingModal service={data} />}
          </div>
        </div>
      </div>

      {/* review */}

      <div className="border-t border-gray-300 mt-10 pt-10">
        <ServiceReview id={_id} />
      </div>
    </div>
  );
};

export default ServiceCardDetails;
