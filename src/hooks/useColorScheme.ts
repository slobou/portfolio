"use client";

import { useState, useEffect, useCallback } from "react";

export type ColorScheme = "light" | "dark";

const THEME_KEY = "theme";
const DAISY_THEMES = { light: "corporate", dark: "forest" } as const;

function getSchemeFromDocument(): ColorScheme {
  if (typeof document === "undefined") return "dark";
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "forest") return "dark";
  if (theme === "corporate") return "light";
  return "dark";
}

export function useColorScheme(): {
  scheme: ColorScheme;
  setScheme: (scheme: ColorScheme) => void;
  toggleScheme: () => void;
} {
  const [scheme, setSchemeState] = useState<ColorScheme>("dark");

  useEffect(() => {
    setSchemeState(getSchemeFromDocument());

    const observer = new MutationObserver(() =>
      setSchemeState(getSchemeFromDocument())
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const setScheme = useCallback((next: ColorScheme) => {
    const daisyTheme = DAISY_THEMES[next];
    document.documentElement.setAttribute("data-theme", daisyTheme);
    try {
      localStorage.setItem(THEME_KEY, daisyTheme);
    } catch (_) {}
    setSchemeState(next);
  }, []);

  const toggleScheme = useCallback(() => {
    setScheme(scheme === "dark" ? "light" : "dark");
  }, [scheme, setScheme]);

  return { scheme, setScheme, toggleScheme };
}
