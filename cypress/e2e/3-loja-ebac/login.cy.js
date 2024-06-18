/// <reference types="cypress"/>

describe('funcionalidade: Login', () =>{

    it('De fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('luiz.ferreira.lff@gmail.com')
        cy.get('#password').type('200991')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, luiz.ferreira.lff (não é luiz.ferreira.lff? Sair)')
    })


})