import React from "react";

const TwoFA = () => {
  return (
    <div className="w-full border border-zinc-600 rounded-sm p-4 bg-zinc-950">
      <h2 className="text-sm sm:text-2xl font-semibold">
        Two Factor Authentication
      </h2>
      <div className="flex gap-4 my-4">
        <select className="px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-80">
          <option value="On">On</option>
          <option value="Off">Off</option>
        </select>
        <button className="bg-green-700 px-4 py-0.5 rounded-sm text-white text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default TwoFA;
