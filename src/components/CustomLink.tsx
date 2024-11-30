import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export const CustomLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        "text-link underline decoration-wavy decoration-1 decoration-link-decoration hover:decoration-current underline-offset-2 transition-all hover:underline-offset-4 hover:text-accent-text",
        props.className
      )}
    />
  );
};
