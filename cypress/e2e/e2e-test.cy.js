import { faker } from "@faker-js/faker";

describe('E2E Test: Complete Purchase Flow', () => {
    it('should successfully complete a purchase and logout', () => {
        const checkoutInfos = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            postalCode: faker.string.numeric(6),
            tax: 3.20
        };

        // Perform login
        cy.login();

        // Validate successful login
        cy.url().should('eq', `${Cypress.config('baseUrl')}inventory.html`);

        // Save product information for later validations
        cy.saveTextAsAlias('a[data-test="item-0-title-link"] div[data-test="inventory-item-name"]', 'productName');
        cy.saveContainsTextAsAlias('[data-test="inventory-item-price"]', '$9.99', 'productPrice');

        // Access product details
        cy.get('img[data-test="inventory-item-sauce-labs-bike-light-img"]').click();

        // Validate product details
        cy.validateInfo('@productName', '[data-test="inventory-item-name"]');
        cy.validateInfo('@productPrice', '[data-test="inventory-item-price"]');

        // Add product to cart
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="remove"]').should('be.visible');

        // Access cart
        cy.get('[data-test="shopping-cart-link"]').click();

        // Validate cart details
        cy.validateInfo('@productName', '[data-test="inventory-item-name"]');
        cy.validateInfo('@productPrice', '[data-test="inventory-item-price"]');

        // Proceed to checkout
        cy.get('[data-test="checkout"]').click();

        // Enter checkout information
        cy.get('input[data-test="firstName"]').type(checkoutInfos.firstName);
        cy.get('input[data-test="lastName"]').type(checkoutInfos.lastName);
        cy.get('input[data-test="postalCode"]').type(checkoutInfos.postalCode);

        cy.get('[data-test="continue"]').click();

        // Validate checkout overview
        cy.validateInfo('@productName', '[data-test="inventory-item-name"]');
        cy.validateInfo('@productPrice', '[data-test="inventory-item-price"]');

        // Finish purchase
        cy.get('[data-test="finish"]').click();

        cy.get('[data-test="complete-header"]')
            .should('contain.text', 'Thank you for your order!');

        // Open side menu and perform logout
        cy.get('#react-burger-menu-btn').click();
        cy.get('a[data-test="logout-sidebar-link"]').click();

        // Validate return to login page
        cy.url().should('eq', `${Cypress.config('baseUrl')}`);
        cy.get('[data-test="login-button"]').should('be.visible');
    });
});
