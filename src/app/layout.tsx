import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Tomorrow, Rubik } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Snow } from "@/components/Snow";
import { Shadow } from "@/components/Shadow";
import { THEMES } from "@/themes";
import { SetupThemeFromSearchParams } from "@/app/SetupThemeFromSearchParams";
import { Achievements } from "@/components/Achivements";

const fontArgestaDisplay = localFont({
  src: "./fonts/argestadisplay-regular-webfont.woff",
  variable: "--font-argestadisplay",
  weight: "400",
});
const fontBasierCircleMono = localFont({
  src: "./fonts/basiercirclemono-regular-webfont.woff",
  variable: "--font-basiercirclemono",
  weight: "400",
});
const fontMiami = localFont({
  src: "./fonts/miami.woff",
  variable: "--font-miami",
  weight: "400",
});
const fontTomorrow = Tomorrow({
  variable: "--font-tomorrow",
  subsets: ["latin"],
  weight: "400",
});
const fontRubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: "700",
});
const fontTrashhand = localFont({
  src: "./fonts/trashhand.woff",
  variable: "--font-trashhand",
  weight: "400",
});
const fontBraille = localFont({
  src: "./fonts/braille.woff",
  variable: "--font-braille",
  weight: "400",
});

export const viewport: Viewport = {
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  title: "Ivan Dalmet - Lead Designer, UI & UX - Rouen, France",
  description:
    "Hi, I'm Ivan, co-founder and lead designer of BearStudio in Rouen, FRANCE",
  robots: { index: true, follow: true },
  icons: {
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Ivan Dalmet",
  manifest: `/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontArgestaDisplay.variable} ${fontBasierCircleMono.variable} ${fontMiami.variable} ${fontTomorrow.variable} ${fontTrashhand.variable} ${fontRubik.variable} ${fontBraille.variable} overflow-x-hidden bg-background text-foreground antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-svh flex-col overflow-x-hidden">
        <ThemeProvider attribute="class" themes={THEMES.map((t) => t.name)}>
          <div className="gradient-overlay pointer-events-none fixed inset-0 bg-gradient-to-t from-background-from to-background-to mix-blend-overlay" />
          <div className="pointer-events-none fixed inset-0 z-50 bg-[url('/noise.png')] bg-repeat opacity-[0.03] dark:opacity-[0.02]"></div>
          <div className="relative flex flex-1 flex-col">{children}</div>
          <ThemeSwitcher className="fixed bottom-3 right-3 z-40" />
          <Snow />
          <Shadow />

          <Achievements />
          <Suspense>
            <SetupThemeFromSearchParams />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
