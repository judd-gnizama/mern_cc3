import { MdAddCircle, MdInfo, MdLogin } from "react-icons/md";

export const homeLinks = [
  {
    text: "about",
    path: "about",
    icon: <MdInfo />,
  },
  {
    text: "login",
    path: "login",
    icon: <MdLogin />,
  },
  {
    text: "register",
    path: "register",
    icon: <MdAddCircle />,
  },
];
export const dashboardLinks = [
  {
    text: "feed",
    path: "",
    icon: null,
  },
  {
    text: "groups",
    path: "all-groups",
    icon: null,
  },
];
