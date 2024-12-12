import { THEMES } from "@/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useActiveTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isHydrated, setIsHydrated] = useState(false);
  const hydratedTheme = isHydrated ? theme : null;

  useEffect(() => {
    setIsHydrated(true);
  }, [theme]);

  return {
    theme: THEMES.find((t) => t.name === hydratedTheme),
    setTheme,
  };
};

export const useIsArc = () => {
  const [isArc, setIsArc] = useState(false);

  useEffect(() => {
    const detectArc = () => {
      const arcDetected = !!getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--arc-palette-title");
      if (arcDetected) {
        setIsArc(arcDetected);
        clearInterval(intervalId);
      }
    };

    // Try to detect arc every 500ms
    const intervalId = setInterval(detectArc, 500);

    // Stop detection after 5s
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return isArc;
};
