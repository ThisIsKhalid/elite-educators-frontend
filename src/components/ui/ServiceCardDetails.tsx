"use client";

/* eslint-disable @next/next/no-img-element */
import { useGetReviewsByCourseIdQuery } from "@/redux/api/reviewsApi";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import BookingModal from "./BookingModal";
import HashLoading from "./HashLoading";
import ServiceReview from "./ServiceReview";

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

  return (
    <div className="min-h-screen py-14 md:px-24 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-start gap-10">
        <div>
          <div className="flex items-center gap-3">
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
          <h1 className="font-semibold mb-2">
            <span className="font-medium text-cBlack">Instructor :</span>{" "}
            <span className="text-cOrange">{instructorId?.name}</span>
          </h1>
          <p className="text-gray-500">{description}</p>

          <div className="mt-5 flex flex-col gap-2">
            <h1 className="font-semibold">
              <span className="font-medium text-cBlack">Level :</span>{" "}
              <span className="text-cOrange">{level}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-medium text-cBlack">Rating :</span>{" "}
              <span className="text-cOrange">{rating}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-medium text-cBlack">Enrolled :</span>{" "}
              <span className="text-cOrange">{enrolled}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-medium text-cBlack">Location :</span>{" "}
              <span className="text-cOrange">{location}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-medium text-cBlack">Seats :</span>{" "}
              <span className="text-cOrange">{seats}</span>
            </h1>
            <h1 className="font-semibold">
              <span className="font-medium text-cBlack">Classtime :</span>{" "}
              <span className="text-cOrange">{classtime}</span>
            </h1>

            <div className="">
              <h1 className="font-medium text-cBlack mb-2">Services :</h1>
              {price?.map((priced: any) => (
                <button
                  className="text-base btn bg-cBlack text-gray-100 hover:bg-cDeepBlue"
                  key={priced._id}
                >
                  Day/Week : {priced.daysPerWeek} - Price/Week :{" "}
                  {priced.amountPerWeek}
                </button>
              ))}
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
