describe('Adicionando produtos no carrinho', () => {
    beforeEach(() => {
        cy.login()
        cy.resetAppStates()
    })
    
    context('Adicionando produto no carrinho pela lista de produtos', () => {
        it('Successfully', () => {

            // Captura nome e preço
            cy.saveTextAsAlias('a[data-test=\'item-1-title-link\'] div[data-test=\'inventory-item-name\']', 'nameProduct')
            cy.saveConstainsTextAsAlias('[data-test="inventory-item-price"]','$15.99', 'priceProduct')

            // Adiciona ao carrinho
            cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

            // Acessa o carrinho
            cy.get('a[data-test="shopping-cart-link"]').click()
            
            //Validando informações do produto
            cy.validadeInfo('@nameProduct', 'div[data-test="inventory-item-name"]')
            cy.validadeInfo('@priceProduct', 'div[data-test="inventory-item-price"]')

            // Valida badge do carrinho
            cy.get('span.shopping_cart_badge')
                .should('have.text', '1')
        })
    })

    
    
    context('Adicionando produto no carrinho pelo detalhe do produto', () => {
        it('Successfully', () => {
            
            cy.get('a[data-test=\'item-1-title-link\'] div[data-test=\'inventory-item-name\']').click()
            
            cy.saveTextAsAlias('div[data-test=\'inventory-item-name\']', 'nameProduct')
            cy.saveTextAsAlias('div[data-test=\'inventory-item-price\']', 'priceProduct')
            
            cy.get('button[data-test=\'add-to-cart\']').click()
            cy.get('a[data-test="shopping-cart-link"]').click()

            //Validando informações do produto
            cy.validadeInfo('@nameProduct', 'div[data-test="inventory-item-name"]')
            cy.validadeInfo('@priceProduct', 'div[data-test="inventory-item-price"]')

            // Valida badge do carrinho
            cy.get('span.shopping_cart_badge')
                .should('have.text', '1')
        })
    })
})