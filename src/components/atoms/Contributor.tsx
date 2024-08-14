import { IContributor } from "@/types/contributors";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

interface Props {
  contributor: IContributor;
}

const Contributor = ({ contributor }: Props) => {
  return (
    <div className="py-3 border-b border-patchwork_black-100 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <div className="border p-1 rounded-full">
          <Image
            src={contributor.image}
            alt={contributor.name}
            width="50"
            height="50"
            className="rounded-full h-[50px] object-cover"
          />
        </div>
        <div className="">
          <span className="block text-[15px] font-semibold">
            {contributor.name}
          </span>
          <small className="text-patchwork_black-100">
            {contributor.email}
          </small>
          <p className="text-md mt-2 block">{contributor.text}</p>
        </div>
      </div>
      <div className="flex items-center flex-nowrap rounded-full py-2 px-5 border">
        <small>Following</small>
        <CheckIcon className="inline ms-2" width={20} height={20} />
      </div>
    </div>
  );
};

export default Contributor;
