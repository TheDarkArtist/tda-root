/**
 * This file should only contain utility functions that don't need to run on
 * the server.
 * Functions that need to run on the server should be stored in a separate file
 * in @/lib/actions/utils.ts
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import cuid from "cuid";

/**
 * Combines multiple class names into a single string with conditional logic.
 *
 * This function combines the provided class names and removes any duplicate or conflicting class names
 * using the `twMerge` utility. It allows for conditionally including or excluding class names based on input.
 *
 * @param {...ClassValue[]} inputs - A list of class names to be combined. Can include strings, objects, or arrays.
 * @returns {string} - A single string containing the combined class names.
 *
 * @example
 * const classes = cn("text-center", isActive && "bg-blue-500", "font-bold");
 * console.log(classes); // Outputs: "text-center bg-blue-500 font-bold"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Generates a new CUID (Collision-resistant Unique Identifier).
 *
 * This function uses the `cuid` library to generate a new unique identifier, which is collision-resistant
 * and commonly used in web applications for creating unique IDs.
 *
 * @returns {string} - A new CUID string.
 *
 * @example
 * const newCuid = generateCuid();
 * console.log(newCuid); // Outputs a new unique CUID string.
 */
export const generateCuid = (): string => {
  return cuid();
};

/**
 * Converts a given string into a URL-friendly slug.
 *
 * This function takes a text input and converts it into a slug by:
 * - Converting the text to lowercase
 * - Replacing spaces and underscores with hyphens
 * - Removing any non-alphanumeric characters except hyphens
 * - Condensing multiple consecutive hyphens into a single hyphen
 * - Trimming hyphens from the start and end of the string
 *
 * @param {string} text - The input text to be converted into a slug.
 * @returns {string} - The generated slug that can be used in URLs.
 *
 * @example
 * const slug = slugify("Hello World! This_is A Test.");
 * console.log(slug); // Outputs: "hello-world-this-is-a-test"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/[^\w\-]+/g, "") // Remove non-alphanumeric characters except hyphens
    .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
}

/**
 * Converts a markdown string to plain text by removing all markdown syntax.
 *
 * This function removes common markdown elements such as headers, bold, italic,
 * inline code, links, images, blockquotes, lists, and horizontal rules, leaving
 * only the plain text content.
 *
 * @param {string} markdown - The markdown formatted string that needs to be converted to plain text.
 * @returns {string} - A plain text string with all markdown syntax removed.
 *
 * @example
 * const markdownText = "## Hello **world**! This is a [link](http://example.com).";
 * const plainText = markdownToText(markdownText);
 * console.log(plainText); // Outputs: "Hello world! This is a link."
 */
export function Md2Text(markdown: string): string {
  // If the markdown is empty, return an empty string
  if (!markdown) {
    return markdown;
  }

  // Remove markdown headers (e.g., #, ##, ###)
  let text = markdown.replace(/(#{1,6})\s*/g, "");

  // Remove bold and italic markdown (e.g., **bold** and *italic*)
  text = text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1");

  // Remove inline code (e.g., `code`)
  text = text.replace(/`(.*?)`/g, "$1");

  // Remove links, keeping only the text (e.g., [text](url))
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");

  // Remove images, keeping only the alt text (e.g., ![alt](url))
  text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, "$1");

  // Remove blockquotes (e.g., > Quote)
  text = text.replace(/^> (.*)$/gm, "$1");

  // Remove list markers (e.g., - item, * item, + item)
  text = text.replace(/^\s*[-*+]\s+/gm, "");

  // Remove horizontal rules (e.g., --- or ***)
  text = text.replace(/^\s*[-*]{3,}\s*$/gm, "");

  // Clean up any remaining markdown elements like links
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1"); // For links

  return text.trim();
}
