import React from "react";

const DraftsPage = () => {
  return (
    <main className="my-8">
      <div className="max-w-screen-lg mx-auto w-full">
        <table className="min-w-full table-auto text-left text-sm">
          <thead>
            <tr className="dark:bg-zinc-900 bg-gray-200 dark:text-gray-200 text-gray-600">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Views</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">john@example.com</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4 text-green-600">Active</td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DraftsPage;
