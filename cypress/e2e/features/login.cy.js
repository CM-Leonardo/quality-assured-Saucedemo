describe('Validando ação de login', () => {
    const options = { cacheSession: false} //Definindo que o cache não será reaproveitado

    context('Executando login com credenciais validas', () => {
        it('Succesfully', () => {
            cy.login()

            //validação se o login foi feito com sucesso
            cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)
        })
    })

    context('Executando login com credenciais invalidas, sistema deve barrar a entrada', () => {
        it('Successfully', () => {
            
            cy.login('user_error', 'password_error')

            //validação se o sistema barrou o login
            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
})
