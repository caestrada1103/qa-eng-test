import { test, expect } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';
import { CommonPage } from '../../pages/commonPage';
import { SalesPage } from '@/tests/pages/dashboard/salesPage';

let commonPage: CommonPage;
let salesPage: SalesPage;

function waitForAnimationEnd(locator: Locator) {
    return locator.evaluate(($element) => Promise.all($element.getAnimations().map((animation) => animation.finish())));
}

async function waitPageToBeLoad(page: Page) {
    await page.goto('/');
    await expect(page.locator('.screen_loader')).toBeHidden();
    await waitForAnimationEnd(page.locator('.apexcharts-donut-slice-2').first());
    await page.waitForTimeout(1600);
}

test.describe.configure({ mode: 'parallel' });
test.use({
    viewport: { width: 1946, height: 1957 }, //viewport to match with Figma design for Visual testing
});
test.skip(({ browserName }) => browserName.toString() === 'Mobile Chrome' || browserName.toString() === 'Mobile Safari', 'Visual testing only for Desktop browsers');
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await waitPageToBeLoad(page);
    commonPage = new CommonPage(page);
    salesPage = new SalesPage(page);
});

test.describe('PixelPerfect Desktop', () => {
    test('Revenue', async () => {
        await salesPage.validatePixelsRevenueCard();
    });
    test('Sales By Category', async () => {
        await salesPage.validatePixelsSalesByCategoryCard();
    });
    test('Daily Sales', async () => {
        await salesPage.validatePixelsDailySalesCard();
    });
    test('Summary', async () => {
        await salesPage.validatePixelsSummaryCard();
    });
    test('Recent Activities', async () => {
        await salesPage.validatePixelsRecentActivitiesCard();
    });
    test('Transactions', async () => {
        await salesPage.validatePixelsTransactionCard();
    });
    test('Recent Orders', async () => {
        await salesPage.validatePixelsRecentOrdersCard();
    });
    test('Top Selling Product', async () => {
        await salesPage.validatePixelsTopSellingProductCard();
    });
    test('Wallet Balance', async () => {
        await salesPage.validatePixelsWalletBalanceCard();
    });
    test('Total Orders', async () => {
        await salesPage.validatePixelsTotalOrdersCard();
    });
    test('Full Vertical Home Page', async () => {
        await salesPage.validatePixelsFullPage();
    });
});
