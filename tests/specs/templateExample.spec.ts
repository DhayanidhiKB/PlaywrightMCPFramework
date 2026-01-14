import { test, expect } from '../fixtures';
import { testData } from '../../src/utils/testData';

/**
 * Test Suite: Surname/Last Name Field Validation
 * Maps to testcase.md TC_SN_001 through TC_SN_011
 * 
 * NOTE: This is an EXAMPLE template for extending the framework
 * These tests are NOT yet implemented but show the pattern to follow
 * 
 * Copy this file and modify for other form fields:
 * - DateOfBirth tests (TC_DOB_001-013)
 * - Gender tests (TC_GN_001-007)
 * - Email tests (TC_EMAIL_001-019)
 * - Password tests (TC_PWD_001-015)
 * - Form Submission tests (TC_SUBMIT_001-014)
 */

test.describe('Facebook Signup - Surname Field Tests [TEMPLATE EXAMPLE]', () => {
  /**
   * TC_SN_001 - Valid Surname
   * Description: Verify user can enter valid surname with alphabetic characters
   * Type: Positive | Priority: High
   * 
   * IMPLEMENTATION PATTERN:
   * 1. Get test data
   * 2. Perform action (enter surname)
   * 3. Retrieve result
   * 4. Assert with expect()
   */
  test('TC_SN_001: Should accept valid surname with alphabetic characters', async ({ signupPage }) => {
    // Arrange: Setup test data
    const surname = testData.validSurnames.standard; // 'Smith'

    // Act: Perform action
    await signupPage.enterSurname(surname);
    
    // Assert: Verify result
    const enteredValue = await signupPage.getSurnameValue();
    expect(enteredValue).toBe(surname);
    expect(await signupPage.isSurnameFieldVisible()).toBeTruthy();
  });

  /**
   * TC_SN_002 - Surname with Spaces
   * Description: Verify surname can contain spaces (compound surnames)
   * Type: Positive | Priority: Medium
   */
  test('TC_SN_002: Should accept surname with spaces for compound surnames', async ({ signupPage }) => {
    // Arrange
    const surname = testData.validSurnames.compound; // 'Van Der Berg'

    // Act
    await signupPage.enterSurname(surname);
    const enteredValue = await signupPage.getSurnameValue();

    // Assert
    expect(enteredValue).toBe(surname);
    expect(enteredValue).toContain(' ');
  });

  /**
   * TC_SN_003 - Surname with Special Characters
   * Description: Verify special characters validation in surname
   * Type: Negative | Priority: High
   */
  test('TC_SN_003: Should not accept special characters in surname', async ({ signupPage }) => {
    // Arrange
    const surname = testData.invalidSurnames.withSpecialChars;

    // Act
    await signupPage.enterSurname(surname);
    
    // Act: Try to submit to trigger validation
    await signupPage.fillSignupForm({
      firstName: 'John',
      surname: surname,
      day: '15',
      month: '3',
      year: '2000',
      email: 'test@example.com',
      password: 'Test1234',
    });
    await signupPage.submitForm();
    await signupPage.page.waitForTimeout(1000);

    // Assert
    const enteredValue = await signupPage.getSurnameValue();
    expect(enteredValue).toContain('@');
  });

  /**
   * TC_SN_009 - Surname with Hyphen
   * Description: Verify hyphenated surnames are accepted
   * Type: Positive | Priority: Medium
   */
  test('TC_SN_009: Should accept hyphenated surnames', async ({ signupPage }) => {
    // Arrange
    const surname = testData.validSurnames.hyphenated; // 'Garcia-Lopez'

    // Act
    await signupPage.enterSurname(surname);
    const enteredValue = await signupPage.getSurnameValue();

    // Assert
    expect(enteredValue).toBe(surname);
    expect(enteredValue).toContain('-');
  });

  /**
   * TC_SN_010 - Surname with Apostrophe
   * Description: Verify surnames with apostrophes are accepted
   * Type: Positive | Priority: Medium
   */
  test('TC_SN_010: Should accept surnames with apostrophes', async ({ signupPage }) => {
    // Arrange
    const surname = testData.validSurnames.withApostrophe; // "O'Brien"

    // Act
    await signupPage.enterSurname(surname);
    const enteredValue = await signupPage.getSurnameValue();

    // Assert
    expect(enteredValue).toBe(surname);
    expect(enteredValue).toContain("'");
  });
});

/**
 * TEMPLATE FOR ADDING MORE TEST SUITES
 * 
 * Follow this structure to add tests for other form fields:
 */

