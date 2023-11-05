import Image from "next/image";
import teacherPic from "../../../../public/images/Teacher.gif"
import Button from "../Button";

const FindTeacher = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center px-5">
      <div className="flex items-center justify-center">
        <Image src={teacherPic} alt="" width={450} height={450} />
      </div>

      <div className="flex flex-col mx-auto text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <div className="border-b-2 w-20 border-cOrange mr-3"></div>
          <p className="text-cOrange">Get yourself your soulmate tutor.</p>
        </div>
        <h1 className="lg:text-4xl text-3xl font-semibold mb-5">
          No stop untill you find <br /> your missing{" "}
          <span className="text-cBlue">Teacher</span>
        </h1>

        <p className="lg:w-[500px] mb-5">
          Find a tutor is like finding a piece of missing heart, so find it
          carefully and invest your time into it.
        </p>
      <Button text="See More" />
      </div>
    </div>
  );
};

export default FindTeacher;
