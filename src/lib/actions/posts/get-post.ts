import { db } from "@/lib/db";

/**
 * This server action returns a single project from the db, where matching id
 * is found, if not it would return null
 */
export const getPost = async (postId: string) => {
  try {
    const response = db.post.findUnique({
      where: {
        id: postId,
      },
    });

    return response;
  } catch (error) {
    console.log("Error fetching post by id, ", error);
    return null;
  }
};

export const getPostBySlug = async (postSlug: string) => {
  try {
    const response = db.post.findUnique({
      where: {
        slug: postSlug,
      },
    });

    return response;
  } catch (error) {
    console.log("Error fetching post by slug, ", error);
    return null;
  }
};
