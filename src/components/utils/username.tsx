import { getUserById } from "@/lib/actions/users/get-user";
import Link from "next/link";
import React from "react";

const Username = async ({ id }: { id: string }) => {
  const user = await getUserById(id);
  return (
    <Link
      className="text-cyan-600 hover:underline"
      href={`/u/${user?.username}`}
    >
      {user?.username}
    </Link>
  );
};

export default Username;
