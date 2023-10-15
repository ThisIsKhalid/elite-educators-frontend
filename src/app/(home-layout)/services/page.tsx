import CourseBanner from "@/components/ui/Banner";
import ServiceCard from "@/components/ui/ServiceCard";

const AllServicePage = () => {
  return (
    <div>
      <CourseBanner />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <ServiceCard />
      </div>
    </div>
  );
};

export default AllServicePage;
