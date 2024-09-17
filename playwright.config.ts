import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  outputDir: 'tests/outputs/',
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'tests/outputs/reports/' }]],
  snapshotDir: 'tests/expected_screenshots',
  snapshotPathTemplate: '{snapshotDir}/{testFilePath}/{testName}{ext}',
  expect: {
    toHaveScreenshot: { maxDiffPixels: 0, animations: "disabled" },
  },
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], isMobile: false },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], isMobile: false },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], isMobile: false },
    },
    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
      ignoreSnapshots: true,
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
      ignoreSnapshots: true,
    },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});
