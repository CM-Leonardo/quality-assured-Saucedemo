describe('Executando funcionalidade de logout', () => {
    beforeEach(() => {
        cy.login()
    })
    it('Successfully', () => {
        cy.logout()
        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
        cy.get('[data-test="login-button"]').should('be.visible')
    })
});