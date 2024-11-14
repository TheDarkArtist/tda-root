import Image from "next/image";
import React from "react";

const Picture = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row border rounded-sm bg-zinc-950 border-zinc-600 p-4">
      <div className="size-40 min-w-40 border rounded-full">
        <Image src="" alt={`profile picture`} />
      </div>
      <div className="w-full">
        <h2>Your profile picture</h2>
        <textarea
          className="my-2 px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full"
          placeholder="Provide profile picture link"
        />
        <button></button>
      </div>
    </div>
  );
};

export default Picture;
