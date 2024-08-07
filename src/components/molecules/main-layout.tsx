import React, { ReactNode } from "react";
import clsx from "clsx";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className={clsx("col-span-12 lg:col-span-6 px-6 w-full", className)}>
        {children}
      </div>
      <div className="col-span-12 lg:col-span-3"></div>
    </div>
  );
};

export default MainLayout;
