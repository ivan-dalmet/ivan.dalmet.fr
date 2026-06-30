import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
export const IconPeinture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    {...props}
    className={cn("w-4", props.className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 119.998L37 119.998L60 65.9982L83 119.998L103 119.998L71 48.9982H49L17 119.998Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 17L17 92H2.72868e-07L0 0L120 2.83164e-06V92H103V17L17 17Z"
      clipRule="evenodd"
    />
  </svg>
);
