import Image from "next/image";
import userImage from "../../../assets/Untitled design1.png";
import SectionTitle from "../SectionTitle";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ExperiencedTeacher = () => {
  const teachers = Array(8).fill({
    name: "Khalid Hasan",
    subject: "Chemistry",
    image: userImage,
  });

  return (
    <div className="py-20 px-5">
      <SectionTitle
        title="Our Experienced Teachers"
        subtitle="The best teachers from all over the country are here to help you."
      />

      <div className="lg:px-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          className="mySwiper"
        >
          {teachers?.map((teacher, index) => (
            <SwiperSlide key={index+1}>
              <div
                key={index}
                className="w-64 rounded-lg bg-gray-100 border border-cDeepBlue mx-auto"
              >
                <Image
                  src={teacher.image}
                  alt="user"
                  width={300}
                  className="w-full rounded-t-lg"
                />
                <div className="px-2 py-3 flex justify-between ">
                  <div>
                    <h1 className="text-lg font-semibold text-cBlack">
                      {teacher.name}
                    </h1>
                    <p className="text-sm">{teacher.subject}</p>
                  </div>
                  <button className="btn btn-xs bg-cDeepBlue/80 text-white text-[10px] hover:bg-cOrange">
                    View Profile
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default ExperiencedTeacher;
