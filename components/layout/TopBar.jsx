"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

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
        {/* <Link href={"/"}>Profile Image</Link> */}
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
};

export default TopBar;
