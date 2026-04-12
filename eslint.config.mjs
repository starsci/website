import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: ["src/payload-types.ts", "src/app/(payload)/admin/importMap.js"],
  },
];

export default eslintConfig;
