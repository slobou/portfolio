/**
 * Route-level loading UI. Styled to match SplashScreen so users see one
 * continuous splash until the site is fully loaded—no spinner or loading component.
 */
export default function Loading() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0d2a2b] via-[#1b4b4c] to-[#0d2a2b]"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-white/40" />
        <p className="text-sm font-medium text-teal-300/80">Santiago Lobo</p>
      </div>
    </div>
  );
}
