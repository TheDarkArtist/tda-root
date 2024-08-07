import { getProjects } from "@/lib/actions/projects/get-projects";
import React from "react";
import ProjectCard from "./project-card";

interface ProjectsListProps {
  query?: string;
  currentPage?: string;
  published?: boolean;
  limit?: number;
}

const ProjectsList: React.FC<ProjectsListProps> = async ({
  query,
  published,
  currentPage,
  limit,
}) => {
  const projects = await getProjects(published, query, limit);

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsList;
