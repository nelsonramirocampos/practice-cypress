/// <reference types="cypress" />

describe('Suite de ejemplos del comando fixture', () => {

    it('Cargando example', () => {
        //Llamamos al comando fixture, pasandole el nombre del archivo
        //El archivo debe estar en la carpeta fixtures
        cy.fixture('example').then( x => {
            cy.log(x.name)
            cy.log(x.email)
            cy.log(x.body)
        })
    })
})