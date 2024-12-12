"use client";

import { useEffect } from "react";

import { entries } from "remeda";
import { useStoreAchievements } from "./store";
import { allAchievements } from "./allAchievements";
import { Achievement } from "./Achivement";
import { useActiveTheme } from "@/lib/theme";

export const Achievements = () => {
  const activeTheme = useActiveTheme();
  const isReady = useStoreAchievements((s) => s.isReady);
  const achivements = useStoreAchievements((s) => s.achivements);
  const init = useStoreAchievements((s) => s.init);
  const triggerAchievement = useStoreAchievements((s) => s.triggerAchievement);

  // Init page view
  useEffect(() => {
    init();

    const timeout = setTimeout(() => {
      triggerAchievement("firstVisite");
    }, 500);

    return () => clearTimeout(timeout);
  }, [init, triggerAchievement]);

  // After theme changed
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeTheme.theme?.name === "christmas") {
        triggerAchievement("christmas");
      }
    }, 2500);

    return () => clearTimeout(timeout);
  }, [activeTheme.theme?.name, triggerAchievement]);

  if (!isReady) return null;

  const achievementToDisplay = entries(allAchievements)
    .map(([name, config]) => ({ name, ...config }))
    .find((config) => achivements[config.name]?.status === "display");

  if (!achievementToDisplay) return null;

  return (
    <Achievement
      key={achievementToDisplay.name}
      icon={achievementToDisplay.icon}
    >
      {achievementToDisplay.title}
    </Achievement>
  );
};
