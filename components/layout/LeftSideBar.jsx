"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { IoIosLogOut } from "react-icons/io";

const LeftSideBar = () => {
  return (
    <>
      <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
        <>
          <Link href={"/"}>
            {/* <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={200}
              height={200}
            /> */}
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 items-center">
              <Link href={"/"}>
                {/* <Image
                  src={"/assets/admin.png"}
                  alt="profile photo"
                  width={50}
                  height={50}
                  className="rounded-full"
                /> */}
              </Link>
              <p className="font-semibold">Admin</p>
            </div>
            <div className="flex gap-6">
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="font-bold">1</p>
                  <p className="font-normal">Posts</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="font-bold">0</p>
                  <p className="font-normal">Followers</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="font-bold">0</p>
                  <p className="font-normal">Following</p>
                </div>
              </div>
            </div>
            <hr />
            <Menu />
            <hr />
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex items-center gap-6">
                <UserButton />
                <p className="font-semibold">Manage Account</p>
              </div>
              <SignedIn>
                <SignOutButton>
                  <div className="flex items-center gap-6">
                    <p className="text-3xl">
                      <IoIosLogOut />
                    </p>
                    <p className="font-semibold">Log Out</p>
                  </div>
                </SignOutButton>
              </SignedIn>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default LeftSideBar;
