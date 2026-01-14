import { test as base, Page } from '@playwright/test';
import { FacebookSignupPage } from '../src/pages/FacebookSignupPage';

/**
 * Custom fixtures for Facebook signup tests
 */

type FacebookFixtures = {
  signupPage: FacebookSignupPage;
};

/**
 * Extend Playwright test with custom fixtures
 */
export const test = base.extend<FacebookFixtures>({
  signupPage: async ({ page }, use) => {
    const signupPage = new FacebookSignupPage(page);
    // Setup: Navigate to signup form
    try {
      await signupPage.navigateToSignupForm();
    } catch (error) {
      console.error('Failed to navigate to signup form:', error);
      throw error;
    }
    // Use the fixture
    await use(signupPage);
    // Teardown: Can add cleanup if needed
  },
});

export { expect } from '@playwright/test';
