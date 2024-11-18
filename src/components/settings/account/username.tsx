import { getUserById } from "@/lib/actions/users/get-user";
import { auth } from "@/lib/auth";
import React from "react";

const Username = async () => {
  const session = await auth();
  const user = await getUserById(session?.user.id as string);
  return (
    <div className="w-full border border-zinc-600 rounded-sm p-4 bg-zinc-950">
      <h2 className="text-sm sm:text-2xl font-semibold">
        Change your username
      </h2>
      <div className="flex sm:flex-row flex-col gap-4 my-4">
        <input
          className="px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-80"
          type="text"
          placeholder="Your username"
          value={user?.username}
        />
        <button className="bg-green-700 px-4 py-0.5 rounded-sm text-white text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default Username;
