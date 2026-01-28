"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "@/data/projects";

interface ProjectModalProps {
  projectId: string;
}

/** Renders a DaisyUI dialog with id `project-modal-${projectId}`. Stays in the DOM closed until opened via document.getElementById(...).showModal(). */
export default function ProjectModal({ projectId }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  // Only render the portal after mount so server and initial client match (both null), avoiding hydration errors.
  if (!mounted) {
    return null;
  }

  const dialogId = `project-modal-${projectId}`;

  const modalContent = (
    <dialog id={dialogId} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <p className="py-4">{project.category}</p>
        <p className="py-4">
          {project.collaborators
            .map((collaborator) => collaborator.name)
            .join(", ")}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button type="submit" className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );

  return createPortal(modalContent, document.body);
}
