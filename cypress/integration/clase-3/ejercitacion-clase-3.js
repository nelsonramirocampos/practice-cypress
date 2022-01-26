/// <reference types="cypress" />
require('cypress-xpath')

describe('Suite TC con fixture', () => {
    
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')

        cy.fixture('Saucedemo/credenciales').then( cred => {
            this.credenciales = cred
        })
    })


    it('Inicio de sesion correcto', function() {
        // Ingreso a la pagina
        //cy.visit('https://www.saucedemo.com/')

        //cy.fixture('Saucedemo/credenciales').then( cred => {
            cy.xpath("//input[@id='user-name']").type(this.credenciales.standardUser)
            cy.get("#password").type(this.credenciales.password)
            cy.get('#login-button').click()
            cy.get('.app_logo').should('be.visible')
        //})
    })


    it('Usuario con problemas', function() {
        // Ingreso a la pagina
        //cy.visit('https://www.saucedemo.com/')

        //cy.fixture('Saucedemo/credenciales').then( cred => {
            cy.xpath("//input[@id='user-name']").type(this.credenciales.problemUser)
            cy.get("#password").type(this.credenciales.password)
            cy.get('#login-button').click()
        //})
    })
})