describe('Comparando dados da lista de produto com o detalhe do produto', () => {
    beforeEach(() => {
        cy.login()
    })
    
    it('Successfully', () => {

        //Captura nome e preço para validação futura
        cy.saveTextAsAlias('a[data-test=\'item-1-title-link\'] div[data-test=\'inventory-item-name\']', 'nameProduct')
        cy.saveConstainsTextAsAlias('[data-test="inventory-item-price"]','$15.99', 'priceProduct')
        
        //Acessa detalhe do produto
        cy.get('img[data-test=\'inventory-item-sauce-labs-bolt-t-shirt-img\']').click()
        
        //Valida informações do produto
        cy.validadeInfo('@nameProduct', '[data-test="inventory-item-name"]')
        cy.validadeInfo('@priceProduct', '[data-test="inventory-item-price"]')
        
    })
})

