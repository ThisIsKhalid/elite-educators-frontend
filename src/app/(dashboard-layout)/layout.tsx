import Sidebar from "@/components/ui/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full py-5 overflow-x-auto">{children}</div>
    </section>
  );
};

export default DashboardLayout;
