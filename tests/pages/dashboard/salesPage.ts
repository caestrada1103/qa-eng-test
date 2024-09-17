import { expect, type Locator, type Page } from '@playwright/test';
import { CommonPage } from '../commonPage';

let commonPage: CommonPage;

export class SalesPage {
    readonly page: Page;
    readonly revenueCard: Locator;
    readonly salesByCategoryCard: Locator;
    readonly dailySalesCard: Locator;
    readonly summaryCard: Locator;
    readonly totalOrdersCard: Locator;
    readonly recentActivitiesCard: Locator;
    readonly transactionCard: Locator;
    readonly walletBalanceCard: Locator;
    readonly recentOrdersCard: Locator;
    readonly topSellingProductCard: Locator;

    constructor(page: Page) {
        this.page = page;
        commonPage = new CommonPage(page);
        this.revenueCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Revenue' }) });
        this.salesByCategoryCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Sales By Category' }) });
        this.dailySalesCard = page.locator('div.panel', { has: page.locator('text="Daily Sales"') });
        this.summaryCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Summary' }) });
        this.totalOrdersCard = page.locator('.mb-6').nth(1).locator('div.p-0').first();
        this.recentActivitiesCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Recent Activities' }) });
        this.transactionCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Transactions' }) });
        this.walletBalanceCard = page.locator('div.panel', { has: page.getByText('Wallet Balance') });
        this.recentOrdersCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Recent Orders' }) });
        this.topSellingProductCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Top Selling Product' }) });
    }

    async elementsExistOnDashboard() {
        await expect(this.revenueCard).toHaveCount(1);
        await expect(this.salesByCategoryCard).toHaveCount(1);
        await expect(this.dailySalesCard).toHaveCount(1);
        await expect(this.summaryCard).toHaveCount(1);
        await expect(this.totalOrdersCard).toHaveCount(1);
        await expect(this.recentActivitiesCard).toHaveCount(1);
        await expect(this.transactionCard).toHaveCount(1);
        await expect(this.walletBalanceCard).toHaveCount(1);
        await expect(this.recentOrdersCard).toHaveCount(1);
        await expect(this.topSellingProductCard).toHaveCount(1);
    }

