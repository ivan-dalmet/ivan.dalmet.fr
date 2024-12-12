"use client";

import { ThemeName, THEMES } from "@/themes";
import { useTheme } from "next-themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { values } from "remeda";

export const SetupThemeFromSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setTheme } = useTheme();
  const theme = searchParams.get("theme");

  useEffect(() => {
    if (
      typeof theme === "string" &&
      values(THEMES)
        .map((t) => t.name)
        .includes(theme as ThemeName)
    ) {
      setTheme(theme);
      router.replace(window.location.pathname);
    }
  }, [theme, setTheme, router]);
  return null;
};
