import { faker } from '@faker-js/faker'

describe('Validating checkout flow functionality', () => {
    beforeEach(() => {
        cy.login()
        cy.resetAppStates()
    })

    context('Filling out the checkout form', () => {
        it('Should successfully complete checkout with valid information', () => {

            // Generating fake data 
            const checkoutInfos = {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                postalCode: faker.string.numeric(6),
                tax: 3.20
            }

            // Saving product information to validate later
            cy.saveTextAsAlias('a[data-test="item-1-title-link"] div[data-test="inventory-item-name"]', 'nameProduct')
            cy.saveContainsTextAsAlias('[data-test="inventory-item-price"]', '$15.99', 'priceProduct')

            // Adding product to cart and initiating checkout
            cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
            cy.get('a[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="checkout"]').click()

            // Filling in checkout information
            cy.get('input[data-test="firstName"]').type(checkoutInfos.firstName)
            cy.get('input[data-test="lastName"]').type(checkoutInfos.lastName)
            cy.get('input[data-test="postalCode"]').type(checkoutInfos.postalCode)

            cy.get('input[data-test="continue"]').click()

            // Validating product data in checkout
            cy.validateInfo('@nameProduct', '[data-test="inventory-item-name"]')
            cy.validateInfo('@priceProduct', '[data-test="inventory-item-price"]')

            // Validating finish button
            cy.get('[data-test="finish"]').should('have.text', 'Finish')
        })
    })

    context('Trying to proceed without filling the form', () => {
        it('Should block progress and display an error message', () => {

            // Adding product to cart and initiating checkout
            cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
            cy.get('a[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="checkout"]').click()

            // Attempt to proceed without filling the form
            cy.get('input[data-test="continue"]').click()

            // Validating error message
            cy.get('[data-test="error"]')
                .should('have.text', 'Error: First Name is required')
        })
    })
})
