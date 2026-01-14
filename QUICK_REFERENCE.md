# QUICK REFERENCE GUIDE

## ⚡ INSTALLATION (Copy & Paste)

```bash
cd facebook-automation
npm install
npx playwright install chromium
```

## ▶️ RUN TESTS (Choose One)

| Command | Mode | Best For |
|---------|------|----------|
| `npm test` | Headless | CI/CD, Automated runs |
| `npm run test:headed` | Browser visible | Visual debugging |
| `npm run test:ui` | Interactive UI | Test exploration |
| `npm run test:debug` | Inspector | Step-by-step debugging |
| `npm run test:report` | HTML Report | Review results |

## 🧪 RUN SPECIFIC TESTS

```bash
# Single test
npx playwright test -g "TC_FN_001"

# Pattern matching
npx playwright test --grep "First Name"

# Specific file
npx playwright test tests/specs/firstNameField.spec.ts

# List all tests
npx playwright test --list
```

## 📊 VIEW RESULTS

```bash
# Open HTML report
npm run test:report

# Files generated:
# - playwright-report/index.html
# - test-results/results.json
# - test-results/videos/ (on failure)
# - test-results/screenshots/ (on failure)
```

## 🏗️ PROJECT LAYOUT

```
facebook-automation/
├── src/pages/         → Page Objects (FacebookSignupPage.ts)
├── src/utils/         → Base classes, test data, helpers
├── tests/specs/       → Test files (firstNameField.spec.ts)
├── tests/fixtures.ts  → Test setup/teardown
├── playwright.config.ts
├── package.json
└── README.md
```

## 📝 TEST CASES AT A GLANCE

```
TC_FN_001 ✓ Valid First Name
TC_FN_002 ✓ First Name with Spaces
TC_FN_003 ✓ Special Characters (Negative)
TC_FN_004 ✓ Numbers in Name (Negative)
TC_FN_005 ✓ Empty Name (Negative)
TC_FN_006 ✓ Minimum Length (1 char)
TC_FN_007 ✓ Maximum Length Exceeded
TC_FN_008 ✓ Lowercase Letters
TC_FN_009 ✓ Mixed Case
TC_FN_010 ✓ Hyphenated Names
```

## 🔑 KEY FILES

| File | Purpose | Size |
|------|---------|------|
| FacebookSignupPage.ts | Page Object | 450+ lines |
| firstNameField.spec.ts | Tests | 300+ lines |
| testData.ts | Test Data | 200+ lines |
| basePage.ts | Base Class | 100+ lines |
| helpers.ts | Utilities | 150+ lines |

## 💡 COMMON PATTERNS

### Fill Form & Submit
```typescript
await signupPage.enterFirstName('John');
await signupPage.submitForm();
```

### Check Result
```typescript
const value = await signupPage.getFirstNameValue();
expect(value).toBe('John');
```

### Verify Error
```typescript
await signupPage.submitForm();
const hasErrors = await signupPage.hasErrorMessages();
expect(hasErrors).toBeTruthy();
```

## 🐛 QUICK TROUBLESHOOT

| Issue | Fix |
|-------|-----|
| `npm install` fails | `npm install --legacy-peer-deps` |
| Browser won't download | `npx playwright install chromium` |
| Tests timeout | Increase timeout in playwright.config.ts |
| Selectors not found | Update selectors in FacebookSignupPage.ts |
| Facebook page changed | Update selectors using DevTools |

## 📚 DOCUMENTATION FILES

1. **README.md** - Complete guide with all details
2. **EXECUTION_GUIDE.md** - Step-by-step with diagrams
3. **PROJECT_STRUCTURE.md** - Visual layout and statistics
4. **QUICK_REFERENCE.md** - This file!

## ⚙️ CONFIGURATION

**Base URL**: https://www.facebook.com  
**Browser**: Chromium  
**Timeout**: 30 seconds  
**Workers**: 1 (sequential)  
**Reporters**: HTML, JSON, List

## 🎯 PERFORMANCE TIPS

- Run headless (`npm test`) for speed
- Use `--grep` to run subsets
- Enable parallel mode in config for multiple files
- Use `--headed` only for debugging

## 📞 SUPPORT

1. Check README.md for detailed documentation
2. Review EXECUTION_GUIDE.md for step-by-step instructions
3. See test examples in firstNameField.spec.ts
4. Visit https://playwright.dev for Playwright docs

---

**Version**: 1.0.0 | **Date**: January 14, 2026 | **Status**: Ready ✅
