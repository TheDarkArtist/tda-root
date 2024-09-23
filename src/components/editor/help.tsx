import React from "react";

const Help = () => {
  return (
    <main className="p-4">
      <div className="max-w-screen-xl mx-auto">
        <table className="min-w-full table-auto text-left text-sm">
          <thead>
            <tr className="dark:bg-zinc-900 bg-gray-200 dark:text-gray-200 text-gray-600">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">All the help you need is here.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">Post heading</td>
              <td className="px-6 py-4">
                The first markdown heading (first line in your blog with an
                &apos;#&apos;) in the body will become the default heading
              </td>
            </tr>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">Post description</td>
              <td className="px-6 py-4">
                First markdown paragraph will become the post description
              </td>
            </tr>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">Publish the post</td>
              <td className="px-6 py-4">
                Pressing &apos;publish&apos; button in the header publishes the
                post
              </td>
            </tr>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">Saving the post</td>
              <td className="px-6 py-4">
                Pressing &apos;save&apos; button in the header saves all the
                changes you made
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Help;
