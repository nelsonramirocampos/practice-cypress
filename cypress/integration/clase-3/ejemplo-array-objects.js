/// <reference types="cypress" />
require('cypress-xpath')

const data = require('../../fixtures/Saucedemo/arrayCredenciales.json')

describe('Suite recorriendo un array de objetos', () => {

    //Por cada test, se ejecuta el beforeEach
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')
    })

    //data es un array que contiene los objetos
    data.forEach(usuario => {

        //usuario, es una variable que pasa a ser cada objeto del array
        it('Test con usuario ' + usuario.title, () => {
            cy.xpath("//input[@id='user-name']").type(usuario.username)
            cy.get("#password").type(usuario.password)
            cy.get('#login-button').click()
            cy.get('.app_logo').should('be.visible')
        })
        
        //Del archivo arrayCredenciales.json tenemos dos objetos y queremos usar uno de los dos
        //podemos usar un if
        if(usuario.username === 'problem_user' )
        {
            it('Test con solamente usuario problematico', () => {
                cy.xpath("//input[@id='user-name']").type(usuario.username)
                cy.get("#password").type(usuario.password)
                cy.get('#login-button').click()
                cy.get('.app_logo').should('be.visible')
            })
        }
        
    })
})