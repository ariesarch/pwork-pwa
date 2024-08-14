// import { IPost } from "@/types/home-feed/posts";
import {
  ChatBubbleIcon,
  DotsVerticalIcon,
  HeartIcon,
  KeyboardIcon,
  ReloadIcon,
  Share1Icon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

interface Props {
  post: any;
}

const Post = ({ post }: any) => {
  return (
    <div className="flex gap-2 border-b pt-3 pb-5 border-patchwork_black-50 px-3 sm:px-6">
      <div className="w-[15%] sm:w-[10%]">
        <div className="relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full">
          <Image
            fill
            className="rounded-full object-cover"
            alt="User Profile"
            src={post.profileImg}
            // src="/user-profile.jpeg"
          />
        </div>
      </div>
      <div className="mt-1 w-[85%]  sm:w-[90%]">
        <div className="flex   gap-3">
          <p className="font-semibold text-md text-patchwork_white-900">
            Account Name
          </p>
          <p className="text-sm   text-patchwork_black-50">19h ago</p>
        </div>
        <p className="text-md mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          ratione veniam cumque error, temporibus perferendis alias est
          voluptatibus id voluptas dolor? Maxime laboriosam eum velit suscipit
          sint id odio est!
        </p>
        {post.img && (
          <div className="relative h-[150px] sm:h-[200px] mt-4 w-full">
            <Image
              fill
              className="object-cover rounded-lg"
              src="/user-profile.jpeg"
              //   src={post.img}
              alt="Post Image"
            />
          </div>
        )}
        {post.isRepostedPost && (
          <div className="mt-3 flex  border rounded-lg py-2 border-patchwork_black-300 px-2 sm:px-3 gap-1 sm:gap-0 ">
            <div className="w-[15%] sm:w-[10%]">
              <div className="relative mt-1 sm:mt-0 w-[25px] h-[25px] sm:w-[40px] sm:h-[40px]  rounded-full">
                <Image
                  fill
                  className="rounded-full object-cover"
                  alt="User Profile"
                  src={post.profileImg}
                />
              </div>
            </div>
            <div className="mt-1 w-[85%]  sm:w-[90%]">
              <div className="flex   gap-3">
                <p className="font-semibold text-md text-patchwork_white-900">
                  Account Name
                </p>
                <p className="text-sm   text-patchwork_black-50">19h ago</p>
              </div>
              <p className="text-md  mt-1 sm:mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ratione veniam cumque error!
              </p>
              {post.img && (
                <div className="relative h-[150px] sm:h-[200px] mt-4 w-full">
                  <Image
                    fill
                    className="object-cover rounded-lg"
                    // src={post.img}
                    src="/user-profile.jpeg"
                    alt="Post Image"
                  />
                </div>
              )}
            </div>
          </div>
        )}
        <div className="flex mt-3 items-center justify-between   text-patchwork_black-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <ChatBubbleIcon width={20} height={20} />
              <small>6</small>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <UpdateIcon width={20} height={20} />
              <small>6</small>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <HeartIcon width={20} height={20} />
              <small>6</small>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <KeyboardIcon width={20} height={20} />
            <Share1Icon width={20} height={20} />
            <DotsVerticalIcon width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
