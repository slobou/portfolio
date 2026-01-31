"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export type ColorScheme = "light" | "dark";

const THEME_KEY = "theme";
const THEME_COOKIE = "theme";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const DAISY_THEMES = { light: "corporate", dark: "forest" } as const;

function setThemeCookie(value: string) {
  try {
    document.cookie = `${THEME_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  } catch (_) {}
}

type ThemeContextValue = {
  scheme: ColorScheme;
  setScheme: (scheme: ColorScheme) => void;
  toggleScheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: "corporate" | "forest";
}) {
  const initialScheme: ColorScheme =
    initialTheme === "corporate" ? "light" : "dark";
  const [scheme, setSchemeState] = useState<ColorScheme>(initialScheme);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    const currentScheme: ColorScheme =
      theme === "corporate" ? "light" : "dark";
    setSchemeState(currentScheme);

    const observer = new MutationObserver(() => {
      const t = document.documentElement.getAttribute("data-theme");
      setSchemeState(t === "corporate" ? "light" : "dark");
    });
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
    setThemeCookie(daisyTheme);
    setSchemeState(next);
  }, []);

  const toggleScheme = useCallback(() => {
    setScheme(scheme === "dark" ? "light" : "dark");
  }, [scheme, setScheme]);

  return (
    <ThemeContext.Provider value={{ scheme, setScheme, toggleScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useColorScheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useColorScheme must be used within ThemeProvider");
  }
  return ctx;
}
