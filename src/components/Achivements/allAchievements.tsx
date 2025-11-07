import { ReactNode } from "react";
import { GiPumpkinMask } from "react-icons/gi";
import { LuCandyCane, LuCommand, LuHeart, LuUserPlus } from "react-icons/lu";
import { MdBlind } from "react-icons/md";
import { SiHackaday } from "react-icons/si";
import { BiSolidTerminal } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa6";

export const allAchievements = {
  firstVisite: {
    icon: <LuUserPlus />,
    title: () => "New Visitor ⋅ Welcome!",
    hint: undefined,
    displayIfNotUnlocked: true,
  },
  christmas: {
    icon: <LuCandyCane />,
    title: () => "Oh! Oh! Oh! Merry Christmas",
    hint: undefined,
    displayIfNotUnlocked: true,
  },
  spooky: {
    icon: <GiPumpkinMask />,
    title: () => "Bouh!",
    hint: undefined,
    displayIfNotUnlocked: true,
  },
  love: {
    icon: <LuHeart />,
    title: () => "Hello there 💋",
    hint: undefined,
    displayIfNotUnlocked: true,
  },
  consoleFunction: {
    icon: <BiSolidTerminal />,
    title: (payload) => `Hello ${payload?.name}! Nice to meet you!`,
    hint: "myNameIs()",
    displayIfNotUnlocked: true,
  },
  cmdk: {
    icon: <LuCommand />,
    title: () => "CMD+K POWER USER",
    hint: undefined,
    displayIfNotUnlocked: true,
  },
  konami: {
    icon: <FaGamepad />,
    title: () => "G33K! 🤓",
    hint: undefined,
    displayIfNotUnlocked: true,
  },
  hacker: {
    icon: <SiHackaday />,
    title: () => "SUDO MODE ACTIVATED",
    hint: undefined,
    displayIfNotUnlocked: false,
  },
  braille: {
    icon: <MdBlind />,
    title: () => "Sorry 😅",
    hint: undefined,
    displayIfNotUnlocked: false,
  },
} satisfies Record<
  string,
  {
    icon: ReactNode | undefined;
    title: (payload?: Record<string, string>) => ReactNode;
    hint: ReactNode | undefined;
    displayIfNotUnlocked: boolean;
  }
>;
