import { defineConfig } from "vitest/config";
import baseConfig from "../../packages/vitest-config/src/vitest.config";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    environment: "jsdom",
  },
});
