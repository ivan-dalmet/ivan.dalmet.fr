import { Theme } from "@/components/ThemeSwitcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useActiveTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isHydrated, setIsHydrated] = useState(false);
  const hydratedTheme = isHydrated ? theme : null;

  useEffect(() => {
    setIsHydrated(true);
  }, [theme]);

  return { theme: hydratedTheme as Theme, setTheme };
};
