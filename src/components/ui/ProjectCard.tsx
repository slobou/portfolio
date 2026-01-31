"use client";

import { useState } from "react";
import { CollaboratorAvatar } from "./CollaboratorAvatar";

/** Detect if a value is a CSS color (hex, rgb, rgba, hsl, hsla) rather than a Tailwind class */
function isCssColor(value: string): boolean {
  return (
    value.startsWith("#") ||
    value.startsWith("rgb(") ||
    value.startsWith("rgba(") ||
    value.startsWith("hsl(") ||
    value.startsWith("hsla(")
  );
}

interface Collaborator {
  name: string;
  avatar: string;
  linkedInUrl?: string;
}

interface ProjectCardProps {
  projectId: string;
  title: string;
  category: string;
  collaborators?: Collaborator[];
  /** Tailwind class (e.g. "bg-white", "from-X to-Y") or CSS color (e.g. "#000433", "rgb(0,0,0)") */
  backgroundColor?: string;
  backgroundType?: "gradient" | "solid";
  logo?: string;
  logoClass?: string; // Optional additional class for specific logos
  onPlay?: () => void;
}

export default function ProjectCard({
  projectId,
  title,
  category,
  collaborators = [],
  backgroundColor = "from-purple-700 to-purple-400",
  backgroundType = "gradient",
  logo,
  logoClass = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const useCssColor = isCssColor(backgroundColor);
  const isLightBg =
    !useCssColor &&
    (backgroundColor.includes("white") ||
      backgroundColor.includes("gray-50") ||
      backgroundColor.includes("bg-white"));

  // Determine if we should show logo mode (only logo, no text initially)
  const isLogoMode = logo && !isHovered;

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-sm mx-auto h-44 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background - Gradient or Solid; supports hex/CSS colors or Tailwind classes */}
      <div
        className={`absolute inset-0 ${
          useCssColor
            ? ""
            : backgroundType === "gradient"
              ? `bg-gradient-to-b ${backgroundColor}`
              : backgroundColor
        }`}
        style={
          useCssColor && backgroundType === "solid"
            ? { backgroundColor }
            : undefined
        }
      />

      {/* Logo Display - Different behavior based on hover */}
      {logo && (
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${
            isLogoMode ? "opacity-100 z-10" : "opacity-15 z-0"
          }`}
        >
          <img
            src={logo}
            alt="Project Logo"
            draggable={false}
            className={`object-contain transition-all duration-500 ${
              isLogoMode ? "w-60 h-60" : "w-44 h-44"
            } ${logoClass}`}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      )}

      {/* Content Container - Fades in on hover */}
      <div
        className={`relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between transition-all duration-500 ${
          isLogoMode ? "opacity-0" : "opacity-100"
        } ${isLightBg ? "text-gray-800" : "text-white"}`}
      >
        {/* Top Section - Category */}
        <div className="flex items-start">
          {/* Category */}
          <p
            className={`text-sm font-light ${
              isLightBg ? "text-gray-600" : "text-gray-200"
            }`}
          >
            {category}
          </p>
        </div>

        {/* Middle Section - Title */}
        <div className="flex-1 flex items-center min-h-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight line-clamp-2 sm:line-clamp-3">
            {title}
          </h3>
        </div>

        {/* Bottom Section - Avatars and Play Button */}
        <div className="flex items-end justify-between">
          {/* Collaborators - DaisyUI Avatar Group */}
          {collaborators.length > 0 && (
            <div className="avatar-group -space-x-2">
              {collaborators.slice(0, 3).map((collaborator, index) => (
                <div key={index} className="avatar placeholder">
                  <div className="relative rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-2 border-white overflow-hidden shrink-0">
                    <CollaboratorAvatar
                      src={collaborator.avatar}
                      name={collaborator.name}
                      fill
                    />
                  </div>
                </div>
              ))}
              {/* Show +X indicator if there are more than 3 collaborators */}
              {collaborators.length > 3 && (
                <div className="avatar placeholder">
                  <div className="relative rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-2 border-white overflow-hidden shrink-0 bg-black text-white flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-extrabold">
                      +{collaborators.length - 3}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={() =>
              (
                document.getElementById(
                  `project-modal-${projectId}`,
                ) as HTMLDialogElement | null
              )?.showModal()
            }
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ml-auto shrink-0 ${
              isLightBg
                ? isHovered
                  ? "bg-emerald-700 text-white shadow-lg scale-105"
                  : "bg-teal-700 text-white opacity-95"
                : isHovered
                  ? "bg-emerald-700 text-white shadow-lg scale-105 font-semibold"
                  : "bg-teal-700/90 text-white opacity-95"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
              <span>View</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
