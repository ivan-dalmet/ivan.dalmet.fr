import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export const CustomLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        "text-highlight underline decoration-wavy decoration-1 decoration-gray-400 dark:decoration-gray-500 hover:decoration-current dark:hover:decoration-current underline-offset-2 transition-all hover:underline-offset-4 hover:text-accentText",
        props.className
      )}
    />
  );
};
