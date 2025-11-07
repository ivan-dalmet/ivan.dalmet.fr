import { FC } from "react";
import {
  LuCandyCane,
  LuCrown,
  LuFlame,
  LuHeart,
  LuMonitor,
  LuMoon,
  LuMusic,
  LuTreePalm,
  LuSnowflake,
  LuSun,
  LuTreePine,
} from "react-icons/lu";
import { BiSolidTerminal } from "react-icons/bi";
import { GiPumpkinMask } from "react-icons/gi";
import { IconArc } from "@/components/IconArc";
import { IconForkIt } from "@/components/IconForkIt";
import { IconBearStudio } from "@/components/IconBearStudio";
import { IconStartUI } from "@/components/IconStartUI";

export const THEME_TYPES = [
  {
    name: "default",
    label: "Default themes",
  },
  {
    name: "recommended",
    label: "Recommended themes",
  },
  {
    name: "other",
    label: "All other themes",
  },
] satisfies { name: string; label: string }[];

export const THEMES = [
  {
    name: "system",
    label: "Auto (system)",
    icon: LuMonitor,
    type: "default",
    expose: true,
  } as const,
  {
    name: "dark",
    label: "Dark mode",
    icon: LuMoon,
    type: "default",
    expose: true,
  } as const,
  {
    name: "light",
    label: "Light mode",
    icon: LuSun,
    type: "default",
    expose: true,
  } as const,

  {
    name: "bearstudio",
    label: "BearStudio",
    icon: IconBearStudio,
    type: "recommended",
  } as const,
  {
    name: "fork-it",
    label: "Fork it! Community",
    icon: IconForkIt,
    type: "recommended",
  } as const,
  {
    name: "start-ui",
    label: "Start UI",
    icon: IconStartUI,
    type: "recommended",
  } as const,
  {
    name: "arc",
    label: "Your Arc Brower theme!",
    icon: IconArc,
    type: "recommended",
  } as const,
  {
    name: "miami",
    label: "Miami Vibe",
    icon: LuTreePalm,
    type: "other",
  } as const,
  {
    name: "halloween",
    label: "Spooky Halloween",
    icon: GiPumpkinMask,
    type: "other",
  } as const,
  {
    name: "christmas",
    label: "Oh Oh Oh! Merry Christmas",
    icon: LuCandyCane,
    type: "other",
    expose: true,
  } as const,
  {
    name: "hacker",
    label: "H4CKER",
    icon: BiSolidTerminal,
    type: "other",
    hidden: true,
  } as const,
  {
    name: "cozy-fireplace",
    label: "Cozy Fireplace",
    icon: LuFlame,
    type: "other",
  } as const,
  {
    name: "winter-wonderland",
    label: "Winter wonderland",
    icon: LuSnowflake,
    type: "other",
  } as const,
  {
    name: "tranquil-forest",
    label: "Tranquil Forest",
    icon: LuTreePine,
    type: "other",
  } as const,
  {
    name: "romantic-love",
    label: "Love Love Love",
    icon: LuHeart,
    type: "other",
  } as const,
  {
    name: "golden-elegance",
    label: "Golden elegance",
    icon: LuCrown,
    type: "other",
  } as const,
  {
    name: "funky-neon",
    label: "Funky Neon",
    icon: LuMusic,
    type: "other",
  } as const,
  {
    name: "braille",
    label: "Braille",
    icon: LuMusic,
    type: "other",
    hidden: true,
  } as const,
] satisfies {
  name: string;
  label: string;
  icon: FC;
  type: (typeof THEME_TYPES)[number]["name"];
  expose?: boolean;
  hidden?: boolean;
}[];

export type ThemeName = (typeof THEMES)[number]["name"];
