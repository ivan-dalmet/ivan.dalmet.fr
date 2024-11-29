"use client";

import Image from "next/image";
import pictureSrc from "@/../public/ivan-dalmet.png";
import santaHatSrc from "@/../public/santa-hat.svg";
import { useState } from "react";
import { useActiveTheme } from "@/lib/theme";

export const Picture = () => {
  const { theme } = useActiveTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative md:-translate-x-8">
      <div className="blur-3xl opacity-20 bg-image-accent absolute w-[125%] aspect-square top-1/2 left-1/2 translate-x-[-49.7%] translate-y-[-39.6%] rounded-full" />
      <div className="bg-image-background absolute w-[125%] aspect-square top-1/2 left-1/2 translate-x-[-49.7%] translate-y-[-39.6%] rounded-full bg-gradient-to-t from-image-background-from to-image-background-to" />
      {isLoaded && (
        <div className="bg-image-accent absolute w-[70%] aspect-square top-1/2 left-1/2 translate-x-[-49.7%] translate-y-[-15%] rounded-full" />
      )}
      {theme === "christmas" && (
        <Image
          src={santaHatSrc}
          alt=""
          className="absolute z-10 w-[50%] aspect-[129/97] top-[-8%] left-[13%]"
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
        src={pictureSrc}
        width={261}
        height={396}
        alt="Picture of Ivan Dalmet"
        sizes="100vw, (min-width: 768px) 261px"
      />
    </div>
  );
};
