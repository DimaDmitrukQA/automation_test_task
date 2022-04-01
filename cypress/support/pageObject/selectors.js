/// <reference types = "cypress" />

export class PageElements{
    validateLog(){
        cy.get('[name="user-name"]')
        .should('be.visible')
        .type('12345678');
        cy.get('[name="password"]')
        .should('be.visible')
        .type('12345678');
    }
    clearInputs(){
        cy.get('[name="user-name"]').clear();
        cy.get('[name="password"]').clear();
    }
    checkPlaceholders(){
        cy.get('[name="user-name"]').should('be.visible').invoke('attr', 'placeholder').should('eq', 'Username');
        cy.get('[name="password"]').should('be.visible').invoke('attr', 'placeholder').should('eq', 'Password');
    }
    positive1(){
        cy.get('[name="user-name"]').should('be.visible')
        /*
        Validate if field can accept mixed format (letters and special characters)
         */
        .type('standard_user')
        .invoke('attr', 'placeholder').should('eq', 'Username');
        cy.get('[name="password"]').should('be.visible')
        /*
        Validate if field can accept Validate if field can accept mixed format (letters and special characters)
         */
        .type('secret_sauce')
        .invoke('attr', 'placeholder').should('eq', 'Password');
    }
    negative1(){
        cy.get('[name="user-name"]').should('be.visible')
        /*
        Validate if field can accept only spaces
         */
        .type('      ');
        cy.get('[name="password"]').should('be.visible')
        /*
        Validate if field can accept only spaces
         */
        .type('      ');
        cy.contains('Login').click();
    }
    negative2(){
        cy.get('[name="user-name"]').should('be.visible')
        /*
        Validate if field can accept JS injection
         */
        .type('<script>alert("Executing JS")</script>');
        cy.get('[name="password"]').should('be.visible')
        /*
        Validate if field can accept JS injection
         */
        .type('<script>alert("Executing JS")</script>');
        cy.contains('Login').click();
    }
    simpleLog(){
        cy.get('[name="user-name"]')
        .should('be.visible')
        .type('standard_user');
        cy.get('[name="password"]')
        .should('be.visible')
        .type('secret_sauce');
        cy.contains('Login').should('be.visible').click();
    }
    checkURL1(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }
    logout(){
        cy.get('#react-burger-menu-btn')
        .should('be.visible').click();
        cy.contains('Logout').should('be.visible').should('contain.text', 'Logout').click();
    }
    checkURL2(){
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }
}

export const PageObj = new PageElements;