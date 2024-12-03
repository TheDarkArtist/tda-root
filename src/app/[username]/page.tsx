import Footer from "@/components/footer/footer";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";
import Header from "./header";
import Body from "./body";

export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: params.username,
  };
}

const ProfilePage = ({ params }: { params: Params }) => {
  return (
    <main className="pt-12 h-full flex flex-col justify-between">
      <div className="max-w-screen-lg mx-auto w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Header username={params.username} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Body username={params.username} />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
};

export default ProfilePage;
