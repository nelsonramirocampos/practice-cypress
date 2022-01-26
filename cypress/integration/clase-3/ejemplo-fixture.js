/// <reference types="cypress" />

describe('Suite de ejemplos del comando fixture', () => {

    it('Cargando example', () => {
        
        cy.fixture('example').then( x => {
            cy.log(x.name)
            cy.log(x.email)
            cy.log(x.body)
        })
    })
})