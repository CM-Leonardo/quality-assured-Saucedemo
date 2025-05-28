// Comando de login que permite salvar a sessão entre testes.
// No teste de login, este comando sempre será executado para garantir que a autenticação funcione corretamente.
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
) => {
    const login = () => {
        cy.visit('/')

        //preenchendo o formulario de login e executa a autenticação
        cy.get(`input[data-test='username']`).type(user)
        cy.get(`input[data-test='password']`).type(password)
        cy.get(`input[data-test='login-button']`).click()
    }

    // Função que valida se a sessão ainda está ativa.
    // Caso a sessão seja perdida, a aplicação redireciona para a tela de login.
    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 })
            .should('not.eq', 'https://www.saucedemo.com/')// Confirma que não está na tela de login
    }

    /// Opções para o cache de sessão: permite o reaproveitamento entre specs e define a função de validação.
    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    // Se o cache estiver habilitado, a sessão será armazenada com `cy.session`.
    // Caso contrário, o login será executado sempre que este comando for chamado.
    if (cacheSession){
        cy.session(user, login, options)
    }else {
        login()
    }
})