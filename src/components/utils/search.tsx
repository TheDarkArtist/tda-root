"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder, className }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      className={cn(
        "py-2 px-4 rounded-sm shadow w-full mx-auto",
        "dark:bg-zinc-950 bg-white",
        "border dark:border-stone-600/60 border-stone-300",
        className
      )}
      placeholder={placeholder || "Search"}
      defaultValue={searchParams.get("query")?.toString() as string}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    />
  );
};

export default Search;
