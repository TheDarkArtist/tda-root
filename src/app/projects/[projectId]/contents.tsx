import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import ContentIndex from "@/utils/content-index";
import React from "react";

const Contents = async ({ id }: { id: string }) => {
  const content = await getProjectBySlug(id);
  return (
    <section className="sticky top-12">
      <ContentIndex content={content?.body as string} navbarHeight={16} />
    </section>
  );
};

export default Contents;
