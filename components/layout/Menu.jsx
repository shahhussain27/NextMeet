import React from "react";
import { sidebarLinks } from "@constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const inActive = pathname === link.route;
        return (
          <Link
            key={link}
            href={link.route}
            className={`flex gap-4 justify-start items-center rounded-lg py-2 px-4 ${
              inActive
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "hover:bg-gray-100"
            } `}
          >
            {link.icon} <p className="">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
