"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="flex justify-around items-center mt-6 w-full">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-slate-100 py-3 px-5 rounded-lg focus:outline-none text-semibold"
          placeholder="Search post, people, ..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            router.push(`/search/posts/${search}`);
          }}
          className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-2xl"
        >
          <CiSearch />
        </button>
      </div>

      <button
        className="create-post-btn "
        onClick={() => {
          router.push("/create-post");
        }}
      >
        <FiPlus />
        Create A Post
      </button>
      <div className="flex gap-3 md:hidden">
        <UserButton afterSignOutUrl="/sign-in" />
        <h2 className="">
          <svg
            aria-label="Messenger"
            className="w-full h-7 cursor-pointer"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Messenger</title>
            <path
              d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="1.739"
            ></path>
            <path
              d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </h2>
      </div>
    </div>
  );
};

export default TopBar;
