import { db } from "@/lib/db";

/**
 * This server action returns a single project from the db, where matching id
 * is found, if not it would return null
 */
export const getProject = async (projectId: string) => {
  try {
    const response = db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    return response;
  } catch (error) {
    console.log("Error fetching project, ", error);
    return null;
  }
};

export const getProjectBySlug = async (projectSlug: string) => {
  try {
    const response = db.project.findUnique({
      where: {
        slug: projectSlug,
      },
    });

    return response;
  } catch (error) {
    console.log("Error fetching project by slug, ", error);
    return null;
  }
};
