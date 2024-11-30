import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { THEMES, ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Snow } from "@/components/Snow";

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
      className={`${fontArgestaDisplay.variable} ${fontBasierCircleMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="flex flex-col overflow-x-hidden min-h-svh">
        <ThemeProvider
          attribute="class"
          //@ts-expect-error THEME is readonly and the ThemeProvider don't like that
          themes={THEMES}
        >
          <div className="gradient-overlay fixed inset-0 bg-gradient-to-t from-background-from to-background-to mix-blend-overlay pointer-events-none" />
          <div className="fixed z-50 bg-[url('/noise.png')] bg-repeat inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"></div>
          {children}
          <ThemeSwitcher className="fixed bottom-3 right-3 z-40" />
          <Snow />
        </ThemeProvider>
      </body>
    </html>
  );
}
