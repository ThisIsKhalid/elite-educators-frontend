import React from "react";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";

const PopulerServices = () => {
  return (
    <div className="my-15 px-5">
      <SectionTitle
        title="Our Populer Services"
        subtitle="Some of our most popular tutors are giving this services"
      />
      <div className="grid grid-cols-3">
        <ServiceCard />
      </div>
    </div>
  );
};

export default PopulerServices;
