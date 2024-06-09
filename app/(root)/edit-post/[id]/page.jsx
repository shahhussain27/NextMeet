"use client";
import Loader from "@components/Loader";
import Posting from "@components/forms/Posting";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditPost = () => {
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const { id } = useParams();

  const getPost = async () => {
    const response = await fetch(`/api/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data)
    setPostData(data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  const postInfo = {
    creatorId: postData?.creator?._id,
    caption: postData?.caption,
    tag: postData?.tag,
    postPhoto: postData?.postPhoto,
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="pt-6">
      <Posting post={postInfo} apiEndpoint={`/api/post/${id}`} />
    </div>
  );
};

export default EditPost;
