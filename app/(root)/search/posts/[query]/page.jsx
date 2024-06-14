"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import PostCard from "@components/cards/PostCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchPost = () => {
  const { query } = useParams();
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [searchPosts, setSearchPosts] = useState([]);

  const getSearchPosts = async () => {
    const response = await fetch(`/api/post/search/${query}`);
    const data = await response.json();
    setSearchPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getSearchPosts();
  }, [query]);
  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10">
      <div className="flex gap-6">
        <Link
          className="tab bg-purple-500 text-white"
          href={`/search/posts/${query}`}
        >
          Posts
        </Link>
        <Link className="tab bg-purple-100" href={`/search/people/${query}`}>
          Poeple
        </Link>
      </div>
      {searchPosts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          creator={post.creator}
          loggedInUser={user}
          update={getSearchPosts}
        />
      ))}
    </div>
  );
};

export default SearchPost;
