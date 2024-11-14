import React from "react";

const Bio = () => {
  return (
    <>
      <div className="border rounded-sm bg-zinc-950 border-zinc-600 p-4">
        <h2 className="font-bold">Bio</h2>
        <textarea className="my-2 px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-80" />
        <p className="text-xs text-zinc-400">Your tagline</p>
      </div>
      <div className="flex justify-end w-full">
        <button className="bg-green-700 px-4 py-1 rounded-sm text-white text-sm">
          Save
        </button>
      </div>
    </>
  );
};

export default Bio;
