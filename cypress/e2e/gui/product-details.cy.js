describe('Acessando detalhes do produto, dados batem?', () => { 
    beforeEach(() => {
        cy.login()
    })
    it('Successfully', () => {
        cy.get('a[data-test=\'item-1-title-link\'] div[data-test=\'inventory-item-name\']')
            .contains('Sauce Labs Bolt T-Shirt').within(() => {
                cy.get('a[data-test=\'item-1-title-link\'] div[data-test=\'inventory-item-name\']')
                    .invoke('text').as('productName')
            
        })
    })
})