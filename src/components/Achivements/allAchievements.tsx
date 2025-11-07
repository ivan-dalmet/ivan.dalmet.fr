import { ReactNode } from "react";
import { GiPumpkinMask } from "react-icons/gi";
import { LuCandyCane, LuCommand, LuHeart, LuUserPlus } from "react-icons/lu";

export const allAchievements = {
  firstVisite: {
    icon: <LuUserPlus />,
    title: "New Visitor ⋅ Welcome!",
    description: undefined,
  },
  christmas: {
    icon: <LuCandyCane />,
    title: "Oh! Oh! Oh! Merry Christmas",
    description: undefined,
  },
  spooky: {
    icon: <GiPumpkinMask />,
    title: "Bouh!",
    description: undefined,
  },
  love: {
    icon: <LuHeart />,
    title: "Hello there 💋",
    description: undefined,
  },
  cmdk: {
    icon: <LuCommand />,
    title: "CMD+K POWER USER",
    description: undefined,
  },
} satisfies Record<
  string,
  {
    icon: ReactNode | undefined;
    title: ReactNode;
    description: ReactNode | undefined;
  }
>;
