"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div
      id="projects"
      className="dark:bg-base-200 bg-white w-full z-50 flex flex-col items-center py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="w-full flex flex-col items-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl 3xl:max-w-[90rem] 4xl:max-w-[100rem] 5xl:max-w-[120rem]">
        {/* Header */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
          <div className="divider w-12 sm:w-14 md:w-16" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-teal-800 dark:text-teal-600 text-center">
            Experience & Projects
          </p>
          <div className="divider w-12 sm:w-14 md:w-16" />
        </div>

        {/* Projects Grid — responsive columns: 1 mobile, 2 tablet, 3 laptop, 3–4 desktop/ultrawide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              category={project.category}
              collaborators={project.collaborators}
              backgroundColor={project.backgroundColor}
              backgroundType={project.backgroundType}
              logo={project.logo}
              logoClass={project.logoClass}
            />
          ))}
        </div>
      </div>

      {/* DaisyUI pattern: all modals in the DOM with stable IDs, opened via getElementById().showModal() */}
      {projects.map((project) => (
        <ProjectModal key={project.id} projectId={project.id} />
      ))}
    </div>
  );
}
