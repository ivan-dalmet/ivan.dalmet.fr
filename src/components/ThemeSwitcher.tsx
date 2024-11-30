"use client";

import { ArcIcon } from "@/components/ArcIcon";
import { useActiveTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { LuCandyCane, LuMonitor, LuMoonStar, LuSun } from "react-icons/lu";

export const THEMES = ["arc", "christmas", "light", "dark", "system"] as const;
export type Theme = (typeof THEMES)[number];

export const ThemeSwitcher = (props: { className?: string }) => {
  const activeTheme = useActiveTheme();

  const changeTheme = (theme: Theme) => {
    activeTheme.setTheme(theme);
  };

  return (
    <div className={cn("rounded-full w-fit p-1 flex", props.className)}>
      {THEMES.map((theme) => (
        <ThemeButton
          key={theme}
          theme={theme}
          isActive={activeTheme.theme === theme}
          onClick={() => changeTheme(theme)}
        />
      ))}
    </div>
  );
};

const ThemeButton = (props: {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={cn(
        "opacity-70 text-base p-2 rounded-full border border-transparent",
        props.isActive &&
          "text-highlight opacity-100 border-border bg-background"
      )}
      disabled={props.isActive}
      onClick={() => props.onClick()}
      title={`Set theme to ${props.theme} `}
      aria-label={props.isActive ? undefined : `Set theme to ${props.theme}`}
      style={{
        display:
          props.theme === "arc" ? "var(--arc-palette-title, none)" : undefined,
      }}
    >
      {props.theme === "arc" && <ArcIcon />}
      {props.theme === "system" && <LuMonitor />}
      {props.theme === "dark" && <LuMoonStar />}
      {props.theme === "light" && <LuSun />}
      {props.theme === "christmas" && <LuCandyCane />}
    </button>
  );
};
