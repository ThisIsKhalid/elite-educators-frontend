"use client";

import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import BookingModal from "./BookingModal";

const ServiceCardDetails = ({ id }: any) => {
  const { data } = useGetSingleServiceQuery(id);
  // console.log(data);

  return (
    <div>
      ServiceCardDetails
      <button
        onClick={() => {
          const dialog = document.getElementById(
            data?._id
          ) as HTMLDialogElement;
          if (dialog) {
            dialog.showModal();
          }
        }}
        className="btn hover:bg-cBlue bg-cOrange btn-sm border-none text-gray-200"
      >
        Book Now
      </button>
      {data && <BookingModal service={data} />}
    </div>
  );
};

export default ServiceCardDetails;
