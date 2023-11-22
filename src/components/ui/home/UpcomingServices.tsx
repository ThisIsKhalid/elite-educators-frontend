"use client";

import { useGetServicesQuery } from "@/redux/api/serviceApi";
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";
import HashLoading from "../HashLoading";

const UpComingServices = () => {
  const query: Record<string, any> = {};

  query["sortBy"] = "rating";
  query["sortOrder"] = "desc";

  const { data, isLoading } = useGetServicesQuery({ ...query });
if (isLoading) return <HashLoading />;
  const services = data?.services;

  const servicesWithoutPrice = services?.filter(
    (service) => !service.price || service.price.length === 0
  );

  return (
    <div className="md:py-20 py-10 px-5">
      <SectionTitle
        title="Upcoming Services"
        subtitle="Some of our most popular tutors are now making their services available for booking."
      />
      {servicesWithoutPrice?.length === 0 ? (
        <>
          <p className="text-center text-xl font-semibold mt-5 text-red-500">
            No upcoming services
          </p>
        </>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            {servicesWithoutPrice?.map((service: any) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UpComingServices;
