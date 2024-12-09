import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const IconArc = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} className={cn("w-4", props.className)}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      color="currentColor"
    >
      <path d="M13.506 13.602a6.4 6.4 0 0 1-1.904.287A6.34 6.34 0 0 1 5.93 10.43a1.824 1.824 0 0 0-2.425-.801a1.763 1.763 0 0 0-.816 2.383c1.626 3.215 5.004 5.431 8.913 5.431c1.245 0 2.437-.225 3.536-.635m3.1-1.858a9.7 9.7 0 0 0 3.25-6.2c.11-.975-.606-1.854-1.599-1.962s-1.887.596-1.997 1.572a6.13 6.13 0 0 1-1.37 3.22" />
      <path d="M11.547 4c.686 0 1.312.38 1.619.983l6.333 12.444a1.764 1.764 0 0 1-.81 2.385c-.893.44-1.98.083-2.427-.795l-4.715-9.264l-1.943 3.82a6.34 6.34 0 0 1-2.99-2.076l3.315-6.514A1.81 1.81 0 0 1 11.547 4M6.833 19.017a1.825 1.825 0 0 1-2.428.795a1.763 1.763 0 0 1-.81-2.385l1.295-2.544a10 10 0 0 0 3.084 1.89z" />
    </g>
  </svg>
);
