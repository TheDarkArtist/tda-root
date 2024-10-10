import Footer from "@/components/footer/footer";
import Note from "@/components/utils/note";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const SettingsPage = ({ params }: { params: Params }) => {
  return (
    <main className="h-full flex flex-col justify-between">
      <div className="px-4 lg:px-0 mt-16 pb-4">
        <div className="max-w-screen-lg mx-auto w-full">
          <h1 className="text-xl">{params.username}&apos;s profile settings</h1>
          <Note description="Stay tuned, working on some stuff here." />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SettingsPage;
