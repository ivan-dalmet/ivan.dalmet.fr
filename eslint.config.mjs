import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    // These react-compiler rules are newly bundled in eslint-config-next 16 and
    // were not enforced under the previous (Next 15) config. They flag a few
    // intentional, working patterns (latest-ref mirror, an SSR hydration flag,
    // and a DOM style reset in an effect cleanup). Disabled to keep the lint
    // behavior consistent with before the dependency upgrade.
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
    },
  },
];

export default eslintConfig;
