describe('Comparando dados da lista de produtos com o detalhe do produto', () => {
    beforeEach(() => {
        // Realiza o login antes de cada teste
        cy.login()
    })

    it('Successfully', () => {
        let nameProduct
        let priceProduct

        // Armazena o nome do produto para validações posteriores
        cy.get("a[data-test='item-1-title-link'] div[data-test='inventory-item-name']")
            .then(($nameProd) => {
                nameProduct = $nameProd.text()
                cy.log('Nome do produto: ' + nameProduct);
            });


        //Armazena o valor do produto para validações posteriores
        cy.get('[data-test="inventory-item-price"]').contains('$15.99')
            .then(($priceProd) => {
                priceProduct = $priceProd.text()
                cy.log('Preço do produto: ' + priceProduct)
            })

        //Acessando detalhe do produto para validação
        cy.get("a[data-test='item-1-title-link'] div[data-test='inventory-item-name']")
            .contains('Sauce Labs Bolt T-Shirt').click()

        //Validando nome e preço do produto
        cy.then(() => {
            cy.get('[data-test="inventory-item-name"]').should('have.text', nameProduct)
            cy.get('[data-test="inventory-item-price"]').should('have.text', priceProduct)
            cy.log('Informações da lista de produtos bate com o detalhe do produto')
        })
    })
})

