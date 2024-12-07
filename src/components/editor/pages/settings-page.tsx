import React from "react";
import CoverSection from "../cover-section";
import SlugSection from "../slug-section";
import DeleteSection from "../delete-section";

const SettingsPage = ({ type }: { type: "project" | "post" }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 h-full w-full overflow-y-auto mr-auto max-w-screen-lg">
      <div className="space-y-4">
        <CoverSection />
        <SlugSection type={type} />
        <DeleteSection type={type} />
      </div>
    </div>
  );
};

export default SettingsPage;
