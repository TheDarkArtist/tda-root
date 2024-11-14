import Bio from "@/components/settings/profile/bio";
import Name from "@/components/settings/profile/name";
import Picture from "@/components/settings/profile/picture";
import React from "react";

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
