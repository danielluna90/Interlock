import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "vitest.config": "src/vitest.config.ts",
    "vitest.web.config": "src/vitest.web.config.ts",
    "vitest.react-native.config": "src/vitest.react-native.config.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["vitest", "vitest/config", "vite", "jsdom", "lightningcss"],
  noExternal: [],
});
