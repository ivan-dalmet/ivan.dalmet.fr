"use client";

import { useActiveTheme, useIsArc } from "@/lib/theme";
import { cn } from "@/lib/utils";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandDialog,
} from "@/components/ui/command";
import { LuMoreHorizontal } from "react-icons/lu";
import { useEffect, useState } from "react";
import { THEME_TYPES, ThemeName, THEMES } from "@/themes";
import { groupBy } from "remeda";

const themeGroupByType = groupBy(THEMES, (t) => t.type);

export const ThemeSwitcher = (props: { className?: string }) => {
  const activeTheme = useActiveTheme();
  const isArc = useIsArc();
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = (theme: ThemeName) => {
    activeTheme.setTheme(theme);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className={cn("rounded-full w-fit p-1 flex", props.className)}>
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "opacity-70 text-base p-2 rounded-full border border-transparent",
            activeTheme.theme?.type === "other" &&
              "text-highlight opacity-100 border-border bg-background"
          )}
          title="Search for a theme"
          aria-label="Search for a theme"
        >
          <LuMoreHorizontal />
        </button>
        {THEMES.filter((t) => t.type === "default" || t.type === "recommended")
          .reverse()
          .map((theme) => {
            if (theme.name === "arc" && !isArc) return null;
            return (
              <ThemeButton
                key={theme.name}
                themeName={theme.name}
                isActive={activeTheme.theme?.name === theme.name}
                onClick={() => changeTheme(theme.name)}
              />
            );
          })}
      </div>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search a theme..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(themeGroupByType).map(([type, themes]) => {
            const typeLabel = THEME_TYPES.find((t) => t.name === type)?.label;
            return (
              <CommandGroup heading={typeLabel} key={type}>
                {themes?.map((theme) => {
                  if (theme.name === "arc" && !isArc) return null;
                  const Icon = theme.icon;
                  const isActive = activeTheme.theme?.name === theme.name;
                  return (
                    <CommandItem
                      key={theme.name}
                      onSelect={() => {
                        changeTheme(theme.name);
                        setIsOpen(false);
                      }}
                      className={cn(isActive && "text-highlight")}
                    >
                      <Icon className={cn(!isActive && "opacity-80")} />
                      {theme.label}
                      {isActive && (
                        <span className="px-1.5 text-[0.625rem] bg-highlight text-background rounded-md font-bold">
                          ACTIVE
                        </span>
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};

const ThemeButton = (props: {
  themeName: ThemeName;
  isActive: boolean;
  onClick: () => void;
}) => {
  const theme = THEMES.find((t) => t.name === props.themeName)!;
  if (!theme) return null;
  const Icon = theme.icon;
  return (
    <button
      className={cn(
        "opacity-70 text-base p-2 rounded-full border border-transparent",
        props.isActive &&
          "text-highlight opacity-100 border-border bg-background"
      )}
      disabled={props.isActive}
      onClick={() => props.onClick()}
      title={`Set theme to ${theme.label} `}
      aria-label={props.isActive ? undefined : `Set theme to ${theme.label}`}
    >
      <Icon />
    </button>
  );
};
