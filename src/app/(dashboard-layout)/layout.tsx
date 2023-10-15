import Sidebar from "@/components/ui/dashboard/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default DashboardLayout;
