import {
  AchievementNameSchema,
  AchievementsSchema,
} from "@/components/Achivements/schema";
import { create } from "zustand";
import { clone, entries, keys } from "remeda";

type State = {
  isReady: boolean;
  achivements: AchievementsSchema;
  init: () => void;
  triggerAchievement: (
    achivementName: AchievementNameSchema,
    payload?: Record<string, string>,
  ) => void;
  viewAchievementsProgress: () => void;
};

export const useStoreAchievements = create<State>()((set, get) => ({
  isReady: false,
  achivements: {},

  init: () => {
    const achivements = clone(getFromLocalStorage() ?? {});

    // Clean up all viewed
    keys(achivements).forEach((name) => {
      if (achivements[name]?.status === "display") {
        achivements[name].status = "viewed";
      }
    });

    set({
      achivements,
    });
  },
  triggerAchievement: (achivementName, payload) => {
    const achivements = clone(get().achivements);

    // Clean up other viewed
    keys(achivements)
      .filter((n) => n !== achivementName)
      .forEach((name) => {
        if (achivements[name]?.status === "display") {
          achivements[name].status = "viewed";
        }
      });

    if (achivements[achivementName]?.status === undefined) {
      achivements[achivementName] = {
        status: "display",
        isNew: true,
        payload,
      };
    }

    set({
      isReady: true,
      achivements,
    });
    setToLocalStorage(achivements);
  },

  viewAchievementsProgress: () => {
    const achivements = clone(get().achivements);

    set({
      achivements: entries(achivements).reduce((acc, [name, achivement]) => {
        return { ...acc, [name]: { ...achivement, isNew: false } };
      }, {}),
    });
  },
}));

function getFromLocalStorage() {
  if (!window?.localStorage) return;
  const rawData = window.localStorage.getItem("achivements");
  return AchievementsSchema.parse(
    JSON.parse(rawData?.startsWith("{") ? rawData : "{}"),
  );
}

function setToLocalStorage(achivements: AchievementsSchema) {
  if (!window?.localStorage) return;
  window.localStorage.setItem("achivements", JSON.stringify(achivements));
  return achivements;
}
