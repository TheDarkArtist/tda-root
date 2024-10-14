"use client";

import { useEditorDataContext } from "@/providers/editor-data-provider";
import React from "react";

const Lines = () => {
  const { data } = useEditorDataContext();

  if (!data) {
    return <div>0</div>;
  }
  return (
    <section className="flex gap-1">
      <h2>Lines</h2>
      <p>{data.body.split("\n").length}</p>
    </section>
  );
};

export default Lines;
