import React from "react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Header = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);
  const session = await auth();

  return (
    <section
      className={[
        "sticky top-12",
        "flex justify-between p-2.5",
        "bg-gray-50 dark:bg-zinc-950",
        "backdrop-filter backdrop-blur-md bg-opacity-50",
        "dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50",
        "border-b dark:border-zinc-800",
      ].join(" ")}
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">All projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project?.slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {session && (
        <Link
          className={["text-sm dark:text-cyan-600", "hover:underline"].join(
            " "
          )}
          href={`/projects/${projectId}/edit/editor`}
        >
          Edit
        </Link>
      )}
    </section>
  );
};

export default Header;
