import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const IconForkIt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 164 114"
    fill="none"
    {...props}
    className={cn("w-4", props.className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M88.29 113.996V43.632L17.92 114 0 96.132l70.396-70.394H0V0h98l16 16v97.996z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M164 0h-25v69h25zM164 89h-25v25h25z" />
  </svg>
);
