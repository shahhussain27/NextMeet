"use client";
import Loader from "@components/Loader";
import PostCard from "@components/cards/PostCard";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [feedPost, setFeedPost] = useState([]);

  const getFeedPost = async () => {
    const response = await fetch(`/api/post`);
    const data = await response.json();
    setFeedPost(data);
    setLoading(false);
  };

  useEffect(() => {
    getFeedPost();
  }, []);
  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10">
      {feedPost.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          creator={post.creator}
          loggedInUser={user}
          update={getFeedPost}
        />
      ))}
    </div>
  );
};

export default Home;
