"use client";

import Sidebar from "@/components/ui/dashboard/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/signin");
    }

    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return <p>Redirecting...</p>;
  }

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
