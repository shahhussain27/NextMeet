"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import PostCard from "@components/cards/PostCard";
import UserCard from "@components/cards/UserCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchPeople = () => {
  const { query } = useParams();
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [searchPeople, setSearchPeople] = useState([]);

  const getSearchPeople = async () => {
    const response = await fetch(`/api/user/search/${query}`);
    const data = await response.json();
    setSearchPeople(data);
    setLoading(false);
  };

  useEffect(() => {
    getSearchPeople();
  }, [query]);
  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10">
      <div className="flex gap-6">
        <Link className="tab bg-purple-100" href={`/search/posts/${query}`}>
          Posts
        </Link>
        <Link className="tab bg-purple-500 text-white" href={`/search/people/${query}`}>
          Poeple
        </Link>
      </div>
      {searchPeople.map((person) => (
        <UserCard kry={person._id} userData={person} />
      ))}
    </div>
  );
};

export default SearchPeople;
