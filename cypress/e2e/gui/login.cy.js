describe("Validando ação de login", () => {
    const options = { cacheSession: false} //Definindo que o cache não será reaproveitado

    context("Executando login com credenciais validas", () => {
        it("Succesfully", () => {
            //Dados para execução de login
            const user = Cypress.env('user_name')
            const password = Cypress.env('user_password')

            cy.login(user, password, options)

            //validação se o login foi feito com sucesso
            cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)
        })
    })

    context("Executando login com credenciais invalidas", () => {
        it("Successfully", () => {

            cy.login('user_incorret', 'password_incorret', options)

            //validação se o sistema barrou o login
            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
})
