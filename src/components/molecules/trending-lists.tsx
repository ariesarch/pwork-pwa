import React from "react";
import { Flame } from "lucide-react";
import { TrendLists } from "@/constants/trending-llists";
import { ChevronRight } from "lucide-react";
import Divider from "../atoms/DividerComponent";

const TrendingLists = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Flame /> <h3 className="font-bold">Trending</h3>
      </div>
      <div className="flex flex-col gap-3 leading-[10px] mt-5">
        {TrendLists &&
          TrendLists.map((list, index) => (
            <div key={list.name}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-bold">#{list.name}</p>
                  <span className="font-normal text-sm text-patchwork_black-100 leading-3">
                    {list.count} posts
                  </span>
                </div>
                <ChevronRight className="cursor-pointer" />
              </div>
              {index < TrendLists.length - 1 && (
                <div className="mt-4">
                  <Divider />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingLists;
