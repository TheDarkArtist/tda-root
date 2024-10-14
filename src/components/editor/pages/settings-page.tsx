import React from "react";
import CoverSection from "../cover-section";
import SlugSection from "../slug-section";
import DeleteSection from "../delete-section";

const SettingsPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 h-full w-full overflow-y-auto">
      <div className="space-y-4">
        <CoverSection />
        <SlugSection />
        <DeleteSection />
      </div>
    </div>
  );
};

export default SettingsPage;
