'use client'

import { useGetServicesQuery } from "@/redux/api/serviceApi";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";
import { BiSolidRightArrow } from "react-icons/bi";
import Link from "next/link";

const PopulerServices = () => {
  const query: Record<string, any> = {};

  query["sortBy"] = 'rating';
  query["sortOrder"] = 'desc';

  const { data, isLoading } = useGetServicesQuery({ ...query });

  const services = data?.services;

  return (
    <div className="py-20 px-5">
      <SectionTitle
        title="Our Populer Services"
        subtitle="Some of our most popular tutors are giving this services"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10 px-5">
        {services?.map((service: any) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link href="/services">
          <button className="btn bg-gray-800 text-white btn-sm hover:bg-cBlue w-40 rounded-full flex items-center justify-center">
            <span className="text-cOrange mr-3">
              <BiSolidRightArrow />
            </span>{" "}
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopulerServices;
