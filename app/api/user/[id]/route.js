import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    // console.log("hello");
    const user = await User.findOne({ clerkId: params.id })
      .populate("followers following")
      .exec();

    //   console.log({clerkId: params.id})

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to get user", { status: 500 });
  }
};
