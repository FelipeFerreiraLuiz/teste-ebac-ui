/// <reference types="cypress"/>

describe('funcionalidade: Login', () =>{

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});

    it('De fazer login com sucesso', () =>{
        cy.get('#username').type('luiz.ferreira.lff@gmail.com')
        cy.get('#password').type('200991')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, luiz.ferreira.lff (não é luiz.ferreira.lff? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ferreira@gmail.com')
        cy.get('#password').type('200991')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('luiz.ferreira.lff@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'A senha fornecida para o e-mail luiz.ferreira.lff@gmail.com está incorreta')
        cy.get('.woocommerce-error').should('exist')

    });

})