"use client";
import { peoples } from "@/constants/home";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../atoms/Carousel";
import PeopleCard from "../atoms/PeopleCard";
import { useNavigate } from "@/utils/navigation";

const PeopleFollowing = () => {
  const { to } = useNavigate();
  return (
    <div className="px-4 sm:px-6">
      <div className="mt-5  flex items-center justify-between">
        <h3 className="font-semibold text-lg">People Following</h3>
        <p
          className="font-semibold text-md text-patchwork_black-50 cursor-pointer"
          onClick={() => to("/channel-timeline")}
        >
          View All
        </p>
      </div>
      <Carousel>
        <CarouselContent className="mt-4">
          {peoples.map((item) => {
            return (
              <CarouselItem
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3"
                key={item.id}
              >
                <PeopleCard data={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PeopleFollowing;
