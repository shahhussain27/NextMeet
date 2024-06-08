"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { UserButton, useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";

const LeftSideBar = () => {
  const { user, isLoaded } = useUser();
  // console.log(user)
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false)
  };

  // console.log(userData)

  useEffect(() => {
    getUser();
  }, [user]);
  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <>
      <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
        <>
          <Link href={"/"}>
            {/* <Image
              src={userData?.profilePhoto}
              alt="logo"
              width={200}
              height={200}
            /> */}
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 items-center">
              <Link href={"/"}>
                <Image
                  src={userData?.profilePhoto}
                  alt="profile photo"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </Link>
              <p className="font-semibold">
                {userData?.firstName} {userData?.lastName}
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="font-bold">{userData?.posts?.length}</p>
                  <p className="font-normal">Posts</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="font-bold">{userData?.followers?.length}</p>
                  <p className="font-normal">Followers</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="font-bold">{userData?.following?.length}</p>
                  <p className="font-normal">Following</p>
                </div>
              </div>
            </div>
            <hr />
            <Menu />
            <hr />
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex items-center gap-6">
                <UserButton afterSignOutUrl="/sign-in" />
                <p className="font-semibold">Manage Account</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default LeftSideBar;
