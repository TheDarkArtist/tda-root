import { getUserById } from "@/lib/actions/utils/user";
import { os } from "@/utils/fonts";
import React from "react";

const PostUsername = async ({ userId }: { userId: string }) => {
  const user = await getUserById(userId);
  return <p className={`${os.className} text-sm`}>by {user?.username}</p>;
};

export default PostUsername;
