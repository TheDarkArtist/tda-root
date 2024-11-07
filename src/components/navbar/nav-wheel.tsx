import React from "react";
import { RiArticleFill } from "react-icons/ri";
import { PiGear } from "react-icons/pi";
import {
  FaBug,
  FaHome,
  FaInfoCircle,
  FaDraftingCompass,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
import { currentUser } from "@/lib/actions/utils/auth";
import TooltipLink from "@/components/utils/tooltip-link";
import { FcMindMap } from "react-icons/fc";

interface Link {
  href: string;
  tooltipText: string;
  icon: JSX.Element;
  requiresAuth?: boolean;
}

interface Section {
  section: string;
  links: Link[];
}

const NavWheel: React.FC = async () => {
  const u = await currentUser();

  const data: Section[] = [
    {
      section: "inner",
      links: [
        {
          href: "/",
          tooltipText: "Home",
          icon: <FaHome className="h-8 w-8" />,
        },
        {
          href: "/projects",
          tooltipText: "Projects",
          icon: <FaBug className="h-8 w-8" />,
        },
        {
          href: "/posts",
          tooltipText: "Blog",
          icon: <RiArticleFill className="h-8 w-8" />,
        },
      ],
    },
    {
      section: "outer",
      links: [
        {
          href: "/info",
          tooltipText: "Info",
          icon: <FaInfoCircle className="h-8 w-8" />,
        },
        {
          href: "/explore",
          tooltipText: "Explore",
          icon: <FaGlobe className="h-8 w-8" />,
        },
        {
          href: "https://thedarkartist.in",
          tooltipText: "Portfolio",
          icon: <FaRocket className="h-8 w-8" />,
        },
        {
          href: "/post/drafts",
          tooltipText: "Drafts",
          icon: <FaDraftingCompass className="h-8 w-8" />,
          requiresAuth: true,
        },
        {
          href: "/settings",
          tooltipText: "Settings",
          icon: <PiGear className="h-8 w-8" />,
          requiresAuth: true,
        },
      ],
    },
  ];

  return (
    <div
      className={[
        "group overflow-hidden",
        "dark:text-red-400 text-sky-800",
      ].join(" ")}
    >
      <div
        className={[
          "fixed -bottom-10 -right-10",
          "flex justify-center items-center h-32 w-32",
          "rounded-full z-40 cursor-pointer",
          "transition-all duration-600 ease-in-out",
          "hover:animate-spin hover:repeat-1"
        ].join(" ")}
      >
        <FcMindMap className="size-10" />
      </div>
      <div
        className={[
          "fixed -bottom-60 -right-60",
          "h-0 w-0",
          "dark:bg-red-900/20 bg-sky-600/20",
          "group-hover:h-96 group-hover:w-96",
          "rounded-full z-30",
          "dark:backdrop-filter dark:backdrop-blur-sm",
          "backdrop-filter backdrop-blur-sm",
          "transition-all duration- ease-in-out",
        ].join(" ")}
      >
        <div className="absolute top-[2.2rem] left-[6.5rem]">
          <TooltipLink
            href={data[0].links[0].href}
            icon={data[0].links[0].icon}
            tooltipText="Home"
            disabled={false}
          />
        </div>
        <div className="absolute top-[3.8rem] left-[4rem]">
          <TooltipLink
            href={data[0].links[1].href}
            icon={data[0].links[1].icon}
            tooltipText="Projects"
            disabled={false}
          />
        </div>
        <div className="absolute group/link top-[6.6rem] left-[2.5rem]">
          <TooltipLink
            href={data[0].links[2].href}
            icon={data[0].links[2].icon}
            tooltipText="Articles"
            disabled={false}
          />
        </div>
      </div>
      <div
        className={[
          "fixed -bottom-48 -right-48",
          "h-0 w-0",
          "dark:bg-red-800/20 bg-sky-600/20",
          "group-hover:h-96 group-hover:w-96",
          "rounded-full z-20",
          "dark:backdrop-filter dark:backdrop-blur-sm",
          "backdrop-filter backdrop-blur-sm",
          "transition-all duration-700 ease-in-out",
        ].join(" ")}
      >
        <div className="absolute top-[1.2rem] left-[9.5rem]">
          <TooltipLink
            href={data[1].links[0].href}
            icon={data[1].links[0].icon}
            tooltipText="Info"
            disabled={false}
          />
        </div>
        <div className="absolute top-[2rem] left-[6.5rem]">
          <TooltipLink
            href={data[1].links[1].href}
            icon={data[1].links[1].icon}
            tooltipText="Explore"
            disabled={false}
          />
        </div>
        <div className="absolute group/link top-[4.1rem] left-[4rem]">
          <TooltipLink
            href={data[1].links[2].href}
            icon={data[1].links[2].icon}
            tooltipText="Portfolio"
            disabled={false}
          />
        </div>
        <div
          className={`absolute group/link top-[6.5rem] left-[2.1rem] ${
            !u?.username ? "opacity-40" : ""
          }`}
        >
          <TooltipLink
            href={data[1].links[3].href}
            icon={data[1].links[3].icon}
            tooltipText="Drafts"
            disabled={!u?.username}
          />
        </div>
        <div
          className={`absolute group/link top-[9.4rem] left-[1rem] ${
            !u?.username ? "opacity-40" : ""
          }`}
        >
          <TooltipLink
            href={data[1].links[4].href}
            icon={data[1].links[4].icon}
            tooltipText="Settings"
            disabled={!u?.username}
          />
        </div>
      </div>
    </div>
  );
};

export default NavWheel;
