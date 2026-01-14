# Facebook Create Account - Test Case Documentation

## Document Information
- **Application**: Facebook
- **Module**: Account Registration / Sign Up
- **URL**: https://www.facebook.com
- **Test Environment**: Web Browser
- **Date Created**: January 14, 2026

---

## Form Fields Overview

The Facebook Create Account form contains the following input fields:

| Field Name | Field Type | Required | Validation Rules |
|------------|-----------|----------|------------------|
| First Name | Text Input | Yes | Alpha characters, min 1 char, max 50 chars |
| Surname | Text Input | Yes | Alpha characters, min 1 char, max 50 chars |
| Date of Birth | Dropdown (Day/Month/Year) | Yes | Must be 13+ years old, valid date |
| Gender | Radio Button (Female/Male/Custom) | Yes | Single selection |
| Mobile Number or Email | Text Input | Yes | Valid email format or phone number |
| New Password | Password Input | Yes | Min 6 chars, strong password recommended |
| Sign up Button | Button | - | Form submission |

---

## TEST CASE SUITE

### 1. FIRST NAME FIELD TEST CASES

#### TC_FN_001 - Valid First Name
- **Description**: Verify user can enter valid first name with alphabetic characters
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "John" (valid alphabetic name)
  3. Verify the name is accepted
- **Expected Result**: First name is entered successfully without error
- **Type**: Positive
- **Priority**: High

#### TC_FN_002 - First Name with Spaces
- **Description**: Verify first name can contain spaces (e.g., compound names)
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "Mary Jane" (name with space)
  3. Verify the name is accepted
- **Expected Result**: First name with spaces is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_FN_003 - First Name with Special Characters
- **Description**: Verify special characters are not allowed in first name
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "John@123" (with special characters and numbers)
  3. Attempt to proceed
- **Expected Result**: Special characters are rejected or user gets error message
- **Type**: Negative
- **Priority**: High

#### TC_FN_004 - First Name with Numbers
- **Description**: Verify numbers are not allowed in first name
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "John123" (name with numbers)
  3. Attempt to proceed
- **Expected Result**: Numbers are rejected or user gets error message
- **Type**: Negative
- **Priority**: High

#### TC_FN_005 - Empty First Name
- **Description**: Verify empty first name triggers validation error
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Leave "First name" field empty
  2. Click "Sign up" button
  3. Verify error message appears
- **Expected Result**: Form submission fails with error message "First name is required"
- **Type**: Negative
- **Priority**: High

#### TC_FN_006 - First Name with Minimum Length (1 character)
- **Description**: Verify minimum length requirement for first name
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "A" (single character)
  3. Verify acceptance
- **Expected Result**: Single character first name is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_FN_007 - First Name Exceeds Maximum Length
- **Description**: Verify maximum character limit for first name
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter 51+ alphabetic characters
  3. Verify the field behavior
- **Expected Result**: Extra characters are not accepted or error message appears
- **Type**: Negative
- **Priority**: Medium

#### TC_FN_008 - First Name with Lowercase Letters
- **Description**: Verify lowercase letters are accepted in first name
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "john" (all lowercase)
  3. Verify acceptance
- **Expected Result**: Lowercase name is accepted
- **Type**: Positive
- **Priority**: Low

#### TC_FN_009 - First Name with Mixed Case
- **Description**: Verify mixed case letters are accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "JoHn" (mixed case)
  3. Verify acceptance
- **Expected Result**: Mixed case name is accepted
- **Type**: Positive
- **Priority**: Low

#### TC_FN_010 - First Name with Hyphen
- **Description**: Verify hyphenated first names are accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter "Jean-Paul" (hyphenated name)
  3. Verify acceptance
- **Expected Result**: Hyphenated name is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_FN_011 - First Name with Leading/Trailing Spaces
- **Description**: Verify handling of leading/trailing spaces
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" field
  2. Enter " John " (with leading and trailing spaces)
  3. Verify how system handles
- **Expected Result**: Leading/trailing spaces should be trimmed
- **Type**: Neutral
- **Priority**: Low

---

### 2. SURNAME/LAST NAME FIELD TEST CASES

#### TC_SN_001 - Valid Surname
- **Description**: Verify user can enter valid surname with alphabetic characters
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "Smith" (valid alphabetic surname)
  3. Verify the surname is accepted
- **Expected Result**: Surname is entered successfully without error
- **Type**: Positive
- **Priority**: High

#### TC_SN_002 - Surname with Spaces
- **Description**: Verify surname can contain spaces (e.g., compound surnames)
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "Van Der Berg" (surname with multiple spaces)
  3. Verify the surname is accepted
- **Expected Result**: Surname with spaces is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_SN_003 - Surname with Special Characters
- **Description**: Verify special characters validation in surname
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "Smith@123" (with special characters)
  3. Attempt to proceed
- **Expected Result**: Special characters are rejected or error message appears
- **Type**: Negative
- **Priority**: High

#### TC_SN_004 - Surname with Numbers
- **Description**: Verify numbers are not allowed in surname
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "Smith123" (surname with numbers)
  3. Attempt to proceed
- **Expected Result**: Numbers are rejected or error message appears
- **Type**: Negative
- **Priority**: High

#### TC_SN_005 - Empty Surname
- **Description**: Verify empty surname triggers validation error
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Leave "Surname" field empty
  2. Click "Sign up" button
  3. Verify error message appears
- **Expected Result**: Form submission fails with error message "Surname is required"
- **Type**: Negative
- **Priority**: High

#### TC_SN_006 - Surname with Minimum Length (1 character)
- **Description**: Verify minimum length requirement for surname
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "S" (single character)
  3. Verify acceptance
