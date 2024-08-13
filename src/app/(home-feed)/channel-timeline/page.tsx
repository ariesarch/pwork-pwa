"use client";

import PeopleCard from "@/components/atoms/PeopleCard";
import Post from "@/components/atoms/Post";
import AccountMenu from "@/components/modules/AccountMenu";
import { peoples, posts } from "@/constants/home";
import React, { useState } from "react";

const PeopleTab = () => {
  return (
    <div className="grid mt-5 grid-cols-3 gap-4">
      {peoples.map((people) => {
        return <PeopleCard data={people} key={people.id} />;
      })}
      {peoples.map((people) => {
        return <PeopleCard data={people} key={people.id} />;
      })}
      {peoples.map((people) => {
        return <PeopleCard data={people} key={people.id} />;
      })}
    </div>
  );
};
const ActivityTab = () => {
  return (
    <div className="mt-5">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};
const ChannelTimelinePage = () => {
  const [selectedTab, setSelectedTab] = useState("people");
  return (
    <div className="pb-32">
      <AccountMenu />
      <div className="cursor-pointer sm:mx-[-20px] grid grid-cols-2 text-center py-3 font-semibold ">
        <div
          onClick={() => setSelectedTab("people")}
          className={`${
            selectedTab === "people"
              ? "border-b-2 border-white text-white"
              : "text-patchwork_black-50 "
          }  pb-3`}
        >
          People
        </div>
        <div
          onClick={() => setSelectedTab("activity")}
          className={`${
            selectedTab === "activity"
              ? "border-b-2 border-white text-white"
              : "text-patchwork_black-50 "
          }  pb-3`}
        >
          Activity
        </div>
      </div>
      {selectedTab === "people" && <PeopleTab />}
      {selectedTab === "activity" && <ActivityTab />}
    </div>
  );
};

export default ChannelTimelinePage;
