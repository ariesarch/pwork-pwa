"use client";
import React, { useState } from "react";
import Image from "next/image";
import Divider from "@/components/atoms/DividerComponent";
import { SearchInput } from "@/components/atoms/SearchInput";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import { cn } from "@/lib/utils";
import TrendingLists from "@/components/molecules/trending-lists";
import StartBrowsing from "@/components/molecules/start-browsing";
import SuggestedPeople from "@/components/molecules/suggested-people";
import { myChannels } from "@/constants/home";
import ChannelCard from "@/components/atoms/ChannelCard";
import { useNavigate } from "@/utils/navigation";

const Search = () => {
  // const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("everything");
  const { to } = useNavigate();
  return (
    <div>
      <div className="flex items-center gap-2 py-3">
        <Image
          src="/user-profile.jpeg"
          alt="user-profile"
          width="60"
          height="60"
          className="rounded-full h-[60px] object-cover"
        />
        <h3 className="text-lg font-semibold">Search</h3>
      </div>
      <SearchInput
        className="my-5 cursor-pointer"
        placeholder="Search"
        onClick={() => to("/search-timeline")}
        // value={searchText}
        // onChange={(e) => setSearchText(e.target.value)}
      />
      <Divider />
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="pb-20"
      >
        <TabsList className="flex items-center rounded-none mb-6">
          <TabsTrigger
            value="everything"
            className={cn(
              "text-base w-full py-3 px-5 border-b-2",
              activeTab === "everything"
                ? "text-patchwork_white-900"
                : "text-patchwork_black-100 border-b-patchwork_black-500"
            )}
          >
            Everything
          </TabsTrigger>
          <TabsTrigger
            value="channels"
            className={cn(
              "text-base w-full py-3 px-5 border-b-2",
              activeTab === "channels"
                ? "text-patchwork_white-900"
                : "text-patchwork_black-100 border-b-patchwork_black-500"
            )}
          >
            Channels
          </TabsTrigger>
        </TabsList>
        <TabsContent value="everything">
          <TrendingLists />
          <StartBrowsing />
          <SuggestedPeople />
        </TabsContent>

        <TabsContent value="channels">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4">
            {myChannels.map((item) => {
              return (
                <div
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3"
                  key={item.id}
                >
                  <ChannelCard channel={item} />
                </div>
              );
            })}
            {myChannels.map((item) => {
              return (
                <div
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3"
                  key={item.id}
                >
                  <ChannelCard channel={item} />
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Search;
