"use client";

import CourseBanner from "@/components/ui/Banner";
import ServiceCard from "@/components/ui/ServiceCard";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import { useState } from "react";

const AllServicePage = () => {
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

  //  console.log(services);

  return (
    <div className="">
      <CourseBanner />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10 px-5">
        {services?.map((service: any) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServicePage;
