import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const BodySkeleton = () => {
  return (
    <div className="scroll-smooth p-6 mt-10 text-zinc-800 dark:text-zinc-200 dark:bg-zinc-950 bg-white">
      <ul className="space-y-3">
        <li className="h-6 bg-gray-200 dark:bg-zinc-900 rounded-full w-[80%]" />
        {Array.from({ length: 6 }).map((_, i) => (
          <li
            className="h-3 bg-gray-200 dark:bg-zinc-900 rounded-full w-full"
            key={i}
          />
        ))}
        <li className="h-3 bg-gray-200 dark:bg-zinc-900 rounded-full w-[60%]" />
      </ul>
    </div>
  );
};

export const RightSidebarSkeleton = () => {
  return (
    <div className="sticky top-12 ml-2 space-y-2">
      <div className="overflow-y-auto">
        <div className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <div>Avg. Reading Time</div>
          <div className="rounded-sm h-2.5 bg-gray-200 dark:bg-zinc-900 w-[75%] mt-1.5" />
        </div>

        <div className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <div>Last updated At</div>
          <div className="rounded-sm h-2.5 bg-gray-200 dark:bg-zinc-900 w-[85%] mt-1.5" />
          <hr className="dark:border-zinc-800 border-zinc-300 mt-3 mb-2" />
          <div>Created At</div>
          <div className="rounded-sm h-2.5 bg-gray-200 dark:bg-zinc-900 w-[85%] mt-1.5" />
        </div>

        <div className="flex flex-wrap justify-evenly border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white p-2 m-2 gap-4 sm:text-xs overflow-hidden">
          <div className="text-center">
            <div>views</div>
            <div className="mx-auto rounded-full h-4 bg-gray-200 dark:bg-zinc-900 w-3 mt-1" />
          </div>

          <div className="text-center">
            <div>upvotes</div>
            <div className="mx-auto rounded-full h-4 bg-gray-200 dark:bg-zinc-900 w-3 mt-1" />
          </div>

          <div className="text-center">
            <div>comments</div>
            <div className="mx-auto rounded-full h-4 bg-gray-200 dark:bg-zinc-900 w-3 mt-1" />
          </div>
        </div>

        <div className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-sm">
          <div className="indent-2 font-bold">Tags</div>
        </div>
      </div>
    </div>
  );
};

export const HeaderSkeleton = () => {
  return (
    <div
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
            <div className="h-3 rounded-full w-60 bg-gray-200 dark:bg-zinc-900" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div
        className={["text-sm dark:text-cyan-600", "hover:underline"].join(" ")}
      >
        Edit
      </div>
    </div>
  );
};
