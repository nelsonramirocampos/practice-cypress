/// <reference types="cypress" />


describe('Nuestra primera suite de TC', () => {
    it('Mi primera navegacion', () => {
        cy.visit('www.google.com')    
    })


    it('Navegando por la pagina', () => {
        //1- Ingresar a la pagina
        cy.visit('https://phptravels.com/demo/')   

        //2- Obtener elemento y verificar texto
        cy.get('.main-title > strong').should('have.text', 'Demo Credentials for Frontend and Backend') 
    
        //3- El boton de singUp esta Visible y Habilitado
        cy.get('.signup-free').should('be.visible').should('not.be.enabled')
    
        //4- Click en el logo de la pagina
        cy.get('.BS-logo > div').click()
    })
})