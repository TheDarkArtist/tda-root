import { Prisma } from "@prisma/client";

export type PostWithUserViews = Prisma.PostGetPayload<{
  include: { user: true; views: true };
}>;

export type ProjectWithUserViews = Prisma.ProjectGetPayload<{
  include: { comments: true; views: { select: { id: true } } };
}>;