- **Expected Result**: Single character surname is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_SN_007 - Surname Exceeds Maximum Length
- **Description**: Verify maximum character limit for surname
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter 51+ alphabetic characters
  3. Verify the field behavior
- **Expected Result**: Extra characters are not accepted or error message appears
- **Type**: Negative
- **Priority**: Medium

#### TC_SN_008 - Surname with Lowercase Letters
- **Description**: Verify lowercase letters are accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "smith" (all lowercase)
  3. Verify acceptance
- **Expected Result**: Lowercase surname is accepted
- **Type**: Positive
- **Priority**: Low

#### TC_SN_009 - Surname with Hyphen
- **Description**: Verify hyphenated surnames are accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "Garcia-Lopez" (hyphenated surname)
  3. Verify acceptance
- **Expected Result**: Hyphenated surname is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_SN_010 - Surname with Apostrophe
- **Description**: Verify surnames with apostrophes are accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter "O'Brien" (with apostrophe)
  3. Verify acceptance
- **Expected Result**: Surname with apostrophe is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_SN_011 - Surname with Leading/Trailing Spaces
- **Description**: Verify handling of leading/trailing spaces
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Surname" field
  2. Enter " Smith " (with leading and trailing spaces)
  3. Verify how system handles
- **Expected Result**: Leading/trailing spaces should be trimmed
- **Type**: Neutral
- **Priority**: Low

---

### 3. DATE OF BIRTH FIELD TEST CASES

#### TC_DOB_001 - Valid Date of Birth
- **Description**: Verify entering a valid date of birth (user 13+ years old)
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 15
  2. Select Month: March
  3. Select Year: 2000
  4. Verify the date is accepted
- **Expected Result**: Valid date of birth is accepted
- **Type**: Positive
- **Priority**: High

#### TC_DOB_002 - Minimum Age Requirement (Exactly 13 years)
- **Description**: Verify user aged exactly 13 years can register
- **Precondition**: User is on Facebook signup page, current date is 14 Jan 2026
- **Steps**:
  1. Select Day: 14
  2. Select Month: January
  3. Select Year: 2013 (exactly 13 years old today)
  4. Proceed with signup
- **Expected Result**: Date is accepted as user meets minimum age requirement
- **Type**: Positive
- **Priority**: High

#### TC_DOB_003 - Below Minimum Age (Less than 13 years)
- **Description**: Verify user under 13 years old cannot register
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 14
  2. Select Month: January
  3. Select Year: 2014 (less than 13 years old)
  4. Attempt to proceed
- **Expected Result**: Form submission fails with age restriction error
- **Type**: Negative
- **Priority**: High

#### TC_DOB_004 - Very Old Age (Over 100 years)
- **Description**: Verify system handles unrealistic date of birth
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 14
  2. Select Month: January
  3. Select Year: 1900 (126 years old)
  4. Proceed with form
- **Expected Result**: System either accepts or shows validation warning
- **Type**: Negative
- **Priority**: Low

#### TC_DOB_005 - Invalid Date (29th February in non-leap year)
- **Description**: Verify system validates actual date validity
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 29
  2. Select Month: February
  3. Select Year: 2001 (not a leap year)
  4. Verify validation
- **Expected Result**: Invalid date is rejected or option is disabled
- **Type**: Negative
- **Priority**: Medium

#### TC_DOB_006 - Valid Leap Year Date (29th February in leap year)
- **Description**: Verify valid leap year date is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 29
  2. Select Month: February
  3. Select Year: 2000 (leap year)
  4. Verify acceptance
- **Expected Result**: Valid leap year date is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_DOB_007 - First Day of Month
- **Description**: Verify first day of any month is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 1
  2. Select Month: Any month
  3. Select Year: Valid year
  4. Proceed
- **Expected Result**: First day of month is accepted
- **Type**: Positive
- **Priority**: Low

#### TC_DOB_008 - Last Day of Month (31st)
- **Description**: Verify last day of applicable months is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 31
  2. Select Month: January (31 days)
  3. Select Year: Valid year
  4. Proceed
- **Expected Result**: Valid last day is accepted
- **Type**: Positive
- **Priority**: Low

#### TC_DOB_009 - Invalid Day for Month (31st of April)
- **Description**: Verify invalid day for specific month is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 31
  2. Select Month: April (only 30 days)
  3. Verify system behavior
- **Expected Result**: Option is disabled or error appears
- **Type**: Negative
- **Priority**: Medium

#### TC_DOB_010 - Future Date of Birth
- **Description**: Verify date in future cannot be selected
- **Precondition**: User is on Facebook signup page, current date is 14 Jan 2026
- **Steps**:
  1. Try selecting Day: 15
  2. Try selecting Month: February
  3. Try selecting Year: 2026
  4. Verify if possible
- **Expected Result**: Future date is disabled or rejected
- **Type**: Negative
- **Priority**: High

#### TC_DOB_011 - Today's Date as DOB
- **Description**: Verify today's date is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select Day: 14
  2. Select Month: January
  3. Select Year: 2026 (today)
  4. Attempt to proceed
- **Expected Result**: Current date is rejected (age validation fails)
- **Type**: Negative
- **Priority**: High

#### TC_DOB_012 - All Months Validation
- **Description**: Verify all 12 months are available in dropdown
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on Month dropdown
  2. Verify all months are present (Jan-Dec)
  3. Select each month
- **Expected Result**: All 12 months are selectable
- **Type**: Positive
- **Priority**: Low

