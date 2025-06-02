describe('Validating product details against product list', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Should validate that product name and price match between list and product detail', () => {

        // Capture name and price for future validation
        cy.saveTextAsAlias('a[data-test="item-1-title-link"] div[data-test="inventory-item-name"]', 'nameProduct')
        cy.saveContainsTextAsAlias('[data-test="inventory-item-price"]', '$15.99', 'priceProduct')

        // Access product detail page
        cy.get('img[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click()

        // Validate product name and price
        cy.validateInfo('@nameProduct', '[data-test="inventory-item-name"]')
        cy.validateInfo('@priceProduct', '[data-test="inventory-item-price"]')
    })
})


