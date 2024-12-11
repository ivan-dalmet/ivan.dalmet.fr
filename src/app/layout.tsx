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
      className={`${fontArgestaDisplay.variable} ${fontBasierCircleMono.variable} ${fontMiami.variable} ${fontTomorrow.variable} ${fontTrashhand.variable} ${fontRubik.variable} ${fontBraille.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="flex flex-col overflow-x-hidden min-h-svh">
        <ThemeProvider attribute="class" themes={THEMES.map((t) => t.name)}>
          <div className="gradient-overlay fixed inset-0 bg-gradient-to-t from-background-from to-background-to mix-blend-overlay pointer-events-none" />
          <div className="fixed z-50 bg-[url('/noise.png')] bg-repeat inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"></div>
          <div className="flex flex-col flex-1 relative">{children}</div>
          <ThemeSwitcher className="fixed bottom-3 right-3 z-40" />
          <Snow />
          <Shadow />
          <Suspense>
            <SetupThemeFromSearchParams />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
