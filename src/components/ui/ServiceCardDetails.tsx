"use client";

import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";

const ServiceCardDetails = ({ id }: any) => {
  const { data } = useGetSingleServiceQuery(id);
  console.log(data);

  return <div>ServiceCardDetails</div>;
};

export default ServiceCardDetails;
