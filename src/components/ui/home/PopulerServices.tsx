'use client'

import { useGetServicesQuery } from "@/redux/api/serviceApi";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";
import { useState } from "react";

const PopulerServices = () => {
  const query: Record<string, any> = {};

  query["sortBy"] = 'rating';
  query["sortOrder"] = 'desc';

  const { data, isLoading } = useGetServicesQuery({ ...query });

  const services = data?.services;

  return (
    <div className="mb-20 px-5">
      <SectionTitle
        title="Our Populer Services"
        subtitle="Some of our most popular tutors are giving this services"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10 px-5">
        {services?.map((service: any) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PopulerServices;
