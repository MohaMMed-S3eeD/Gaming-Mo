import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";
export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];
const SideBar = () => {
  return (
    <div className="w-50 m-5 sticky inset-0 h-full min-h-screen ">
      <Logo/>
      {NAV_LINKS.map((nav, index) => (
        <NavLink nav={nav} key={index} />
      ))}
    </div>
  );
};

export default SideBar;
