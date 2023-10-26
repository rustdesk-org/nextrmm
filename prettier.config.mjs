/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  tailwindConfig: "./tailwind.config.ts",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "(^react$|^react/(.*)$)",
    "(^next$|^next/(.*)$)",
    "<THIRD_PARTY_MODULES>",
    "^~/(.*)$",
    "^[./]",
  ],
};

export default config;
