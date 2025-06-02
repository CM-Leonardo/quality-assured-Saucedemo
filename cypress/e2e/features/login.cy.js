describe('Login Feature', () => {

    context('When using valid credentials', () => {
        it('should login successfully', () => {
            cy.login()

            // Valida se foi direcionado para a página de inventário
            cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)
        })
    })

    context('When using invalid credentials', () => {
        it('should block login and show error message', () => {
            // Executa login com usuário e senha inválidos
            cy.login('user_error', 'password_error')

            // Valida se exibe a mensagem de erro corretamente
            cy.get('[data-test="error"]')
                .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })

})
