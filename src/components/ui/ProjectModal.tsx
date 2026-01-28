"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { resolveProjectImageUrl } from "@/utils/cloudinary";

interface ProjectModalProps {
  projectId: string;
}

/** Gallery images: use project.images (max 4) or fallback to [logo] */
function galleryImages(project: Project): string[] {
  const list = project.images?.length
    ? project.images.slice(0, 4)
    : [project.logo];
  return list;
}

function ImageCarousel({
  images,
  alt,
  value,
  onIndexChange,
}: {
  images: string[];
  alt: string;
  value?: number;
  onIndexChange?: (index: number) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(value ?? 0);
  const canSlide = images.length > 1;

  // Sync selected index from Embla to parent
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const i = emblaApi.selectedScrollSnap();
      setSelectedIndex(i);
      onIndexChange?.(i);
    };
    onSelect(); // initial
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onIndexChange]);

  // Controlled: when parent resets value (e.g. modal closed), scroll carousel there
  useEffect(() => {
    if (emblaApi == null || value === undefined) return;
    if (emblaApi.selectedScrollSnap() !== value) {
      emblaApi.scrollTo(value);
    }
  }, [emblaApi, value]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full flex-1 min-h-[200px] sm:min-h-0 bg-white overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
      <div
        ref={emblaRef}
        className="h-full w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <div className="flex h-full touch-pan-y">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] min-w-0 flex items-center justify-center p-4"
            >
              <img
                src={src}
                alt={i === selectedIndex ? alt : ""}
                className="max-h-full w-auto max-w-full object-contain pointer-events-none select-none rounded-t-lg sm:rounded-l-xl sm:rounded-tr-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      {canSlide && emblaApi && (
        <>
          <button
            type="button"
            onClick={() => emblaApi.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-base-100/90 shadow-md flex items-center justify-center hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5 text-base-content"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => emblaApi.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-base-100/90 shadow-md flex items-center justify-center hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5 text-base-content"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {canSlide && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                i === selectedIndex ? "w-6 bg-primary" : "w-2 bg-base-content"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ projectId }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [descOpen, setDescOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const project = useMemo(
    () => projects.find((p) => p.id === projectId),
    [projectId],
  );

  if (!project) return null;
  if (!mounted) return null;

  const rawImages = galleryImages(project);
  const images = rawImages.map(resolveProjectImageUrl);
  const hasDescription = Boolean(project.description?.trim());
  const hasResponsibilities = Boolean(project.responsibilities?.length);
  const hasCollaborators = project.collaborators.length > 0;
  const hasTechnologies = Boolean(project.technologies?.length);

  const modalContent = (
    <dialog
      id={`project-modal-${projectId}`}
      className="modal modal-bottom sm:modal-middle"
      onClose={() => setCarouselIndex(0)}
    >
      {/* Mobile: single scroll container so carousel + details scroll together */}
      <div className="modal-box relative p-0 w-full max-w-6xl max-h-[89vh] overflow-y-auto sm:overflow-hidden flex flex-col sm:flex-row min-h-0 sm:flex-1">
        {/* Mobile-only: close X sticks to top when user scrolls */}
        <div className="sm:hidden sticky top-0 z-20 flex justify-end pt-2 pr-2 pb-2 bg-white min-h-0 shrink-0">
          <form method="dialog">
            <button
              type="submit"
              aria-label="Close"
              className="btn btn-circle btn-ghost btn-sm size-10 bg-base-100/80 backdrop-blur-md border border-base-300/70 shadow-md text-base-content hover:bg-base-200/80"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </div>
        {/* Left: Carousel — fixed height on mobile so whole content scrolls */}
        <div className="flex-shrink-0 w-full h-[45vh] min-h-[220px] sm:h-auto sm:min-h-0 sm:w-2/5 md:min-w-[280px] bg-white flex flex-col border-b sm:border-b-0 sm:border-r border-base-300 sm:flex-1 xl:min-w-[520px]">
          <ImageCarousel
            images={images}
            alt={project.title}
            value={carouselIndex}
            onIndexChange={setCarouselIndex}
          />
        </div>

        {/* Right: Details — content height on mobile (so whole modal scrolls), scrollable on desktop */}
        <div className="flex-none sm:flex-1 flex flex-col min-h-0 overflow-hidden sm:overflow-y-auto p-4 sm:p-6">
          <p className="text-sm text-base-content/60 uppercase tracking-wider">
            {project.category}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 dark:text-white">
            {project.title}
          </h2>

          {/* Description — collapsible on mobile */}
          {hasDescription && (
            <div className="mt-4">
              <button
                type="button"
                className="flex items-center gap-2 w-full text-left font-semibold text-base hover:opacity-80 sm:pointer-events-none"
                onClick={() => setDescOpen((o) => !o)}
                aria-expanded={descOpen}
              >
                <span>Description</span>
                <span className="sm:hidden">{descOpen ? "−" : "+"}</span>
              </button>
              <div
                className={`mt-2 text-base-content/80 text-sm sm:text-base ${
                  descOpen ? "block" : "hidden sm:block"
                }`}
              >
                {project.description}
              </div>
            </div>
          )}

          {/* My responsibilities — bullet list below description */}
          {hasResponsibilities && (
            <div className="mt-4">
              <p className="font-semibold text-base mb-2">Responsibilities</p>
              <ul className="text-base-content/80 text-sm sm:text-base space-y-1 list-disc list-inside">
                {project.responsibilities!.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Collaborators — small section */}
          {hasCollaborators && (
            <div className="mt-4">
              <p className="font-semibold text-base mb-2">Collaborators</p>
              <div className="flex flex-wrap gap-2">
                {project.collaborators.map((c, i) => (
                  <a
                    key={i}
                    href={c.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-base-200 px-2.5 py-1.5 text-sm sm:text-base hover:bg-base-300 transition-colors"
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-base-300">
                      <Image
                        src={c.avatar}
                        alt={c.name}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="max-w-[140px] truncate">{c.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Technologies — small section */}
          {hasTechnologies && (
            <div className="mt-4">
              <p className="font-semibold text-base mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies!.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-lg bg-base-200 px-3 py-2 text-sm sm:text-base"
                    title={t.name}
                  >
                    {t.iconUrl ? (
                      <img
                        src={t.iconUrl}
                        alt=""
                        className="w-5 h-5 object-contain"
                      />
                    ) : null}
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions — sticky at bottom on mobile */}
          <div className="mt-auto hidden sm:flex pt-6 flex-col-reverse sm:flex-row gap-2 sm:justify-end">
            <form method="dialog" className="contents">
              <button type="submit" className="btn btn-ghost sm:btn-accent">
                Close
              </button>
            </form>
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );

  return createPortal(modalContent, document.body);
}
