"use client";

import Contents from "@/components/ui/Contents";
import Footers from "@/components/ui/Footers";
import Headers from "@/components/ui/Headers";
import { Layout, Space } from "antd";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Headers />
      <Contents>{children}</Contents>
      <Footers />
    </Layout>
  );
};

export default HomeLayout;
