import { getProjects } from "@/lib/actions/projects/get-projects";
import { NextResponse } from "next/server";

export const GET = async () => {
  const projects = await getProjects();
  return NextResponse.json(projects);
};
