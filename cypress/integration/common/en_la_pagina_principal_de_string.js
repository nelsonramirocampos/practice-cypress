import { Given } from "cypress-cucumber-preprocessor/steps";
const report = require('multiple-cucumber-html-reporter');

Given('en la pagina principal de {string}', (url) => {
    cy.visit(url).screenshot()
})