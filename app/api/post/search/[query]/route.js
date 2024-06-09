import Post from "@lib/models/Posts";
import { connectToDB } from "@lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
  const { query } = params;
  try {
    await connectToDB();
    const searchPost = await Post.find({
      $or: [
        { caption: { $regex: query, $options: "i" } },
        { tag: { $regex: query, $options: "i" } },
      ],
    })
      .populate("creator likes")
      .exec();

    return new Response(JSON.stringify(searchPost), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to  get post by search", { status: 500 });
  }
};
