import React from "react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { UserAccess } from "@prisma/client";
import { notFound } from "next/navigation";
import { LuChevronRight } from "react-icons/lu";

const Header = async ({ projectId }: { projectId: string }) => {
  const project = await getProjectBySlug(projectId);

  if (!project) return notFound();

  const session = await auth();

  return (
    <section
      className={[
        "fixed w-full md:sticky top-12",
        "flex justify-between p-2.5",
        "bg-gray-50 dark:bg-zinc-950",
        "backdrop-filter backdrop-blur-md bg-opacity-50",
        "dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50",
        "border-b dark:border-zinc-800",
      ].join(" ")}
    >
      <div className="flex items-center text-sm">
        <Link className="opacity-80 hover:opacity-100" href="/projects">
          Projects
        </Link>
        <LuChevronRight className="h-5 w-5 text-zinc-600" />
        <div>
          {project?.slug.substring(0, 20)}
          {project?.slug.length > 20 && "..."}
        </div>
      </div>

      {session &&
        (session.user.access === UserAccess.ROOT ||
          session.user.access === UserAccess.ADMIN) && (
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
