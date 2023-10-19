import React from 'react'

const StudentsReview = () => {
  return (
    <div className="grid lg:grid-cols-2 mb-20 py-5 px-5">
      <div className="flex flex-col mx-auto">
        <div className="flex items-center">
          <div className="border-b-2 w-20 border-cOrange mr-3"></div>
          <p className="text-cOrange">Reviews from who got our any service</p>
        </div>
        <h1 className="lg:text-4xl text-3xl font-semibold mb-5">
          See What Our <span className="text-cBlue">Lovely</span>
          <br />
          Students Say About Us
        </h1>

        <p className="mb-5 lg:w-[500px]">
        Find a tutor is like finding a piece of missing heart, so find it carefully and invest your time into it.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default StudentsReview