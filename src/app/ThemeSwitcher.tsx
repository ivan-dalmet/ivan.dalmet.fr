"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMonitor, LuMoonStar, LuSun } from "react-icons/lu";

type THEME = "system" | "dark" | "light";

export const ThemeSwitcher = (props: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [isHydrated, setIsHydrated] = useState(false);
  const hydratedTheme = isHydrated ? theme : null;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className={cn("rounded-full w-fit p-1 flex", props.className)}>
      <ThemeButton
        theme="light"
        isActive={hydratedTheme === "light"}
        onClick={() => setTheme("light")}
      />
      <ThemeButton
        theme="system"
        isActive={hydratedTheme === "system"}
        onClick={() => setTheme("system")}
      />
      <ThemeButton
        theme="dark"
        isActive={hydratedTheme === "dark"}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

const ThemeButton = (props: {
  theme: THEME;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={cn(
        "opacity-70 text-base p-2 rounded-full border border-transparent",
        props.isActive &&
          "text-highlight opacity-100 border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900"
      )}
      disabled={props.isActive}
      onClick={() => props.onClick()}
      title={`Set theme to ${props.theme} `}
      aria-label={props.isActive ? undefined : `Set theme to ${props.theme}`}
    >
      {props.theme === "system" && <LuMonitor />}
      {props.theme === "dark" && <LuMoonStar />}
      {props.theme === "light" && <LuSun />}
    </button>
  );
};
