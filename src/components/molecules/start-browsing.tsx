import React from "react";
import { ChevronRight } from "lucide-react";
import { myChannels } from "@/constants/home";
import Image from "next/image";

const StartBrowsing = () => {
  return (
    <div className="mt-6">
      <h3 className="font-bold">Start Browsing</h3>
      <div className="mt-4 w-full grid grid-cols-2 gap-3 md:gap-6 place-items-center">
        {myChannels.map((item) => (
          <div className="relative cursor-pointer" key={item.id}>
            <Image
              src={item.img}
              alt="user-profile"
              width="300"
              height="96"
              className="h-24 object-cover rounded-sm"
            />
            <div className="absolute w-full bottom-3 px-4">
              <p className="flex items-center justify-between">
                {item.name} <ChevronRight />
              </p>
            </div>
          </div>
        ))}
        {myChannels.map((item) => (
          <div className="relative cursor-pointer" key={item.id}>
            <Image
              src={item.img}
              alt="user-profile"
              width="300"
              height="96"
              className="h-24 object-cover rounded-sm"
            />
            <div className="absolute w-full bottom-3 px-4">
              <p className="flex items-center justify-between">
                {item.name} <ChevronRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartBrowsing;
