import { Given } from "cypress-cucumber-preprocessor/steps";


Given('en la pagina principal de {string}', (url) => {
    cy.visit(url)
})