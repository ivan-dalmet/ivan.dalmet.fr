"use client";

import Image from "next/image";
import pictureSrc from "@/../public/ivan-dalmet.png";
import santaHatSrc from "@/../public/santa-hat.svg";
import { useState } from "react";
import { useActiveTheme } from "@/lib/theme";
import { useStoreAchievements } from "@/components/Achivements/store";

export const Picture = () => {
  const { theme } = useActiveTheme();
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
          className="absolute left-[13%] top-[-8%] z-10 aspect-[129/97] w-[50%]"
        />
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
