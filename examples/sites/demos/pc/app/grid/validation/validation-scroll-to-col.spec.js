import { test, expect } from '@playwright/test'

test('触发校验时自动定位到当前校验的单元格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#validation-validation-scroll-to-col')

  const demo = page.locator('#validation-validation-scroll-to-col')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('')
  await demo.getByText('名称').click()
  const lastColumn = demo.getByText('公司简介')
  await lastColumn.scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: '保存' }).click()
  await page.waitForTimeout(200)

  await expect(page.getByRole('cell', { name: 'WWW 科技 YX 公司' })).toBeInViewport()
})
