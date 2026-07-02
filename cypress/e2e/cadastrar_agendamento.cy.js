
/// <reference types="cypress"/>  

const dados_agendamento = require('../fixtures/dados_agendamento.json');
const cadastro_payload = require('../fixtures/gerar_dados_faker');

import { fa, faker } from '@faker-js/faker';

describe('Cadastrar agendamento', { tags: ['@regression', '@booking'] }, () => {

    // Utiliza o Fakerjs para gerar os dados do agendamento

    let payload

    beforeEach(() => {
        payload = cadastro_payload.GerarPayloadCadastro()
    });

    it('Cadrastrar agendamento com sucesso - Dados aleatórios', () => {

        // const payload = {
        //     "firstname": faker.person.firstName(),
        //     "lastname": faker.person.lastName(),
        //     "totalprice": faker.number.int({ min: 100, max: 1000 }),
        //     "depositpaid": true,
        //     "bookingdates": {
        //         "checkin": faker.date.anytime(),
        //         "checkout": faker.date.anytime(),
        //     },
        //     "additionalneeds": faker.lorem.sentence(3),
        // }

        cy.cadastrarAgendamento(payload).then((results) => {
            expect(results.status).to.equal(200);
            expect(results.body.bookingid).not.NaN; //not.NaN para confirmar que ele é um numero e não string
            expect(results.body.booking.firstname).to.equal(payload.firstname);
            expect(results.body.booking.lastname).to.equal(payload.lastname);
        })
    })
    // Forma de fazer sem o Fakerjs, puxa os dados fixos do meu arquivo Fixtures

    // it('Cadrastrar agendamento com sucesso', () => {

    //     cy.request({
    //         method: "POST",
    //         url: "https://restful-booker.herokuapp.com/booking",
    //         body: dados_agendamento,
    //     }).then((results) => {
    //         expect(results.status).to.equal(200);
    //         expect(results.body.bookingid).not.NaN;
    //         expect(results.body.booking.firstname).to.equal(dados_agendamento.firstname);
    //     })
    // })
})
