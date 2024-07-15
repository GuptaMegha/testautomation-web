import { defineConfig, devices } from "@playwright/test";
import path from "path";
// Get the directory of the current module (playwright.config.ts)
const currentDir = process.cwd();

// Get the parent directory
const parentDir = path.dirname(currentDir);

// Construct the baseURL dynamically
const baseURL = `file://${path.join(parentDir, "index.html")}`;
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Maximum time one test can run for. */
  timeout: 90 * 1000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },

  /* Retry failed tests */
  retries: 1,

  /* Opt out of parallel tests */
  workers: 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["dot"], ["line"], ["html", { open: "never" }]],

  use: {
    screenshot: "on",
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    testIdAttribute: "data-test-id",
    // storageState: './LoginAuth.json',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "iphone",
      use: {
        ...devices["iPhone 14 Pro"],
      },
    },
    {
      name: "android",
      use: {
        ...devices["Pixel 5"],
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
});
