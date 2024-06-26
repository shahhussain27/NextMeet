import { CiHome, CiHeart } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";
import { IoPeopleOutline, IoBookmarksOutline } from "react-icons/io5";
import { TbUserEdit } from "react-icons/tb";

export const sidebarLinks = [
  {
    icon: <CiHome />,
    route: "/",
    label: "Home",
  },
  {
    icon: <BiImageAdd />,
    route: "/create-post",
    label: "Create Post",
  },
  {
    icon: <IoPeopleOutline />,
    route: "/people",
    label: "People",
  },
  {
    icon: <IoBookmarksOutline />,
    route: "/saved-posts",
    label: "Saved Posts",
  },
  {
    icon: <CiHeart />,
    route: "/liked-posts",
    label: "Liked Posts",
  },
];

export const pageTitles = [
  {
    url: "/",
    title: "Feed",
  },
  {
    url: "/edit-profile",
    title: "Edit Profile",
  },
  {
    url: "/create-post",
    title: "Create Post",
  },
  {
    url: "/search",
    title: "Search",
  },
];

export const tabs = [
  {
    link: "posts",
    name: "Posts",
  },
  {
    link: "followers",
    name: "Followers",
  },
  {
    link: "following",
    name: "Following",
  },
];
