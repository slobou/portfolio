/**
 * Cloudinary utility functions using next-cloudinary
 * Generates optimized URLs for images and videos
 */

import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";

export interface CloudinaryImageOptions {
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?:
    | "fill"
    | "fit"
    | "scale"
    | "crop"
    | "thumb"
    | "auto"
    | "lfill"
    | "fill_pad";
  gravity?: "auto" | "face" | "center";
}

export interface CloudinaryVideoOptions {
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "mp4" | "webm";
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb";
}

/**
 * Generate a Cloudinary image URL with optimizations
 * @param src - The public ID of the image in Cloudinary (e.g., "portfolio/gallery/Photo1")
 * @param options - Transformation options
 * @returns Optimized Cloudinary URL
 */
export function getCloudinaryImageUrl(
  src: string,
  options: CloudinaryImageOptions = {},
): string {
  const {
    width = 400,
    height = 400,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = options;

  const imageOptions: {
    src: string;
    width: number;
    height: number;
    crop: string;
    quality: string | number;
    format: string;
    gravity?: string;
  } = {
    src,
    width,
    height,
    crop,
    quality,
    format,
  };

  const gravitySupportedCrops = [
    "fill",
    "auto",
    "crop",
    "lfill",
    "fill_pad",
    "thumb",
  ];
  if (gravity && crop && gravitySupportedCrops.includes(crop)) {
    imageOptions.gravity = gravity;
  }

  return getCldImageUrl(imageOptions as Parameters<typeof getCldImageUrl>[0]);
}

/**
 * Generate a Cloudinary video URL with optimizations
 * @param src - The public ID of the video in Cloudinary (e.g., "portfolio/gallery/Video1")
 * @param options - Transformation options
 * @returns Optimized Cloudinary video URL
 */
export function getCloudinaryVideoUrl(
  src: string,
  options: CloudinaryVideoOptions = {},
): string {
  const { width, height, quality = "auto", format = "auto", crop } = options;

  const videoOptions: Record<string, unknown> = { src };
  if (width !== undefined) videoOptions.width = width;
  if (height !== undefined) videoOptions.height = height;
  if (quality) videoOptions.quality = quality;
  if (format) videoOptions.format = format;
  if (crop) videoOptions.crop = crop;

  try {
    return getCldVideoUrl(videoOptions as Parameters<typeof getCldVideoUrl>[0]);
  } catch (error) {
    console.error("Error generating Cloudinary video URL:", error);
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return "";
    return `https://res.cloudinary.com/${cloudName}/video/upload/${src}`;
  }
}

/**
 * Generate a Cloudinary video poster/thumbnail image URL
 * @param src - The public ID of the video in Cloudinary
 * @param options - Transformation options for the poster image
 * @returns Optimized Cloudinary image URL (poster frame from video)
 */
export function getCloudinaryVideoPoster(
  src: string,
  options: CloudinaryImageOptions = {},
): string {
  const {
    width = 400,
    height = 400,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = options;

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    console.error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not defined");
    return "";
  }

  const transformations: string[] = [];
  if (crop) transformations.push(`c_${crop}`);
  if (gravity && crop === "fill") transformations.push(`g_${gravity}`);
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformationString = transformations.join(",");
  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformationString}/so_0/${src}.jpg`;
}

/**
 * Gallery image configurations with optimized settings
 */
export const GALLERY_IMAGES = {
  thumbnail: {
    width: 400,
    height: 400,
    quality: "auto" as const,
    format: "auto" as const,
    crop: "fill" as const,
    gravity: "auto" as const,
  },
  fullSize: {
    width: 1200,
    height: 1200,
    quality: "auto" as const,
    format: "auto" as const,
    crop: "fit" as const,
  },
};

/**
 * Get both thumbnail and full-size URLs for a media item
 */
export function getGalleryMediaUrls(
  publicId: string,
  isVideo: boolean = false,
) {
  if (isVideo) {
    return {
      thumbnail: getCloudinaryVideoUrl(publicId, {
        width: 400,
        height: 400,
        quality: "auto",
        format: "auto",
      }),
      fullSize: getCloudinaryVideoUrl(publicId, {
        width: 1200,
        height: 1200,
        quality: "auto",
        format: "auto",
      }),
    };
  }

  return {
    thumbnail: getCloudinaryImageUrl(publicId, GALLERY_IMAGES.thumbnail),
    fullSize: getCloudinaryImageUrl(publicId, GALLERY_IMAGES.fullSize),
  };
}

/**
 * Generate a Cloudinary URL for raw files (PDF, etc.)
 * @param publicId - The public ID of the file in Cloudinary
 * @param options.asAttachment - If true, adds fl_attachment so the file downloads
 */
export function getCloudinaryRawUrl(
  publicId: string,
  options?: { asAttachment?: boolean },
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    console.error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not defined");
    return "";
  }
  const prefix = options?.asAttachment ? "fl_attachment/" : "";
  return `https://res.cloudinary.com/${cloudName}/raw/upload/${prefix}${publicId}`;
}

/** Public ID for resume PDF in Cloudinary – use when serving resume from Cloudinary */
export const RESUME_PUBLIC_ID = "portfolio/resume";

/**
 * Resolve a project image source to a URL.
 * - If src starts with "http" or "/", it's treated as an absolute/relative URL and returned as-is.
 * - Otherwise it's treated as a Cloudinary public ID and an optimized image URL is returned.
 * Use this for project modal gallery images so you can mix local paths and Cloudinary IDs.
 */
export function resolveProjectImageUrl(src: string): string {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return getCloudinaryImageUrl(src, {
    width: 1200,
    height: 1200,
    crop: "fit",
    quality: "auto",
    format: "auto",
  });
}
