import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

const TechCard = ({
  name,
  src,
  color,
  className,
  children,
}: {
  name: string;
  src: string;
  color?: string;
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <section
      className={cn(
        "group flex items-center justify-center",
        "border dark:border-zinc-800 border-gray-200 rounded-xl",
        "shadow min-h-24 w-full sm:w-fit cursor-pointer",
        className
      )}
    >
      <HoverCard>
        <HoverCardTrigger className="px-6 py-4 gap-4 flex justify-evenly items-center">
          <Image src={src} alt="technology logo" height={64} width={64} />
          <p className="font-black text-4xl">{name}</p>
        </HoverCardTrigger>
        <HoverCardContent className="w-full max-w-sm rounded-xl shadow z-10">
          <div className="flex gap-2 items-center mb-2">
            <Image src={src} alt="technology logo" height={32} width={32} />
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
          {children}
        </HoverCardContent>
      </HoverCard>
    </section>
  );
};

export default TechCard;
