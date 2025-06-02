describe('Validating logout functionality', () => {
    beforeEach(() => {
        // Realiza login antes de cada cenário
        cy.login()
    })

    it('Should logout successfully and return to login page', () => {
        // Abre o menu lateral
        cy.get('#react-burger-menu-btn').click()

        // Clica no botão de logout
        cy.get('a[data-test="logout-sidebar-link"]').click()

        // Valida se retornou para a tela de login
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
        cy.get('[data-test="login-button"]').should('be.visible')
    })
})
