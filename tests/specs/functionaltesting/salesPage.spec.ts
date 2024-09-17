import { test, expect } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';
import { CommonPage } from '../../pages/commonPage';
import { SalesPage } from '@/tests/pages/dashboard/salesPage';

let commonPage: CommonPage;
let salesPage: SalesPage;
let page: Page;

function waitForAnimationEnd(locator: Locator) {
    return locator.evaluate(($element) => Promise.all($element.getAnimations().map((animation) => animation.finish())));
}

async function waitPageToBeLoad(page: Page) {
    await expect(page.locator('.screen_loader')).toBeHidden();
    await waitForAnimationEnd(page.locator('.apexcharts-donut-slice-2').first());
    await waitForAnimationEnd(page.locator('.animate__animated'));
    await waitForAnimationEnd(page.locator('div.apexcharts-canvas').first());
    await page.waitForTimeout(1400);
}

test.describe.configure({ mode: 'parallel' });
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('/');
    commonPage = new CommonPage(page);
    salesPage = new SalesPage(page);
    await waitPageToBeLoad(page);
});

test.describe('Home Page/Sales Dashboard', () => {
    test('Url validation', async () => {
        await expect(page).toHaveURL('http://127.0.0.1:3000');
    });
    test('Has title', async () => {
        await expect(commonPage.currentPageDashboard).toHaveText('Sales');
    });
    test('Has expected card elements', async () => {
        await salesPage.elementsExistOnDashboard();
    });
    test('Revenue card has all elements', async () => {
        await salesPage.elementsOnRevenueCard();
    });
    test('Category card has all elements', async () => {
        await salesPage.elementsOnSalesByCategoryCard();
    });
    test('Daily sales card has all elements', async () => {
        await salesPage.elementsOnDailySalesCard();
    });
    test('Summary card has all elements', async () => {
        await salesPage.elementsOnSummaryCard();
    });
    test('Recent activities card has all elements', async () => {
        await salesPage.elementsOnRecentActivitiesCard();
    });
    test('Transaction card has all elements', async () => {
        await salesPage.elementsOnTransactionCard();
    });
    test('Wallet balance card has all elements', async () => {
        await salesPage.elementsOnWalletBalanceCard();
    });
    test('Recent orders card has all elements', async () => {
        await salesPage.elementsOnRecentOrdersCard();
    });
    test('Top selling product card has all elements', async () => {
        await salesPage.elementsOnTopSellingProductCard();
    });
});
