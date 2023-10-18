import Link from "next/link";
import BreadCrumb from "./BreadCrumb";

const CourseBanner = () => {
  return (
    <div
      className="w-full h-[26vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/images/courses-banner.jpg)" }}
    >
      <div className="h-full w-full bg-cOrange bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-4xl text-white font-bold">Services</h1>
        <BreadCrumb className="text-white" />
      </div>
    </div>
  );
};

export default CourseBanner;
