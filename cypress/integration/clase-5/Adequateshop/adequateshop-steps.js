/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

let bodyRegistro = require('./../../../support/contratos/contratoRegistro.json')

Given('el nombre {string} email {string} y password {string}', (userName, userEmail, userPassword) => {
    bodyRegistro.name = userName
    bodyRegistro.email = userEmail
    bodyRegistro.password = userPassword
})

When('llamamos al servicio registration', () => {
    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/registration",
        body: bodyRegistro,
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
    })
})
