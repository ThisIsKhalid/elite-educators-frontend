'use client'

import Button from "@/components/ui/Button";
import CoursesTable from "@/components/ui/dashboard/CoursesTable";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const ServicePage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between mb-5 px-10">
        <h1 className="text-3xl uppercase text-center font-bold">Courses</h1>
        <Link href="/dashboard/services/add-service">
          <button className="btn bg-cDeepBlue text-gray-100 hover:bg-cOrange py-2 w-40 rounded-full flex items-center justify-center">
            <span className="text-gray-100 mr-3">
              <BiSolidRightArrow />
            </span>{" "}
            Add Service
          </button>
        </Link>
      </div>
      <div className="">
        <CoursesTable />
      </div>
    </div>
  );
};

export default ServicePage;
