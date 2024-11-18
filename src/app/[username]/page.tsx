import Footer from "@/components/footer/footer";
import BasicInfo from "@/components/settings/profile/basic-info";
import Note from "@/components/utils/note";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: params.username,
  };
}

const ProfilePage = ({ params }: { params: Params }) => {
  return (
    <main className="pt-12 h-full flex flex-col justify-between">
      <div className="px-4 lg:px-0 pb-4">
        <div className="max-w-screen-lg mx-auto w-full">
          <BasicInfo username={params.username} />
          <Note description="Stay tuned, working on some stuff here." />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProfilePage;
