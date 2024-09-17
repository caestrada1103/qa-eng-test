import { expect, type Locator, type Page } from '@playwright/test';

export class CommonPage {
    readonly page: Page;
    readonly analyticsDashboardMenu: Locator;
    readonly currentPageDashboard: Locator;
    readonly sideDashboardMenu: Locator;
    readonly sideChatMenu: Locator;
    readonly sideMailboxMenu: Locator;
    readonly sideTodoListMenu: Locator;
    readonly sideNotesMenu: Locator;
    readonly sideScrumboardMenu: Locator;
    readonly sideContactsMenu: Locator;
    readonly sideInvoiceMenu: Locator;
    readonly sideCalendarMenu: Locator;
    readonly sideComponentsMenu: Locator;
    readonly sideElementsMenu: Locator;
    readonly sideChartsMenu: Locator;
    readonly sideWidgetsMenu: Locator;
    readonly sideFontIconsMenu: Locator;
    readonly sideDragandDropMenu: Locator;
    readonly sideTablesMenu: Locator;
    readonly sideDataTablesMenu: Locator;
    readonly sideFormsMenu: Locator;
    readonly sideUsersMenu: Locator;
    readonly sidePagesMenu: Locator;
    readonly sideAuthenticationMenu: Locator;
    readonly sideDocumentationMenu: Locator;
    readonly salesDashboardMenu: Locator;
    readonly financeDashboardMenu: Locator;
    readonly cryptoDashboardMenu: Locator;
    readonly burguerSideMenuMobile: Locator;

    constructor(page: Page) {
        this.page = page;
        this.currentPageDashboard = page.locator('.space-x-2').locator(page.locator('span'))
        //Mobile
        this.burguerSideMenuMobile = page.locator('.horizontal-logo > .collapse-icon');
        //Dashboard
        this.sideDashboardMenu = page.getByRole('button', { name: 'Dashboard' })
        this.salesDashboardMenu = page.getByRole('link', { name: 'Sales' });
        this.analyticsDashboardMenu = page.getByRole('link', { name: 'Analytics' });
        this.financeDashboardMenu = page.getByRole('link', { name: 'Finance' });
        this.cryptoDashboardMenu = page.getByRole('link', { name: 'Crypto' });
        // Apps
        this.sideChatMenu = page.getByRole('link', { name: 'Chat' })
        this.sideMailboxMenu = page.getByRole('link', { name: 'Mailbox' })
        this.sideTodoListMenu = page.getByRole('link', { name: 'Todo List' })
        this.sideNotesMenu = page.getByRole('link', { name: 'Notes' })
        this.sideScrumboardMenu = page.getByRole('link', { name: 'Scrumboard' })
        this.sideContactsMenu = page.getByRole('link', { name: 'Contacts' })
        this.sideInvoiceMenu = page.getByRole('button', { name: 'Invoice' })
        //User Interface
        this.sideCalendarMenu = page.getByRole('link', { name: 'Calendar' })
        this.sideComponentsMenu = page.getByRole('button', { name: 'Components' })
        this.sideElementsMenu = page.getByRole('button', { name: 'Elements' })
        this.sideChartsMenu = page.getByRole('link', { name: 'Charts' })
        this.sideWidgetsMenu = page.getByRole('link', { name: 'Widgets' })
        this.sideFontIconsMenu = page.getByRole('link', { name: 'Font Icons' })
        this.sideDragandDropMenu = page.getByRole('link', { name: 'Drag and Drop' })
        //Tables and forms
        this.sideTablesMenu = page.getByRole('link', { name: 'Tables' })
        this.sideDataTablesMenu = page.getByRole('button', { name: 'Data Tables' })
        this.sideFormsMenu = page.getByRole('button', { name: 'Forms' })
        //User And Pages
        this.sideUsersMenu = page.getByRole('button', { name: 'Users' })
        this.sidePagesMenu = page.getByRole('button', { name: 'Pages' })
        this.sideAuthenticationMenu = page.getByRole('button', { name: 'Authentication' })
        //Supports
        this.sideDocumentationMenu = page.getByRole('button', { name: 'Documentation' })
    }

    async openDashboardMenu() {
        await this.sideDashboardMenu.click()
    }
    async openSideMenuMobile() {
        await this.burguerSideMenuMobile.click()
    }
    async clickSalesOfDashboard(){
        await this.openDashboardMenu();
        await this.salesDashboardMenu.click()
    }
    async clickAnalyticsOfDashboard(){
        await this.openDashboardMenu();
        await this.analyticsDashboardMenu.click()
    }
    async clickFinanceOfDashboard(){
        await this.openDashboardMenu();
        await this.financeDashboardMenu.click()
    }
    async clickCryptoOfDashboard(){
        await this.openDashboardMenu();
        await this.cryptoDashboardMenu.click()
    }
    async openInvoiceMenu() {
        await this.sideInvoiceMenu.click()
    }
    async openComponentsMenu() {
        await this.sideComponentsMenu.click()
    }
    async openElementsMenu() {
        await this.sideElementsMenu.click()
    }
    async openDataTablesMenu() {
        await this.sideDataTablesMenu.click()
    }
    async openFormsMenu() {
        await this.sideFormsMenu.click()
    }
    async openUsersMenu() {
        await this.sideUsersMenu.click()
    }
    async openPagesMenu() {
        await this.sidePagesMenu.click()
    }
    async openAuthenticationMenu() {
        await this.sideAuthenticationMenu.click()
    }
    async openDocumentationMenu() {
        await this.sideDocumentationMenu.click()
    }

}