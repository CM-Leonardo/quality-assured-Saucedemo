import { faker } from '@faker-js/faker'

describe('Validando o funcionamento do fluxo de checkout', () => {
    beforeEach(() => {
        cy.login()
        cy.resetAppStates()
    })
    
    context('Inserindo informações no formulario', () => {
        it('Successfully', () => {

            //gerando dados falsos 
            const checkoutInfos = {
                fistName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                postalCode: faker.string.numeric(6),
                tax: 3.20
            }

            //Salvando informacao do produto a ser adicionado no carrinho
            cy.saveTextAsAlias('a[data-test=\'item-1-title-link\'] div[data-test=\'inventory-item-name\']', 'nameProduct')
            cy.saveConstainsTextAsAlias('[data-test="inventory-item-price"]','$15.99', 'priceProduct')

            //enviando produto pro carrinho e iniciando checkout 
            cy.get('button[data-test=\'add-to-cart-sauce-labs-bolt-t-shirt\']').click()
            cy.get('a[data-test=\'shopping-cart-link\']').click()
            cy.get('[data-test="checkout"]').click()

            //preenchendo informações do checkout 
            cy.get('input[data-test=\'firstName\']').type(checkoutInfos.fistName)
            cy.get('input[data-test=\'lastName\']').type(checkoutInfos.lastName)
            cy.get('input[data-test=\'postalCode\']').type(checkoutInfos.postalCode)

            cy.get('input[data-test=\'continue\']').click()

            //validando dados do produto no checkout 
            cy.validadeInfo('@nameProduct', '[data-test="inventory-item-name"]')
            cy.validadeInfo('@priceProduct', '[data-test="inventory-item-price"]')
            cy.get('[data-test="finish"]').should('have.text', 'Finish')
        })
    })
    
    context('Avançando sem preencher informações do formulario, sistema deve barrar o avanço', () => {
        it('Successfully', () => {
            
        })
    })
})