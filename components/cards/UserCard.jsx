"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const UserCard = ({ userData, update }) => {
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
    update();
  };

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Link
          className="flex gap-4 items-center"
          href={`/profile/${userData._id}/posts`}
        >
          <Image
            src={userData.profilePhoto}
            alt="profile photo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <h2 className="font-semibold text-sm">
              {userData.firstName} {userData.lastName}{" "}
            </h2>
            <p className="text-xs text-gray-500">@{userData.username}</p>
          </div>
        </Link>
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
  );
};

export default UserCard;
