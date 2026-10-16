import { defineConfig } from "vite";

export default defineConfig({
  test: {
		globals: true, // Enable global variables like `describe` and `it` for tests
    environment: "jsdom", // simulate a browser environment for tests
		setupFiles: ["./src/setupTests.js"]
  },
});

