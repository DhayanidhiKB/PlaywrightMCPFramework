import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1, // Retry failed tests once
  workers: process.env.CI ? 1 : 4,
  timeout: 120000, // 120 seconds per test (increased)
 reporter: [
    ['html', { outputFolder: 'test-results', open: 'always' }],
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    headless: false,
    baseURL: 'https://www.facebook.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 60000, // Increased
    actionTimeout: 15000, // Increased
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        // Add stealth and user agent options
        launchOptions: {
          args: [
            '--disable-blink-features=AutomationControlled',
            '--disable-features=TranslateUI',
            '--disable-sync'
          ]
        },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
    },
    {
      name: 'edge',
      use: { 
        ...devices['Desktop Edge'],
        channel: 'msedge',
        launchOptions: {
          args: [
            '--disable-blink-features=AutomationControlled',
            '--disable-features=TranslateUI',
            '--disable-sync',
            '--no-first-run',
            '--no-default-browser-check'
          ]
        },
      },
    },
  ],

  webServer: undefined,
});
