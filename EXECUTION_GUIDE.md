# Playwright Facebook Automation Framework
## Complete Execution Guide

---

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [File Descriptions](#file-descriptions)
4. [Test Cases Mapped](#test-cases-mapped)
5. [Execution Instructions](#execution-instructions)
6. [Framework Architecture](#framework-architecture)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites Check
```bash
# Check Node.js version (need 16+)
node --version

# Check npm version (need 7+)
npm --version
```

### Installation (3 Steps)

```bash
# Step 1: Navigate to project directory
cd facebook-automation

# Step 2: Install dependencies
npm install

# Step 3: Install Playwright browsers
npx playwright install chromium
```

### Run Tests

```bash
# Run all 10 test cases
npm test

# View results
npm run test:report
```

---

## 📁 Project Structure

```
facebook-automation/
│
├── src/
│   ├── pages/
│   │   └── FacebookSignupPage.ts        # Page Object for signup form
│   │                                     # Contains: 30+ methods, selectors
│   │
│   └── utils/
│       ├── basePage.ts                   # Base class for all pages
│       │                                 # Contains: 12 common methods
│       ├── testData.ts                   # Centralized test data
│       │                                 # Contains: Valid/invalid test data sets
│       └── helpers.ts                    # Helper utilities
│                                         # Contains: 12 utility functions
│
├── tests/
│   ├── fixtures.ts                       # Custom Playwright fixtures
│   │                                     # Contains: signupPage fixture
│   │
│   └── specs/
│       └── firstNameField.spec.ts        # Test specifications
│                                         # Contains: 10 test cases (TC_FN_001-010)
│
├── playwright.config.ts                  # Playwright configuration
│                                         # Settings: Browser, timeouts, reporters
│
├── tsconfig.json                         # TypeScript configuration
│                                         # Settings: Target, strict mode, types
│
├── package.json                          # Dependencies and scripts
│                                         # Contains: Playwright, TypeScript, scripts
│
├── README.md                             # Complete documentation
│
├── setup.sh                              # Setup automation script (Linux/Mac)
│
├── EXECUTION_GUIDE.md                    # This file
│
└── .gitignore                            # Git exclusions


```

---

## 📄 File Descriptions

### Core Framework Files

#### `package.json`
**Purpose**: NPM package configuration and dependencies
**Key Content**:
- Dependencies: @playwright/test, typescript
- Scripts: test, test:headed, test:debug, test:ui, test:report, install-browsers
- Metadata: name, version, description

**Key Command**:
```bash
npm install  # Installs all dependencies from package.json
```

---

#### `playwright.config.ts`
**Purpose**: Playwright configuration and test execution settings
**Key Settings**:
- `testDir`: ./tests/specs (where tests are located)
- `baseURL`: https://www.facebook.com
- `fullyParallel`: false (sequential execution)
- `workers`: 1 (single worker)
- `reporter`: html, list, json
- `use.trace`: on-first-retry (trace on failure)
- `use.screenshot`: only-on-failure
- `use.video`: retain-on-failure

**Output Location**: test-results/ and playwright-report/

---

#### `tsconfig.json`
**Purpose**: TypeScript compiler configuration
**Key Settings**:
- Target: ES2020 (modern JavaScript)
- Module: commonjs (module system)
- Strict: true (strict type checking)
- OutDir: ./dist (compiled output)

---

### Source Files (src/)

#### `src/utils/basePage.ts`
**Purpose**: Base page class with common methods
**Key Methods** (12 total):
- `navigateToSignup()` - Navigate to Facebook signup
- `navigateToHome()` - Navigate to home page
- `fillTextField(selector, value)` - Fill text input
- `getText(selector)` - Get element text
- `isElementVisible(selector)` - Check visibility
- `waitForElement(selector)` - Wait for element
- `clickElement(selector)` - Click element
- `getCurrentUrl()` - Get current URL
- `getPageTitle()` - Get page title
- `reloadPage()` - Reload page
- `waitForNavigation()` - Wait for navigation
- And more...

**Usage**: Extended by FacebookSignupPage class

---

#### `src/utils/testData.ts`
**Purpose**: Centralized test data for all tests
**Key Data Structures**:

```typescript
testData = {
  validFirstNames: {
    standard: 'John',
    withSpace: 'Mary Jane',
    singleChar: 'A',
    lowercase: 'john',
    mixedCase: 'JoHn',
    hyphenated: 'Jean-Paul',
  },
  
  invalidFirstNames: {
    withNumbers: 'John123',
    withSpecialChars: 'John@123',
    empty: '',
    exceedsMaxLength: 'A'.repeat(51),
    // ... more
  },
  
  // Similar structures for:
  // - validSurnames
  // - invalidSurnames
  // - emails
  // - passwords
  // - genders
  // - dates
}
```

**Usage**: Imported in test specs to avoid hardcoded values

---

#### `src/utils/helpers.ts`
**Purpose**: Reusable helper functions
**Key Functions** (12 total):
- `getErrorMessage(page, selector)` - Get error text
- `waitForElementToDisappear(page, selector)` - Wait for disappear
- `getElementCount(page, selector)` - Count elements
- `getFieldValue(page, selector)` - Get input value
- `clearField(page, selector)` - Clear field
- `typeSlowly(page, selector, text)` - Type slowly for events
- `isFieldRequired(page, selector)` - Check required attribute
- `getAccessibleName(page, selector)` - Get aria-label
- `takeScreenshot(page, filename)` - Take screenshot
- And more...

**Usage**: Called from test specs for common operations

---

#### `src/pages/FacebookSignupPage.ts`
**Purpose**: Page Object Model for Facebook signup form
**Key Components**:

**Locators** (Form Field Selectors):
```typescript
private readonly firstNameInput = 'input[name="firstname"]';
private readonly surnameInput = 'input[name="lastname"]';
private readonly dayDropdown = 'select[name="birthday_day"]';
private readonly monthDropdown = 'select[name="birthday_month"]';
private readonly yearDropdown = 'select[name="birthday_year"]';
private readonly femaleRadio = 'input[value="1"]';
private readonly maleRadio = 'input[value="2"]';
private readonly customRadio = 'input[value="-1"]';
private readonly emailInput = 'input[name="reg_email__"]';
private readonly passwordInput = 'input[name="reg_passwd__"]';
private readonly signupButton = 'button[name="websubmit"]';
```

**Key Methods** (30+ total):
```typescript
// Navigation & Setup
async navigateToSignupForm()
async isSignupFormDisplayed()

// Input Methods
async enterFirstName(firstName: string)
async enterSurname(surname: string)
async selectDay(day: string)
async selectMonth(month: string)
async selectYear(year: string)
async selectGender(gender: 'Female' | 'Male' | 'Custom')
async enterEmail(email: string)
async enterPassword(password: string)

// Retrieval Methods
async getFirstNameValue(): Promise<string>
async getSurnameValue(): Promise<string>
async getEmailValue(): Promise<string>
async getPasswordValue(): Promise<string>

// Validation Methods
async isFirstNameFieldVisible(): Promise<boolean>
async isSurnameFieldVisible(): Promise<boolean>
async isSignupButtonEnabled(): Promise<boolean>

// Error Handling
async waitForErrorMessage(timeout)
async hasErrorMessages(): Promise<boolean>
async getErrorMessagesText(): Promise<string[]>

// Form Submission
async fillSignupForm(formData)
async submitForm()
async submitSignup(formData)

// Utility Methods
async clearFirstNameField()
async focusFirstNameField()
async getFirstNamePlaceholder()
```

**Extends**: BasePage class

---

### Test Files (tests/)

#### `tests/fixtures.ts`
**Purpose**: Custom Playwright fixtures for test setup/teardown
**Key Content**:
```typescript
// Custom fixture: signupPage
export const test = base.extend<FacebookFixtures>({
  signupPage: async ({ page }, use) => {
    // SETUP: Create page object
    const signupPage = new FacebookSignupPage(page);
    
    // SETUP: Navigate to signup form
    await signupPage.navigateToSignupForm();
    
    // USE: Pass to test
    await use(signupPage);
    
    // TEARDOWN: Cleanup if needed
  },
});
```

**Usage**: Imported in test specs
```typescript
test('test name', async ({ signupPage }) => {
  // signupPage is automatically setup
});
```

---

#### `tests/specs/firstNameField.spec.ts`
**Purpose**: Test specifications for first name field validation
**Contains**: 10 test cases (TC_FN_001 to TC_FN_010)
**Size**: ~300 lines
**Coverage**: 
- Valid inputs
- Invalid inputs
- Edge cases
- Format validation

---

## 🧪 Test Cases Mapped

### TC_FN_001 ✓
**Title**: Should accept valid first name with alphabetic characters
**Type**: Positive | **Priority**: High
**Test File**: tests/specs/firstNameField.spec.ts (Line ~20-30)
**Data**: testData.validFirstNames.standard = 'John'
**Assertion**: enteredValue === 'John'

### TC_FN_002 ✓
**Title**: Should accept first name with spaces for compound names
**Type**: Positive | **Priority**: Medium
**Data**: testData.validFirstNames.withSpace = 'Mary Jane'
**Assertion**: enteredValue.includes(' ')

### TC_FN_003 ✓
**Title**: Should not accept special characters in first name
**Type**: Negative | **Priority**: High
**Data**: testData.invalidFirstNames.withSpecialChars = 'John@123'
**Assertion**: Form submission, error validation

### TC_FN_004 ✓
**Title**: Should not accept numbers in first name
**Type**: Negative | **Priority**: High
**Data**: testData.invalidFirstNames.withNumbers = 'John123'
**Assertion**: /\d/ regex match

### TC_FN_005 ✓
**Title**: Should show error when first name is empty on submission
**Type**: Negative | **Priority**: High
**Data**: testData.invalidFirstNames.empty = ''
**Assertion**: hasErrorMessages() === true

### TC_FN_006 ✓
**Title**: Should accept single character first name
**Type**: Positive | **Priority**: Medium
**Data**: testData.validFirstNames.singleChar = 'A'
**Assertion**: enteredValue.length === 1

### TC_FN_007 ✓
**Title**: Should handle first name exceeding maximum length
**Type**: Negative | **Priority**: Medium
**Data**: testData.invalidFirstNames.exceedsMaxLength = 'A'.repeat(51)
**Assertion**: length <= 50

### TC_FN_008 ✓
**Title**: Should accept lowercase letters in first name
**Type**: Positive | **Priority**: Low
**Data**: testData.validFirstNames.lowercase = 'john'
**Assertion**: /^[a-z]+$/ regex match

### TC_FN_009 ✓
**Title**: Should accept mixed case first name
**Type**: Positive | **Priority**: Low
**Data**: testData.validFirstNames.mixedCase = 'JoHn'
**Assertion**: /[A-Z]/ and /[a-z]/ match

### TC_FN_010 ✓
**Title**: Should accept hyphenated first names
**Type**: Positive | **Priority**: Medium
**Data**: testData.validFirstNames.hyphenated = 'Jean-Paul'
**Assertion**: enteredValue.includes('-')

---

## ▶️ Execution Instructions

### Method 1: Using npm Scripts (RECOMMENDED)

```bash
# Navigate to project
cd facebook-automation

# Install dependencies
npm install

# Install browsers
npx playwright install chromium

# Run all 10 tests
npm test

# View HTML report
npm run test:report
```

### Method 2: Run Tests in Headed Mode (See Browser)

```bash
npm run test:headed
```

**What you'll see**:
- Browser window opens
- Tests run one by one
- Form fields get filled
- Assertions executed
- Browser closes after tests

### Method 3: Run Tests with Interactive UI

```bash
npm run test:ui
```

**Features**:
- Interactive test explorer
- Visual test execution
- Ability to pause/step through
- Browser DevTools integration

### Method 4: Debug Mode

```bash
npm run test:debug
```

**Features**:
- Playwright Inspector opens
- Step through tests
- Inspect page state
- Very useful for fixing issues

### Method 5: Run Specific Test

```bash
# Run single test by ID
npx playwright test -g "TC_FN_001"

# Run all tests matching pattern
npx playwright test --grep "First Name"

# Run specific test file
npx playwright test tests/specs/firstNameField.spec.ts
```

### Method 6: View Test Report

```bash
npm run test:report
```

**Report Contents**:
- Test results summary
- Pass/fail status for each test
- Screenshots of failures
- Video recordings of failures
- Execution time
- Error details

---

## 🏗️ Framework Architecture

### Design Pattern: Page Object Model (POM)

```
Test Specs (firstNameField.spec.ts)
         ↓
   Uses Fixtures
         ↓
FacebookSignupPage (Page Object)
         ↓
    Extends
         ↓
    BasePage
         ↓
  Playwright Page
```

### Flow Diagram

```
┌─────────────────────────────────┐
│   Test Specification File       │
│  (firstNameField.spec.ts)       │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│   Test Fixtures                 │
│   (fixtures.ts)                 │
│   - Setup signupPage            │
│   - Navigate to form            │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  FacebookSignupPage             │
│  - enterFirstName()             │
│  - getFirstNameValue()          │
│  - hasErrorMessages()           │
│  - 30+ methods                  │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│     BasePage                    │
│  - navigateToSignup()           │
│  - fillTextField()              │
│  - isElementVisible()           │
│  - 12 common methods            │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│   Playwright Page API           │
│   - fill, click, select, etc.   │
└─────────────────────────────────┘
```

### Data Flow

```
testData.ts (Centralized Test Data)
    ↓
Test Specs (Arrange)
    ↓
FacebookSignupPage Methods (Act)
    ↓
Assertions (Assert)
    ↓
Test Report (Results)
```

---

## 🔍 Locator Strategy

### Locator Selection Order (Priority)

1. **Role-based** (Best)
   ```typescript
   page.getByRole('button', { name: 'Sign up' })
   ```

2. **Label-based**
   ```typescript
   page.getByLabel('First name')
   ```

3. **Test ID** (if added to HTML)
   ```typescript
   page.getByTestId('firstname-input')
   ```

4. **Placeholder**
   ```typescript
   page.getByPlaceholder('First name')
   ```

5. **CSS Selector** (Fallback)
   ```typescript
   page.locator('input[name="firstname"]')
   ```

### Current Implementation

All tests use **CSS Selectors** (Level 5) which are reliable on Facebook's static form elements.

---

## 📊 Assertion Patterns

### Pattern 1: Value Assertion
```typescript
const value = await signupPage.getFirstNameValue();
expect(value).toBe('John');
```

### Pattern 2: Visibility Assertion
```typescript
const visible = await signupPage.isFirstNameFieldVisible();
expect(visible).toBeTruthy();
```

### Pattern 3: Error Assertion
```typescript
await signupPage.submitForm();
const hasErrors = await signupPage.hasErrorMessages();
expect(hasErrors).toBeTruthy();
```

### Pattern 4: Content Assertion
```typescript
expect('John123').toMatch(/\d/);
expect('Mary Jane').toContain(' ');
```

---

## 🐛 Troubleshooting

### Issue 1: npm install fails

**Error**: `npm ERR! code ERESOLVE`

**Solution**:
```bash
npm install --legacy-peer-deps
# OR
npm install --force
```

---

### Issue 2: Playwright install fails

**Error**: `Failed to download Chromium`

**Solution**:
```bash
# Clear cache
rm -rf ~/.cache/ms-playwright

# Reinstall
npx playwright install chromium
```

---

### Issue 3: Tests timeout

**Error**: `Timeout 30000ms exceeded`

**Solution**:
Edit `playwright.config.ts`:
```typescript
use: {
  navigationTimeout: 30000,
  actionTimeout: 10000,
  timeout: 30000,
}
```

---

### Issue 4: Selectors not found

**Error**: `Error: locator.fill: Target page, context or browser has been closed`

**Solution**:
- Check if Facebook URL is accessible
- Verify element selectors using browser DevTools
- Update selectors if Facebook UI changed

---

### Issue 5: Tests pass locally but fail in CI

**Cause**: Timing/network issues

**Solution**:
```typescript
// Add intelligent waits
await signupPage.page.waitForLoadState('networkidle');
await signupPage.waitForElement(selector);
```

---

## 📈 Test Execution Checklist

- [ ] Node.js 16+ installed
- [ ] Navigated to facebook-automation directory
- [ ] Ran `npm install`
- [ ] Ran `npx playwright install chromium`
- [ ] Internet connection active
- [ ] Facebook website accessible (https://www.facebook.com)
- [ ] Ran `npm test`
- [ ] All 10 tests pass
- [ ] Viewed HTML report with `npm run test:report`

---

## 🎯 Next Steps

### Extending Framework
1. Add more test specs (TC_SN_001, TC_DOB_001, etc.)
2. Create page objects for other pages (Login, Recovery, etc.)
3. Add API layer for user creation
4. Implement data-driven testing

### Advanced Features
1. Add parallel execution
2. Implement custom reporters
3. Add integration with test management tools
4. Setup CI/CD pipeline
5. Add performance testing

---

## 📚 Resources

- **Playwright Documentation**: https://playwright.dev
- **Playwright API**: https://playwright.dev/docs/api/class-playwright
- **Best Practices**: https://playwright.dev/docs/best-practices
- **GitHub**: https://github.com/microsoft/playwright

---

**Framework Created**: January 14, 2026
**Version**: 1.0.0
**Test Cases**: 10 (TC_FN_001 to TC_FN_010)
**Status**: Ready to Execute ✓

---

**Questions?** Check README.md or review test files for examples.
