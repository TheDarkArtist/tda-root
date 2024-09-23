import React from "react";

const Tags = ({ content }) => {
  return (
    <main>
      <div className="h-full p-6 dark:bg-grid-sm-red-800 bg-grid-sm-gray-200 max-w-screen-lg mx-auto w-full">
        <section className="grid grid-rows-12 gap-4 h-full w-full border dark:border-zinc-900 border-gray-200 dark:bg-black bg-white rounded-md p-4 max-h-60">
          <span className="row-span-2">
            <h1 className="text-2xl font-bold text-sky-600">Add Tags</h1>
          </span>
          <div className="row-span-7 p-2"></div>
          <input
            className="row-span-3 dark:bg-black border dark:border-zinc-800 border-zinc-300 rounded-sm h-full px-4 placeholder:text-zinc-600"
            placeholder="tag"
            type="text"
          />
        </section>
      </div>
    </main>
  );
};

export default Tags;
