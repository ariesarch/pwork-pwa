import Image from "next/image";
import React from "react";

interface Props {
  data: any;
}
const PeopleCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center snap-start">
      <div className="relative  rounded-full w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
        {data.isRedPointOn && (
          <div className="z-10 absolute right-0 top-0 sm:right-3 sm:top-3 w-4 h-4 border-2 border-patchwork_black-500 rounded-full bg-patchwork_red-600" />
        )}
        <Image
          fill
          className="object-cover rounded-full   "
          src={data.img}
          alt="Channel Image"
        />
      </div>
      <p className="text-sm sm:text-md text-center line-clamp-2 mt-2 font-semibold">
        {data.name}
      </p>
    </div>
  );
};

export default PeopleCard;
