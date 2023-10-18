"use client";

import {
  useDeleteBookingMutation,
  useGetBookingByUserIdQuery,
} from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import BreadCrumb from "../BreadCrumb";

const BookingList = () => {
    
  const loggedUser: any = getUserInfo();
  const { id } = loggedUser;

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useGetBookingByUserIdQuery({ id, ...query });
  const [deleteBooking] = useDeleteBookingMutation();

  const bookings = data?.services;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    const res = await deleteBooking(id).unwrap();
    // console.log(res._id, id);

    if (res._id === id) {
      toast.success("Service Deleted Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="">
        <BreadCrumb/>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-cBlue text-gray-100 text-base">
            <tr>
              <th>Serial</th>
              <th>Subject</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Amount/Week</th>
              <th>Days/Week</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {bookings?.map((booking: any, index) => (
              <tr key={booking?._id}>
                <th>{index + 1}</th>
                <td>{booking?.serviceId?.subject}</td>
                <td>{booking?.startDate}</td>
                <td>{booking?.endDate}</td>
                <td>{booking?.batch?.amountPerWeek}</td>
                <td>{booking?.batch?.daysPerWeek}</td>
                <td>
                  {booking?.status ? (
                    <span className="text-cBlue">Accepted</span>
                  ) : (
                    <span className="text-cOrange">Pending</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(booking?._id)}
                    className="text-xl text-cOrange"
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
