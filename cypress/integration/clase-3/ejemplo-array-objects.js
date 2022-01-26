/// <reference types="cypress" />
require('cypress-xpath')

const data = require('../../fixtures/Saucedemo/arrayCredenciales.json')

describe('Suite recorriendo un array de objetos', () => {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')
    })

    data.forEach(usuario => {
        it('Test con usuario ' + usuario.title, () => {
            cy.xpath("//input[@id='user-name']").type(usuario.username)
            cy.get("#password").type(usuario.password)
            cy.get('#login-button').click()
            cy.get('.app_logo').should('be.visible')
        })
        
        if(usuario.username === 'problem_user' )
        {
            it.only('Test con solamente usuario problematico', () => {
                cy.xpath("//input[@id='user-name']").type(usuario.username)
                cy.get("#password").type(usuario.password)
                cy.get('#login-button').click()
                cy.get('.app_logo').should('be.visible')
            })
        }
        
    })
})