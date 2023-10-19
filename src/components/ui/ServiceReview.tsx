/* eslint-disable @next/next/no-img-element */
import { useGetReviewsByCourseIdQuery } from "@/redux/api/reviewsApi";
import Image from "next/image";
import people from '../../assets/profile.png'
import { AiOutlineStar } from "react-icons/ai";

type ServiceReviewProps = {
  id: string;
};

const ServiceReview = ({ id }: ServiceReviewProps) => {
  const query: Record<string, any> = {};

  const { data: reviewsData } = useGetReviewsByCourseIdQuery({ id, ...query });

  const reviews = reviewsData?.reviews;
//   console.log(reviews);
  
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1">
        {reviews?.map((review: any) => (
          <>
            <div className="container flex flex-col w-full max-w-lg p-3 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
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
    </div>
  );
};

export default ServiceReview;
