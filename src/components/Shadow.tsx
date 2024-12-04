"use client";

import { useActiveTheme } from "@/lib/theme";
import Image from "next/image";

export const Shadow = () => {
  const { theme } = useActiveTheme();

  if (theme?.name !== "miami") return null;

  return (
    <Image
      className="fixed min-w-[500px] pointer-events-none inset-0 object-contain object-left-top z-10 opacity-10 -scale-x-100"
      src="/shadow-palm-tree.png"
      alt=""
      width={5000}
      height={2810}
      sizes="100vw"
    />
  );
};
