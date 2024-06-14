import User from "@lib/models/User";
import Post from "@lib/models/Posts";
import { connectToDB } from "@lib/mongodb/mongoose";
import { model } from "mongoose";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const user = await User.findById(params.profileId)
      .populate({
        path: "posts savedPosts likedPosts",
        model: Post,
        populate: {
          path: "creator",
          model: User,
        },
      })
      .populate({
        path: "following followers",
        model: User,
        populate: {
          path: "posts savedPosts likedPosts",
          model: Post,
        },
      })
      .exec();

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to get user", { status: 500 });
  }
};
