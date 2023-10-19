"use client";

import CourseBanner from "@/components/ui/Banner";
import HashLoading from "@/components/ui/HashLoading";
import ServiceCard from "@/components/ui/ServiceCard";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { ChangeEvent, useState } from "react";
import { BiSort } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

const AllServicePage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [level, setLevel] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["isAvailable"] = availability;
  query["level"] = level;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetServicesQuery({ ...query });

  if (isLoading) return <HashLoading />;
  
  const services = data?.services;
  const meta = data?.meta;

  // console.log(searchTerm);

  const handleAvailabilityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setAvailability(
      selectedValue === "available"
        ? true
        : selectedValue === "not-available"
        ? false
        : null
    );
  };

  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setLevel(selectedValue);
  };
  // console.log(level);

  const resetAllQuery = () => {
    setAvailability(null);
    setLevel("");
    setSearchTerm("");
    setSortBy("");
    setSortOrder("");
  };

  if (isLoading) return <HashLoading />;

  return (
    <div className="">
      <CourseBanner title="Services" />

      <div className="bg-gray-700 w-full py-3 flex items-center justify-between gap-2 px-5">
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="subject, location, tutor.."
            className="input input-sm md:input-md input-bordered lg:w-72 w-full md:pl-10 pl-6"
          />
          <BsSearch className="absolute top-1/2 md:left-4 left-2 -translate-y-1/2" />
        </div>
        <div className="flex items-center lg:gap-5 gap-2">
          <div>
            <select
              id="level"
              onChange={handleLevelChange}
              className="select select-sm md:select-md border border-cBlack input focus:outline focus:outline-cOrange focus:border-none w-full text-base"
            >
              <option disabled selected>
                Level
              </option>
              <option value="junior" id="level" className="">
                Junior
              </option>
              <option value="secondary" id="level" className="">
                Secondary
              </option>
              <option value="higher-secondary" id="level" className="">
                Higher Secondary
              </option>
            </select>
          </div>
          <div>
            <select
              id="availability"
              onChange={handleAvailabilityChange}
              className="select select-sm md:select-md border border-cBlack input focus:outline focus:outline-cOrange focus:border-none w-full text-base"
            >
              <option disabled selected>
                Availability
              </option>
              <option
                value="available"
                id="availability"
                className="text-green-500"
              >
                Available
              </option>
              <option
                value="not-available"
                id="availability"
                className="text-red-500"
              >
                Not Available
              </option>
            </select>
          </div>
          <div>
            {(availability !== null ||
              level !== "" ||
              searchTerm !== "" ||
              !!sortBy ||
              !!sortOrder) && (
              <button
                onClick={resetAllQuery}
                className="bg-white p-[3px] rounded-full text-xl"
              >
                <GrPowerReset />
              </button>
            )}
          </div>
        </div>
      </div>

      {/*  rating and sorting */}
      <div className="my-5 flex items-center gap-3 justify-end px-10">
        <div
          onClick={() => {
            if (sortBy === "level") {
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            } else {
              setSortBy("level");
              setSortOrder("desc");
            }
          }}
          className="flex items-center gap-1 border-2 py-1 px-3 border-gray-300 cursor-pointer"
        >
          <h1 className="text-base font-semibold">Level</h1>
          <button>
            <BiSort />
          </button>
        </div>
        <div
          onClick={() => {
            if (sortBy === "rating") {
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            } else {
              setSortBy("rating");
              setSortOrder("desc");
            }
          }}
          className="flex items-center gap-1 border-2 py-1 px-3 border-gray-300 cursor-pointer"
        >
          <h1 className="text-base font-semibold">Rating</h1>
          <button>
            <BiSort />
          </button>
        </div>
      </div>

      {services?.length === 0 ? (
        <>
          <p className="text-center text-xl font-semibold mt-5">
            Service not found
          </p>
        </>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10 px-5">
            {services?.map((service: any) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllServicePage;
