"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { tabs } from "@constants";
import Link from "next/link";

const ProfileCard = ({ userData, activeTab }) => {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUserInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const isFollowing = userInfo?.following?.find(
    (item) => item._id === userData._id
  );

  const handleFollow = async () => {
    const response = await fetch(
      `/api/user/${user.id}/follow/${userData._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setUserInfo(data);
  };

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-9">
      <div className="flex justify-between items-start">
        <div className="flex gap-5 items-start">
          <Image
            src={userData.profilePhoto}
            alt="profile photo"
            width={100}
            height={100}
            className="rounded-full md:max-lg:hidden"
          />
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-bold max-sm:font-semibold">
                {userData.firstName} {userData.lastName}
              </p>
              <p className="text-xs text-gray-500">@{userData.username}</p>
            </div>

            <div className="flex gap-7 font-semibold max-sm:gap-4">
              <div className="flex max-sm:flex-col gap-2 items-center max-sm:gap-0.5">
                <p className="text-purple-500">{userData.posts.length}</p>
                <p className="">Posts</p>
              </div>
              <div className="flex max-sm:flex-col gap-2 items-center max-sm:gap-0.5">
                <p className="text-purple-500">{userData.followers.length}</p>
                <p className="">Followers</p>
              </div>
              <div className="flex max-sm:flex-col gap-2 items-center max-sm:gap-0.5">
                <p className="text-purple-500">{userData.following.length}</p>
                <p className="">Following</p>
              </div>
            </div>
          </div>
        </div>
        {user.id !== userData.clerkId &&
          (isFollowing ? (
            <button
              onClick={() => handleFollow()}
              className="bg-purple-100 hover:bg-purple-200  py-1.5 px-6 rounded-lg"
            >
              Following
            </button>
          ) : (
            <button
              onClick={() => handleFollow()}
              className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-6 rounded-lg"
            >
              Follow
            </button>
          ))}
      </div>
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <Link
            key={tab.link}
            href={`/profile/${userData._id}/${tab.link}`}
            className={`tab ${
              activeTab === tab.name
                ? "bg-blue-600 text-white"
                : "bg-purple-100 text-black"
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
