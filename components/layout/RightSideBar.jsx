"use client";
import Loader from "@components/Loader";
import UserCard from "@components/cards/UserCard";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const RightSideBar = () => {
  const { id } = useParams();
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

    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [id]);
  return loading ? (
    <Loader />
  ) : (
    <div className="sticky right-0 top-0 z-20 flex flex-col gap-12 overflow-auto h-screen w-[300px] xl:w-[350px] pl-6 py-6 pr-10 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h4 className="font-semibold">Messages</h4>

        {/* <div className="flex flex-col gap-9">
          {userData?.following?.map((person) => (
            <UserCard key={person._id} userData={person} update={getUser} />
          ))}
        </div> */}
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-semibold">Suggested People</h4>
        <div className="flex flex-col gap-4">Users</div>
      </div>
    </div>
  );
};

export default RightSideBar;
