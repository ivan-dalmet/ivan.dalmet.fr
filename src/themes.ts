import { ArcIcon } from "@/components/ArcIcon";
import { FC } from "react";
import {
  LuCandyCane,
  LuCrown,
  LuFlame,
  LuHeart,
  LuMonitor,
  LuMoon,
  LuPalmtree,
  LuSnowflake,
  LuSun,
  LuTreePine,
} from "react-icons/lu";

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
  },
  {
    name: "dark",
    label: "Dark mode",
    icon: LuMoon,
    type: "default",
  },
  {
    name: "light",
    label: "Light mode",
    icon: LuSun,
    type: "default",
  },
  {
    name: "arc",
    label: "Your Arc Brower theme!",
    icon: ArcIcon,
    type: "recommended",
  },
  {
    name: "christmas",
    label: "Oh Oh Oh! Merry Christmas",
    icon: LuCandyCane,
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
] satisfies {
  name: string;
  label: string;
  icon: FC;
  type: (typeof THEME_TYPES)[number]["name"];
}[];

export type ThemeName = (typeof THEMES)[number]["name"];
