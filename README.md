# Facebook Signup Form Automation Framework

## Overview

This is a professional-grade test automation framework built with **Playwright** and **TypeScript**, implementing the **Page Object Model (POM)** design pattern. It automates the first 10 test cases from the Facebook Create Account form testing suite.

### Key Features

- ✅ **Page Object Model** for maintainability and scalability
- ✅ **Playwright Test** with TypeScript for type safety
- ✅ **Custom Fixtures** for setup/teardown management
- ✅ **Comprehensive Test Coverage** of first name field validation (TC_FN_001 to TC_FN_010)
- ✅ **No Hard-Coded Waits** - Uses intelligent waits and selectors
- ✅ **Strong Assertions** with Playwright's expect API
- ✅ **Test Reports** with screenshots and videos on failure
- ✅ **Reusable Utilities** for common operations

---

## Project Structure

```
facebook-automation/
├── src/
│   ├── pages/
│   │   └── FacebookSignupPage.ts      # Page object for signup form
│   └── utils/
│       ├── basePage.ts                 # Base page class with common methods
│       ├── testData.ts                 # Test data and scenarios
│       └── helpers.ts                  # Helper utilities
├── tests/
│   ├── fixtures.ts                     # Custom fixtures for tests
│   └── specs/
│       └── firstNameField.spec.ts      # Test specifications
├── playwright.config.ts                # Playwright configuration
├── tsconfig.json                       # TypeScript configuration
├── package.json                        # Project dependencies
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

---

## Prerequisites

- **Node.js** 16.0 or higher
- **npm** 7.0 or higher
- **Windows**, **macOS**, or **Linux**

---

## Installation

### 1. Clone/Navigate to Project

```bash
cd facebook-automation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

Or install only Chromium:

```bash
npx playwright install chromium
```

---

## Configuration

### Playwright Configuration (`playwright.config.ts`)

Key settings:

- **Base URL**: `https://www.facebook.com`
- **Browser**: Chromium
- **Parallel Execution**: Disabled (sequential runs)
- **Retries**: 2 on CI, 0 locally
- **Screenshots**: On failure only
- **Videos**: On failure only
- **Traces**: On first failure

Modify these settings as needed in `playwright.config.ts`.

---

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode (See Browser)

```bash
npm run test:headed
```

### Run Tests with UI Mode (Interactive)

```bash
npm run test:ui
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### View HTML Report

After running tests:

```bash
npm run test:report
```

### Run Specific Test File

```bash
npx playwright test tests/specs/firstNameField.spec.ts
```

### Run Specific Test

```bash
npx playwright test -g "TC_FN_001"
```

### Run Tests with Filtering

```bash
npx playwright test --grep "First Name"
```

---

## Test Coverage

### Automated Test Cases (First 10 from testcase.md)

| Test ID | Description | Type | Priority |
|---------|-------------|------|----------|
| TC_FN_001 | Valid First Name | Positive | High |
| TC_FN_002 | First Name with Spaces | Positive | Medium |
| TC_FN_003 | First Name with Special Characters | Negative | High |
| TC_FN_004 | First Name with Numbers | Negative | High |
| TC_FN_005 | Empty First Name | Negative | High |
| TC_FN_006 | First Name with Minimum Length (1 char) | Positive | Medium |
| TC_FN_007 | First Name Exceeds Maximum Length | Negative | Medium |
| TC_FN_008 | First Name with Lowercase Letters | Positive | Low |
| TC_FN_009 | First Name with Mixed Case | Positive | Low |
| TC_FN_010 | First Name with Hyphen | Positive | Medium |

---

## Framework Architecture

### Page Object Model (POM)

All page interactions are encapsulated in page classes:

```typescript
// src/pages/FacebookSignupPage.ts
export class FacebookSignupPage extends BasePage {
  // Locators
  private readonly firstNameInput = 'input[name="firstname"]';
  
