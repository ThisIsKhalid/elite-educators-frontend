"use client";

import { useGetServicesQuery } from "@/redux/api/serviceApi";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const CoursesTable = () => {
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

  const { data, isLoading } = useGetServicesQuery({ ...query });

  const services = data?.services;
  const meta = data?.meta;

//   console.log(services);

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-cBlue text-gray-100 text-base">
            <tr>
              <th>Serial</th>
              <th>Subject</th>
              <th>Available</th>
              <th>Instructor</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {services?.map((service: any, index) => (
              <tr key={service.id}>
                <th>{index + 1}</th>
                <td>{service?.subject}</td>
                <td>{service?.isAvailable ? "Available" : "Not Available"}</td>
                <td>{service?.instructorId?.name}</td>
                <td>
                  <button className="text-xl text-cBlue"><AiOutlineEdit/></button>
                </td>
                <td>
                  <button className="text-xl text-cOrange"><AiOutlineDelete/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesTable;