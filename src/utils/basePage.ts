import { Page, expect } from '@playwright/test';

/**
 * Base Page class with common methods for all page objects
 */
export class BasePage {
  protected page: Page;
  private readonly baseUrl = 'https://www.facebook.com';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the signup page
   */
  async navigateToSignup(): Promise<void> {
    try {
      await this.page.goto(`${this.baseUrl}/r.php?entry_point=login`, { 
        waitUntil: 'load',
        timeout: 30000 
      });
      // Wait for page to be interactive
      await this.page.waitForLoadState('domcontentloaded');
    } catch (error) {
      console.error('Navigation error:', error);
      throw error;
    }
  }

  /**
   * Navigate to home page
   */
  async navigateToHome(): Promise<void> {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill text input field
   */
  async fillTextField(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  /**
   * Get text from an element
   */
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  /**
   * Wait for element to be visible
   */
  async waitForElement(selector: string, timeout = 5000): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'visible', timeout });
  }

  /**
   * Click on element
   */
  async clickElement(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  /**
   * Get current page URL
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Wait for navigation
   */
  async waitForNavigation(): Promise<void> {
    await this.page.waitForNavigation({ waitUntil: 'networkidle' });
  }

  /**
   * Reload page
   */
  async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  /**
   * Get page title
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