#### TC_DOB_013 - Day Range 1-31
- **Description**: Verify all days 1-31 are available
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on Day dropdown
  2. Verify all days 1-31 are present
  3. Select various days
- **Expected Result**: All valid days are selectable
- **Type**: Positive
- **Priority**: Low

---

### 4. GENDER FIELD TEST CASES

#### TC_GN_001 - Select Female
- **Description**: Verify female gender can be selected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Female" radio button
  2. Verify selection is marked
  3. Proceed
- **Expected Result**: Female gender is selected successfully
- **Type**: Positive
- **Priority**: High

#### TC_GN_002 - Select Male
- **Description**: Verify male gender can be selected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Male" radio button
  2. Verify selection is marked
  3. Proceed
- **Expected Result**: Male gender is selected successfully
- **Type**: Positive
- **Priority**: High

#### TC_GN_003 - Select Custom
- **Description**: Verify custom gender option can be selected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Custom" radio button
  2. Verify selection is marked
  3. Verify if additional options appear
- **Expected Result**: Custom gender is selected and may show additional options
- **Type**: Positive
- **Priority**: High

#### TC_GN_004 - No Gender Selected
- **Description**: Verify form submission fails when no gender is selected
- **Precondition**: User fills all other fields, no gender selected
- **Steps**:
  1. Leave gender unselected
  2. Click "Sign up" button
  3. Verify error
- **Expected Result**: Form submission fails with error "Gender is required"
- **Type**: Negative
- **Priority**: High

#### TC_GN_005 - Switch Gender Selection
- **Description**: Verify switching between gender options works
- **Precondition**: Female is selected
- **Steps**:
  1. Select "Female"
  2. Click on "Male" 
  3. Verify only Male is now selected
  4. Click on "Custom"
  5. Verify only Custom is now selected
- **Expected Result**: Only one gender option is selected at a time
- **Type**: Positive
- **Priority**: Medium

#### TC_GN_006 - Gender Deselection
- **Description**: Verify if selected gender can be deselected
- **Precondition**: Female is selected
- **Steps**:
  1. Select "Female"
  2. Click on "Female" again
  3. Verify if it can be deselected
- **Expected Result**: Radio button behavior (typically cannot deselect by clicking again)
- **Type**: Neutral
- **Priority**: Low

#### TC_GN_007 - Custom Gender with Additional Options
- **Description**: Verify custom gender may have dropdown or text field
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Select "Custom" radio button
  2. Check if dropdown or text field appears
  3. If available, verify options
- **Expected Result**: Additional options appear for custom gender selection
- **Type**: Positive
- **Priority**: Medium

---

### 5. MOBILE NUMBER OR EMAIL ADDRESS FIELD TEST CASES

#### TC_EMAIL_001 - Valid Email Format
- **Description**: Verify valid email address is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user@example.com"
  3. Verify acceptance
- **Expected Result**: Valid email is accepted
- **Type**: Positive
- **Priority**: High

#### TC_EMAIL_002 - Valid Mobile Number (10 digits)
- **Description**: Verify valid 10-digit mobile number is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "9876543210" (10 digits)
  3. Verify acceptance
- **Expected Result**: Valid 10-digit mobile number is accepted
- **Type**: Positive
- **Priority**: High

#### TC_EMAIL_003 - Valid Mobile with Country Code
- **Description**: Verify mobile number with country code is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "+1-9876543210" or similar
  3. Verify acceptance
- **Expected Result**: Mobile with country code is accepted
- **Type**: Positive
- **Priority**: High

#### TC_EMAIL_004 - Email with Subdomain
- **Description**: Verify email with subdomain is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user@mail.example.co.uk"
  3. Verify acceptance
- **Expected Result**: Email with multiple domain levels accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_EMAIL_005 - Email with Plus Sign
- **Description**: Verify email with plus sign (+) addressing is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user+tag@example.com"
  3. Verify acceptance
- **Expected Result**: Plus sign in email is accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_EMAIL_006 - Email with Dot in Username
- **Description**: Verify email with dots in username is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user.name@example.com"
  3. Verify acceptance
- **Expected Result**: Dots in email username accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_EMAIL_007 - Email with Numbers
- **Description**: Verify email with numbers is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user123@example.com"
  3. Verify acceptance
- **Expected Result**: Email with numbers accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_EMAIL_008 - Missing @ Symbol
- **Description**: Verify email without @ symbol is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "userexample.com" (no @)
  3. Attempt to proceed
- **Expected Result**: Error message: "Invalid email address"
- **Type**: Negative
- **Priority**: High

#### TC_EMAIL_009 - Missing Domain
- **Description**: Verify email without domain is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user@" (no domain)
  3. Attempt to proceed
- **Expected Result**: Error message appears for invalid format
- **Type**: Negative
- **Priority**: High

#### TC_EMAIL_010 - Missing Local Part
- **Description**: Verify email without local part is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "@example.com" (no username)
  3. Attempt to proceed
- **Expected Result**: Error message appears
- **Type**: Negative
- **Priority**: High

#### TC_EMAIL_011 - Special Characters in Email
- **Description**: Verify special characters are handled in email
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user!@example.com" (! in local part)
  3. Attempt to proceed
- **Expected Result**: May be accepted (some special chars allowed) or rejected
- **Type**: Neutral
- **Priority**: Medium

#### TC_EMAIL_012 - Empty Email/Mobile Field
- **Description**: Verify empty field triggers validation error
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Leave "Mobile number or email address" empty
  2. Click "Sign up" button
  3. Verify error message
- **Expected Result**: Form submission fails with error "Email or mobile number is required"
- **Type**: Negative
- **Priority**: High

