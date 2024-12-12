"use client";

import { useActiveTheme } from "@/lib/theme";
import Image from "next/image";

export const Shadow = () => {
  const { theme } = useActiveTheme();

  if (theme?.name !== "miami") return null;

  return (
    <Image
      className="pointer-events-none fixed inset-0 z-10 min-w-[500px] -scale-x-100 object-contain object-left-top opacity-10"
      src="/shadow-palm-tree.png"
      alt=""
      width={5000}
      height={2810}
      sizes="100vw"
    />
  );
};
