import { defineConfig } from "tsup";

export default defineConfig([
  // Types and schemas — no React, no "use client"
  {
    entry: {
      schemas: "src/schemas/index.ts",
      types: "src/types/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    external: ["zod"],
    clean: true,
  },
  // Client components — renderers and editors need "use client"
  {
    entry: {
      renderers: "src/renderers/index.ts",
      editors: "src/editors/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    banner: { js: '"use client";' },
    external: [
      "react",
      "react-dom",
      "zod",
      "@phosphor-icons/react",
      "@dnd-kit/core",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "@headlessui/react",
    ],
  },
  // Server components — no "use client"
  {
    entry: {
      server: "src/server/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    external: ["react", "react-dom"],
  },
  // Main barrel
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    external: [
      "react",
      "react-dom",
      "zod",
      "@phosphor-icons/react",
      "@dnd-kit/core",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "@headlessui/react",
    ],
  },
]);
