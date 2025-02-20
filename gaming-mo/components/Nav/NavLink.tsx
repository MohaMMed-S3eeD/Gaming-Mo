"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

const NavLink = ({
  nav,
}: {
  nav: {
    link: string;
    label: string;
    icon: ReactElement<{ className?: string }>;
  };
}) => {
  const pathName = usePathname();
  const { link, label, icon } = nav;
  return (
    <Link
      className={`${
        pathName === link ? "text-red-400  " : "text-gray-400 "
      } my-2 duration-150 flex items-center p-2 space-x-2`}
      key={label}
      href={link}
    >
      {React.cloneElement(icon, { className: "w-6 h-5" })}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
