"use client";

import React, { useEffect, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface FolderStructure {
  [key: string]: string | FolderStructure;
}

const flattenFolderStructure = (
  structure: FolderStructure,
  basePath: string = ""
): string[] => {
  let result: string[] = [];

  for (const key in structure) {
    const value = structure[key];
    const fullPath = `${basePath}/${key}`;

    if (typeof value === "string") {
      result.push(value);
    } else {
      result = result.concat(
        flattenFolderStructure(value as FolderStructure, fullPath)
      );
    }
  }

  return result;
};

const FolderRow: React.FC<{
  name: string;
  isFolder: boolean;
  url?: string;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ name, isFolder, url, isOpen, toggleOpen }) => {
  return (
    <div className="flex items-center space-x-2">
      {isFolder && (
        <button className="px-2 py-1 text-blue-500" onClick={toggleOpen}>
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </button>
      )}
      <span
        className={`flex-1 ${isFolder ? "font-semibold" : "text-gray-700 dark:text-gray-300"} hover:underline cursor-pointer`}
      >
        {name}
      </span>
      {!isFolder && url && (
        <a href={url} download className="text-blue-600 hover:underline">
          Download
        </a>
      )}
    </div>
  );
};

const FolderList: React.FC<{
  structure: FolderStructure;
}> = ({ structure }) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => {
      const newOpenFolders = new Set(prev);
      if (newOpenFolders.has(folder)) {
        newOpenFolders.delete(folder);
      } else {
        newOpenFolders.add(folder);
      }
      return newOpenFolders;
    });
  };

  const renderRows = (
    structure: FolderStructure,
    basePath: string = ""
  ): JSX.Element[] => {
    return Object.entries(structure).map(([key, value], index) => {
      const fullPath = `${basePath}/${key}`;
      const isFolder = typeof value !== "string";
      const isOpen = isFolder && openFolders.has(fullPath);

      return (
        <div key={fullPath}>
          <div
            className={`py-2 px-4 ${index % 2 === 0 ? "border border-zinc-800 bg-gray-100 dark:bg-zinc-900" : "border border-zinc-800 bg-white dark:bg-zinc-950"}`}
          >
            <FolderRow
              name={key}
              isFolder={isFolder}
              url={isFolder ? undefined : (value as string)}
              isOpen={isOpen}
              toggleOpen={() => toggleFolder(fullPath)}
            />
            {isOpen && isFolder && (
              <div className="pl-8">
                {renderRows(value as FolderStructure, fullPath)}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return <div>{renderRows(structure)}</div>;
};

const TDAPage: React.FC = () => {
  const [files, setFiles] = useState<FolderStructure | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/files");
        if (response.ok) {
          const data: FolderStructure = await response.json();
          setFiles(data);
        } else {
          const errorText = await response.text();
          console.error("Error response:", errorText);
          setError("Failed to load folder structure");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!files) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <main className="pt-10">
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Files</h1>
        <FolderList structure={files} />
      </div>
    </main>
  );
};

export default TDAPage;
