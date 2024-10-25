import { getProjectsList } from "@/lib/actions/projects/get-projects";
import React from "react";
import ProjectCard from "./card/project-card";
import { ProjectWithUserViews } from "@/lib/types";

interface ProjectsListProps {
  query?: string;
  currentPage?: number;
  published?: boolean;
  limit?: number;
}

const ProjectsList: React.FC<ProjectsListProps> = async ({
  query,
  published,
  currentPage,
  limit,
}) => {
  const projects = await getProjectsList(published, query, limit);

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          project={project as ProjectWithUserViews}
        />
      ))}
    </section>
  );
};

export default ProjectsList;
