import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const ProfilePage = ({ params }: { params: Params }) => {
  return (
    <main className="my-8">
      <div className="max-w-screen-lg mx-auto w-full">
        <div>ProfilePage</div>
        <div>{params.username}</div>
      </div>
    </main>
  );
};

export default ProfilePage;