  // Methods
  async enterFirstName(firstName: string): Promise<void> { ... }
  async getFirstNameValue(): Promise<string> { ... }
  // ... more methods
}
```

### Base Page

Common functionality shared across all pages:

```typescript
// src/utils/basePage.ts
export class BasePage {
  async navigateToSignup(): Promise<void> { ... }
  async fillTextField(selector: string, value: string): Promise<void> { ... }
  async isElementVisible(selector: string): Promise<boolean> { ... }
  // ... more methods
}
```

### Test Fixtures

Setup and teardown are managed via fixtures:

```typescript
// tests/fixtures.ts
export const test = base.extend<FacebookFixtures>({
  signupPage: async ({ page }, use) => {
    const signupPage = new FacebookSignupPage(page);
    await signupPage.navigateToSignupForm();
    await use(signupPage);
    // Cleanup
  },
});
```

### Test Implementation

Tests are clean and readable:

```typescript
// tests/specs/firstNameField.spec.ts
test('TC_FN_001: Should accept valid first name', async ({ signupPage }) => {
  // Arrange
  const firstName = testData.validFirstNames.standard;
  
  // Act
  await signupPage.enterFirstName(firstName);
  
  // Assert
  expect(await signupPage.getFirstNameValue()).toBe(firstName);
});
```

---

## Locators Strategy

The framework uses best practices for selecting elements:

1. **Role-based** (when available)
   ```typescript
   page.getByRole('button', { name: 'Sign up' })
   ```

2. **Label-based**
   ```typescript
   page.getByLabel('First name')
   ```

3. **Test ID** (if available)
   ```typescript
   page.getByTestId('signup-button')
   ```

4. **CSS Selectors** (fallback)
   ```typescript
   'input[name="firstname"]'
   ```

---

## Test Data

Test data is centralized in `src/utils/testData.ts`:

```typescript
export const testData = {
  validFirstNames: {
    standard: 'John',
    withSpace: 'Mary Jane',
    singleChar: 'A',
    // ...
  },
  invalidFirstNames: {
    withNumbers: 'John123',
    // ...
  },
  // ... more data
};
```

---

## Assertions

The framework uses Playwright's powerful assertion API:

```typescript
// Basic assertions
expect(value).toBe(expectedValue);
expect(value).toContain(substring);
expect(value).toMatch(/regex/);

// Element assertions
expect(await element.isVisible()).toBeTruthy();
expect(await element.isEnabled()).toBeTruthy();

// Text assertions
expect(await page.locator('selector')).toContainText('text');
```

---

## Best Practices Implemented

✅ **No Hard-Coded Waits**
- Uses `waitFor`, `isVisible`, smart waits

✅ **Centralized Selectors**
- All selectors in page objects

✅ **Reusable Methods**
- Common operations in BasePage
- Helper utilities for common tasks

✅ **Type Safety**
- Full TypeScript support
- Strong typing throughout

✅ **Scalability**
- Easy to extend with new pages
- Test data is separate from test logic
- Fixture-based setup/teardown

✅ **Maintainability**
- Clear test names matching test case IDs
- Descriptive comments
- AAA pattern (Arrange, Act, Assert)

✅ **Reporting**
- HTML reports with screenshots
- Video recordings on failure
- Test traces for debugging

---

## Extending the Framework

### Adding a New Page Object

```typescript
// src/pages/NewPage.ts
import { Page } from '@playwright/test';
import { BasePage } from '../utils/basePage';

export class NewPage extends BasePage {
  private readonly selector = 'locator';
  
  async doSomething(): Promise<void> {
    // Implementation
  }
}
```

### Adding New Tests

```typescript
// tests/specs/newFeature.spec.ts
import { test, expect } from '../fixtures';

test.describe('Feature Tests', () => {
  test('TC_XXX_001: Description', async ({ signupPage }) => {
    // Test implementation
  });
});
```

### Adding Test Data

Add to `src/utils/testData.ts`:

```typescript
export const testData = {
  // ... existing data
  newField: {
    validValue: 'value',
    invalidValue: 'bad',
  },
};
```

---

## Troubleshooting

### Tests Fail on Navigation

**Issue**: Page doesn't load properly
**Solution**: Check internet connection and Facebook URL accessibility

### Selectors Not Found

**Issue**: Element not found error
**Cause**: Facebook UI changed
**Solution**: Update selectors in page object using DevTools

### Timeout Errors

**Issue**: Elements taking too long to load
**Solution**: Increase timeout in `playwright.config.ts` or specific test

### Permission Issues on Windows

**Issue**: Cannot write to test-results
**Solution**: Run terminal as Administrator or check folder permissions

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## Performance Considerations

- **Sequential Execution**: Set to run one test at a time for consistency
- **Parallel Mode**: Can be enabled in `playwright.config.ts` for faster runs
- **Headless Mode**: Default for speed; use `--headed` for debugging

---

## Support & Documentation

- **Playwright Docs**: https://playwright.dev/
- **Test Best Practices**: https://playwright.dev/docs/best-practices
- **API Reference**: https://playwright.dev/docs/api/class-playwright

---

## License

MIT

---

## Version

Framework Version: 1.0.0
Created: January 14, 2026
Last Updated: January 14, 2026

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npm test

# Run in headed mode
npm run test:headed

# Run with UI
npm run test:ui

# Debug mode
npm run test:debug

# View report
npm run test:report

# Run specific test
npx playwright test -g "TC_FN_001"

# Update snapshots
npx playwright test --update-snapshots

# List all tests
npx playwright test --list
```

---

**Happy Testing! 🎭**
