Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    cy.visit('/')
    
    cy.get(`input[data-test='username']`).type(user)
    cy.get(`input[data-test='password']`).type(password)
    cy.get(`input[data-test='login-button']`).click()

})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('a[data-test=\'logout-sidebar-link\']').click()
})