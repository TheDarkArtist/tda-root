import Bio from "@/components/settings/profile/bio";
import Name from "@/components/settings/profile/name";
import Picture from "@/components/settings/profile/picture";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    // TODO: Add Fallback UI
    <div className="w-full p-4 space-y-8">
      <h1 className="text-2xl">Profile settings</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Picture />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Name />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Bio />
      </Suspense>
    </div>
  );
};

export default ProfilePage;
