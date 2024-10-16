import React from "react";
import CurrentTime from "../utils/current-time";
import NvbarButtons from "./nvbar-buttons";
import { currentUser } from "@/lib/actions/utils/auth";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="flex justify-between w-full px-2 items-center">
      <div className="text-sm">{user?.username}</div>
      <CurrentTime />
      <NvbarButtons />
    </div>
  );
};

export default Navbar;
