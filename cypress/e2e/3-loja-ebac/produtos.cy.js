/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.get('.product-block')
          //.first()
          //.last()
          //.eq(2)
          .contains('Aero Daily Fitness Tee')
          .click()

          cy.get('#tab-title-additional_information > a').should('contain' , 'Informação adicional')

    });

    it('Deve selecionar um produto da lista', () => {
        
    });
});