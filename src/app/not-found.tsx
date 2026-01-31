import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0d2a2b] px-4">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-center text-white/80">This page could not be found.</p>
      <Link
        href="/"
        className="rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-teal-500"
      >
        Back to home
      </Link>
    </div>
  );
}
