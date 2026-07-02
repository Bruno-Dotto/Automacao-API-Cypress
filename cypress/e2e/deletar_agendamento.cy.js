
/// <reference types="cypress"/> 

//const dados_agendamento = require('../fixtures/dados_agendamento.json')

const { GerarPayloadCadastro } = require('../fixtures/gerar_dados_faker')

describe('Deletar agendamento', () => {

    let token = '' //Armazena o token de autenticação

    //Hooks
    beforeEach(() => {
        //Login
        cy.login("admin", "password123").then((results) => {
            token = results.body.token
        })
    })

    it('Deletar agendamento com sucesso', { tags: ['@smoke', '@booking'] }, () => {
        // Cadastro de agendamento - Pré condição

        const cadastro_agendamento = GerarPayloadCadastro() // Puxa os dados de agendamento do Fakerjs
        const update_cadastro = GerarPayloadCadastro() // Puxa novos dados do Fakesjs


        cy.cadastrarAgendamento(cadastro_agendamento).then((results) => {
            expect(results.status).to.equal(200)
            const id = results.body.bookingid

            //Deletar o agendamento  
            cy.deletarAgendamento(id, token).then((results) => {
                expect(results.status).to.equal(201)

            })
        })
    })
})