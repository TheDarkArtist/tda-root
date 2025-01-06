"use server";

import { slugify } from "@/lib/utils";
import { getPostBySlug } from "../posts/get-post";
import { getProjectBySlug } from "../projects/get-project";
import { db } from "@/lib/db";

export const isSlugUnique = async (
  id: string,
  slug: string,
  type: "project" | "post",
): Promise<{ success: boolean; message: string }> => {
  const slugified_slug = slugify(slug);

  if (slugified_slug.length === 0) {
    return { success: false, message: "Slug is empty." };
  }

  if (slugified_slug.length < 3) {
    return { success: false, message: "Slug is too short." };
  }

  if (slugified_slug.length > 60) {
    return { success: false, message: "Slug is too long." };
  }

  if (type === "project") {
    const existingProject = await getProjectBySlug(slugified_slug);

    if (existingProject) {
      if (existingProject.id === id) {
        return { success: true, message: "Slug is available." };
      }
      return {
        success: false,
        message: "Project with this slug already exists.",
      };
    }
  } else if (type === "post") {
    const existingPost = await getPostBySlug(slugified_slug);

    if (existingPost) {
      if (existingPost.id === id) {
        return { success: true, message: "Slug is available." };
      }
      return { success: false, message: "Post with this slug already exists." };
    }
  }

  return { success: true, message: "Slug is available." };
};

export const updateResumeUrl = async (id: string, resumeUrl: string | null) => {
  try {
    return db.user.update({ where: { id }, data: { resumeUrl } });
  } catch {
    throw new Error("Something went wrong");
  }
};
