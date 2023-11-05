"use client";

import FeedBackForm from "@/components/ui/home/FeedbackForm";
import PopulerServices from "@/components/ui/home/PopulerServices";
import Servey from "@/components/ui/home/Servey";
import OurFeature from "@/components/ui/home/SpecialFeatures";
import StudentsReview from "@/components/ui/home/StudentsReview";
import TopBannner from "@/components/ui/home/TopBannner";
import UpcomingEvents from "@/components/ui/home/UpcomingEvents";
import UpComingServices from "@/components/ui/home/UpcomingServices";

const HomePage = () => {
  return (
    <div className="">
      <TopBannner />
      <Servey />
      <PopulerServices />
      <UpComingServices />
      <UpcomingEvents />
      {/* <OurFeature /> */}
      <StudentsReview />
      <FeedBackForm />
    </div>
  );
};

export default HomePage;
