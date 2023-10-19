import PopulerServices from "@/components/ui/home/PopulerServices";
import Servey from "@/components/ui/home/Servey";
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
      <StudentsReview />
    </div>
  );
};

export default HomePage;