    async elementsOnRevenueCard() {
        await expect(this.revenueCard.getByRole('heading', { name: 'Revenue' })).toHaveCount(1);
        await expect(this.revenueCard.getByText('Total Profit $')).toHaveCount(1);
        await expect(
            this.revenueCard
                .locator('div')
                .filter({ hasText: /^Revenue$/ })
                .getByRole('button')
        ).toHaveCount(1);
        await expect(this.revenueCard.getByText('IncomeExpenses')).toHaveCount(1);
        await expect(this.revenueCard.locator('.rounded-lg > div').first()).toHaveCount(1);
    }
    async elementsOnSalesByCategoryCard() {
        await expect(this.salesByCategoryCard.getByRole('heading', { name: 'Sales By Category' })).toHaveCount(1);
        await expect(this.salesByCategoryCard.getByText('Apparel')).toHaveCount(1);
        await expect(this.salesByCategoryCard.getByText('Sports')).toHaveCount(1);
        await expect(this.salesByCategoryCard.getByText('Others', { exact: true })).toHaveCount(1);
    }
    async elementsOnDailySalesCard() {
        await expect(this.dailySalesCard.locator('.grid > svg').first()).toHaveCount(1);
        await expect(this.dailySalesCard.getByRole('heading', { name: 'Daily Sales Go to columns for' })).toHaveCount(1);
        await expect(this.dailySalesCard.getByText('Go to columns for details.')).toHaveCount(1);
        await expect(this.dailySalesCard.locator('.rounded-lg').first()).toHaveCount(1);
    }
    async elementsOnSummaryCard() {
        await expect(this.summaryCard.getByRole('heading', { name: 'Summary' })).toHaveCount(1);
        await expect(
            this.summaryCard
                .locator('div')
                .filter({ hasText: /^Summary$/ })
                .getByRole('button')
        ).toHaveCount(1);
        await expect(this.summaryCard.getByText('Income$')).toHaveCount(1);
        await expect(this.summaryCard.getByText('Profit$')).toHaveCount(1);
        await expect(this.summaryCard.getByText('Expenses$')).toHaveCount(1);
        await expect(this.summaryCard.locator('.space-y-9').locator('.items-center')).toHaveCount(3);
    }
    async elementsOnRecentActivitiesCard() {
        await expect(this.recentActivitiesCard.getByRole('heading', { name: 'Recent Activities' })).toHaveCount(1);
        await expect(this.recentActivitiesCard.locator('.badge').first()).toHaveCount(1);
        await expect(this.recentActivitiesCard.getByText('Send Mail to HR and Admin').first()).toHaveCount(1);
        await expect(this.recentActivitiesCard.getByRole('button', { name: 'View All' })).toHaveCount(1);
        await expect(this.recentActivitiesCard.getByText('Rebooted Server').nth(1)).toHaveCount(1);
        await expect(this.recentActivitiesCard.locator('.cursor-pointer').locator('.group')).toHaveCount(14);
    }
    async elementsOnTransactionCard() {
        await expect(this.transactionCard.getByRole('heading', { name: 'Transactions' })).toHaveCount(1);
        await expect(
            this.transactionCard
                .locator('div')
                .filter({ hasText: /^Transactions$/ })
                .getByRole('button')
        ).toHaveCount(1);
        await expect(this.transactionCard.getByText('SP', { exact: true })).toHaveCount(1);
        await expect(this.transactionCard.getByText('DA', { exact: true })).toHaveCount(1);
        await expect(this.transactionCard.getByText('Daisy Anderson')).toHaveCount(1);
        await expect(this.transactionCard.locator('.space-y-6').locator('.flex')).toHaveCount(6);
    }
    async elementsOnWalletBalanceCard() {
        await expect(this.walletBalanceCard.getByText('Wallet Balance')).toHaveCount(1);
        await expect(this.walletBalanceCard.getByRole('heading', { name: '$' })).toHaveCount(1);
        await expect(this.walletBalanceCard.getByText('Received$')).toHaveCount(1);
        await expect(this.walletBalanceCard.getByText('Spent$')).toHaveCount(1);
        await expect(this.walletBalanceCard.getByText('Netflix$')).toHaveCount(1);
        await expect(this.walletBalanceCard.getByText('BlueHost VPN$')).toHaveCount(1);
        await expect(this.walletBalanceCard.locator('div.mb-6')).toHaveCount(1);
        await expect(this.walletBalanceCard.locator('div.mb-6').getByRole('button')).toHaveCount(1);
    }
    async elementsOnRecentOrdersCard() {
        await expect(this.recentOrdersCard.locator('div').filter({ hasText: /^Recent Orders$/ })).toHaveCount(1);
        await expect(this.recentOrdersCard.getByRole('cell', { name: 'Customer' })).toHaveCount(1);
        await expect(this.recentOrdersCard.getByRole('cell', { name: 'Product' }).first()).toHaveCount(1);
        await expect(this.recentOrdersCard.getByRole('cell', { name: 'Invoice' })).toHaveCount(1);
        await expect(this.recentOrdersCard.getByRole('cell', { name: 'Price' }).first()).toHaveCount(1);
        await expect(this.recentOrdersCard.locator('.table-responsive')).toHaveCount(1);
        await expect(this.recentOrdersCard.locator('.table-responsive').locator('tr')).toHaveCount(6);
    }
    async elementsOnTopSellingProductCard() {
        await expect(this.topSellingProductCard.getByRole('heading', { name: 'Top Selling Product' })).toHaveCount(1);
        await expect(this.topSellingProductCard.getByRole('cell', { name: 'Product' })).toHaveCount(1);
        await expect(this.topSellingProductCard.getByRole('cell', { name: 'Price' })).toHaveCount(1);
        await expect(this.topSellingProductCard.getByRole('cell', { name: 'Discount' })).toHaveCount(1);
        await expect(this.topSellingProductCard.getByRole('cell', { name: 'Sold' })).toHaveCount(1);
        await expect(this.topSellingProductCard.getByRole('cell', { name: 'Source' })).toHaveCount(1);
        await expect(this.topSellingProductCard.locator('.table-responsive')).toHaveCount(1);
        await expect(this.topSellingProductCard.locator('.table-responsive').locator('.group')).toHaveCount(5);
    }

    async validatePixelsRevenueCard() {
        await expect(this.revenueCard).toHaveScreenshot();
    }
    async validatePixelsSalesByCategoryCard() {
        await expect(this.salesByCategoryCard).toHaveScreenshot();
    }
    async validatePixelsDailySalesCard() {
        await expect(this.dailySalesCard).toHaveScreenshot();
    }
    async validatePixelsSummaryCard() {
        await expect(this.summaryCard).toHaveScreenshot();
    }
    async validatePixelsTotalOrdersCard() {
        await expect(this.totalOrdersCard).toHaveScreenshot();
    }
    async validatePixelsRecentActivitiesCard() {
        await expect(this.recentActivitiesCard).toHaveScreenshot();
    }
    async validatePixelsTransactionCard() {
        await expect(this.transactionCard).toHaveScreenshot();
    }
    async validatePixelsWalletBalanceCard() {
        await expect(this.walletBalanceCard).toHaveScreenshot();
    }
    async validatePixelsRecentOrdersCard() {
        await expect(this.recentOrdersCard).toHaveScreenshot();
    }
    async validatePixelsTopSellingProductCard() {
        await expect(this.topSellingProductCard).toHaveScreenshot();
    }
    async validatePixelsFullPage() {
        await commonPage.openDashboardMenu();
        await expect(this.page).toHaveScreenshot();
    }
}
