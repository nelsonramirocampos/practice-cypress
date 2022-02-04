import { Given } from "cypress-cucumber-preprocessor/steps";
const report = require('multiple-cucumber-html-reporter');


var fs = require('fs');
var params = {
    "id":5,
    "name":"Rey águila ceja blanca"
}

Given('en la pagina principal de {string}', (url) => {
    cy.visit(url).screenshot()
})

