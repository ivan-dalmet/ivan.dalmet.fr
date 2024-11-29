import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { THEMES } from "@/components/ThemeSwitcher";

const fontHeadingRegular = localFont({
  src: "./fonts/argestadisplay-regular-webfont.woff",
  variable: "--font-heading",
  weight: "400",
});
const fontSansRegular = localFont({
  src: "./fonts/basiercirclemono-regular-webfont.woff",
  variable: "--font-sans",
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
      className={`${fontHeadingRegular.variable} ${fontSansRegular.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="flex flex-col overflow-x-hidden min-h-svh">
        <ThemeProvider
          attribute="class"
          //@ts-expect-error THEME is readonly and the ThemeProvider don't like that
          themes={THEMES}
        >
          <div className="arc-only fixed inset-0 bg-gradient-to-t from-background-from to-background-to mix-blend-overlay" />
          <div className="fixed z-50 bg-[url('/noise.png')] bg-repeat inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
