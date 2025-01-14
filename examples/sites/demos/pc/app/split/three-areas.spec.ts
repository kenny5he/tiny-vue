import { test, expect } from '@playwright/test'

test('支持配置 3 个区块', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#three-areas')
  await expect(page.getByText('内容 A 区')).toBeVisible()
  await expect(page.getByText('内容 B 区')).toBeVisible()
  await expect(page.getByText('内容 C 区')).toBeVisible()
})
