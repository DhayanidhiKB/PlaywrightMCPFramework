import { Page, expect } from '@playwright/test';
import { BasePage } from '../utils/basePage';

/**
 * Facebook Signup Page Object Model
 * Handles all interactions with the Facebook account creation form
 */
export class FacebookSignupPage extends BasePage {
  // Locators for form fields
  private readonly firstNameInput = 'input[name="firstname"]';
  private readonly surnameInput = 'input[name="lastname"]';
  private readonly dayDropdown = 'select[name="birthday_day"]';
  private readonly monthDropdown = 'select[name="birthday_month"]';
  private readonly yearDropdown = 'select[name="birthday_year"]';
  private readonly femaleRadio = 'input[value="1"]'; // Female
  private readonly maleRadio = 'input[value="2"]'; // Male
  private readonly customRadio = 'input[value="-1"]'; // Custom
  private readonly emailInput = 'input[name="reg_email__"]';
  private readonly passwordInput = 'input[name="reg_passwd__"]';
  private readonly signupButton = 'button[name="websubmit"]';
  private readonly pageHeading = 'text=Create a new account';

  // Error message selectors
  private readonly errorMessages = '[role="alert"]';
  private readonly fieldErrors = '.fb_error';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to Facebook signup page
   */
  async navigateToSignupForm(): Promise<void> {
    await this.navigateToSignup();
    // Wait for page heading with longer timeout
    try {
      await this.page.waitForSelector(this.pageHeading, { timeout: 15000 });
    } catch (error) {
      // If heading not found, try waiting for form elements
      await this.page.waitForSelector(this.firstNameInput, { timeout: 15000 });
    }
  }

  /**
   * Verify signup form is displayed
   */
  async isSignupFormDisplayed(): Promise<boolean> {
    return await this.isElementVisible(this.pageHeading);
  }

  /**
   * Fill first name field
   */
  async enterFirstName(firstName: string): Promise<void> {
    await this.page.fill(this.firstNameInput, firstName);
  }

  /**
   * Fill surname field
   */
  async enterSurname(surname: string): Promise<void> {
    await this.page.fill(this.surnameInput, surname);
  }

  /**
   * Select day from date of birth dropdown
   */
  async selectDay(day: string): Promise<void> {
    await this.page.selectOption(this.dayDropdown, day);
  }

  /**
   * Select month from date of birth dropdown
   */
  async selectMonth(month: string): Promise<void> {
    // Month selector requires option value mapping
    const monthMap: { [key: string]: string } = {
      'Jan': '1',
      'Feb': '2',
      'Mar': '3',
      'Apr': '4',
      'May': '5',
      'Jun': '6',
      'Jul': '7',
      'Aug': '8',
      'Sep': '9',
      'Oct': '10',
      'Nov': '11',
      'Dec': '12',
    };
    const monthValue = monthMap[month] || month;
    await this.page.selectOption(this.monthDropdown, monthValue);
  }

  /**
   * Select year from date of birth dropdown
   */
  async selectYear(year: string): Promise<void> {
    await this.page.selectOption(this.yearDropdown, year);
  }

  /**
   * Select gender
   */
  async selectGender(gender: 'Female' | 'Male' | 'Custom'): Promise<void> {
    let selector = '';
    switch (gender) {
      case 'Female':
        selector = 'input[value="1"]';
        break;
      case 'Male':
        selector = 'input[value="2"]';
        break;
      case 'Custom':
        selector = 'input[value="-1"]';
        break;
    }
    if (selector) {
      await this.page.click(selector);
    }
  }

  /**
   * Fill email/mobile field
   */
  async enterEmail(email: string): Promise<void> {
    await this.page.fill(this.emailInput, email);
  }

  /**
   * Fill password field
   */
  async enterPassword(password: string): Promise<void> {
    await this.page.fill(this.passwordInput, password);
  }

  /**
   * Click signup button
   */
  async clickSignupButton(): Promise<void> {
    await this.page.click(this.signupButton);
  }

  /**
   * Fill complete signup form
   */
  async fillSignupForm(formData: {
    firstName: string;
    surname: string;
    day: string;
    month: string;
    year: string;
    gender?: 'Female' | 'Male' | 'Custom';
    email: string;
    password: string;
  }): Promise<void> {
    await this.enterFirstName(formData.firstName);
    await this.enterSurname(formData.surname);
    await this.selectDay(formData.day);
    await this.selectMonth(formData.month);
    await this.selectYear(formData.year);
    if (formData.gender) {
      await this.selectGender(formData.gender);
    }
    await this.enterEmail(formData.email);
    await this.enterPassword(formData.password);
  }

