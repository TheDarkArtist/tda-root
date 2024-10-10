/**
 * This file should only contain utility function that doesn't need to run on
 * server.
 * Funciton that need to run on server should be stored on a seperate file
 * in @/lib/actions/utils.ts
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NextApiRequest } from "next";
import cuid from "cuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserIp(req: NextApiRequest): string | null {
  const forwarded = req.headers["x-forwarded-for"];

  if (forwarded) {
    const ip = forwarded.toString().split(",")[0];
    return ip;
  }

  const ip = req.socket.remoteAddress || null;

  return ip?.startsWith("::ffff:") ? ip.substring(7) : ip;
}

export const generateCuid = (): string => {
  return cuid();
};
