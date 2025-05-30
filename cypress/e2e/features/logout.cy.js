describe('Executando funcionalidade de logout', () => {
    beforeEach(() => {
        cy.login()
    })
    it('Successfully', () => {

        cy.get('#react-burger-menu-btn').click()
        cy.get('a[data-test=\'logout-sidebar-link\']').click()
        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
        cy.get('[data-test="login-button"]').should('be.visible')
    })
});