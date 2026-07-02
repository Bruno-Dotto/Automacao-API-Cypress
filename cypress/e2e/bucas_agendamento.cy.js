
/// <reference types="cypress"/> 

const dados_agendamento = require('../fixtures/dados_agendamento.json')

describe('Buscar agendamento', { tags: ['@regression', '@booking'] }, () => {

    it('Buscar agendamento com sucesso', () => {
        // Cadastro de agendamento - Pré condição
        cy.request({
            method: "POST",
            url: "/booking",
            body: dados_agendamento,
        }).then((results) => {
            expect(results.status).to.equal(200)
            const id = results.body.bookingid
            //Buscar o agendamento  
            cy.request({
                method: "GET",
                url: "/booking/" + id,
            }).then((result) => {
                expect(results.status).to.equal(200)
                expect(results.body.booking.firstname).to.equal(dados_agendamento.firstname);
                expect(results.body.booking.lastname).to.equal(dados_agendamento.lastname);
                expect(results.body.booking.totalprice).to.equal(dados_agendamento.totalprice);
            })
        })
    })

    it('Buscar agendamento inexistente', () => {
        cy.request({
            method: "GET",
            url: "/xpto",
            failOnStatusCode: false
        }).then((result) => {
            expect(result.status).to.equal(404)
        })
    })
})