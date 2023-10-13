import Link from "next/link";

const CourseBanner = () => {
  return (
    <div
      className="w-full h-[26vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/images/courses-banner.jpg)" }}
    >
      <div className="h-full w-full bg-cOrange bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-4xl text-white font-bold">
          Services
        </h1>
        <p className="mt-1 md:mt-2 text-sm text-white">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href={"/services"} className="hover:underline">
            Services
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CourseBanner;
