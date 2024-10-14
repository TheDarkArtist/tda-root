"use client";

import { useEditorDataContext } from "@/providers/editor-data-provider";
import React from "react";

const Words = () => {
  const { data } = useEditorDataContext();

  if (!data) {
    return <div>0</div>;
  }
  return (
    <section className="flex gap-1">
      <h2>Words</h2>
      <p>{data.body.split(" ").length}</p>
    </section>
  );
};

export default Words;
