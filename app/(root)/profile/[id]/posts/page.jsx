"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import PostCard from "@components/cards/PostCard";
import ProfileCard from "@components/cards/ProfileCard";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const ProfilePosts = () => {
  const { id } = useParams();
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);

    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-9">
      <ProfileCard userData={userData} activeTab="Posts" />
      <div className="flex flex-col gap-9">
        {userData?.posts?.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            creator={post.creator}
            loggedInUser={user}
            update={getUser}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePosts;
