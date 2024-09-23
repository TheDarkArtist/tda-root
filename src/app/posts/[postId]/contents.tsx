import { getPostBySlug } from "@/lib/actions/posts/get-post";
import ContentIndex from "@/utils/content-index";
import React from "react";

const Contents = async ({ id }: { id: string }) => {
  const content = await getPostBySlug(id);
  return (
    <section className="sticky top-12">
      <ContentIndex content={content?.body as string} navbarHeight={16} />
    </section>
  );
};

export default Contents;
