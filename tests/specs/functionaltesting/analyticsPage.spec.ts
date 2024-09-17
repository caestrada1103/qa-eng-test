import { test, expect } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';
import { CommonPage } from '../../pages/commonPage';
import { AnalyticsPage } from '@/tests/pages/dashboard/analyticsPage';

let commonPage: CommonPage;
let analyticsPage: AnalyticsPage;
let page: Page;

function waitForAnimationEnd(locator: Locator) {
    return locator.evaluate(($element) => Promise.all($element.getAnimations().map((animation) => animation.finish())));
}

async function waitPageToBeLoad(page: Page) {
    await expect(page.locator('.screen_loader')).toBeHidden();
    await waitForAnimationEnd(page.locator('.animate__animated'));
    await waitForAnimationEnd(page.locator('div.apexcharts-canvas').nth(2));
    await page.waitForTimeout(1400);
}

test.describe.configure({ mode: 'parallel' });
test.beforeAll(async ({ browser, isMobile }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('/');
    commonPage = new CommonPage(page);
    if (isMobile) {
        await commonPage.openSideMenuMobile();
    }
    await commonPage.clickAnalyticsOfDashboard();
    analyticsPage = new AnalyticsPage(page);
    await waitPageToBeLoad(page);
});

test.describe('Analytics Dashboard', () => {
    test('Url validation', async () => {
        await expect(page).toHaveURL('http://127.0.0.1:3000/analytics');
    });
    test('Has title', async () => {
        await expect(commonPage.currentPageDashboard).toHaveText('Analytics');
    });
    test('Has expected card elements', async () => {
        await analyticsPage.elementsExistOnDashboard();
    });
});
