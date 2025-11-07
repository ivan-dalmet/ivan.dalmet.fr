"use client";

import Image from "next/image";
import pictureSrc from "@/../public/ivan-dalmet.png";
import santaHatSrc from "@/../public/santa-hat.svg";
import hallowenHatSrc from "@/../public/halloween-hat.png";
import { useState } from "react";
import { useActiveTheme } from "@/lib/theme";
import { useStoreAchievements } from "@/components/Achivements/store";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "@/components/ui/animated-cursor";

export const Picture = () => {
  const { theme } = useActiveTheme();
  const achivements = useStoreAchievements((s) => s.achivements);
  const triggerAchievement = useStoreAchievements((s) => s.triggerAchievement);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative md:-translate-x-8">
      <div className="absolute left-1/2 top-1/2 aspect-square w-[125%] translate-x-[-49.7%] translate-y-[-39.6%] rounded-full bg-image-accent opacity-20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[125%] translate-x-[-49.7%] translate-y-[-39.6%] rounded-full bg-image-background bg-gradient-to-t from-image-background-from to-image-background-to" />
      {isLoaded && (
        <div className="absolute left-1/2 top-1/2 aspect-square w-[70%] translate-x-[-49.7%] translate-y-[-15%] rounded-full bg-image-accent" />
      )}
      {theme?.name === "christmas" && (
        <Image
          src={santaHatSrc}
          alt=""
          className="pointer-events-none absolute left-[13%] top-[-8%] z-10 aspect-[129/97] w-[50%]"
        />
      )}
      {theme?.name === "halloween" && (
        <Image
          src={hallowenHatSrc}
          alt=""
          className="pointer-events-none absolute left-[-2%] top-[-22%] z-10 aspect-square w-[110%] max-w-none"
        />
      )}
      {theme?.name === "romantic-love" && (
        <CursorProvider>
          <Cursor>
            <svg className="size-6 text-[pink]" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                stroke="rgba(0,0,0,0.6)"
                strokeWidth={2}
                d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.828q-1.601-1.593-2.528-2.81t-1.296-2.2T3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.32 0 2.475.675T12 6.289Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 .996-.368 1.98q-.369.986-1.296 2.202t-2.519 2.809q-1.592 1.592-4.06 3.828z"
              />
            </svg>
          </Cursor>
          {!achivements.love?.status && (
            <CursorFollow>
              <div className="whitespace-nowrap rounded-lg bg-highlight px-2 py-1 text-sm text-background shadow-lg">
                Say "Hi" 💋
              </div>
            </CursorFollow>
          )}
        </CursorProvider>
      )}
      <Image
        className="relative"
        priority
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={() => {
          setIsLoaded(false);
        }}
        onClick={() => {
          if (theme?.name === "romantic-love") {
            triggerAchievement("love");
          }
        }}
        src={pictureSrc}
        width={261}
        height={396}
        alt="Picture of Ivan Dalmet"
        sizes="100vw, (min-width: 768px) 261px"
      />
    </div>
  );
};
