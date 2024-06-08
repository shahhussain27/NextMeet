import { CiHome } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
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
    icon: <TbUserEdit />,
    route: "/edit-profile",
    label: "Edit Profile",
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
