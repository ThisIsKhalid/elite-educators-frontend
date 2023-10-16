'use client'

import { IService } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { BiSolidRightArrow } from "react-icons/bi";

type FormData = IService;

const AddCourse = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "price",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between mb-5 px-10">
        <h1 className="text-3xl uppercase text-center font-bold">
          Add Service
        </h1>
        <Link href="/dashboard/services">
          <button className="btn bg-cDeepBlue text-gray-100 hover:bg-cOrange py-2 w-40 rounded-full flex items-center justify-center">
            <span className="text-gray-100 mr-3">
              <BiSolidRightArrow />
            </span>{" "}
            Services
          </button>
        </Link>
      </div>

      {/* Add Course Form */}
      <div className="px-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid lg:grid-cols-3">
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject
              </label>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    id="subject"
                    type="text"
                    className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                  />
                )}
              />
              {errors.subject && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="description"
                    className="textarea border border-cBlack focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                  />
                )}
              />
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="level"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Level
              </label>
              <Controller
                name="level"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="level"
                    className="select border border-cBlack focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                  >
                    <option value="junior">Junior</option>
                    <option value="secondary">Secondary</option>
                    <option value="higher-secondary">Higher Secondary</option>
                  </select>
                )}
              />
              {errors.level && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Location
              </label>
              <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    id="location"
                    type="text"
                    className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                  />
                )}
              />
              {errors.location && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="seats"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Seats
              </label>
              <Controller
                name="seats"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="seats"
                    type="number"
                    className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                  />
                )}
              />
              {errors.seats && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="classtime"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Classtime
              </label>
              <Controller
                name="classtime"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="classtime"
                    type="text"
                    className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                  />
                )}
              />
              {errors.classtime && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          {/* Array of IPrice objects */}
          <div className="grid grid-cols-3">
            {fields.map((field, index) => (
              <div key={field.id}>
                <label
                  htmlFor={`price[${index}].amountPerWeek`}
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Price per Week
                </label>
                <Controller
                  name={`price[${index}].amountPerWeek`}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id={`price[${index}].amountPerWeek`}
                      type="number"
                      className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                    />
                  )}
                />

                <label
                  htmlFor={`price[${index}].daysPerWeek`}
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Days per Week
                </label>
                <Controller
                  name={`price[${index}].daysPerWeek`}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id={`price[${index}].daysPerWeek`}
                      type="number"
                      className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none lg:w-3/4 w-full"
                    />
                  )}
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-sm bg-red-400 hover:bg-red-500 text-gray-800 mt-2"
                >
                  Remove Price
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-5 items-center mt-5">
            <button
              type="button"
              onClick={() => append({ amountPerWeek: 0, daysPerWeek: 0 })}
              className="btn btn-sm bg-cyan-400 hover:bg-cyan-500 text-gray-800"
            >
              Add Price
            </button>
            {/* End of array of IPrice objects */}

            {/* Add more fields based on your IService schema */}

            <button
              type="submit"
              className="btn btn-sm bg-cBlue text-gray-100 hover:bg-cOrange w-40 rounded-full flex items-center justify-center"
            >
              Submit
            </button>
          </div>
        </form>

        {/* {submittedData && (
          <div className="mt-4">
            <h2>Submitted Data:</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AddCourse;
