import { lora, rslab } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";

const SocialLinks = () => {
  return (
    <section className="space-y-4 h-full">
      <h1 className={`font-black text-2xl text-zinc-600 ${rslab.className}`}>
        Connect with me
      </h1>
      <div className="flex justify-center gap-6 text-blue-600/50 font-bold">
        <span className="flex flex-col text-sm gap-6">
          <span className="flex flex-col items-center">
            <Link href="https://github.com" className="hover:underline">
              <BsGithub className="h-8 w-8 text-gray-600 hover:text-gray-700 transition-colors" />
            </Link>
          </span>

          <span className="flex flex-col items-center">
            <Link href="https://linkedin.com" className="hover:underline">
              <BsLinkedin className="h-8 w-8 text-sky-600 hover:text-sky-500 transition-colors" />
            </Link>
          </span>
        </span>

        <span className="flex flex-col text-sm gap-6">
          <span className="flex flex-col items-center">
            <Link href="https://facebook.com" className="hover:underline">
              <BsFacebook className="h-8 w-8 text-blue-600 hover:text-blue-500 transition-colors" />
            </Link>
          </span>

          <span className="flex flex-col items-center">
            <Link href="https://instagram.com" className="hover:underline">
              <BsInstagram className="h-8 w-8 text-pink-500 hover:text-pink-400 transition-colors" />
            </Link>
          </span>
        </span>

        <span className="flex flex-col text-sm gap-6">
          <span className="flex flex-col items-center">
            <Link href="https://x.com" className="hover:underline">
              <BsTwitter className="h-8 w-8 text-sky-500 hover:text-sky-400 transition-colors" />
            </Link>
          </span>

          <span className="flex flex-col items-center">
            <Link href="https://discord.com" className="hover:underline">
              <BsDiscord className="h-8 w-8 text-indigo-500 hover:text-indigo-400 transition-colors" />
            </Link>
          </span>
        </span>
      </div>
    </section>
  );
};

export default SocialLinks;