/*
// EXAMPLE: Date of Birth Tests
test.describe('Facebook Signup - Date of Birth Field Tests', () => {
  
  test('TC_DOB_001: Should accept valid date of birth', async ({ signupPage }) => {
    // Arrange
    const dob = testData.validDates.standard;
    
    // Act
    await signupPage.selectDay(dob.day);
    await signupPage.selectMonth(dob.month);
    await signupPage.selectYear(dob.year);
    
    // Assert
    expect(await signupPage.getSelectedDay()).toBe(dob.day);
    expect(await signupPage.getSelectedMonth()).toBe(dob.month);
    expect(await signupPage.getSelectedYear()).toBe(dob.year);
  });

  test('TC_DOB_002: Should validate minimum age (13 years)', async ({ signupPage }) => {
    // Arrange
    const minAgeDob = testData.validDates.minAge;
    
    // Act
    await signupPage.fillSignupForm({
      firstName: 'John',
      surname: 'Doe',
      day: minAgeDob.day,
      month: minAgeDob.month,
      year: minAgeDob.year,
      email: 'test@example.com',
      password: 'Test1234',
    });
    
    // Note: Actual age validation happens on submit
    // This would need server interaction
    
    // Assert
    expect(await signupPage.isSignupButtonEnabled()).toBeTruthy();
  });
});

// EXAMPLE: Gender Field Tests
test.describe('Facebook Signup - Gender Field Tests', () => {
  
  test('TC_GN_001: Should select Female gender', async ({ signupPage }) => {
    // Arrange & Act
    await signupPage.selectGender('Female');
    
    // Assert
    // Would need to verify radio button state
    const formVisible = await signupPage.isSignupFormDisplayed();
    expect(formVisible).toBeTruthy();
  });

  test('TC_GN_003: Should select Custom gender', async ({ signupPage }) => {
    // Arrange & Act
    await signupPage.selectGender('Custom');
    
    // Assert
    // Check if custom gender options appear (if implemented)
  });
});

// EXAMPLE: Email Field Tests
test.describe('Facebook Signup - Email Field Tests', () => {
  
  test('TC_EMAIL_001: Should accept valid email format', async ({ signupPage }) => {
    // Arrange
    const email = testData.emails.valid;
    
    // Act
    await signupPage.enterEmail(email);
    
    // Assert
    expect(await signupPage.getEmailValue()).toBe(email);
  });

  test('TC_EMAIL_008: Should reject email without @ symbol', async ({ signupPage }) => {
    // Arrange
    const email = testData.invalidEmails.missingAt;
    
    // Act
    await signupPage.enterEmail(email);
    await signupPage.submitForm();
    
    // Assert
    const hasErrors = await signupPage.hasErrorMessages();
    expect(hasErrors).toBeTruthy();
  });
});

// EXAMPLE: Password Field Tests
test.describe('Facebook Signup - Password Field Tests', () => {
  
  test('TC_PWD_001: Should accept strong password', async ({ signupPage }) => {
    // Arrange
    const password = testData.passwords.strong;
    
    // Act
    await signupPage.enterPassword(password);
    
    // Assert
    expect(await signupPage.getPasswordValue()).toBe(password);
  });

  test('TC_PWD_003: Should reject password less than 6 characters', async ({ signupPage }) => {
    // Arrange
    const password = testData.invalidPasswords.lessThanMinimum;
    
    // Act
    await signupPage.fillSignupForm({
      firstName: 'John',
      surname: 'Doe',
      day: '15',
      month: '3',
      year: '2000',
      email: 'test@example.com',
      password: password,
    });
    await signupPage.submitForm();
    
    // Assert
    const hasErrors = await signupPage.hasErrorMessages();
    expect(hasErrors).toBeTruthy();
  });
});

// EXAMPLE: Form Submission Tests
test.describe('Facebook Signup - Form Submission Tests', () => {
  
  test('TC_SUBMIT_001: Should successfully submit valid form', async ({ signupPage }) => {
    // Arrange
    const formData = {
      firstName: testData.validFirstNames.standard,
      surname: testData.validSurnames.standard,
      day: testData.validDates.standard.day,
      month: testData.validDates.standard.month,
      year: testData.validDates.standard.year,
      gender: 'Male',
      email: testData.emails.valid,
      password: testData.passwords.strong,
    };
    
    // Act
    await signupPage.submitSignup(formData);
    
    // Assert
    // Would verify successful account creation (redirect, confirmation, etc.)
    // This might require additional setup/verification
  });

  test('TC_SUBMIT_005: Should reject form with underage user', async ({ signupPage }) => {
    // Arrange
    const formData = {
      firstName: testData.validFirstNames.standard,
      surname: testData.validSurnames.standard,
      day: testData.invalidDates.underage.day,
      month: testData.invalidDates.underage.month,
      year: testData.invalidDates.underage.year,
      email: testData.emails.valid,
      password: testData.passwords.strong,
    };
    
    // Act
    await signupPage.fillSignupForm(formData);
    await signupPage.submitForm();
    
    // Assert
    const hasErrors = await signupPage.hasErrorMessages();
    expect(hasErrors).toBeTruthy();
  });
});
*/

/**
 * TESTING GUIDELINES FOR EXTENSION:
 * 
 * 1. Pattern to Follow
 *    - Arrange: Prepare test data
 *    - Act: Perform action
 *    - Assert: Verify result
 * 
 * 2. Use Test Data
 *    - Always reference testData.ts
 *    - Never hardcode values
 *    - Add new data to testData.ts if needed
 * 
 * 3. Page Object Methods
 *    - Use existing methods from FacebookSignupPage
 *    - Add new methods as needed
 *    - Keep methods focused and single-purpose
 * 
 * 4. Assertions
 *    - Use Playwright expect() API
 *    - Be specific: don't just check existence
 *    - Check for actual values, not just presence
 * 
 * 5. Error Handling
 *    - Wait for errors with waitForErrorMessage()
 *    - Check with hasErrorMessages()
 *    - Get text with getErrorMessagesText()
 * 
 * 6. Naming Conventions
 *    - Test ID: TC_XXX_NNN
 *    - Test Name: "TC_XXX_NNN: Clear description"
 *    - Methods: camelCase (enterFirstName, getErrorMessages)
 * 
 * 7. Comments
 *    - Add JSDoc for test suite descriptions
 *    - Comment test purpose and type
 *    - Mark negative tests clearly
 * 
 * 8. Skip Tests
 *    - Use test.skip() for tests not yet ready
 *    - Use test.only() to run single test
 *    - Use test.todo() for planned tests
 * 
 * READY TO IMPLEMENT?
 * 
 * 1. Copy this file and rename (e.g., surnameField.spec.ts)
 * 2. Update test suite describe block name
 * 3. Remove .skip() from tests
 * 4. Implement test methods following pattern
 * 5. Run: npx playwright test
 * 6. Review results and refine
 */
