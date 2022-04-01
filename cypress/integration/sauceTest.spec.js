/// <reference types = "cypress" />
import { PageObj } from "../support/pageObject/selectors";


describe('Test Task', () => {
    beforeEach('Visit the main page', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
    it('Validate login tab', () =>{
        PageObj.validateLog();
        PageObj.clearInputs();
        PageObj.checkPlaceholders();
    });
    it('Validate if field can accept mixed format', () =>{
        PageObj.positive1();
    });
    it('Validate if field can accept only spaces', () =>{
        PageObj.negative1(); // There is a bug because the empty field can accept only spaces, the field does not pass validation 
    });
    it('Validate if field can accept JS injection', () =>{
        PageObj.negative2(); // There is a bug because the empty field can accept JS injection, the field does not pass validation
    });
    it('Simple login/logout', () =>{
        PageObj.simpleLog();
        PageObj.checkURL1();
        PageObj.logout();
    });
    it('Check url', () =>{
        PageObj.checkURL2();
    });
});