  /**
   * Submit signup form
   */
  async submitForm(): Promise<void> {
    await this.clickSignupButton();
  }

  /**
   * Submit complete signup flow
   */
  async submitSignup(formData: any): Promise<void> {
    await this.fillSignupForm(formData);
    await this.submitForm();
  }

  /**
   * Get first name field value
   */
  async getFirstNameValue(): Promise<string> {
    return await this.page.inputValue(this.firstNameInput);
  }

  /**
   * Get surname field value
   */
  async getSurnameValue(): Promise<string> {
    return await this.page.inputValue(this.surnameInput);
  }

  /**
   * Get email field value
   */
  async getEmailValue(): Promise<string> {
    return await this.page.inputValue(this.emailInput);
  }

  /**
   * Get password field value
   */
  async getPasswordValue(): Promise<string> {
    return await this.page.inputValue(this.passwordInput);
  }

  /**
   * Get selected day
   */
  async getSelectedDay(): Promise<string> {
    return await this.page.inputValue(this.dayDropdown);
  }

  /**
   * Get selected month
   */
  async getSelectedMonth(): Promise<string> {
    return await this.page.inputValue(this.monthDropdown);
  }

  /**
   * Get selected year
   */
  async getSelectedYear(): Promise<string> {
    return await this.page.inputValue(this.yearDropdown);
  }

  /**
   * Check if first name field is displayed
   */
  async isFirstNameFieldVisible(): Promise<boolean> {
    return await this.isElementVisible(this.firstNameInput);
  }

  /**
   * Check if surname field is displayed
   */
  async isSurnameFieldVisible(): Promise<boolean> {
    return await this.isElementVisible(this.surnameInput);
  }

  /**
   * Check if email field is displayed
   */
  async isEmailFieldVisible(): Promise<boolean> {
    return await this.isElementVisible(this.emailInput);
  }

  /**
   * Check if password field is displayed
   */
  async isPasswordFieldVisible(): Promise<boolean> {
    return await this.isElementVisible(this.passwordInput);
  }

  /**
   * Check if signup button is enabled
   */
  async isSignupButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.signupButton).isEnabled();
  }

  /**
   * Wait for error message to appear
   */
  async waitForErrorMessage(timeout = 5000): Promise<void> {
    await this.page.locator(this.errorMessages).first().waitFor({ state: 'visible', timeout });
  }

  /**
   * Check if any error messages are displayed
   */
  async hasErrorMessages(): Promise<boolean> {
    const errorCount = await this.page.locator(this.errorMessages).count();
    return errorCount > 0;
  }

  /**
   * Get all error messages text
   */
  async getErrorMessagesText(): Promise<string[]> {
    const errorElements = await this.page.locator(this.errorMessages).all();
    const errorTexts: string[] = [];
    for (const element of errorElements) {
      const text = await element.textContent();
      if (text) {
        errorTexts.push(text.trim());
      }
    }
    return errorTexts;
  }

  /**
   * Clear first name field
   */
  async clearFirstNameField(): Promise<void> {
    await this.page.fill(this.firstNameInput, '');
  }

  /**
   * Clear surname field
   */
  async clearSurnameField(): Promise<void> {
    await this.page.fill(this.surnameInput, '');
  }

  /**
   * Clear email field
   */
  async clearEmailField(): Promise<void> {
    await this.page.fill(this.emailInput, '');
  }

  /**
   * Clear password field
   */
  async clearPasswordField(): Promise<void> {
    await this.page.fill(this.passwordInput, '');
  }

  /**
   * Focus on first name field
   */
  async focusFirstNameField(): Promise<void> {
    await this.page.focus(this.firstNameInput);
  }

  /**
   * Focus on surname field
   */
  async focusSurnameField(): Promise<void> {
    await this.page.focus(this.surnameInput);
  }

  /**
   * Get placeholder text for first name
   */
  async getFirstNamePlaceholder(): Promise<string | null> {
    return await this.page.locator(this.firstNameInput).getAttribute('placeholder');
  }

  /**
   * Get placeholder text for surname
   */
  async getSurnamePlaceholder(): Promise<string | null> {
    return await this.page.locator(this.surnameInput).getAttribute('placeholder');
  }
}
