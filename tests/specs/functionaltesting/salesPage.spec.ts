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
    await page.goto('/');
    await expect(page.locator('.screen_loader')).toBeHidden();
    await waitForAnimationEnd(page.locator('.apexcharts-donut-slice-2').first());
    await waitForAnimationEnd(page.locator('.animate__animated'));
    await waitForAnimationEnd(page.locator('div.apexcharts-canvas').first());
    await page.waitForTimeout(1400);
}

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await waitPageToBeLoad(page);
    commonPage = new CommonPage(page);
    salesPage = new SalesPage(page);
});

test.describe('HomePage', () => {
    test('main navigation', async () => {
        await expect(page).toHaveURL('http://127.0.0.1:3000');
    });

    test('has title', async () => {
        await expect(page.getByText('DashboardSales', { exact: true })).toBeVisible();
    });

    test('All expected card elements exist', async () => {
        await salesPage.elementsExistOnDashboard();
    });

    test('Elements on revenue card', async () => {
        await salesPage.elementsOnRevenueCard();
    });
    test('Elements on sales by category card', async () => {
        await salesPage.elementsOnSalesByCategoryCard();
    });
    test('Elements on daily sales card', async () => {
        await salesPage.elementsOnDailySalesCard();
    });
    test('Elements on summary card', async () => {
        await salesPage.elementsOnSummaryCard();
    });
    test('Elements on recent activities card', async () => {
        await salesPage.elementsOnRecentActivitiesCard();
    });
    test('Elements on transaction card', async () => {
        await salesPage.elementsOnTransactionCard();
    });
    test('Elements on wallet balance card', async () => {
        await salesPage.elementsOnWalletBalanceCard();
    });
    test('Elements on recent orders card', async () => {
        await salesPage.elementsOnWecentOrdersCard();
    });
    test('Elements on top selling product card', async () => {
        await salesPage.elementsOnTopSellingProductCard();
    });
});
