import { cn } from "@/lib/utils";
import { montserrat } from "@/utils/fonts";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Seperator from "../utils/seperator";

const Quote = ({
  quote = "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
}: {
  quote?: string;
}) => {
  return (
    <div className="my-10">
      <Seperator
        text="A quote for everything :)"
        className="text-stone-400 border-stone-600/80 font-bold"
        classWrapper={cn(
          "hover:bg-zinc-600/10 py-4 px-2 rounded-xl",
          "border border-transparent hover:border-zinc-600/20",
          "hover:dark:bg-grid-lg-zinc-600/10"
        )}
      >
        <section className={cn("relative px-4 my-2")}>
          <FaQuoteLeft className="absolute animate-pulse repeat-[3] h-4 w-4 md:h-6 md:w-6 top-2" />
          <p
            className={cn(
              "pl-8 sm:text-2xl dark:text-white/80",
              montserrat.className
            )}
          >
            {quote}
          </p>
          <p className="text-end mt-2 text-sm sm:text-lg">~Albert Einstine</p>
        </section>
      </Seperator>
    </div>
  );
};

export default Quote;
