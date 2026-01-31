"use client";

import Image from "next/image";
import { useState } from "react";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  const first = parts[0] ?? "";
  return first.length >= 2
    ? first.slice(0, 2).toUpperCase()
    : first.toUpperCase() || "?";
}

interface CollaboratorAvatarProps {
  src: string;
  name: string;
  size?: number;
  className?: string;
  fill?: boolean;
}

export function CollaboratorAvatar({
  src,
  name,
  size = 40,
  className = "",
  fill = false,
}: CollaboratorAvatarProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-base-300 text-base-content font-semibold flex-shrink-0 ${fill ? "absolute inset-0" : ""} ${className}`}
        style={
          fill
            ? { fontSize: "0.65rem" }
            : {
                width: size,
                height: size,
                fontSize: Math.max(10, size * 0.4),
              }
        }
        title={name}
      >
        {getInitials(name)}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 640px) 32px, 40px"
        className={`rounded-full object-cover ${className}`}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className={`rounded-full object-cover flex-shrink-0 ${className}`}
      onError={() => setImageError(true)}
    />
  );
}
