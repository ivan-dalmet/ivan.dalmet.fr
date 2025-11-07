"use client";

import { useEffect } from "react";

import { entries } from "remeda";
import { useStoreAchievements } from "./store";
import { allAchievements } from "./allAchievements";
import { Achievement } from "./Achivement";
import { useActiveTheme } from "@/lib/theme";
import { z } from "zod";
import { useSecretCode } from "@/lib/use-secret-code";

export const Achievements = () => {
  const activeTheme = useActiveTheme();
  const isReady = useStoreAchievements((s) => s.isReady);
  const achivements = useStoreAchievements((s) => s.achivements);
  const init = useStoreAchievements((s) => s.init);
  const triggerAchievement = useStoreAchievements((s) => s.triggerAchievement);
  useSecretCode(
    [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ],
    () => {
      triggerAchievement("konami");
    },
  );

  // Init page view
  useEffect(() => {
    init();
    console.log("Did you tried 'H4CK3R'?");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).myNameIs = (name?: string) => {
      const nameParsed = z.string().trim().min(1).safeParse(name);
      if (nameParsed.error) {
        console.error("You don't have a name?");
        return;
      }
      triggerAchievement("consoleFunction", { name: nameParsed.data });
    };

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
      if (activeTheme.theme?.name === "halloween") {
        triggerAchievement("spooky");
      }
      if (activeTheme.theme?.name === "braille") {
        triggerAchievement("braille");
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
      {achievementToDisplay.title(
        achivements[achievementToDisplay.name]?.payload,
      )}
    </Achievement>
  );
};
