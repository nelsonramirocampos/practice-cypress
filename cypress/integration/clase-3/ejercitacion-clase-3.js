/// <reference types="cypress" />
require('cypress-xpath')

describe('Suite TC con fixture', () => {
    
    //Por cada test, se ejecuta el beforeEach
    beforeEach(function() {
        //El visitar la pagina, es general para todos los TC
        cy.visit('https://www.saucedemo.com/')

        //Llamamos a fixture para obtener el objeto y colocarlo en la variable cred
        cy.fixture('Saucedemo/credenciales').then( cred => {
            //Realizando this.credenciales, creamos una varible para dicho archivo
            //lo cual, nos permite utilizarlo en los demas TC
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