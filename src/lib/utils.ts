/**
 * This file should only contain utility function that doesn't need to run on
 * server.
 * Funciton that need to run on server should be stored on a seperate file
 * in @/lib/actions/utils.ts
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import cuid from "cuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateCuid = (): string => {
  return cuid();
};

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/[^\w\-]+/g, "") // Remove non-alphanumeric characters except hyphens
    .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
}
