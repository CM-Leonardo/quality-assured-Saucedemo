describe('Adicionando produtos no carrinho de compra', () => {
    beforeEach(() => {
        cy.login()
    })

    context('Adicionando produto no carrinho pela lista de produto', () => {
        it('Successfully', () => {

            cy.get('button[data-test=\'add-to-cart-sauce-labs-backpack\']').click()
            cy.get('button[data-test=\'add-to-cart-sauce-labs-bike-light\']').click()

            cy.get('a[data-test=\'shopping-cart-link\']').should('contain.text', '2')
        })
    })

    context('Adicionando produto no carrinho pelo detalhe do produto', () => {
        it('Successfully', () => {
            cy.get("a[data-test='item-1-title-link'] div[data-test='inventory-item-name']")
                .contains('Sauce Labs Bolt T-Shirt').click()

            cy.get("button[data-test='add-to-cart']").click()
            cy.get('a[data-test=\'shopping-cart-link\']').should('contain.text', '1')
        })
    })
})