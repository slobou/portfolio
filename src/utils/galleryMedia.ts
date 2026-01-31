/**
 * Utility to get all gallery media URLs for preloading
 */

import {
  getCloudinaryImageUrl,
  getCloudinaryVideoUrl,
  GALLERY_IMAGES,
} from "./cloudinary";

// Cloudinary public IDs - shared with About component
export const GALLERY_PUBLIC_IDS = {
  images: [
    "Photo1_pqk84i",
    "Photo2_hjcda4",
    "Photo3_hbhocp",
    "Photo4_nwc662",
    "Photo5_bfswlp",
    "Photo6_kvq8sq",
    "Photo7_xnyis3",
    "Photo8_jjcxvq",
    "Photo9_ufmcac",
    "Photo10_j9unv8",
    "Photo11_ozulfy",
    "Photo12_ksb437",
    "Photo13_hvkysc",
    "Photo14_sagrtm",
    "Photo15_nfqkmk",
    "2026sts_killr4",
  ],
  videos: ["Video1_bze9b2", "video2_sfwvss", "video3_yla2d5"],
};

/**
 * Get all media URLs that need to be preloaded
 * Returns both thumbnails and full-size versions for optimal loading
 */
export function getAllGalleryMediaUrls(): string[] {
  const urls: string[] = [];

  // Add critical images first (hero, etc.)
  urls.push("/assets/images/PhotoHero.jpg");

  // Add image thumbnails (priority - shown first)
  GALLERY_PUBLIC_IDS.images.forEach((id) => {
    urls.push(getCloudinaryImageUrl(id, GALLERY_IMAGES.thumbnail));
  });

  // Add video thumbnails
  GALLERY_PUBLIC_IDS.videos.forEach((id) => {
    urls.push(
      getCloudinaryVideoUrl(id, {
        width: 400,
        height: 400,
        quality: "auto",
        format: "auto",
      }),
    );
  });

  // Add full-size images (load in background, lower priority)
  GALLERY_PUBLIC_IDS.images.forEach((id) => {
    urls.push(getCloudinaryImageUrl(id, GALLERY_IMAGES.fullSize));
  });

  // Add full-size videos (load in background, lower priority)
  GALLERY_PUBLIC_IDS.videos.forEach((id) => {
    urls.push(
      getCloudinaryVideoUrl(id, {
        quality: "auto",
        format: "auto",
      }),
    );
  });

  return urls;
}
