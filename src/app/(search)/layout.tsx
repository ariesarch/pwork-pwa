import AppBar from "@/components/modules/AppBar";
import MainLayout from "@/components/molecules/main-layout";
import React, { PropsWithChildren } from "react";

const HomeFeedLayout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayout className="bg-patchwork_black-500 text-patchwork_white-900 min-h-screen">
      {children}
      <AppBar />
    </MainLayout>
  );
};

export default HomeFeedLayout;
