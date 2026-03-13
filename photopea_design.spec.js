import { test, expect } from '@playwright/test';

test('Rocketium Photopea Automation', async ({ page }) => {

  // Open Photopea
  await page.goto('https://www.photopea.com/');
  await page.getByRole('button', { name: 'Start using Photopea' }).first().click();

  // Create new canvas
  await page.getByRole('button', { name: 'File' }).click();
  await page.getByText('New...').click();

  await page.getByRole('textbox', { name: 'Width' }).fill('1280');
  await page.getByRole('textbox', { name: 'Height' }).fill('960');

  await page.getByLabel('Background').selectOption('2'); // Transparent
  await page.getByRole('button', { name: 'Create' }).click();

  // Draw rectangle (RED)
  await page.getByRole('button', { name: 'Rectangle (U)' }).click();

  await page.locator('canvas').first().click({
    position: { x: 200, y: 200 }
  });

  await page.getByRole('textbox', { name: 'Width:' }).fill('600');
  await page.getByRole('textbox', { name: 'Height:' }).fill('750');

  await page.getByRole('button', { name: 'OK' }).click();

  // Add text "Hello"
  await page.getByRole('button', { name: 'Type Tool (T)' }).click();

  await page.locator('canvas').first().click({
    position: { x: 350, y: 150 }
  });

  await page.locator('textarea').fill('Hello');

  await page.getByRole('textbox', { name: 'Size:' }).fill('120 px');
  await page.getByRole('textbox', { name: 'Size:' }).press('Enter');

  // Change H color to white
  await page.locator('textarea').press('Shift+ArrowLeft');
  await page.locator('.fitem.colorsample').click();
  await page.locator('.colorsample').first().click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Add text "World"
  await page.getByRole('button', { name: 'Type Tool (T)' }).click();

  await page.locator('canvas').first().click({
    position: { x: 420, y: 250 }
  });

  await page.locator('textarea').fill('World');

  await page.getByRole('textbox', { name: 'Size:' }).fill('150 px');
  await page.getByRole('textbox', { name: 'Size:' }).press('Enter');

  // Change W color
  await page.locator('textarea').press('Shift+ArrowLeft');
  await page.locator('.fitem.colorsample').click();
  await page.locator('.colorsample').first().click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Basic validation
  await expect(page).toHaveTitle(/Photopea/);

});