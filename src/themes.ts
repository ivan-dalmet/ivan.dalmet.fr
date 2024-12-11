import { FC } from "react";
import {
  LuCandyCane,
  LuCrown,
  LuFlame,
  LuHeart,
  LuMonitor,
  LuMoon,
  LuMusic,
  LuPalmtree,
  LuSnowflake,
  LuSun,
  LuTreePine,
} from "react-icons/lu";
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
  },
  {
    name: "dark",
    label: "Dark mode",
    icon: LuMoon,
    type: "default",
    expose: true,
  },
  {
    name: "light",
    label: "Light mode",
    icon: LuSun,
    type: "default",
    expose: true,
  },

  {
    name: "christmas",
    label: "Oh Oh Oh! Merry Christmas",
    icon: LuCandyCane,
    type: "recommended",
    expose: true,
  },
  {
    name: "bearstudio",
    label: "BearStudio",
    icon: IconBearStudio,
    type: "recommended",
  },
  {
    name: "fork-it",
    label: "Fork it! Community",
    icon: IconForkIt,
    type: "recommended",
  },
  {
    name: "start-ui",
    label: "Start UI",
    icon: IconStartUI,
    type: "recommended",
  },
  {
    name: "arc",
    label: "Your Arc Brower theme!",
    icon: IconArc,
    type: "recommended",
  },
  {
    name: "miami",
    label: "Miami Vibe",
    icon: LuPalmtree,
    type: "other",
  },
  {
    name: "cozy-fireplace",
    label: "Cozy Fireplace",
    icon: LuFlame,
    type: "other",
  },
  {
    name: "winter-wonderland",
    label: "Winter wonderland",
    icon: LuSnowflake,
    type: "other",
  },
  {
    name: "tranquil-forest",
    label: "Tranquil Forest",
    icon: LuTreePine,
    type: "other",
  },
  {
    name: "romantic-love",
    label: "Love Love Love",
    icon: LuHeart,
    type: "other",
  },
  {
    name: "golden-elegance",
    label: "Golden elegance",
    icon: LuCrown,
    type: "other",
  },
  {
    name: "funky-neon",
    label: "Funky Neon",
    icon: LuMusic,
    type: "other",
  },
  {
    name: "braille",
    label: "Braille",
    icon: LuMusic,
    type: "other",
    hidden: true,
  },
] satisfies {
  name: string;
  label: string;
  icon: FC;
  type: (typeof THEME_TYPES)[number]["name"];
  expose?: boolean;
  hidden?: boolean;
}[];

export type ThemeName = (typeof THEMES)[number]["name"];
