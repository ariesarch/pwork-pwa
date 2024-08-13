"use client";

import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  BellIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AppBar = () => {
  const pathname = usePathname();
  const menus = [
    { id: 1, icon: <HomeIcon width={23} height={23} />, link: "/home" },
    { id: 2, icon: <MagnifyingGlassIcon width={23} height={23} />, link: "/" },
    {
      id: 3,
      icon: <PlusIcon width={22} height={22} color="white" />,
      link: "/",
    },
    { id: 4, icon: <BellIcon width={23} height={23} />, link: "/" },
    { id: 5, icon: <EnvelopeClosedIcon width={23} height={23} />, link: "/" },
  ];
  return (
    <div className=" z-20 bg-patchwork_black-500 text-patchwork_white-900 py-3 sm:py-0 fixed border-t border-patchwork_black-400 bottom-0 left-0 right-0 lg:left-[25%] lg:right-[25%] xl:left-[26.4%] xl:right-[26.4%] 2xl:left-[28.56%] 2xl:right-[28.56%]">
      <div className="grid grid-cols-5 sm:gap-4 ">
        {menus.map((menu) => {
          return (
            <Link
              key={menu.id}
              href={menu.link}
              className="flex items-center justify-center w-full sm:p-4"
            >
              <div
                className={`w-max p-2 rounded-lg  ${
                  menu.id === 3 && " bg-patchwork_black-300 "
                }`}
              >
                <div
                  className={`${
                    pathname === menu.link
                      ? "text-patchwork_white-900"
                      : "text-patchwork_black-200"
                  }`}
                >
                  {menu.icon}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AppBar;
