"use client";

import { useEditorDataContext } from "@/providers/editor-data-provider";
import React from "react";

const Bytes = () => {
  const { data } = useEditorDataContext();

  if (!data) {
    return <div>0</div>;
  }
  return (
    <section className="flex gap-1">
      <h2>Bytes</h2>
      <p>{data.body.length}</p>
    </section>
  );
};

export default Bytes;
