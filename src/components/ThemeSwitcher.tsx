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
import { LuEllipsis } from "react-icons/lu";
import { useEffect, useState } from "react";
import { THEME_TYPES, ThemeName, THEMES } from "@/themes";
import { groupBy } from "remeda";
import { useStoreAchievements } from "@/components/Achivements/store";

const themeGroupByType = groupBy(THEMES, (t) => t.type);

export const ThemeSwitcher = (props: { className?: string }) => {
  const activeTheme = useActiveTheme();
  const isArc = useIsArc();
  const [isOpen, setIsOpen] = useState(false);
  const triggerAchievement = useStoreAchievements((s) => s.triggerAchievement);

  const changeTheme = (theme: ThemeName) => {
    activeTheme.setTheme(theme);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
        triggerAchievement("cmdk");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [triggerAchievement]);

  return (
    <>
      <div className={cn("flex w-fit rounded-full p-1", props.className)}>
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "rounded-full border border-transparent p-2 text-base opacity-70",
            !activeTheme.theme?.expose &&
              "border-border bg-background text-link opacity-100",
          )}
          title="Search for a theme"
          aria-label="Search for a theme"
        >
          <LuEllipsis />
        </button>
        {THEMES.filter((t) => t.expose)
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
        <CommandInput
          placeholder="Search a theme..."
          onValueChange={(value) => {
            if (value.trim() === "H4CK3R") {
              changeTheme("hacker");
              triggerAchievement("hacker");
            }
          }}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(themeGroupByType).map(([type, themes]) => {
            const typeLabel = THEME_TYPES.find((t) => t.name === type)?.label;
            return (
              <CommandGroup heading={typeLabel} key={type}>
                {themes
                  ?.filter((t) => !t.hidden)
                  .map((theme) => {
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
                          <span className="rounded-md bg-highlight px-1.5 text-[0.625rem] font-bold text-background">
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
        "rounded-full border border-transparent p-2 text-base opacity-70",
        props.isActive && "border-border bg-background text-link opacity-100",
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
