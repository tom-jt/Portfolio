import projectsJson from '@/data/projects.json';

export interface ProjectProp {
  id: string,
  name: string,
  desc: string,
  img: string,
  langs: string[],
  link: string
}

const projects = projectsJson.projects as ProjectProp[];

export function getProject(id: string): ProjectProp | undefined {
  return projects.find(e => e.id == id);
}