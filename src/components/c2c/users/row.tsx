import { Button } from "@/components/ui/button";
import ViewButton from "@/components/utils/buttons/view-button";
import { User } from "@prisma/client";
import React from "react";

const Row = ({ user, index }: { user: User; index: number }) => {
  return (
    <tr className="border-2 text-sm border-zinc-800">
      <td className="border-2 border-zinc-800 align-top text-center px-2 py-1">
        {index + 1}.
      </td>
      <td className="border-2 border-zinc-800 align-top px-2 py-1">
        {user.username}
      </td>
      <td className="border-2 max-w-screen-md border-zinc-800 px-2 py-1">
        {user.name}
      </td>
      <td className="border-2 border-zinc-800 align-top px-2 py-1">
        {user.access}
      </td>
      <td className="border-2 border-zinc-800 align-top px-2 py-1">
        {user.email}
      </td>
      <td className="border-2 border-zinc-800 align-top px-2 py-1">
        {user.emailVerified?.toLocaleDateString()}
      </td>
      <td className="border-2 border-zinc-800 align-top px-2 py-1">
        {user.isTwoFactorEnabled ? "true" : "false"}
      </td>
      <td className="min-w-48 space-x-1 px-2">
        <ViewButton slug={user.username} type="user" />
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Row;
