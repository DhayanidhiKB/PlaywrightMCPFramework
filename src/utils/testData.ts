/**
 * Test data for Facebook signup form automation
 */

export const testData = {
  // Valid first names
  validFirstNames: {
    standard: 'John',
    withSpace: 'Mary Jane',
    singleChar: 'A',
    lowercase: 'john',
    mixedCase: 'JoHn',
    hyphenated: 'Jean-Paul',
  },

  // Invalid first names
  invalidFirstNames: {
    withNumbers: 'John123',
    withSpecialChars: 'John@123',
    withLeadingSpace: ' John',
    withTrailingSpace: 'John ',
    exceedsMaxLength: 'A'.repeat(51),
    empty: '',
  },

  // Valid surnames
  validSurnames: {
    standard: 'Smith',
    compound: 'Van Der Berg',
    singleChar: 'S',
    lowercase: 'smith',
    mixedCase: 'SmITh',
    hyphenated: 'Garcia-Lopez',
    withApostrophe: "O'Brien",
  },

  // Invalid surnames
  invalidSurnames: {
    withNumbers: 'Smith123',
    withSpecialChars: 'Smith@123',
    empty: '',
    exceedsMaxLength: 'S'.repeat(51),
  },

  // Valid dates (DOB)
  validDates: {
    standard: { day: '15', month: 'Mar', year: '2000' },
    minAge: { day: '14', month: 'Jan', year: '2013' },
    leapYear: { day: '29', month: 'Feb', year: '2000' },
  },

  // Invalid dates
  invalidDates: {
    underage: { day: '14', month: 'Jan', year: '2014' },
    future: { day: '15', month: 'Feb', year: '2026' },
    today: { day: '14', month: 'Jan', year: '2026' },
    nonLeapYear: { day: '29', month: 'Feb', year: '2001' },
  },

  // Email addresses
  emails: {
    valid: 'testuser@example.com',
    withSubdomain: 'user@mail.example.co.uk',
    withPlus: 'user+tag@example.com',
    withDot: 'user.name@example.com',
    withNumbers: 'user123@example.com',
    uppercase: 'User@Example.COM',
  },

  // Invalid emails
  invalidEmails: {
    missingAt: 'userexample.com',
    missingDomain: 'user@',
    missingLocal: '@example.com',
    withSpace: 'user name@example.com',
  },

  // Passwords
  passwords: {
    strong: 'MyPass123!',
    minLength: 'Pass12',
    lettersOnly: 'Password',
    numbersOnly: '123456',
    withSpecial: '!@#$%^',
    withSpace: 'Pass 123',
    longPassword: 'A'.repeat(100) + '123',
    unicode: 'Pass@123™',
  },

  // Invalid passwords
  invalidPasswords: {
    lessThanMinimum: 'Pass1',
    empty: '',
  },

  // Gender options
  genders: {
    female: 'Female',
    male: 'Male',
    custom: 'Custom',
  },
};

/**
 * Test scenarios combining multiple fields
 */
export const testScenarios = {
  validRegistration: {
    firstName: testData.validFirstNames.standard,
    surname: testData.validSurnames.standard,
    dateOfBirth: testData.validDates.standard,
    gender: testData.genders.male,
    email: testData.emails.valid,
    password: testData.passwords.strong,
  },

  invalidRegistration: {
    firstName: testData.invalidFirstNames.withNumbers,
    surname: testData.invalidSurnames.withSpecialChars,
    dateOfBirth: testData.invalidDates.underage,
    gender: '',
    email: testData.invalidEmails.missingAt,
    password: testData.invalidPasswords.lessThanMinimum,
  },
};
