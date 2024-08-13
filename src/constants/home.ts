import { IPost } from "@/types/home-feed/post";

export const myChannels = [
  {
    id: 1,
    img: "/user-profile.jpeg",
    name: "Channge Name",
    isRedPointOn: true,
  },
  {
    id: 2,
    img: "/user-profile.jpeg",
    name: "Channge Name",
    isRedPointOn: true,
  },
  {
    id: 3,
    img: "/user-profile.jpeg",
    name: "Channge Name",
    isRedPointOn: true,
  },
  {
    id: 4,
    img: "/user-profile.jpeg",
    name: "Channge Name",
    isRedPointOn: true,
  },
];
export const serverChannels = [
  {
    id: 1,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
  {
    id: 2,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
  {
    id: 3,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
  {
    id: 4,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
];
export const localChannels = [
  {
    id: 1,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
  {
    id: 2,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
  {
    id: 3,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
  {
    id: 4,
    img: "/user-profile.jpeg",
    name: "Channge Name",
  },
];
export const peoples = [
  {
    id: 1,
    img: "/user-profile.jpeg",
    name: "Account Name",
    isRedPointOn: true,
  },
  {
    id: 2,
    img: "/user-profile.jpeg",
    name: "Account Name",
    isRedPointOn: true,
  },
  {
    id: 3,
    img: "/user-profile.jpeg",
    name: "Account Name",
    isRedPointOn: false,
  },
  {
    id: 4,
    img: "/user-profile.jpeg",
    name: "Account Name",
    isRedPointOn: false,
  },
];
export const hashtags = [
  { id: 1, name: "#movies", isRedPointOn: true },
  { id: 2, name: "#eduation" },
  { id: 3, name: "#science" },
  { id: 4, name: "#science" },
  { id: 5, name: "#entertainment" },
];
export const lists = [
  { id: 1, name: "List Name", isRedPointOn: true },
  { id: 2, name: "List Name" },
  { id: 3, name: "List Name" },
  { id: 4, name: "List Name" },
  { id: 5, name: "List Name" },
];

export const posts: IPost[] = [
  {
    id: 1,
    createdAt: "19h ago",
    accountName: "Account Name",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ratione veniam cumque error, temporibus perferendis alias est voluptatibus id voluptas dolor? Maxime laboriosam eum velit suscipit sint id odio est!",
    img: "/user-porfile.png",
    profileImg: "/user-profile.jpeg",
  },
  {
    id: 2,
    createdAt: "19h ago",
    accountName: "Account Name",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ratione veniam cumque error, temporibus perferendis alias est voluptatibus id voluptas dolor? Maxime laboriosam eum velit suscipit sint id odio est!",
    profileImg: "/user-profile.jpeg",
  },
  {
    id: 2,
    createdAt: "19h ago",
    accountName: "Account Name",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ratione veniam cumque error, temporibus perferendis alias est voluptatibus id voluptas dolor? Maxime laboriosam eum velit suscipit sint id odio est!",
    profileImg: "/user-profile.jpeg",
    isRepostedPost: true,
  },
];
