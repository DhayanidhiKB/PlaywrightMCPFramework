import { Page } from '@playwright/test';

/**
 * Helper utilities for test execution
 */

/**
 * Check if a field displays an error message
 */
export async function getErrorMessage(page: Page, fieldSelector: string): Promise<string | null> {
  const errorLocator = page.locator(`${fieldSelector} + .error, ${fieldSelector} ~ .error, [role="alert"]`);
  if (await errorLocator.isVisible()) {
    return await errorLocator.textContent();
  }
  return null;
}

/**
 * Wait for element to disappear
 */
export async function waitForElementToDisappear(page: Page, selector: string, timeout = 5000): Promise<void> {
  await page.locator(selector).waitFor({ state: 'hidden', timeout });
}

/**
 * Get count of elements
 */
export async function getElementCount(page: Page, selector: string): Promise<number> {
  return await page.locator(selector).count();
}

/**
 * Check if field has value
 */
export async function getFieldValue(page: Page, selector: string): Promise<string> {
  return await page.locator(selector).inputValue();
}

/**
 * Clear field value
 */
export async function clearField(page: Page, selector: string): Promise<void> {
  await page.locator(selector).clear();
}

/**
 * Type text slowly (character by character)
 */
export async function typeSlowly(page: Page, selector: string, text: string, delay = 50): Promise<void> {
  const locator = page.locator(selector);
  await locator.focus();
  for (const char of text) {
    await locator.type(char, { delay });
  }
}

/**
 * Check if form field is required
 */
export async function isFieldRequired(page: Page, fieldSelector: string): Promise<boolean> {
  const field = page.locator(fieldSelector);
  return await field.evaluate((el: any) => el.required === true);
}

/**
 * Get accessible name of element
 */
export async function getAccessibleName(page: Page, selector: string): Promise<string> {
  return await page.locator(selector).evaluate((el: any) => el.getAttribute('aria-label') || el.textContent || '');
}

/**
 * Screenshot for debugging
 */
export async function takeScreenshot(page: Page, filename: string): Promise<void> {
  await page.screenshot({ path: `./test-results/${filename}.png`, fullPage: true });
}

/**
 * Get all visible text content from page
 */
export async function getPageContent(page: Page): Promise<string> {
  return await page.textContent('body') || '';
}

/**
 * Check if element is enabled
 */
export async function isElementEnabled(page: Page, selector: string): Promise<boolean> {
  return await page.locator(selector).isEnabled();
}

/**
 * Wait for element to be enabled
 */
export async function waitForElementToBeEnabled(page: Page, selector: string, timeout = 5000): Promise<void> {
  await page.locator(selector).waitFor({ state: 'attached', timeout });
  let isEnabled = await page.locator(selector).isEnabled();
  const startTime = Date.now();
  
  while (!isEnabled && Date.now() - startTime < timeout) {
    await page.waitForTimeout(100);
    isEnabled = await page.locator(selector).isEnabled();
  }
}
