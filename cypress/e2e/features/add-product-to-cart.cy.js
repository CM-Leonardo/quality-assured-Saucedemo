describe('Adding products to the cart', () => {
    beforeEach(() => {
        cy.login()
        cy.resetAppStates()
    })

    context('Adding a product from the product list', () => {
        it('Should add the product and validate information in the cart', () => {

            // Capture name and price for validation
            cy.saveTextAsAlias('a[data-test="item-1-title-link"] div[data-test="inventory-item-name"]', 'nameProduct')
            cy.saveContainsTextAsAlias('[data-test="inventory-item-price"]', '$15.99', 'priceProduct')

            // Add product to cart
            cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

            // Go to cart page
            cy.get('a[data-test="shopping-cart-link"]').click()

            // Validate product name and price
            cy.validateInfo('@nameProduct', 'div[data-test="inventory-item-name"]')
            cy.validateInfo('@priceProduct', 'div[data-test="inventory-item-price"]')

            // Validate cart badge quantity
            cy.get('span.shopping_cart_badge')
                .should('have.text', '1')
        })
    })

    context('Adding a product from the product detail page', () => {
        it('Should add the product from detail and validate information in the cart', () => {

            // Access product detail page
            cy.get('a[data-test="item-1-title-link"] div[data-test="inventory-item-name"]').click()

            // Capture name and price for validation
            cy.saveTextAsAlias('div[data-test="inventory-item-name"]', 'nameProduct')
            cy.saveTextAsAlias('div[data-test="inventory-item-price"]', 'priceProduct')

            // Add product to cart
            cy.get('button[data-test="add-to-cart"]').click()

            // Go to cart page
            cy.get('a[data-test="shopping-cart-link"]').click()

            // Validate product name and price
            cy.validateInfo('@nameProduct', 'div[data-test="inventory-item-name"]')
            cy.validateInfo('@priceProduct', 'div[data-test="inventory-item-price"]')

            // Validate cart badge quantity
            cy.get('span.shopping_cart_badge')
                .should('have.text', '1')
        })
    })
})
