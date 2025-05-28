describe("Validando login com dados validos", () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')

    it("Succesfully", () => {
        cy.visit('/')

        cy.get(`input[data-test='username']`).type(user)
        cy.get(`input[data-test='password']`).type(password)
        cy.get(`input[data-test='login-button']`).click()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)
    })
})