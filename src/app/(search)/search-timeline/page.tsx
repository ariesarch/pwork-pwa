"use client";
import { Button } from "@/components/atoms/Button";
import PeopleCard from "@/components/atoms/PeopleCard";
import Post from "@/components/atoms/Post";
import { SearchInput } from "@/components/atoms/SearchInput";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import BackArrow from "@/components/icons/back-arrow";
import { peoples, posts } from "@/constants/home";
import { cn } from "@/lib/utils";
import { useNavigate } from "@/utils/navigation";
import React, { useState } from "react";

const tabs = [
  {
    name: "Top",
    value: "top",
  },
  {
    name: "People",
    value: "ppl",
  },
  {
    name: "Hashtags",
    value: "hashtags",
  },
  {
    name: "Posts & Hubs",
    value: "posthub",
  },
];

const SearchTimeline = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("top");
  const { to } = useNavigate();
  return (
    <div>
      <div
        className={cn(
          "mt-3 flex justify-between items-center gap-3",
          searchText ? "flex-row-reverse" : ""
        )}
      >
        <SearchInput
          className="mb-0"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button variant="ghost" className="w-fit" onClick={() => to("/search")}>
          {searchText ? <BackArrow /> : "Cancel"}
        </Button>
      </div>
      {searchText ? (
        <div>
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="pb-20"
          >
            <TabsList className="flex items-center rounded-none mb-6">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab.value}
                  className={cn(
                    "text-sm sm:text-base font-bold w-full py-3 px-5 border-b-2",
                    activeTab === tab.value
                      ? "text-patchwork_red-500"
                      : "text-patchwork_black-100 border-b-patchwork_black-500"
                  )}
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="top">
              <h3 className="font-bold">People related to “movies”</h3>
              <div className="flex items-center flex-nowrap overflow-x-auto no-scrollbar gap-3 my-6 -mr-6">
                {peoples.map((people) => {
                  return <PeopleCard data={people} key={people.id} />;
                })}
                {peoples.map((people) => {
                  return <PeopleCard data={people} key={people.id} />;
                })}
              </div>

              {posts.map((post) => {
                return <Post key={post.id} post={post} />;
              })}
            </TabsContent>

            <TabsContent value="ppl"></TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="text-sm sm:text-base flex items-center text-center text-patchwork_black-100 justify-center h-[90vh]">
          Search for people, posts, hashtags, local channels, global channels or
          hubs.
        </div>
      )}
    </div>
  );
};

export default SearchTimeline;
