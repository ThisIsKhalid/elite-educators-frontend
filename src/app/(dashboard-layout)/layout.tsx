import Sidebar from "@/components/ui/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <div className="md:flex hidden">
        <Sidebar />
      </div>
      <div className="w-full py-5">{children}</div>
    </section>
  );
};

export default DashboardLayout;
