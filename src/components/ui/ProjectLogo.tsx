"use client";

interface ProjectLogoProps {
  logo?: string;
  logoText?: string;
  size?: "sm" | "md" | "lg";
}

export default function ProjectLogo({
  logo,
  logoText,
  size = "md",
}: ProjectLogoProps) {
  if (!logo && !logoText) return null;

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  if (logo) {
    return (
      <img
        src={logo}
        alt="Project Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
    );
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center`}>
      <p className="text-2xl font-bold text-white">{logoText}</p>
    </div>
  );
}
