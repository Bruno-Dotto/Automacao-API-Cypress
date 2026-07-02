
/// <reference types="cypress"/> 
// Essa linha ajuda o VSCode a entender comandos do Cypress.

const dados_agendamento = require('../fixtures/dados_agendamento.json')
// Aqui o código importa um arquivo JSON com dados prontos para teste.

const dados_upadate_parcial_agendamento = require('../fixtures/dados_upadate_parcial_agendamento.json')
//Aqui o código importa um arquivo JSON com dados prontos para teste.

const { GerarPayloadCadastro } = require('../fixtures/gerar_dados_faker')
// Esse arquivo possui uma função que gera dados aleatórios.

describe('Update parcial do agendamento', () => {
    // O describe serve para organizar testes relacionados.

    let token = '' //Armazena o token de autenticação

    //Hooks - O beforeEach executa antes de cada teste.
    beforeEach(() => {
        //Login
        cy.login("admin", "password123").then((results) => { //Usado um Commands para realizar o login
            token = results.body.token
        })
    })
    // o IT Representa um cenário de teste.
    it('Update parcial de agendamento', { tags: ['@smoke', '@regression','@booking'] }, () => {
        // Cadastro de agendamento - Pré condição

        const cadastro_agendamento = GerarPayloadCadastro() // Puxa os dados de agendamento do Fakerjs
        const update_cadastro = GerarPayloadCadastro() // Puxa novos dados do Fakesjs

        cy.cadastrarAgendamento(cadastro_agendamento).then((results) => {
            expect(results.status).to.equal(200)
            const id = results.body.bookingid

            //Update parcial do agendamento 
            cy.atualizarAgendamento(id, update_cadastro, token)
                .then((results) => {
                    expect(results.status).to.equal(200)

                })
        })
    })
})