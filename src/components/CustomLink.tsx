import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export const CustomLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        "text-link underline decoration-link-decoration decoration-wavy decoration-1 underline-offset-2 transition-all hover:text-accent-text hover:decoration-current hover:underline-offset-4",
        props.className,
      )}
    />
  );
};
