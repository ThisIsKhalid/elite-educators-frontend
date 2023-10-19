import PopulerServices from "@/components/ui/home/PopulerServices";
import TopBannner from "@/components/ui/home/TopBannner";
import UpComingServices from "@/components/ui/home/UpcomingServices";

const HomePage = () => {
  return (
    <div className="">
      <TopBannner />
      <PopulerServices />
      <UpComingServices />
    </div>
  );
};

export default HomePage;
