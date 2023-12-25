/// <reference types="cypress" />

const loginPage = require("../support/pages/login.page");
const data = require("../fixtures/data.json")


describe('Acesse o painel de administração', () => {
    beforeEach(() => {
        cy.visit('/wp-admin')
    })

    it('Deve fazer login com credenciais válidas', () => {
        loginPage.login(data.usuario, data.senha)
        
    });
});