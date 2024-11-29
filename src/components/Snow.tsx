"use client";

import { useActiveTheme } from "@/lib/theme";
import Snowfall from "react-snowfall";

export const Snow = () => {
  const { theme } = useActiveTheme();
  if (theme !== "christmas") return null;
  return (
    <Snowfall
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
      }}
    />
  );
};
