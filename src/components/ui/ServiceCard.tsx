import Image from "next/image";
import React from "react";
import img from "../../assets/photo-1635805737707-575885ab0820.jpg";

const ServiceCard = () => {
  return (
    <div className="transition hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
      <div className="card card-side bg-base-100 shadow-xl relative border border-cOrange">
        <figure>
          <Image src={img} alt="" height={500} />
        </figure>
        <div className="badge badge-secondary badge-outline absolute right-5 top-5">
          Available
        </div>
        <div className="flex flex-col gap-2 justify-center pl-5 text-cBlack">
          <h2 className="text-xl font-bold">Chemistry</h2>
          <p>Instructor: Khalid Hasan</p>
          <p>Category: Junior</p>
          <p>Price: 2000 BDT</p>
          <p>Rating: 4.2 </p>
          <p>
            Weekly Class: <br />
            Sunday + Tuesday + Thursday
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
