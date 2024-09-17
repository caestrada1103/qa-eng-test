import { expect, type Locator, type Page } from '@playwright/test';

export class AnalyticsPage {
    readonly page: Page;
    readonly statisticsCard: Locator;
    readonly expensesCard: Locator;
    readonly totalBalanceCard: Locator;
    readonly uniqueVisitorsCard: Locator;
    readonly activityLogCard: Locator;
    readonly visitorsbyBrowserCard: Locator;
    readonly followersCard: Locator;
    readonly referralCard: Locator;
    readonly engagementCard: Locator;
    readonly feedbackCard: Locator;
    readonly devBootcampCard: Locator;
    readonly figmaToDoCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.statisticsCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Statistics' }) });
        this.expensesCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Expenses' }) });
        this.totalBalanceCard = page.locator('div.panel', { has: page.locator('text="Total Balance"') });
        this.uniqueVisitorsCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Unique Visitors' }) });
        this.activityLogCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Activity Log' }) });
        this.visitorsbyBrowserCard = page.locator('div.panel', { has: page.getByRole('heading', { name: 'Visitors by Browser' }) });
        this.followersCard = page.locator('.mb-6').nth(2).locator('div.p-0').first();
        this.referralCard = page.locator('.mb-6').nth(2).locator('div.p-0').nth(1);
        this.engagementCard = page.locator('.mb-6').nth(2).locator('div.p-0').last();
        this.feedbackCard = page.locator('.gap-6').nth(3).locator('.panel').first();
        this.devBootcampCard = page.locator('.gap-6').nth(3).locator('.panel').nth(1);
        this.figmaToDoCard = page.locator('.gap-6').nth(3).locator('.panel').last();
    }

    async elementsExistOnDashboard() {
        await expect(this.statisticsCard).toHaveCount(1);
        await expect(this.expensesCard).toHaveCount(1);
        await expect(this.totalBalanceCard).toHaveCount(1);
        await expect(this.uniqueVisitorsCard).toHaveCount(1);
        await expect(this.activityLogCard).toHaveCount(1);
        await expect(this.visitorsbyBrowserCard).toHaveCount(1);
        await expect(this.followersCard).toHaveCount(1);
        await expect(this.referralCard).toHaveCount(1);
        await expect(this.engagementCard).toHaveCount(1);
        await expect(this.feedbackCard).toHaveCount(1);
        await expect(this.devBootcampCard).toHaveCount(1);
        await expect(this.figmaToDoCard).toHaveCount(1);
    }
}
