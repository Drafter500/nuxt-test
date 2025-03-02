import { test, expect } from '@playwright/test';


test('can edit post', async ({ page }) => {
  // 1. Visit the root page
  await page.goto('http://localhost:3000/');

  // 2. Click the "Edit" link in the 3rd row of the table
  const thirdRow = page.locator('table tr').nth(2);
  await thirdRow.getByRole('link', { name: 'Edit' }).click();

  // 3. Verify that the edit page is opened (assuming the URL changes)
  await expect(page).toHaveURL(/\/posts\/\d+/);

  const putRequestPromise = page.waitForRequest(
    (req) => req.method() === 'PUT' && req.url().includes('/api/posts/'),
  );

  // 4. Modify the input with title name
  const titleInput = page.locator('input[name="title"]');
  await titleInput.fill('New Title');

  // 5. Submit the form
  await page.locator('button:has-text("Save changes")').click();

  // 6. Assets request is made with updates
  const request = await putRequestPromise;
  const requestBody = await request.postDataJSON();
  expect(requestBody).toMatchObject({title: 'New Title'});

  // 7. Check that the page navigated back to the root
  await expect(page).toHaveURL('http://localhost:3000/');
});


