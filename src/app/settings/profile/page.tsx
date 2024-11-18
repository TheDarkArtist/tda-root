import Bio from "@/components/settings/profile/bio";
import Name from "@/components/settings/profile/name";
import Picture from "@/components/settings/profile/picture";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    <div className="w-full p-4 space-y-8">
      <h1 className="text-2xl">Public profile</h1>
      <Picture />
      <Name />
      <Bio />
    </div>
  );
};

export default ProfilePage;
