Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    cy.visit('/')
    
    cy.get(`input[data-test='username']`).type(user)
    cy.get(`input[data-test='password']`).type(password)
    cy.get(`input[data-test='login-button']`).click()

})

Cypress.Commands.add('resetAppStates', () => {
    //Reseta o estado do carrinho
    cy.get('#react-burger-menu-btn').click()
    cy.get('a[data-test=\'reset-sidebar-link\']').click()
    cy.get('#react-burger-cross-btn').click()
})

Cypress.Commands.add('saveTextAsAlias', (selector, aliasName) => {
    cy.get(selector)
        .invoke('text')
        .then((text) => {
            cy.wrap(text.trim()).as(aliasName)
        })
})

Cypress.Commands.add('saveConstainsTextAsAlias', (selector, containsText, aliasName) => {
    cy.get(selector)
        .contains(containsText)
        .invoke('text')
        .then((text) => {
            cy.wrap(text.trim()).as(aliasName)
        })
})

Cypress.Commands.add('validadeInfo', (nameAlias, selector) => {
    cy.get(nameAlias).then((value) => {
        cy.get(selector)
            .should('have.text', value.trim())
    })
})