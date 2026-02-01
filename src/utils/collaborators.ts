import type { Collaborator } from "@/data/projects";

const SELF_NAME = "Santiago Lobo";

function getLastName(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] ?? "";
}

export function sortCollaborators(collaborators: Collaborator[]): Collaborator[] {
  return [...collaborators].sort((a, b) => {
    const aIsSelf = a.name === SELF_NAME;
    const bIsSelf = b.name === SELF_NAME;
    if (aIsSelf) return -1;
    if (bIsSelf) return 1;
    return getLastName(a.name).localeCompare(getLastName(b.name));
  });
}
