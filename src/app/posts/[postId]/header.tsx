import React from "react";
import { getPostBySlug } from "@/lib/actions/posts/get-post";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { auth } from "@/lib/auth";

const Header = async ({ postId }: { postId: string }) => {
  const post = await getPostBySlug(postId);
  const session = await auth();

  return (
    <section
      className={[
        "sticky top-12",
        "flex justify-between p-2",
        "bg-gray-50 dark:bg-zinc-950",
        "backdrop-filter backdrop-blur-md bg-opacity-50",
        "dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50",
        "border-b dark:border-zinc-800",
      ].join(" ")}
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">All posts</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post?.slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {session && (
        <Link
          className={["text-sm dark:text-cyan-600", "hover:underline"].join(
            " "
          )}
          href={`/posts/${postId}/edit?tab=Edit`}
        >
          Edit
        </Link>
      )}
    </section>
  );
};

export default Header;
