import React from "react";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  return <div>ServiceDetailsPage : {params.id}</div>;
};

export default ServiceDetailsPage;
