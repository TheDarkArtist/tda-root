import Link from "next/link";
import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface TooltipLinkProps {
  icon: ReactNode; // Change the type to ReactNode to accept React elements
  href: string;
  tooltipText: string;
  disabled: boolean;
}

const TooltipLink: React.FC<TooltipLinkProps> = ({
  icon,
  href,
  tooltipText,
  disabled,
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="" asChild>
        <div
          className={`cursor-pointer ${disabled ? "opacity-100 pointer-events-none" : ""}`}
        >
          <Link href={href}>{icon}</Link>
        </div>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default TooltipLink;
