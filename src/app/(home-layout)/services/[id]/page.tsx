import ServiceCardDetails from "@/components/ui/ServiceCardDetails";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = params?.id;

  return <ServiceCardDetails id={id} />;
};

export default ServiceDetailsPage;
