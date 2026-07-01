// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (user, password) => {
    cy.request({
        method: "POST",
        url: "/auth",
        body: {
            username: "admin",
            password: "password123"
        }
    })
})

Cypress.Commands.add("cadastrarAgendamento", (payload) => {
    cy.request({
        method: "POST",
        url: "/booking",
        body: payload,
    })
})

Cypress.Commands.add("atualizarAgendamento", (id, payload, token) => {
    cy.request({
        method: "PATCH",
        url: "/booking/" + id,
        body: payload,
        headers: {
            'Cookie': `token=${token}`
        }
    })
})

Cypress.Commands.add("deletarAgendamento", (id, token) => {
    cy.request({
        method: "DELETE",
        url: "/booking/" + id,
        headers: {
            'Cookie': `token=${token}`
        }
    })
})