"use client";

import { Avatar } from "@/components/atoms/Avatar";
import ChannelHeading from "@/components/atoms/ChannelHeading";
import Post from "@/components/atoms/Post";
import { posts } from "@/constants/home";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { CalendarIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const guidelines = [
  { id: 1, text: "Ensure all posts are on topic" },
  { id: 2, text: "Be kind and respectful in your posts and replies" },
  { id: 3, text: "Explore and share" },
];
const PostsTab = () => {
  return (
    <div>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

const AboutTab = () => {
  return (
    <div>
      <div className="px-3 border-b border-patchwork_black-300 pb-4">
        <p className="font-semibold mb-5">Channel Guidelines</p>
        {guidelines.map((guideline) => {
          return (
            <div key={guideline.id} className="mb-3 flex items-center gap-2">
              <Avatar className="bg-patchwork_red-500 flex items-center justify-center">
                <AvatarFallback className="text-patchwork_black-600 font-semibold">
                  {guideline.id}
                </AvatarFallback>
              </Avatar>
              <p>{guideline.text}</p>
            </div>
          );
        })}
      </div>
      <div className="px-3 pt-4 border-b border-patchwork_black-300 pb-4">
        <p className="font-semibold mb-3">Channel Information</p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          impedit accusantium veritatis cumque maxime adipisci. Sequi error
          asperiores atque unde? Aliquam ad neque, reprehenderit dolorem
          incidunt facilis reiciendis expedita quisquam.
        </p>
        <p className="font-semibold my-3">This is a Heading</p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          impedit accusantium veritatis cumque maxime adipisci.{" "}
        </p>
        <p className="font-semibold my-3">Another Heading</p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          impedit accusantium veritatis cumque maxime adipisci.{" "}
        </p>
        <div className="mt-4 flex item-center gap-2">
          <CalendarIcon width={20} height={20} />
          <p className="text-md">
            Created at Aug 8 2024 by
            <span className="text-patchwork_red-500"> @username</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const ChannelPage = () => {
  const [selectedTab, setSelectedTab] = useState("posts");
  return (
    <div className="pb-36">
      <ChannelHeading />
      <div className="cursor-pointer sm:mx-[-20px] grid grid-cols-2 text-center py-3 font-semibold ">
        <div
          onClick={() => setSelectedTab("posts")}
          className={`${
            selectedTab === "posts"
              ? "border-b-2 border-white text-white"
              : "text-patchwork_black-50 "
          }  pb-3`}
        >
          Posts
        </div>
        <div
          onClick={() => setSelectedTab("about")}
          className={`${
            selectedTab === "about"
              ? "border-b-2 border-white text-white"
              : "text-patchwork_black-50 "
          }  pb-3`}
        >
          About
        </div>
      </div>
      {selectedTab === "posts" && <PostsTab />}
      {selectedTab === "about" && <AboutTab />}
    </div>
  );
};

export default ChannelPage;
