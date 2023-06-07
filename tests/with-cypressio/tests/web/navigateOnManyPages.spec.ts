// TODO:  test it
import listOfLinks from "../../../listOfLinks";

describe('The-Internet, navigate to pages [S_3]', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('h1').should('have.text', 'Welcome to the-internet');
    });

    // copy of old test
    it('should accept user with valid credentials [T_10]', () => {
        cy.get('label').contains('Username').siblings('input').type('tomsmith');
        cy.get('label').contains('Password').siblings('input').type('SuperSecretPassword!');
        cy.get('button').contains('Login').click();
        cy.contains('You logged into a secure area!').should('be.visible');
    }); 

    for (const [i, { targetPageTitlePartialText, linkUrl, linkText }] of listOfLinks.entries()) {
        const testId = 300 + i;
        it(`should navigate to "${linkUrl}" page by clicking on link [T_${testId}]`, async () => {
            cy.get(`a[href="${linkUrl}"]`).should('be.visible');
            cy.get(`a[href="${linkUrl}"]`).should('have.text', linkText);
            cy.get(`a[href="${linkUrl}"]`).click();
            cy.url().should('eq', linkUrl);
            cy.get('heading').should('be.visible');
            cy.get('heading').should('contain.text', targetPageTitlePartialText);
        });

    }

    
});