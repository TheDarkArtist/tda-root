import React from "react";

const PublishedPage = () => {
  return (
    <main className="my-8">
      <div className="max-w-screen-lg mx-auto w-full">
        <table className="min-w-full table-auto text-left text-sm">
          <thead>
            <tr className="dark:bg-zinc-900 bg-gray-200 dark:text-gray-200 text-gray-600">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
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
              <td className="px-6 py-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">Jane Smith</td>
              <td className="px-6 py-4">jane@example.com</td>
              <td className="px-6 py-4">Editor</td>
              <td className="px-6 py-4 text-red-600">Inactive</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-b border-zinc-600">
              <td className="px-6 py-4">Alex Johnson</td>
              <td className="px-6 py-4">alex@example.com</td>
              <td className="px-6 py-4">Viewer</td>
              <td className="px-6 py-4 text-green-600">Active</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default PublishedPage;
