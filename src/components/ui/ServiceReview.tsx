/* eslint-disable @next/next/no-img-element */
import {
  useAddReviewMutation,
  useGetReviewsByCourseIdQuery,
} from "@/redux/api/reviewsApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineStar } from "react-icons/ai";
import people from "../../assets/profile.png";

type ServiceReviewProps = {
  id: string;
};

const ServiceReview = ({ id }: ServiceReviewProps) => {
  const { control, handleSubmit, reset } = useForm();
  const loggedUser: any = getUserInfo();
  const query: Record<string, any> = {};

  const [addReview] = useAddReviewMutation();
  const { data: reviewsData } = useGetReviewsByCourseIdQuery({ id, ...query });

  const reviews = reviewsData?.reviews;

  const onSubmit = async (data: any) => {
    if (data?.rating > 5 || data?.rating < 0)
      return toast.error("Rating must be between 0 to 5");
    else if (!data.rating || !data.description)
      return toast.error("Please fill all the fields");
    else if (loggedUser && loggedUser?.id) {
      const reviewData = {
        courseId: id,
        studentId: loggedUser?.id,
        description: data?.description,
        rating: Number(data?.rating),
      };

      // console.log(reviewData);
      try {
        await addReview({ ...reviewData }).unwrap();
        toast.success("Review added successfully");
        reset();
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div>
      {/* review part------------------ */}
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1">
        {reviews?.map((review: any) => (
          <>
            <div className="container flex flex-col w-full max-w-lg p-3 mx-auto divide-y rounded-md divide-gray-700 bg-gray-700 text-gray-100">
              <div className="flex justify-between p-2">
                <div className="flex space-x-4">
                  <div>
                    <Image
                      src={people}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review?.studentId?.name}</h4>
                    <span className="text-xs text-gray-400">
                      {review.updatedAt.slice(0, 10)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <AiOutlineStar />
                  <span className="text-xl font-bold">{review.rating}</span>
                </div>
              </div>
              <div className="p-2 space-y-2 text-sm text-gray-400">
                <p>{review.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      {loggedUser && loggedUser?.id && (
        <div className="mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center"
          >
            {/* Review Description */}
            <div>
              <label className="label" htmlFor="description">
                Review Description
              </label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Write your review here"
                    className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none w-full"
                  />
                )}
              />
            </div>

            {/* Review Rating */}
            <div>
              <label className="label" htmlFor="rating">
                Rating
              </label>
              <Controller
                name="rating"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="border border-cBlack input focus:outline focus:outline-cOrange focus:border-none w-full"
                  />
                )}
              />
            </div>

            <button type="submit" className="btn mt-8">
              Submit Review
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ServiceReview;
