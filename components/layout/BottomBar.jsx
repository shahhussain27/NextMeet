"use client";
import React from "react";
import { sidebarLinks } from "@constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between bottom-0 z-20 w-full px-6 py-3 md:hidden">
      {sidebarLinks.map((link) => {
        const inActive = pathname === link.route;
        return (
          <Link
            key={link}
            href={link.route}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 ${
              inActive
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <p className="max-sm:text-2xl">{link.icon}</p>{" "}
            <p className="font-medium max-sm:hidden">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