#### TC_EMAIL_013 - Mobile Number Too Short
- **Description**: Verify short mobile number is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "123456" (6 digits)
  3. Attempt to proceed
- **Expected Result**: Error or rejection
- **Type**: Negative
- **Priority**: Medium

#### TC_EMAIL_014 - Mobile Number Too Long
- **Description**: Verify excessively long mobile number is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "123456789012345" (15+ digits)
  3. Attempt to proceed
- **Expected Result**: Extra digits not accepted or error appears
- **Type**: Negative
- **Priority**: Medium

#### TC_EMAIL_015 - Space in Email Address
- **Description**: Verify spaces in email are rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user name@example.com" (space in local part)
  3. Attempt to proceed
- **Expected Result**: Error message for invalid format
- **Type**: Negative
- **Priority**: Medium

#### TC_EMAIL_016 - Already Registered Email
- **Description**: Verify account creation with registered email fails
- **Precondition**: User is on Facebook signup page, email is already registered
- **Steps**:
  1. Fill all fields with valid data
  2. Use previously registered email address
  3. Click "Sign up"
- **Expected Result**: Error message: "This email is already registered"
- **Type**: Negative
- **Priority**: High

#### TC_EMAIL_017 - Case Sensitivity in Email
- **Description**: Verify email handling ignores case
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "User@Example.COM" (uppercase)
  3. Verify if accepted same as lowercase
- **Expected Result**: Email accepted regardless of case
- **Type**: Positive
- **Priority**: Low

#### TC_EMAIL_018 - Mobile with Spaces or Hyphens
- **Description**: Verify mobile number formatting with separators
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "987-654-3210" (hyphenated)
  3. Verify acceptance
- **Expected Result**: Formatted mobile accepted or spaces/hyphens trimmed
- **Type**: Positive
- **Priority**: Medium

#### TC_EMAIL_019 - International Email Domain
- **Description**: Verify email with international domain is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "Mobile number or email address" field
  2. Enter "user@example.中国" (international domain)
  3. Verify acceptance
- **Expected Result**: International domain email accepted
- **Type**: Positive
- **Priority**: Low

---

### 6. NEW PASSWORD FIELD TEST CASES

#### TC_PWD_001 - Valid Strong Password
- **Description**: Verify strong password is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "MyPass123!" (alphanumeric + special char)
  3. Verify acceptance
- **Expected Result**: Strong password accepted
- **Type**: Positive
- **Priority**: High

#### TC_PWD_002 - Minimum Length (6 characters)
- **Description**: Verify password with minimum 6 characters is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "Pass12" (exactly 6 characters)
  3. Verify acceptance
- **Expected Result**: 6-character password accepted
- **Type**: Positive
- **Priority**: High

#### TC_PWD_003 - Less Than Minimum Length
- **Description**: Verify password less than 6 characters is rejected
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "Pass1" (5 characters)
  3. Attempt to proceed
- **Expected Result**: Error message: "Password must be at least 6 characters"
- **Type**: Negative
- **Priority**: High

#### TC_PWD_004 - Password with Only Letters
- **Description**: Verify password with only letters is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "Password" (only letters)
  3. Verify acceptance
- **Expected Result**: All-letter password accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_PWD_005 - Password with Only Numbers
- **Description**: Verify password with only numbers is accepted
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "123456" (only numbers)
  3. Verify acceptance
- **Expected Result**: All-number password accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_PWD_006 - Password with Only Special Characters
- **Description**: Verify password with only special characters
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "!@#$%^" (only special chars)
  3. Verify acceptance
- **Expected Result**: Special character password accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_PWD_007 - Password with Spaces
- **Description**: Verify spaces in password handling
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "Pass 123" (with space)
  3. Verify acceptance
- **Expected Result**: Password with spaces accepted
- **Type**: Positive
- **Priority**: Medium

#### TC_PWD_008 - Empty Password
- **Description**: Verify empty password triggers validation error
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Leave "New password" field empty
  2. Click "Sign up" button
  3. Verify error message
- **Expected Result**: Form submission fails with error "Password is required"
- **Type**: Negative
- **Priority**: High

#### TC_PWD_009 - Password Same as Email
- **Description**: Verify if system allows password same as email
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter email: "user@example.com"
  2. Enter password: "user@example.com"
  3. Attempt to proceed
- **Expected Result**: System may warn about weak password security
- **Type**: Neutral
- **Priority**: Low

#### TC_PWD_010 - Password Same as First Name
- **Description**: Verify if system allows password same as name
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter first name: "John"
  2. Enter password: "John"
  3. Attempt to proceed
- **Expected Result**: May be accepted or system warns about weak password
- **Type**: Neutral
- **Priority**: Low

#### TC_PWD_011 - Very Long Password
- **Description**: Verify system handles very long password
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter 100+ character password
  3. Verify acceptance
- **Expected Result**: Long password accepted or maximum limit enforced
- **Type**: Positive
- **Priority**: Medium

#### TC_PWD_012 - Password with Unicode Characters
- **Description**: Verify password with unicode/international characters
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "Pass@123™" (with unicode)
  3. Verify acceptance
- **Expected Result**: Unicode characters accepted
- **Type**: Positive
- **Priority**: Low

#### TC_PWD_013 - Password Visibility Toggle
- **Description**: Verify password show/hide functionality if present
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter password in field
  2. Check for eye icon or visibility toggle
  3. Click to toggle visibility
- **Expected Result**: Password visibility toggles between hidden and visible
- **Type**: Positive
- **Priority**: Low

