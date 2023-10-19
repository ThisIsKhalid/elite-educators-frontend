"use client";

import { useGetServicesQuery } from "@/redux/api/serviceApi";
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";

const UpComingServices = () => {
  const query: Record<string, any> = {};

  query["sortBy"] = "rating";
  query["sortOrder"] = "desc";

  const { data, isLoading } = useGetServicesQuery({ ...query });

  const services = data?.services;

  const servicesWithoutPrice = services?.filter(
    (service) => !service.price || service.price.length === 0
  );

  return (
    <div className="mb-20 px-5">
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
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10 px-5">
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
