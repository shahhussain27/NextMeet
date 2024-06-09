import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
const PostCard = ({ post, creator, loggedInUser }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="w-full max-w-xl rounded-lg flex flex-col gap-4 bg-slate-100 p-5 max-sm:gap-2">
      <div className="flex justify-between">
        <Link href={`/profile/${creator._id}`}>
          <div className="flex gap-3 items-center">
            <Image
              src={creator.profilePhoto}
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col ">
              <h2 className="font-semibold text-sm">
                {creator.firstName} {creator.lastName}{" "}
              </h2>
              <p className="text-xs text-gray-500">@{creator.username}</p>
            </div>
          </div>
        </Link>
        {loggedInUser.id === creator.clerkId && (
          <Link href={`/edit-post/${post._id}`} className="text-2xl">
            <CiSettings />
          </Link>
        )}
      </div>
      <p className="font-tiny text-lg max-sm:text-sm">{post.caption}</p>
      <Image
        src={post.postPhoto}
        alt="post photo"
        width={200}
        height={150}
        className="rounded-lg w-full"
      />
      <p className="text-sm text-purple-500 max-sm:text-sm">{post.tag}</p>
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <p className="text-3xl cursor-pointer">
            {!isLiked ? <FcLikePlaceholder /> : <FcLike />}
          </p>
          <p>{post.likes.length}</p>
        </div>
        {loggedInUser.id !== creator.clerkId && (
          <p className="text-2xl cursor-pointer">
            {!isSaved ? <IoBookmarkOutline /> : <IoBookmark />}
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
