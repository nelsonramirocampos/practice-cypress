/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

let bodyRegistro = require('./../../../support/contratos/contratoRegistro.json')
let bodyLogin = require('./../../../support/contratos/contratoRegistro.json')

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



Given('el usuario {string} email {string} y password {string}', (userName, userEmail, userPassword) => {
    bodyLogin.name = userName
    bodyLogin.email = userEmail
    bodyLogin.password = userPassword
})

When('llamamos al servicio login', () => {
    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/login",
        body: bodyLogin,
    }).then((response) => {
        const resp_body = JSON.stringify(response.body)
        cy.log(resp_body)

        expect(response.status).to.be.eq(200)

        Cypress.env('TOKEN', response.body.data.Token)
        cy.log('Token: ' + Cypress.env('TOKEN'))
    })
})



Given('el token para el usuario {string} email {string} y password {string}', (userName, userEmail, userPassword) => {
    bodyLogin.name = userName
    bodyLogin.email = userEmail
    bodyLogin.password = userPassword

    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/login",
        body: bodyLogin,
    }).then((response) => {
        const resp_body = JSON.stringify(response.body)
        cy.log(resp_body)

        expect(response.status).to.be.eq(200)

        Cypress.env('TOKEN', response.body.data.Token)
        //cy.log('Token: ' + Cypress.env('TOKEN'))
    })
})


When('llamamos al servicio users', () => {
    cy.request({
        method: "GET",
        url: "http://restapi.adequateshop.com/api/users?page=1",
        headers:{
            "Authorization": 'Bearer ' + Cypress.env('TOKEN')
        }   
    }).then((response) => {
        const resp_body = JSON.stringify(response.body)
        cy.log(resp_body)

        expect(response.status).to.be.eq(200)
    })
})