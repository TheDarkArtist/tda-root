import { Post, Project } from "@prisma/client";
import React, { createContext, useContext } from "react";

interface EditorDataProviderProps {
  data: Project | Post | null;
  setData: React.Dispatch<React.SetStateAction<Project | Post | null>>;
}

const EditorDataContext = createContext<EditorDataProviderProps | undefined>(
  undefined
);

export const useEditorDataContext = () => {
  const context = useContext(EditorDataContext);
  if (!context) {
    throw new Error(
      "useEditorDataContext must be used within an EditorDataContextProvider"
    );
  }
  return context;
};

export const EditorDataContextProvider = EditorDataContext.Provider;
