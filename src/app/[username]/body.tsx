import PostList from "@/components/posts/post-list";
import { getUserByUsername } from "@/lib/actions/users/get-user";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const Body = async ({ username }: { username: string }) => {
  const session = await auth();
  const user = await getUserByUsername(username);

  return (
    <div className="border-x border-b bg-white dark:bg-zinc-950 border-sky-600 dark:border-red-950 pb-20">
      <div className="hidden text-sm sm:block ml-36 pl-2 py-2 mb-12">
        {user?.bio ? (
          <span className="text-gray-600 dark:text-zinc-400">{user?.bio}</span>
        ) : (
          <>
            {user?.id !== session?.user?.id && (
              <Link
                className="text-cyan-600 mt-2 hover:underline"
                href={`/settings`}
              >
                Add bio
              </Link>
            )}
          </>
        )}
      </div>
      <div className="py-1 mx-4 rounded-sm overflow-y-auto">
        <h1 className="text-xl md:text-3xl my-4 font-bold text-zinc-600 dark:text-zinc-300">
          {user?.name?.trim()}&apos;s posts
        </h1>
        <PostList userId={user?.id as string} />
      </div>
    </div>
  );
};

export default Body;
