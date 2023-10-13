"use client";

import Contents from "@/components/ui/Contents";
import Footers from "@/components/ui/Footers";
import Headers from "@/components/ui/Headers";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  
  
  return (
    <section>
      <Headers />
      <Contents>{children}</Contents>
      <Footers />
    </section>
  );
};

export default HomeLayout;
