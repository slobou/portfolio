import {
  Geist,
  Geist_Mono,
  Montserrat,
  Montserrat_Alternates,
} from "next/font/google";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const THEME_COOKIE = "theme";
const THEMES = ["corporate", "forest"] as const;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago Lobo - Portfolio",
  description: "Portfolio of Santiago Lobo - Software Developer and Leader",
  openGraph: {
    type: "website",
    title: "Santiago Lobo - Portfolio",
    description: "Portfolio of Santiago Lobo - Software Developer and Leader",
  },
  icons: {
    icon: "/assets/images/Logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE)?.value;
  const initialTheme: "corporate" | "forest" =
    themeCookie && THEMES.includes(themeCookie as (typeof THEMES)[number])
      ? (themeCookie as "corporate" | "forest")
      : "forest";

  return (
    <html lang="en" data-theme={initialTheme} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var c=document.cookie.match(/theme=([^;]+)/);var t=c?c[1]:localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="corporate"||t==="forest"?t:"forest");})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${montserratAlternates.variable} antialiased bg-[#163d3e] dark:bg-[#0d2a2b]`}
      >
        <ThemeProvider initialTheme={initialTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
