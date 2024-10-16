import { Prisma } from "@prisma/client";

export type PostWithUserViews = Prisma.PostGetPayload<{
  include: { user: true; views: true };
}>;
