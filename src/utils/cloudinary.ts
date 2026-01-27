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
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb";
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
  options: CloudinaryImageOptions = {}
): string {
  const {
    width = 400,
    height = 400,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = options;

  return getCldImageUrl({
    src,
    width,
    height,
    crop,
    gravity,
    quality,
    format,
  });
}

/**
 * Generate a Cloudinary video URL with optimizations
 * @param src - The public ID of the video in Cloudinary (e.g., "portfolio/gallery/Video1")
 * @param options - Transformation options
 * @returns Optimized Cloudinary video URL
 */
export function getCloudinaryVideoUrl(
  src: string,
  options: CloudinaryVideoOptions = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop,
  } = options;

  // Build the options object for getCldVideoUrl
  const videoOptions: any = {
    src,
  };

  // Add optional parameters only if they're defined
  if (width !== undefined) videoOptions.width = width;
  if (height !== undefined) videoOptions.height = height;
  if (quality) videoOptions.quality = quality;
  if (format) videoOptions.format = format;
  if (crop) videoOptions.crop = crop;

  try {
    return getCldVideoUrl(videoOptions);
  } catch (error) {
    console.error("Error generating Cloudinary video URL:", error);
    // Fallback: return a basic Cloudinary video URL
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return "";
    return `https://res.cloudinary.com/${cloudName}/video/upload/${src}`;
  }
}

/**
 * Generate a Cloudinary video poster/thumbnail image URL
 * Extracts a frame from the video to use as a thumbnail
 * @param src - The public ID of the video in Cloudinary
 * @param options - Transformation options for the poster image
 * @returns Optimized Cloudinary image URL (poster frame from video)
 */
export function getCloudinaryVideoPoster(
  src: string,
  options: CloudinaryImageOptions = {}
): string {
  const {
    width = 400,
    height = 400,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = options;

  // For video posters, we use the video public ID but request it as an image
  // Cloudinary automatically extracts a frame from the video
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    console.error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not defined");
    return "";
  }

  // Build transformation string manually for video poster
  const transformations = [];
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
  // Thumbnail size for gallery tiles (small, fast loading)
  thumbnail: {
    width: 400,
    height: 400,
    quality: "auto" as const,
    format: "auto" as const,
    crop: "fill" as const,
    gravity: "auto" as const,
  },
  // Full size for opened/enlarged view (high quality)
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
 * Useful for galleries that need to load thumbnails first, then full images
 */
export function getGalleryMediaUrls(
  publicId: string,
  isVideo: boolean = false
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
