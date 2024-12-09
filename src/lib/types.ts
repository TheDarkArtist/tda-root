import { Prisma } from "@prisma/client";

export type PostWithUserViews = Prisma.PostGetPayload<{
  include: { user: true; views: true };
}>;

export type ProjectWithUserViews = Prisma.ProjectGetPayload<{
  include: { user: true; views: true };
}>;

export type PostWithCommentsUserViewsId = Prisma.PostGetPayload<{
  include: { user: true; views: true };
}>;

export type ProjectWithCommentsUserViewsId = Prisma.ProjectGetPayload<{
  include: { comments: true; views: { select: { id: true } } };
}>;

export type ProjectWithUser = Prisma.ProjectGetPayload<{
  include: { user: true };
}>;

export type PostWithUser = Prisma.PostGetPayload<{
  include: { user: true };
}>;

export type UserWithData = Prisma.UserGetPayload<{
  include: {
    Post: { select: { id: true } };
    projects: { select: { id: true } };
    comments: { select: { id: true } };
  };
}>;
