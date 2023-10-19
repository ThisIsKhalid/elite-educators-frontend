"use client";

import Contents from "@/components/ui/Contents";
import Footers from "@/components/ui/Footers";
import dynamic from "next/dynamic";

const Headers = dynamic(() => import("@/components/ui/Headers"), {
  ssr: false,
});

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
