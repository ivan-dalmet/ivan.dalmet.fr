"use client";
import { allAchievements } from "@/components/Achivements/allAchievements";
import { useStoreAchievements } from "@/components/Achivements/store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LuTrophy } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa6";
import { entries, values } from "remeda";

export const AchievementsProgress = () => {
  const userAchievements = useStoreAchievements((s) => s.achivements);
  const viewAchievementsProgress = useStoreAchievements(
    (s) => s.viewAchievementsProgress,
  );
  const hasNewUnlock = values(userAchievements).some(
    (achievement) => achievement.isNew,
  );

  return (
    <Sheet
      onOpenChange={(open) => {
        if (!open) {
          viewAchievementsProgress();
        }
      }}
    >
      <SheetTrigger asChild>
        <button
          type="button"
          className="fixed right-2 top-2 rounded-full border border-transparent p-2 text-base"
        >
          <LuTrophy className="opacity-70" />
          <span className="sr-only">Achievements</span>
          {hasNewUnlock && (
            <span className="absolute right-0 top-0 block size-2.5 rounded-full border-2 border-background bg-highlight" />
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader className="p-4">
          <SheetTitle>Achievements</SheetTitle>
          <SheetDescription className="text-xs">
            Because why not!
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col pb-24">
          {entries(allAchievements).map(([name, achievement]) => {
            const unlocked = !!userAchievements[name]?.status;
            const iconVisible = unlocked || !!achievement.displayIfNotUnlocked;
            const isNew = !!userAchievements[name]?.isNew;
            return (
              <div
                key={name}
                className="flex items-center gap-4 border-t border-black/10 p-4 last:border-b"
              >
                <div
                  className={cn(
                    "relative flex size-8 items-center justify-center rounded-lg bg-highlight text-base text-background",
                    !unlocked && "opacity-30 grayscale",
                  )}
                >
                  {iconVisible ? achievement.icon : <FaQuestion />}
                </div>
                <div className="flex-1 text-sm">
                  <div className="flex items-center">
                    <h4
                      className={cn("flex-1", !unlocked && "flex opacity-60")}
                    >
                      {unlocked
                        ? achievement.title(userAchievements[name]?.payload)
                        : "???"}
                    </h4>
                    {!!isNew && (
                      <span className="rounded-full border-2 border-background bg-highlight px-1.5 text-[10px] font-bold text-background">
                        NEW
                      </span>
                    )}
                  </div>
                  {!unlocked && !!achievement.hint && (
                    <p className="text-xs">{achievement.hint}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};
