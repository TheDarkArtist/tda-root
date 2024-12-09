import React from "react";
import Row from "./row";
import { getUsersWithData } from "@/lib/actions/users/get-users";

const Table = async () => {
  const users = await getUsersWithData();

  const headings = [
    "Index",
    "Username",
    "Name",
    "Access",
    "Email",
    "Verified",
    "TwoFactor",
    "Projects",
    "Posts",
    "Comments",
    "Actions",
  ];
  return (
    <div className="max-w-full w-full mx-auto overflow-x-auto">
      <table className="border-collapse mx-auto">
        <thead>
          <tr className="bg-gray-200 dark:bg-zinc-800 border-2 border-gray-300 dark:border-zinc-800">
            {headings.map((heading, index) => (
              <th
                key={index}
                className="border-2 border-stone-700/50 px-4 py-2"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-100 dark:bg-zinc-900 overflow-x-auto">
          {users?.map((user, index) => (
            <Row key={index} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