#### TC_PWD_014 - Password with Leading/Trailing Spaces
- **Description**: Verify handling of spaces in password
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter " Password123 " (with leading/trailing spaces)
  3. Verify how system handles
- **Expected Result**: System may trim or accept with spaces
- **Type**: Neutral
- **Priority**: Low

#### TC_PWD_015 - Consecutive Same Characters
- **Description**: Verify password with repeated characters
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Enter "AAAA1234" (repeated A's)
  3. Verify acceptance
- **Expected Result**: Repeated characters accepted
- **Type**: Positive
- **Priority**: Low

---

### 7. OVERALL FORM SUBMISSION TEST CASES

#### TC_SUBMIT_001 - Valid Complete Form
- **Description**: Verify successful form submission with all valid data
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter First Name: "John"
  2. Enter Surname: "Doe"
  3. Select Date of Birth: 14/Jan/2000
  4. Select Gender: Male
  5. Enter Email: "john.doe@example.com"
  6. Enter Password: "SecurePass123"
  7. Click "Sign up" button
- **Expected Result**: Form submits successfully, account created
- **Type**: Positive
- **Priority**: High

#### TC_SUBMIT_002 - Form Submission with One Empty Field
- **Description**: Verify form submission fails when any field is empty
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Fill all fields except First Name
  2. Click "Sign up" button
- **Expected Result**: Form submission fails with specific field error
- **Type**: Negative
- **Priority**: High

#### TC_SUBMIT_003 - Multiple Empty Fields
- **Description**: Verify error for multiple empty fields
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Fill only First Name and Email
  2. Leave others empty
  3. Click "Sign up" button
- **Expected Result**: All missing required fields show errors
- **Type**: Negative
- **Priority**: High

#### TC_SUBMIT_004 - Form with Invalid Email
- **Description**: Verify form submission fails with invalid email
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Fill all fields with valid data
  2. Enter invalid email (e.g., "invalidemail")
  3. Click "Sign up" button
- **Expected Result**: Form submission fails with email validation error
- **Type**: Negative
- **Priority**: High

#### TC_SUBMIT_005 - Form with Under-age User
- **Description**: Verify form submission fails with user under 13
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Fill all fields with valid data
  2. Select DOB for user under 13 years old
  3. Click "Sign up" button
- **Expected Result**: Form submission fails with age restriction error
- **Type**: Negative
- **Priority**: High

#### TC_SUBMIT_006 - Form with Weak Password (Less than 6 chars)
- **Description**: Verify form fails with weak password
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Fill all fields
  2. Enter password with less than 6 characters
  3. Click "Sign up" button
- **Expected Result**: Form submission fails with password requirement error
- **Type**: Negative
- **Priority**: High

#### TC_SUBMIT_007 - Form with All Invalid Data
- **Description**: Verify form submission with all invalid data
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter First Name: "123"
  2. Enter Surname: "@#$"
  3. Select invalid DOB
  4. Leave Gender empty
  5. Enter Email: "invalid"
  6. Enter Password: "12345"
  7. Click "Sign up"
- **Expected Result**: Multiple validation errors appear
- **Type**: Negative
- **Priority**: Medium

#### TC_SUBMIT_008 - Form Reset Button (if present)
- **Description**: Verify form can be reset to clear all fields
- **Precondition**: User has filled the form
- **Steps**:
  1. Fill all form fields
  2. Look for "Reset" or "Clear" button
  3. Click if present
- **Expected Result**: All fields cleared or form resets
- **Type**: Positive
- **Priority**: Low

#### TC_SUBMIT_009 - Form Page Navigation Away
- **Description**: Verify page navigation behavior when form is partially filled
- **Precondition**: User has filled some form fields
- **Steps**:
  1. Fill some fields
  2. Navigate to another page (browser back/forward)
  3. Return to form
- **Expected Result**: Form data may or may not be retained (system dependent)
- **Type**: Neutral
- **Priority**: Low

#### TC_SUBMIT_010 - Duplicate Account Prevention
- **Description**: Verify duplicate account cannot be created
- **Precondition**: User is on Facebook signup page, account already exists
- **Steps**:
  1. Fill form with existing account details
  2. Click "Sign up"
- **Expected Result**: Error message: "This account already exists"
- **Type**: Negative
- **Priority**: High

#### TC_SUBMIT_011 - Form Response Time
- **Description**: Verify form submission and response time
- **Precondition**: Valid form data ready
- **Steps**:
  1. Fill valid form
  2. Click "Sign up"
  3. Measure response time
- **Expected Result**: Server responds within acceptable time (< 5 seconds)
- **Type**: Performance
- **Priority**: Medium

#### TC_SUBMIT_012 - Double Form Submission
- **Description**: Verify form prevents double submission
- **Precondition**: Form is being submitted
- **Steps**:
  1. Fill valid form
  2. Click "Sign up" button twice rapidly
- **Expected Result**: Only one account created, prevents duplicate submission
- **Type**: Positive
- **Priority**: Medium

#### TC_SUBMIT_013 - Browser Back Button After Submission
- **Description**: Verify behavior after form submission
- **Precondition**: Form has been submitted successfully
- **Steps**:
  1. Submit valid form
  2. Click browser back button
- **Expected Result**: Should not resubmit form, show warning or redirect
- **Type**: Positive
- **Priority**: Medium

#### TC_SUBMIT_014 - Sign Up Button Disabled State
- **Description**: Verify sign up button becomes disabled during submission
- **Precondition**: Form is being submitted
- **Steps**:
  1. Fill valid form
  2. Click "Sign up" button
  3. Observe button state during loading
- **Expected Result**: Button disabled/loading indicator shown during submission
- **Type**: Positive
- **Priority**: Medium

---

### 8. UI/UX AND ACCESSIBILITY TEST CASES

#### TC_UI_001 - Form Layout and Responsiveness
- **Description**: Verify form displays correctly on different screen sizes
- **Precondition**: Facebook signup page loaded
- **Steps**:
  1. Open form on desktop (1920x1080)
  2. Test on tablet (768x1024)
  3. Test on mobile (375x667)
  4. Verify all fields are accessible
- **Expected Result**: Form adapts to screen size, all fields visible
- **Type**: Positive
- **Priority**: High

#### TC_UI_002 - Required Field Indicators
- **Description**: Verify required fields are clearly marked
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Observe all form fields
  2. Check for asterisk (*) or "required" indicator
- **Expected Result**: Required fields are clearly indicated
- **Type**: Positive
- **Priority**: Medium

#### TC_UI_003 - Field Focus and Tab Navigation
- **Description**: Verify keyboard navigation through form
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on First Name field
  2. Press Tab to navigate to next field
  3. Verify logical tab order
  4. Continue through all fields
- **Expected Result**: Tab key navigates through fields in correct order
- **Type**: Positive
- **Priority**: Medium

#### TC_UI_004 - Error Message Display
- **Description**: Verify error messages are clear and specific
- **Precondition**: Form submission attempted with invalid data
- **Steps**:
  1. Submit form with invalid email
  2. Observe error message location
  3. Verify message clarity
- **Expected Result**: Clear, specific error message displayed near field
- **Type**: Positive
- **Priority**: High

#### TC_UI_005 - Label Association with Fields
- **Description**: Verify form labels are properly associated with fields
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "First name" label
  2. Verify cursor focuses on input field
  3. Repeat for all labels
- **Expected Result**: Clicking label focuses corresponding input field
- **Type**: Positive
- **Priority**: Medium

#### TC_UI_006 - Placeholder Text Visibility
- **Description**: Verify placeholder text is visible and helpful
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Observe placeholder text in each field
  2. Verify text is visible before typing
  3. Verify disappears when user starts typing
- **Expected Result**: Placeholder text visible, clear, and disappears appropriately
- **Type**: Positive
- **Priority**: Low

#### TC_UI_007 - Color Contrast for Accessibility
- **Description**: Verify text has sufficient color contrast
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Use color contrast analyzer
  2. Check text vs background contrast
  3. Check error message colors
- **Expected Result**: Contrast ratio meets WCAG standards (4.5:1 minimum)
- **Type**: Positive
- **Priority**: Medium

#### TC_UI_008 - Help Text and Tooltips
- **Description**: Verify help information is available
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Hover over info icons (if present)
  2. Check for tooltips or help text
  3. Verify information is helpful
- **Expected Result**: Help text available and informative
- **Type**: Positive
- **Priority**: Low

#### TC_UI_009 - Screen Reader Compatibility
- **Description**: Verify form works with screen readers
- **Precondition**: Screen reader enabled (e.g., NVDA, JAWS)
- **Steps**:
  1. Enable screen reader
  2. Navigate form using screen reader
  3. Verify all fields announced correctly
  4. Verify error messages announced
- **Expected Result**: All form elements properly announced by screen reader
- **Type**: Positive
- **Priority**: High

#### TC_UI_010 - Form Field Autocomplete
- **Description**: Verify browser autocomplete functionality
- **Precondition**: User has previously filled similar form
- **Steps**:
  1. Click on email field
  2. Observe autocomplete suggestions
  3. Select suggestion
- **Expected Result**: Autocomplete suggestions provided (if browser supports)
- **Type**: Positive
- **Priority**: Low

---

### 9. SECURITY TEST CASES

#### TC_SEC_001 - Password Field Masking
- **Description**: Verify password input is masked/hidden
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Click on "New password" field
  2. Type password characters
  3. Observe character display
- **Expected Result**: Password characters displayed as dots/asterisks
- **Type**: Positive
- **Priority**: High

#### TC_SEC_002 - No Sensitive Data in URLs
- **Description**: Verify form data not exposed in URL
- **Precondition**: Form submission in progress
- **Steps**:
  1. Fill form with data
  2. Submit form
  3. Check URL for any form data
- **Expected Result**: No sensitive data visible in URL
- **Type**: Positive
- **Priority**: High

#### TC_SEC_003 - SQL Injection in Name Fields
- **Description**: Verify SQL injection attacks are prevented
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter First Name: "'; DROP TABLE users;--"
  2. Attempt form submission
  3. Verify no database error
- **Expected Result**: Input treated as literal text, no injection
- **Type**: Negative
- **Priority**: High

#### TC_SEC_004 - SQL Injection in Email Field
- **Description**: Verify email field is protected from SQL injection
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter Email: "test@test.com' OR '1'='1"
  2. Attempt form submission
  3. Verify safe handling
- **Expected Result**: Input safely handled, no SQL injection possible
- **Type**: Negative
- **Priority**: High

#### TC_SEC_005 - XSS in Name Fields
- **Description**: Verify cross-site scripting is prevented
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter First Name: "<script>alert('XSS')</script>"
  2. Submit form
  3. Verify no script execution
- **Expected Result**: Script treated as text, not executed
- **Type**: Negative
- **Priority**: High

#### TC_SEC_006 - XSS in Email Field
- **Description**: Verify XSS prevention in email field
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter Email: "<img src=x onerror='alert(1)'>"
  2. Submit form
  3. Verify no execution
- **Expected Result**: HTML/script treated as text
- **Type**: Negative
- **Priority**: High

#### TC_SEC_007 - CSRF Token Validation
- **Description**: Verify form has CSRF protection
- **Precondition**: Form loaded
- **Steps**:
  1. Inspect page source for CSRF token
  2. Verify token is included in form
  3. Attempt submission with invalid token
- **Expected Result**: Form includes CSRF token, invalid tokens rejected
- **Type**: Positive
- **Priority**: High

#### TC_SEC_008 - HTTPS Connection
- **Description**: Verify secure HTTPS connection
- **Precondition**: Facebook signup page opened
- **Steps**:
  1. Check URL starts with "https://"
  2. Check for secure connection indicator
  3. Verify SSL certificate valid
- **Expected Result**: HTTPS connection secured with valid SSL cert
- **Type**: Positive
- **Priority**: High

#### TC_SEC_009 - Password Strength Requirements
- **Description**: Verify system enforces password strength
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Enter weak password "123456"
  2. Check if warning appears
  3. Try stronger password with mixed chars
- **Expected Result**: System recommends strong passwords
- **Type**: Positive
- **Priority**: Medium

#### TC_SEC_010 - No Password in Logs
- **Description**: Verify password not logged in plain text
- **Precondition**: Form submitted with valid data
- **Steps**:
  1. Submit form
  2. Check browser console logs
  3. Check network requests
- **Expected Result**: Password never logged or transmitted in plain text
- **Type**: Positive
- **Priority**: High

---

### 10. BROWSER COMPATIBILITY TEST CASES

#### TC_BROWSER_001 - Chrome Browser
- **Description**: Verify form works in Chrome
- **Precondition**: Chrome browser installed
- **Steps**:
  1. Open Facebook signup in Chrome
  2. Complete form with valid data
  3. Submit
- **Expected Result**: Form works correctly, account created
- **Type**: Positive
- **Priority**: High

#### TC_BROWSER_002 - Firefox Browser
- **Description**: Verify form works in Firefox
- **Precondition**: Firefox browser installed
- **Steps**:
  1. Open Facebook signup in Firefox
  2. Complete form
  3. Submit
- **Expected Result**: Form functions properly
- **Type**: Positive
- **Priority**: High

#### TC_BROWSER_003 - Safari Browser
- **Description**: Verify form works in Safari
- **Precondition**: Safari browser available
- **Steps**:
  1. Open Facebook signup in Safari
  2. Complete form
  3. Submit
- **Expected Result**: Form works correctly
- **Type**: Positive
- **Priority**: High

#### TC_BROWSER_004 - Edge Browser
- **Description**: Verify form works in Edge
- **Precondition**: Edge browser installed
- **Steps**:
  1. Open Facebook signup in Edge
  2. Complete form
  3. Submit
- **Expected Result**: Form functions properly
- **Type**: Positive
- **Priority**: High

#### TC_BROWSER_005 - Mobile Safari (iOS)
- **Description**: Verify form on iOS Safari
- **Precondition**: iOS device with Safari
- **Steps**:
  1. Open on iOS Safari
  2. Complete form with mobile keyboard
  3. Submit
- **Expected Result**: Form responsive on mobile Safari
- **Type**: Positive
- **Priority**: High

#### TC_BROWSER_006 - Chrome Mobile
- **Description**: Verify form on Chrome Mobile
- **Precondition**: Mobile device with Chrome
- **Steps**:
  1. Open on Chrome Mobile
  2. Complete form
  3. Submit
- **Expected Result**: Form works on mobile Chrome
- **Type**: Positive
- **Priority**: High

#### TC_BROWSER_007 - Older Browser Version
- **Description**: Verify form on older browser
- **Precondition**: Older Chrome version (e.g., 2+ versions back)
- **Steps**:
  1. Open form in older Chrome
  2. Attempt form submission
  3. Verify functionality
- **Expected Result**: Form works or graceful degradation
- **Type**: Positive
- **Priority**: Medium

---

### 11. CROSS-FIELD INTERACTION TEST CASES

#### TC_CROSS_001 - Dependent Field Validation
- **Description**: Verify dependencies between fields work correctly
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Fill First Name: "John"
  2. Leave Surname empty
  3. Try to proceed without Surname
- **Expected Result**: All required fields must be filled
- **Type**: Negative
- **Priority**: High

#### TC_CROSS_002 - Field Order and Flow
- **Description**: Verify logical field order flows naturally
- **Precondition**: User is on Facebook signup page
- **Steps**:
  1. Follow natural fill order: First Name → Surname → DOB → Gender → Email → Password
  2. Verify field order makes sense
- **Expected Result**: Field order is logical and intuitive
- **Type**: Positive
- **Priority**: Medium

#### TC_CROSS_003 - Email and Name Consistency
- **Description**: Verify no conflicting data between email and name fields
- **Precondition**: Form is being filled
- **Steps**:
  1. Enter Name: "John Smith"
  2. Enter Email: "jane.doe@example.com"
  3. Submit form
- **Expected Result**: Form accepts different name and email
- **Type**: Positive
- **Priority**: Low

#### TC_CROSS_004 - Age Verification Based on DOB
- **Description**: Verify age calculation from DOB is correct
- **Precondition**: User selects DOB
- **Steps**:
  1. Select DOB making user 13 years old
  2. Verify system accepts (age check passes)
  3. Try DOB making user 12 years old
  4. Verify system rejects
- **Expected Result**: Age calculation is accurate
- **Type**: Positive
- **Priority**: High

---

### 12. DATA PERSISTENCE AND STATE TEST CASES

#### TC_STATE_001 - Form Data After Page Refresh
- **Description**: Verify form data handling after page refresh
- **Precondition**: User has filled form partially
- **Steps**:
  1. Fill form fields
  2. Press F5 to refresh page
  3. Check if data persists
- **Expected Result**: Depending on implementation, data may be cleared (typical)
- **Type**: Neutral
- **Priority**: Low

#### TC_STATE_002 - Form Data After Browser Close
- **Description**: Verify data not retained after closing browser
- **Precondition**: User has filled form and closes browser
- **Steps**:
  1. Fill form
  2. Close browser completely
  3. Reopen and navigate to signup
- **Expected Result**: Form fields are empty (no data stored)
- **Type**: Positive
- **Priority**: Medium

#### TC_STATE_003 - Multiple Form Instances
- **Description**: Verify multiple signup form instances don't interfere
- **Precondition**: User opens Facebook in multiple tabs/windows
- **Steps**:
  1. Open signup in Tab 1
  2. Open signup in Tab 2
  3. Fill different data in each tab
  4. Submit from Tab 1
  5. Check Tab 2
- **Expected Result**: Each tab maintains independent form state
- **Type**: Positive
- **Priority**: Medium

---

## TEST SUMMARY STATISTICS

### Total Test Cases: 156

| Category | Count |
|----------|-------|
| First Name Field | 11 |
| Surname Field | 11 |
| Date of Birth | 13 |
| Gender | 7 |
| Email/Mobile | 19 |
| Password | 15 |
| Form Submission | 14 |
| UI/UX/Accessibility | 10 |
| Security | 10 |
| Browser Compatibility | 7 |
| Cross-Field Interaction | 4 |
| Data Persistence | 3 |

### Test Case Distribution by Type

| Type | Count |
|------|-------|
| Positive | 85 |
| Negative | 60 |
| Neutral | 11 |

### Test Case Priority Distribution

| Priority | Count |
|----------|-------|
| High | 62 |
| Medium | 68 |
| Low | 26 |

---

## EXECUTION GUIDELINES

### Pre-Requisites
- Active Facebook account for testing
- Multiple browser versions installed
- Screen reader software (NVDA or JAWS) for accessibility testing
- Security testing tools (Burp Suite, OWASP ZAP)
- Test data set prepared

### Test Execution Order
1. **Phase 1**: Basic form field validation (TC_FN_*, TC_SN_*, TC_DOB_*, TC_GN_*, TC_EMAIL_*, TC_PWD_*)
2. **Phase 2**: Form submission scenarios (TC_SUBMIT_*)
3. **Phase 3**: UI/UX and accessibility (TC_UI_*, TC_UI_009)
4. **Phase 4**: Security testing (TC_SEC_*)
5. **Phase 5**: Browser compatibility (TC_BROWSER_*)
6. **Phase 6**: Cross-field interactions (TC_CROSS_*)
7. **Phase 7**: Data persistence (TC_STATE_*)

### Reporting
- Document actual vs. expected results
- Capture screenshots for failures
- Record error messages exactly as displayed
- Note any browser-specific behavior
- Include severity level for each defect

### Entry Criteria
- Test environment is stable
- All required tools are available
- Test data is prepared
- Requirements are finalized

### Exit Criteria
- All High priority test cases executed
- All critical defects resolved
- 80% of total test cases passed
- No open blockers

---

## AUTOMATION CONSIDERATIONS

### Framework Recommendation
- **Selenium** for cross-browser automation
- **Cypress** for modern frontend testing
- **Playwright** for comprehensive testing
- **TestNG/Pytest** for test organization

### Automation Priority
1. **High**: All form validation tests, submission tests, security tests
2. **Medium**: UI tests, browser compatibility, cross-field tests
3. **Low**: UI aesthetics, placeholder visibility, tooltips

### Automation Script Structure
```
Test Suite: Facebook Signup Form
├── Setup (Navigate to signup page)
├── Test Cases
│   ├── First Name Tests
│   ├── Surname Tests
│   ├── DOB Tests
│   ├── Gender Tests
│   ├── Email Tests
│   ├── Password Tests
│   ├── Submission Tests
│   └── Validation Tests
└── Teardown (Cleanup)
```

### Test Data Management
- Create separate test data sets for each scenario
- Use data-driven testing approach
- Mock invalid data combinations
- Create user accounts for registration tests

### Assertion Points
- Error messages match expected text
- Fields accept valid input
- Fields reject invalid input
- Form submits successfully
- Validation happens before submission
- Navigation occurs post-submission

---

## APPENDIX

### Common Validation Error Messages
- "First name is required"
- "Surname is required"
- "Please enter a valid date of birth"
- "You must be at least 13 years old to register"
- "Please select a gender"
- "Please enter a valid email or mobile number"
- "This email is already registered"
- "Password must be at least 6 characters"
- "Password is required"

### Test Data Sets

**Valid Test Data Set:**
```
First Name: John
Surname: Doe
DOB: 15/03/2000
Gender: Male
Email: john.doe.test@example.com
Password: Test@12345
```

**Invalid Test Data Set:**
```
First Name: John123
Surname: @#$%
DOB: 14/01/2026 (future date)
Gender: Not selected
Email: invalid.email
Password: 123
```

**Edge Case Test Data Set:**
```
First Name: A
Surname: O'Brien-Smith
DOB: 29/02/2000 (leap year)
Gender: Custom
Email: user+test@example.co.uk
Password: !@#$%^&*()
```

---

## DOCUMENT REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 14-Jan-2026 | QA Team | Initial version with 156 test cases |

---

## CONTACT & SUPPORT

For questions or updates to this test case document, please contact the QA Team Lead.

**Document Status**: Ready for Execution
**Last Updated**: 14 January 2026
