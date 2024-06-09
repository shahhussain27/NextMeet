"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserCard = ({ userData }) => {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${userData.clerkId}`, {
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
    (item) => item.id === userData._id
  );

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          src={userData.profilePhoto}
          alt="profile photo"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <h2 className="font-semibold text-sm">
            {userData.firstName} {userData.lastName}{" "}
          </h2>
          <p className="text-xs text-gray-500">@{userData.username}</p>
        </div>
      </div>
      {user.id !== userData.clerkId &&
        (isFollowing ? (
          <button className="bg-purple-100 hover:bg-purple-200  py-1.5 px-6 rounded-lg">
            Following
          </button>
        ) : (
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-6 rounded-lg">
            Follow
          </button>
        ))}
    </div>
  );
};

export default UserCard;
