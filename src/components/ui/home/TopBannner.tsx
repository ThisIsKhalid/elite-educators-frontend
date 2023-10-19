"use client";

import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import photo from "../../../assets/Online learning-bro.svg";
import profile1 from "../../../assets/profile.png";
import profile2 from "../../../assets/user-profile.png";
import Button from "../Button";

const TopBannner = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 text-cBlack items-center mx-5">
      <div className="flex flex-col mx-auto">
        <div className="flex items-center">
          <div className="border-b-2 w-20 border-cOrange mr-3"></div>
          <p className="text-cOrange">Help you the best versions</p>
        </div>
        <h1 className="lg:text-6xl text-5xl font-semibold mb-5">
          Find the <span className="text-cBlue">Experts</span>
          <br />
          Learn without <span className="text-cOrange">Limits</span>
        </h1>

        <p className="mb-5 lg:w-[500px]">
          As a mission-driven organization, we&#39;re relentlessly pursuing our
          vision of a world where every learner can access education to unlock
          their potential, without the barriers of location.
        </p>

        <div className="flex items-center gap-5">
          <Button text="Get Started" />

          <button className="btn py-3 w-40 rounded-full flex items-center justify-center">
            <span className="text-cOrange mr-3">
              <BiSolidRightArrow />
            </span>{" "}
            Learn More
          </button>
        </div>

        <div>
          <div className="flex items-center mt-5 relative">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <Image src={profile1} alt="" />
            </div>
            <div className="w-7 h-7 rounded-full overflow-hidden absolute left-3">
              <Image src={profile2} alt="" />
            </div>
            <div className="w-7 h-7 rounded-full overflow-hidden absolute left-6">
              <Image src={profile1} alt="" />
            </div>
            <div className="w-7 h-7 rounded-full overflow-hidden absolute left-9">
              <Image src={profile2} alt="" />
            </div>
          </div>
          <p className="text-xs">
            <span className="text-cBlue font-semibold">200+</span> Tutor
            Available
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <Image src={photo} alt="" width={500} />
      </div>
    </div>
  );
};

export default TopBannner;
