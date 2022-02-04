/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";


Given('el nombre {string} email {string} y password {string}', (userName, userEmail, userPassword) => {
    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/registration",
        body:{
            "name": userName,
            "email": userEmail,
            "password": userPassword
        }
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
    })
})

When('llamamos al servicio registration', () => {

})
