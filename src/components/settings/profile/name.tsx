import React from "react";

const Name = () => {
  return (
    <div className="border rounded-sm bg-zinc-950 border-zinc-600 p-4">
      <h2 className="font-bold">Name</h2>
      <input
        className="my-2 px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-80"
        type="text"
      />
      <p className="text-xs text-zinc-400">
        Your name may appear around the site, in comments, or posts as author in
        posts you write.
      </p>
    </div>
  );
};

export default Name;
