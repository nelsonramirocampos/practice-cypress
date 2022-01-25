/// <reference types="cypress" />
require('cypress-xpath')


describe('Suite Test Case Class Two', () => {

    it('Inicio de sesion correcto', () => {
        // Ingreso a la pagina
        cy.visit('https://www.saucedemo.com/')

        //Busco los elementos
        // por xpath
        //notar que se importa require('cypress-xpath') para usar el command cy.xpath en vez de cy.get
        cy.xpath("//input[@id='user-name']").type('standard_user')
        
        cy.get("#password").type('secret_sauce')

        //Presiono el boton de login
        cy.get('#login-button').click()

        //Valido que el app logo sea visible
        cy.get('.app_logo').should('be.visible')
    })


    it('Inicio de sesion incorrecto - falta password', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.xpath("//input[@id='user-name']").type('standard_user')

        cy.get('#login-button').click()

        //Validamos que el contenedor el error sea visible
        cy.xpath("//div[@class='error-message-container error']").should('be.visible')

        //Se valida que contenga todo el texto en el mensaje de error
        cy.xpath("//h3[contains(.,'Epic sadface: Password is required')]").should('have.text', ' sadface: Password is required')
    })

    it('Inicio de sesion incorrecto - falta usuario', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get("#password").type('secret_sauce')

        cy.get('#login-button').click()

        cy.xpath("//div[@class='error-message-container error']").should('be.visible')

        cy.xpath("//h3[contains(.,'Epic sadface: Username is required')]").should('contain.text', 'Username is required')
    })
})