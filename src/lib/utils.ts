/**
 * This file should only contain utility function that doesn't need to run on
 * server.
 * Funciton that need to run on server should be stored on a seperate file
 * in @/lib/actions/utils.ts
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
