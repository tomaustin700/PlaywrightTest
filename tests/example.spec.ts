import { test, expect } from '@playwright/test';


test('Input_Box_HasValue', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByRole('link', { name: 'Inputs' }).click();


  const box =  page.locator('input[type="number"]')
  await box.fill('123');

  await expect(box).toHaveValue('123');


});

