"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div
      id="projects"
      className="dark:bg-base-200 bg-white h-full xl:h-[90vh] flex flex-col items-center justify-center w-full py-12 z-50"
    >
      <div className="h-full w-full flex flex-col items-center justify-center container gap-8">
        {/* Header */}
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="divider w-16" />
          <p className="text-3xl font-bold text-teal-800 dark:text-teal-600">
            Experience & Projects
          </p>
          <div className="divider w-16" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              collaborators={project.collaborators}
              backgroundColor={project.backgroundColor}
              backgroundType={project.backgroundType}
              logo={project.logo}
              logoClass={project.logoClass}
              onPlay={() => console.log(`Opening ${project.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
