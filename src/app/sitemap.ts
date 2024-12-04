import { getPosts } from "@/lib/actions/posts/get-posts";
import { getProjects } from "@/lib/actions/projects/get-projects";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const posts = await getPosts();

  const projectsEntries: MetadataRoute.Sitemap = (projects || []).map(
    (project) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/project/${project.slug}`,
      lastModified: new Date(project.updatedAt).toISOString(),
      changeFrequency: "weekly",
    }),
  );

  const postEntries: MetadataRoute.Sitemap = (posts || []).map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
    changeFrequency: "daily",
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/new-password`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/new-verification`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/explore`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/info`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/drafts`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/account`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/profile`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings/security`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/c2c`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/c2c/dashboard`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/c2c/posts`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/c2c/projects`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/c2c/settings`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/c2c/users`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tda/public`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...staticRoutes, ...projectsEntries, ...postEntries];
}
