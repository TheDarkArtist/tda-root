"use server";

import { db } from "@/lib/db";
import { Project } from "@prisma/client";
import { revalidateTag } from "next/cache";

export const upsertPost = async (data: Project) => {
  try {
    const response = await db.post.upsert({
      where: {
        id: data.id,
      },
      update: {
        ...data,
      },
      create: {
        ...data,
      },
    });

    revalidateTag(data.id);

    return response;
  } catch (error) {
    console.log("Error finding post, ", error);
    return null;
  }
};
