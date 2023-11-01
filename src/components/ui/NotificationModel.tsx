import { useGetBookingByUserIdQuery } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { useState } from "react";
import HashLoading from "./HashLoading";

const NotificationModel = ({
  statusTrueBookings,
}: {
  statusTrueBookings: any;
}) => {
  // console.log(statusTrueBookings);

  return (
    <dialog id="notification_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg uppercase text-center">
          Notification
        </h3>
        <ol className="mt-2">
          {statusTrueBookings?.map((booking: any) => (
            <li className="text-base" key={booking?._id}>
              Your {booking?.serviceId?.subject} subject is accepted
            </li>
          ))}
        </ol>
      </div>
    </dialog>
  );
};

export default NotificationModel;
