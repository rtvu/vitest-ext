import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)']
  },
});
