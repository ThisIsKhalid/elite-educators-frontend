'use client'

import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";

const NotificationModel = ({
  statusTrueBookings,
}: {
  statusTrueBookings: any;
}) => {
  // console.log(statusTrueBookings);

  return (
    <dialog id="notification_modal" className="modal">
      <div className="modal-box py-10">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg uppercase text-center">
          Notification
        </h3>
        <ul className="mt-5">
          {statusTrueBookings?.map((booking: any) => (
            <li
              className="text-base flex items-center justify-between gap-2"
              key={booking?._id}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <BiRightArrow />
                </span>{" "}
                <p>
                  Your{" "}
                  <span className="font-semibold">
                    {booking?.serviceId?.subject}
                  </span>{" "}
                  subject is accepted
                </p>
              </div>
              <Link
                onClick={() => {
                  const dialog = document.getElementById(
                    "notification_modal"
                  ) as HTMLDialogElement;
                  if (dialog) {
                    dialog.close();
                  }
                }}
                href={`/services/checkout/${booking?._id}`}
              >
                <button className="btn btn-sm text-xs bg-cBlue text-white hover:bg-cOrange">
                  Pay Now
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
};

export default NotificationModel;
