/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
require('cypress-xpath')

/*
Given('en la pagina principal de {string}', (url) => {
    cy.visit(url)
})
*/

When('ingreso el nombre de usuario {string}', (userName) => {
    cy.xpath("//input[@id='user-name']").type(userName)
})

When('ingreso el password {string}', (userPassword) => {
    cy.get("#password").type(userPassword)
})

When('presiono en el boton ingresar', () => {
    cy.get('#login-button').click()
})

Then('visualizo el logo de la pagina', () => {
    cy.get('.app_logo').should('be.visible')
})